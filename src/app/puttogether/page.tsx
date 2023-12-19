import { revalidatePath } from "next/cache";
import { saveGroup } from "@/lib/groups";
export default function PutTogetherPage() {
  async function handleFormSubmit(formData: FormData) {
    "use server";
    console.log("submitting form");

    const group = formData.get("group") as unknown as number;
    const name = formData.get("name") as string;
    const city = formData.get("city") as string;
    const status = formData.get("status") as string;
    const project = formData.get("project") as string;
    await saveGroup(group, name, city, status, project);
    revalidatePath(`/puttogether`);
  }

  return (
    <main>
      <h1>Put Together</h1>
      <p>All your mates in groups!</p>

      <form action={handleFormSubmit}>
        <label htmlFor="group">Group Number:</label>
        <input type="number" name="group" className="text-neutral-900" />
        <label htmlFor="name">Name:</label>
        <input type="text" name="name" className="text-neutral-900" />
        <label htmlFor="city">City:</label>
        <input type="text" name="city" className="text-neutral-900" />
        <label htmlFor="status">Status:</label>
        <input type="text" name="status" className="text-neutral-900" />
        <label htmlFor="project">Project Name:</label>
        <input type="text" name="project" className="text-neutral-900" />
        <button type="submit">Submit</button>
      </form>
    </main>
  );
}
