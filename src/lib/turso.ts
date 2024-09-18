import "server-only";

import { config } from "dotenv";
import { drizzle } from "drizzle-orm/libsql";
import { createClient } from "@libsql/client";

config( { path : ".env"  } )

const client = createClient({
  url: process.env.DATABASE_URL!,
  authToken: process.env.DATABASE_TOKEN!,
});

export const db = drizzle(client);
