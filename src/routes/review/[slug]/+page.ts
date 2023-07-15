import type { PageLoad } from "./$types";
export const prerender = false;
import { trpc } from "$lib/trpc/client";

export const load = (async (event) => {
  return await trpc(event).get_review_from_slug.query(event.params.slug);
}) satisfies PageLoad;
