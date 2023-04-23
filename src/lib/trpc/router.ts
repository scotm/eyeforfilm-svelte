import type { Context } from '$lib/trpc/context';
import { initTRPC } from '@trpc/server';
import type { inferRouterInputs, inferRouterOutputs } from '@trpc/server';
import superjson from 'superjson';

export const t = initTRPC.context<Context>().create({
	transformer: superjson
});

export const router = t.router({
	greeting: t.procedure.query(async () => {
		return `Hello tRPC v10 @ ${new Date().toLocaleTimeString()}`;
	}),
	get_week_blurb: t.procedure.query(async ({ ctx }) => {
		const week_blurb = await ctx.prisma.week_blurb.findFirstOrThrow({
			take: 1,
			orderBy: {
				id: 'desc'
			}
		});
		const weeksfilms = await ctx.prisma.core_film.findMany({
			include: {
				io_review: { select: { slug: true, film_id: true } }
			},
			where: {
				uk_release: {
					// 7 days ago
					gte: new Date(Date.now() - 7 * 24 * 60 * 60 * 1000),
					lte: new Date(Date.now() + 7 * 24 * 60 * 60 * 1000)
				},
				// We only want to return films that have reviews
				io_review: {
					some: {}
				}
			}
		});
		const dvd_releases = await ctx.prisma.dvd_review.findMany({
			include: {
				core_film: {
					include: {
						io_review: { select: { slug: true, film_id: true } }
					}
				}
			},
			orderBy: {
				id: 'desc'
			},
			take: 2
		});
		return { week_blurb, weeksfilms, dvd_releases };
	})
});

export type Router = typeof router;
export type RouterInputs = inferRouterInputs<Router>;
export type RouterOutputs = inferRouterOutputs<Router>;
