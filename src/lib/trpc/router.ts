import type { Context } from "$lib/trpc/context";
import { initTRPC } from "@trpc/server";
import type { inferRouterInputs, inferRouterOutputs } from "@trpc/server";
import superjson from "superjson";
import { z } from "zod";

export const t = initTRPC.context<Context>().create({
  transformer: superjson,
});

export const router = t.router({
  get_dvd_review_from_slug: t.procedure
    .input(z.string())
    .query(async ({ ctx, input }) => {
      return await ctx.prisma.dvd_review.findFirstOrThrow({
        where: {
          slug: input,
        },
        include: {
          core_film: true,
        },
      });
    }),
  get_review_from_slug: t.procedure
    .input(z.string())
    .query(async ({ ctx, input }) => {
      const review = await ctx.prisma.io_review.findFirstOrThrow({
        where: {
          slug: input,
        },
        include: {
          core_film: {
            include: {
              recommendedTo: true,
            },
          },
        },
      });
      const festivals = await ctx.prisma.festival.findMany({
        where: {
          festival_strand: {
            some: {
              festival_strand_films: {
                some: {
                  film_id: review.core_film.id,
                },
              },
            },
          },
        },
        include: {
          festival_info: true,
        },
      });
      return { review, festivals };
    }),
  search_film_reviews_by_title: t.procedure
    .input(z.string())
    .query(async ({ ctx, input }) => {
      // filter out non-alphanumeric characters
      input = input.replace(/[^a-zA-Z0-9 ]/g, "");
      // replace spaces with ampersands
      input = input.replace(/ /g, " & ");
      const films = await ctx.prisma.core_film.findMany({
        where: {
          OR: [
            {
              title: {
                search: input,
              },
            },
            // {
            //   alternative_titles: {
            //     search: input,
            //   },
            // },
          ],
          default_review_id: {
            not: null,
          },
          // io_review: {
          // 	some: {
          // 		slug: {
          // 			not: null
          // 		}
          // 	}
          // }
        },
        include: {
          io_review: {
            select: {
              id: true,
              slug: true,
              rating: true,
            },
          },
        },
      });

      return films.map((film) => {
        return {
          ...film,
          average_rating:
            film.io_review.reduce((a, b) => a + b.rating, 0) /
            film.io_review.length,
          default_review_slug: film.io_review.find(
            (review) => review.id === film.default_review_id,
          )?.slug,
        };
      });
    }),
  get_lowertable_data: t.procedure.query(async ({ ctx }) => {
    return await ctx.prisma.homepage_news.findFirstOrThrow({
      take: 1,
      orderBy: {
        id: "desc",
      },
    });
  }),
  homepage_data: t.procedure.query(async ({ ctx }) => {
    const week_blurb = await ctx.prisma.week_blurb.findFirstOrThrow({
      take: 1,
      orderBy: {
        id: "desc",
      },
    });
    const weeksfilms = await ctx.prisma.core_film.findMany({
      include: {
        io_review: { select: { slug: true, film_id: true } },
      },
      where: {
        uk_release: {
          // 7 days ago
          gte: new Date(Date.now() - 7 * 24 * 60 * 60 * 1000),
          lte: new Date(Date.now() + 7 * 24 * 60 * 60 * 1000),
        },
        // We only want to return films that have reviews
        // io_review: {
        // 	some: {
        // 		// We only want to return reviews that have a slug
        // 		slug: {
        // 			not: null
        // 		}
        // 	}
        // }
      },
    });
    const dvd_releases = await ctx.prisma.dvd_review.findMany({
      include: {
        core_film: {
          include: {
            io_review: { select: { slug: true, film_id: true } },
          },
        },
      },
      orderBy: {
        id: "desc",
      },
      take: 2,
    });
    return { week_blurb, weeksfilms, dvd_releases };
  }),
});

export type Router = typeof router;
export type RouterInputs = inferRouterInputs<Router>;
export type RouterOutputs = inferRouterOutputs<Router>;
