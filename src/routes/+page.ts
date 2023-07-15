export const prerender = false;

import { trpc } from "$lib/trpc/client";
import type { PageLoad } from "./$types";

export const load = (async (event) => {
  if (event.url.pathname === "/")
    return await trpc(event).homepage_data.query();
  if (event.url.pathname === "/reviews.php")
    return await trpc(event).homepage_data.query();
  return await trpc(event).homepage_data.query();
}) satisfies PageLoad;
