import React from "react";
import SiteNav from "./site-nav";
import Link from "next/link";

export default function Navbar() {
  return (
    <nav className="w-11/12 md:w-full px-4 mx-auto py-4 border-b-[3px] flex justify-between items-center">
      <Link href="/" className="text-2xl bg-black text-white p-2 rounded-md">
        CB
      </Link>
      <SiteNav />
    </nav>
  );
}
