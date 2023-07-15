import type { RequestEvent } from "@sveltejs/kit";
import type { inferAsyncReturnType } from "@trpc/server";
import prisma from "$lib/prisma";

// eslint-disable-next-line @typescript-eslint/no-unused-vars
export async function createContext(event: RequestEvent) {
  return {
    prisma,
  };
}

export type Context = inferAsyncReturnType<typeof createContext>;
