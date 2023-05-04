import { error } from '@sveltejs/kit';
import type { PageLoad } from './$types';
import type { RouterOutputs } from '$lib/trpc/router';
import { trpc } from '$lib/trpc/client';

export const load = (async (event) => {
	const { slug } = event.params;
	return await trpc(event).get_review_from_slug.query(slug);
}) satisfies PageLoad;
