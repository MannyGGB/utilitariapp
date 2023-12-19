import { sql } from "@vercel/postgres";

export async function saveGroup(
  group: number,
  name: string,
  city: string,
  status: string,
  project: string
) {
  await sql`INSERT INTO groups (group, name, city, status, project) VALUES (${group}, ${name}, ${city}, ${status}, ${project})`;

  return group;
}

export async function getGroups(group: number) {
  return await sql`SELECT * FROM groups WHERE group=${group}`;
}
