import { clerkMiddleware, createRouteMatcher } from "@clerk/nextjs/server";

// Define `isProtectedRoute` once
const isProtectedRoute = createRouteMatcher([
  '/dashboard(.*)',
  '/workspace(.*)',
]);

// Default export - only define this once
export default clerkMiddleware((auth, req) => {
  if (isProtectedRoute(req)) auth().protect();
});

// Export `config` once
export const config = {
  matcher: ["/((?!.*\\..*|_next).*)", "/", "/(api|trpc)(.*)"],
};
