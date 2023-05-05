export const prerender = false;

import { trpc } from '$lib/trpc/client';
import type { PageLoad } from './$types';

export const load = (async (event) => {
	return await trpc(event).homepage_data.query();
}) satisfies PageLoad;
