import Link from "next/link";
import React from "react";

export default async function PostsList() {
  await new Promise((resolve) => setTimeout(resolve, 1500));
  const random = Math.floor(Math.random() * 5 + 1);
  const res = await fetch(`https://dummyjson.com/posts?limit=${random}`, {
    // Dosen't use cache
    cache: "no-store",
    // After 1 hour it will fetch the data
    next: { revalidate: 3600 },
  });
  const data = await res.json();
  console.log(data);
  return (
    <ul className="flex flex-col gap-6  leading-8 text-xl font-medium">
      {data.posts.map((e: { id: number; title: string }) => (
        <li className="disc-none" key={e.id}>
          <Link href={`/posts/${e.id}`}> {e.title}</Link>
        </li>
      ))}
    </ul>
  );
}
