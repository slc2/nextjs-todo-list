import { prisma } from "@/db";
import { redirect } from "next/navigation";
import Link from "next/link";

//server action, this will take care of doing a fetch for you and runs on the server
async function createTodo(data: FormData) {
    "use server"

    const title = data.get("title")?.valueOf() // title is the name for the input field in the form
    if (typeof title != "string" || title.length === 0 ) {
        throw new Error("Invalid title")
    }
    await prisma.todo.create({data: {title, complete: false}})
    redirect("/") // not sure why this works, but this is an action and you can redirect here even though this is running on the server
   // console.log("hi") // this will log on the server, not the browser
}

// in tutorial the function was called Page, not sure if that matters
export default function New() {
  return (
    <>
      <header className="flex justify-between items-center mb-4">
        <h1 className="text-2x1">New</h1>
      </header>
      <form action={createTodo} className="flex gap-2 flex-col">
        <input
          type="text"
          name="title"
          className="border border-slate-300 bg-transparent rounded px-2 py-1 outline-none focus-within:border-slate-100"
        />
        <div className="flex gap-1 justify-end">
          <Link
            href=".."
            className="border border-slate-300 text-slate-300 px-2 py-1 rounded hover:bg-slate-700 focus-within:bg-slate-700 outline-none"
          >
            Cancel
          </Link>
          <button
            type="submit"
            className="border border-slate-300 text-slate-300 px-2 py-1 rounded hover:bg-slate-700 focus-within:bg-slate-700 outline-none"
          >Create</button>
        </div>
      </form>
    </>
  );
}
