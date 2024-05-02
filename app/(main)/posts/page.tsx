import PostsList from "@/components/PostsList";
import React, { Suspense } from "react";

export default async function page() {
	return (
		<div className="flex flex-col items-center justify-between gap-12 text-center">
			<h2 className="text-4xl md:text-5xl font-bold">All posts</h2>
			<Suspense fallback={"Loading..."}>
				<PostsList />
			</Suspense>
		</div>
	);
}
