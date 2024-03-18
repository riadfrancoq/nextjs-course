import { NextResponse, type NextRequest } from "next/server";

export function middleware(req: NextRequest) {

    const response = NextResponse.next();

    const themePreference = req.cookies.get('theme');

    if (!themePreference) {
        response.cookies.set("theme", "dark");
    }

    response.headers.set("custom-header", "custom-value");

    return response;
    // Conditional statements
    // if (req.nextUrl.pathname === "/profile") {
    //     return NextResponse.rewrite(new URL("/hello", req.url));
         // with rewrite the content change but the url not

    // }

    // Custom mathcer config
    // return NextResponse.redirect(new URL("/", req.url));
}

// export const config = {
//    matcher: "/profile" 
// };

