"use client";
import React from "react";
import { useFormStatus } from "react-dom";

export default function SubmitBtn() {
	const { pending } = useFormStatus();
	return (
		<button
			type="submit"
			disabled={pending}
			className="w-full px-6 py-4 bg-black rounded-md text-white disabled:bg-zinc-500 disabled:cursor-not-allowed"
		>
			Create post
		</button>
	);
}
