import prisma from '$lib/prisma';
import type { PageServerLoad } from './$types';

export const load = (async () => {
	const response = await prisma.week_blurb.findFirstOrThrow({
		take: 1,
		orderBy: {
			id: 'desc'
		}
	});
	const weeksfilms = await prisma.core_film.findMany({
		include: {
			io_review: { select: { slug: true, film_id: true } }
		},
		where: {
			uk_release: {
				// 7 days ago
				gte: new Date(Date.now() - 7 * 24 * 60 * 60 * 1000),
				lte: new Date(Date.now() + 7 * 24 * 60 * 60 * 1000)
			}
		}
	});
	return { feed: response, weeksfilms };
}) satisfies PageServerLoad;
