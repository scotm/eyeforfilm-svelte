// since there's no dynamic data here, we can prerender
// it so that it gets served as a static asset in production
export const prerender = false;

import { trpc } from '$lib/trpc/client';
import type { PageLoad } from './$types';
import type { RouterOutputs } from '$lib/trpc/router';

export const load = (async (event) => {
	// This shouldn't be necessary, but it is.
	const data = (await trpc(event).get_week_blurb.query()) as any;
	return data.json as RouterOutputs['get_week_blurb'];
}) satisfies PageLoad;
