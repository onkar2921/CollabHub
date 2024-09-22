import { clerkMiddleware, createRouteMatcher } from "@clerk/nextjs/server";

const isProtectedRoute = createRouteMatcher([
  '/dashboard(.*)',
  '/workspace(.*)',
]);

export default clerkMiddleware((auth, req) => {
  if (isProtectedRoute(req)) auth().protect();
});import { createRouteMatcher } from '@clerk/nextjs/server';

const isProtectedRoute = createRouteMatcher([
  '/dashboard(.*)',
  '/workspace(.*)',
]);

export default async function middleware(req) {
  const { pathname } = req.nextUrl;

  // Skip protection for Edge functions, use server-side only
  if (process.env.VERCEL_ENV !== 'edge') {
    const { clerkMiddleware } = await import('@clerk/nextjs/server');

    return clerkMiddleware((auth) => {
      if (isProtectedRoute(req)) {
        auth().protect();
      }
    })(req);
  }

  return NextResponse.next();
}

export const config = {
  matcher: ["/((?!.*\\..*|_next).*)", "/", "/(api|trpc)(.*)"],
};


export const config = {
  matcher: ["/((?!.*\\..*|_next).*)", "/", "/(api|trpc)(.*)"],
};
