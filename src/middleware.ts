import { NextRequest, NextResponse } from "next/server";
import { getToken } from "next-auth/jwt";

const protectedRoutes = [""];
const publicRoutes = ["/sign-in"];

export async function middleware(req: NextRequest) {
  const path = req.nextUrl.pathname;
  const isProtectedRoute = protectedRoutes.includes(path);
  const isPublicRoute = publicRoutes.includes(path);

  const isAuthorized = await getToken({ req });

  // Redirect to /login if the user is not authenticated
  if (isProtectedRoute && !isAuthorized) {
    return NextResponse.redirect(new URL("/sign-in", req.nextUrl));
  }

  // Redirect to /dashboard if the user is authenticated and is trying to access a public route
  if (isPublicRoute && isAuthorized) {
    return NextResponse.redirect(new URL("/", req.nextUrl));
  }

  return NextResponse.next();
}

// Routes Middleware should not run on (e.g. images)
export const config = {
  matcher: ["/((?!api|_next/static|_next/image|.*\\.png$).*)"],
};
