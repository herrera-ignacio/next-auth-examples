import {adminOnlyRoutes, auth, authenticationRoutes, nonAuthenticatedRoutes} from "@/utils/auth";
import {NextRequest, NextResponse} from "next/server";

export default auth(req => {
    // If trying to access authenticated-only routes
    // while not authenticated, redirect to log in
    if (!req.auth && !nonAuthenticatedRoutes.includes(req.nextUrl.pathname)) {
        return NextResponse.redirect(new URL("/login", req.nextUrl.origin));
    }

    // If trying to access authentication routes (e.g., login)
    // while authenticated, redirect to dashboard
    if (req.auth && authenticationRoutes.includes(req.nextUrl.pathname)) {
        return NextResponse.redirect(new URL("/dashboard", req.nextUrl.origin));
    }

    // If trying to access admin-only routes
    // while not authorized, redirect to forbidden
    if (req.auth && adminOnlyRoutes.includes(req.nextUrl.pathname) && req.auth?.user?.role !== "admin") {
        return NextResponse.rewrite(new URL("/forbidden", req.nextUrl.origin));
    }
});

export const config = {
    runtime: 'experimental-edge',
    unstable_allowDynamic: [
        "/node_modules/lodash.get/**",
        "/node_modules/lodash.merge/**",
        "/node_modules/mongoose/dist/**",
        "/node_modules/bcryptjs/dist/**",
        "/node_modules/mongoose-unique-validator/**"
    ],
    matcher: [
        /*
         * Match all request paths except for the ones starting with:
         * - api (API routes)
         * - _next/static (static files)
         * - _next/image (image optimization files)
         * - favicon.ico (favicon file)
         */
        '/((?!api|_next/static|_next/image|favicon.ico).*)',
    ],
};