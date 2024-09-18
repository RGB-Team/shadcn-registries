CREATE TABLE `slug_stats` (
	`slug` text PRIMARY KEY NOT NULL,
	`likes` integer DEFAULT 0 NOT NULL
);
--> statement-breakpoint
CREATE TABLE `votes` (
	`id` text PRIMARY KEY NOT NULL,
	`slug` text NOT NULL,
	`user_ip` text NOT NULL,
	`created_at` integer DEFAULT CURRENT_TIMESTAMP NOT NULL
);
