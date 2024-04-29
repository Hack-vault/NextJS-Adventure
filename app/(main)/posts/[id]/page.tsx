import React from "react";

export default async function page({ params }: { params: { id: number } }) {
  const res = await fetch(
    `https://jsonplaceholder.typicode.com/posts/${params.id}`
  );
  const data = await res.json();
  console.log(data);
  return <div className="flex flex-col items-center justify-between gap-12 text-center max-w-4xl mx-auto">
    <h1 className="text-3xl font-semibold">{data.title}</h1>
    <p className="text-lg">{data.body}</p>
  </div>;
}
