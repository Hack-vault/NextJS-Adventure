import React from "react";
import Navbar from "@/components/Navbar/Navbar";
import Footer from "@/components/Footer";

export default function layout({
	children,
}: Readonly<{
	children: React.ReactNode;
}>) {
	return (
		<div className="container mx-auto min-h-screen h-full flex flex-col justify-between">
			<Navbar />
			{children}
			<Footer />
		</div>
	);
}
