"use server";

import { db } from "@/lib/turso";
import { headers } from "next/headers";
import { z } from "zod";
import { actionClient } from "./safe";
import { eq, and, sql } from "drizzle-orm";
import { slugStats, votes } from "@/lib/schema";

export const voteAction = actionClient
  .schema(
    z.object({
      slug: z.string(),
    }),
  )
  .action(async ({ parsedInput: { slug } }) => {
    const clientIP = headers().get("x-forwarded-for") ?? "";

    registerVote(slug, clientIP);
  });

async function registerVote(slug: string, userIp: string) {
  // Start a transaction
  return await db.transaction(async (tx) => {
    // Check if the user has already voted on this slug
    const existingVote = await tx
      .select()
      .from(votes)
      .where(and(eq(votes.slug, slug), eq(votes.userIp, userIp)))
      .limit(1);

    if (existingVote.length > 0) {
      // User has already voted
      return {
        success: false,
        message: "You have already voted on this item.",
      };
    }

    // User hasn't voted, so register the vote
    await tx.insert(votes).values({
      id: crypto.randomUUID(), // Generate a unique ID
      slug,
      userIp,
    });

    // Increment the likes count for the slug
    await tx
      .update(slugStats)
      .set({ likes: sql`${slugStats.likes} + 1` })
      .where(eq(slugStats.slug, slug));

    // If the slug doesn't exist in slugStats, insert it
    await tx.insert(slugStats).values({ slug, likes: 1 }).onConflictDoNothing();

    return { success: true, message: "Vote registered successfully." };
  });
}

export async function rankRegistries() {
  const topSlugs = await db
    .select({
      slug: slugStats.slug,
      likes: slugStats.likes,
    })
    .from(slugStats)
    .orderBy(slugStats.likes)
    .limit(4);
  return topSlugs;
}
