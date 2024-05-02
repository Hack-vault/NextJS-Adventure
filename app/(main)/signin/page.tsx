import { cookies } from "next/headers";
import { redirect } from "next/navigation";
import React from "react";

export default function page() {
	const signin = async (formData: FormData) => {
		"use server";
		if (
			formData.get("username") === "admin" &&
			formData.get("password") === "admin"
		) {
			cookies().set("token", "admin");
		}
	};
	return (
		<div className="flex flex-col items-center gap-16 w-full">
			<h2 className="text-4xl md:text-5xl font-bold flex flex-col text-center gap-y-4 ">
				SignIn
				<span className="text-slate-600 text-xl font-medium">
					username/password: admin
				</span>
			</h2>
			<form
				action={signin}
				className="flex flex-col items-center gap-6 w-full max-w-3xl"
			>
				<input
					type="text"
					name="username"
					placeholder="User Name"
					className="w-full border rounded-md px-2 py-2.5"
					required
				/>
				<input
					type="password"
					placeholder="Password"
					name="password"
					className="w-full border rounded-md px-2 py-2.5 ring-none"
					required
				/>
				<button
					type="submit"
					className="w-full px-6 py-4 bg-black rounded-md text-white disabled:bg-zinc-500 disabled:cursor-not-allowed"
				>
					SignIn
				</button>
			</form>
		</div>
	);
}
