import React from "react";
import { PrismaClient } from "@prisma/client";

export const prisma = new PrismaClient();

export default async function page({ params }: { params: { id: number } }) {
	const res = await fetch(
		`https://jsonplaceholder.typicode.com/posts/${params.id}`
	);

	const data = await res.json();

	// Getting specific data from prisma
	const resPrisma = await prisma.post.findUnique({
		where: { id: Number(params.id) },
	});

	return (
		<div className="flex flex-col items-center justify-between gap-12 text-center max-w-4xl mx-auto">
			<h1 className="text-3xl font-semibold">{resPrisma?.title}</h1>
			<p className="text-lg">{resPrisma?.body}</p>
		</div>
	);
}
