import { error, redirect } from "@sveltejs/kit";
import type { PageLoad } from "./$types";
import { trpc } from "$lib/trpc/client";

export const load = (async (event) => {
  const films = await trpc(event).search_film_reviews_by_title.query(
    event.params.name,
  );
  if (films.length === 0) throw error(404, "Not found");
  if (films.length === 1)
    throw redirect(302, `/review/${films[0].io_review[0].slug}`);

  return { name: event.params.name, films: films };
}) satisfies PageLoad;
