import SubmitBtn from "@/components/SubmitBtn";
import { PrismaClient } from "@prisma/client";
import { revalidatePath } from "next/cache";

export const prisma = new PrismaClient();

export default function CreatePost() {
	const addPost = async (formData: FormData) => {
		// Ensures server-side execution only
		"use server";

		await prisma.post
			.create({
				data: {
					title: formData?.get("title") as string,
					body: formData?.get("body") as string,
				},
			})
			.then(() => console.log("Created Successfully"));

		// Revalidates the posts page
		revalidatePath("/posts");
	};

	return (
		<div className="flex flex-col items-center gap-16 w-full">
			<h2 className="text-4xl md:text-5xl font-bold">Create a post</h2>
			<form
				action={addPost}
				className="flex flex-col items-center gap-6 w-full max-w-3xl"
			>
				<input
					type="text"
					name="title"
					placeholder="Title"
					className="w-full border rounded-md px-2 py-2.5"
					required
				/>
				<textarea
					placeholder="Body"
					name="body"
					className="w-full h-36 border rounded-md px-2 py-2.5 ring-none"
					rows={5}
					required
				/>
				<SubmitBtn />
			</form>
		</div>
	);
}
