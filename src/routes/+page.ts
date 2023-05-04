export const prerender = false;

import { trpc } from '$lib/trpc/client';
import type { PageLoad } from './$types';

export const load = (async (event) => {
	return await trpc(event).get_week_blurb.query();
}) satisfies PageLoad;
