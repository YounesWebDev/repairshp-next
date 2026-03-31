import { withAuth } from "@kinde-oss/kinde-auth-nextjs/middleware";

export default withAuth(
    async function middleware() {
    },{
        isReturnToCurrentPage: true,
    }
)

    export const config = {
        matcher: [
            //  * Math all requet paths exept for the ones starting with:
        // * - api (API routes)
        // * - _next/static (static files)
        // * - _next/image (image ooptimization files)
        // * - auth
        // * - favicon.ico (favicon file)
        // * - robots.txt
        // * - images
        // * - login
        // * - homepage (represented with $ after beginning)
        "/((?!api|_next/static|_next/image|auth|favicon.ico|robots.txt|images|login|$).*)",
    ]
}
