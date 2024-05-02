import Link from "next/link";
import React from "react";
import { PrismaClient } from "@prisma/client";

export const prisma = new PrismaClient();

export default async function PostsList() {

  // Making server to revalidate after 1.5 seconds
	await new Promise((resolve) => setTimeout(resolve, 1500));

	const random = Math.floor(Math.random() * 5 + 1);

	const res = await fetch(`https://dummyjson.com/posts?limit=${random}`, {
		// Dosen't use cache
		cache: "no-store",
		// After 1 hour it will fetch the data
		next: { revalidate: 3600 },
	});

	const data = await res.json();

  // Getting data from prisma
	const resPrisma = await prisma.post.findMany();

	return (
		<ul className="flex flex-col gap-6  leading-8 text-xl font-medium">
			{resPrisma.map((e: { id: bigint; title: string }) => (
				<li className="disc-none" key={e?.id}>
					<Link href={`/posts/${e.id}`}> {e?.title}</Link>
				</li>
			))}
		</ul>
	);
}
