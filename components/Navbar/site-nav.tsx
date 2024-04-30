"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";

const routes = [
    {
        name: "Home",
        path: "/",
    },
    {
        name: "Posts",
        path: "/posts",
    },
    {
        name: "Create Post",
        path: "/posts/create",
    },
];

export default function SiteNav() {
    const pathname = usePathname();
    return (
        <ul className="flex gap-x-6">
            {routes.map((route) => (
                <li key={route.path}>
                    <Link
                        href={route.path}
                        className={`font-medium ${
                            pathname === route.path
                                ? "text-black"
                                : "text-zinc-400"
                        }`}
                    >
                        {route.name}
                    </Link>
                </li>
            ))}
        </ul>
    );
}
