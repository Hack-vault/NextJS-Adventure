import { NextResponse, type NextRequest } from "next/server";

export function middleware(request: NextRequest) {
	const isAuthenticated = request.cookies.get("token");

	if (!isAuthenticated) {
		const url = new URL("/signin", request.url);
		return NextResponse.redirect(url);
	}

	return NextResponse.next();
}

export const config = {
	matcher: "/posts/:path*",
};
