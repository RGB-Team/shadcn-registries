import { sql } from "drizzle-orm";
import { sqliteTable, text, integer } from "drizzle-orm/sqlite-core";

export const votes = sqliteTable("votes", {
  id: text("id").primaryKey(),
  slug: text("slug").notNull(),
  userIp: text("user_ip").notNull(),
  createdAt: integer("created_at", { mode: "timestamp" })
    .notNull()
    .default(sql`CURRENT_TIMESTAMP`),
});

export const slugStats = sqliteTable("slug_stats", {
  slug: text("slug").primaryKey(),
  likes: integer("likes").notNull().default(0),
});
