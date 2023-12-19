import { sql } from "@vercel/postgres";
import { NextResponse } from "next/server";

export async function GET(request: Request) {
  await sql`CREATE TABLE IF NOT EXISTS groups
  (group int,
  name varchar(255),
  city varchar(255),
  status varchar(255),
  project varchar(255));`;

  return NextResponse.json({ message: "Utilitariapp table created" });
}
