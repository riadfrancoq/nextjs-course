import { type NextRequest } from "next/server";
import { headers, cookies } from "next/headers";

export async function GET(req: NextRequest) {
    const requestHeaders = new Headers(req.headers);
    const headersList = headers();
    const cookiesList = cookies();
    cookiesList.set("resultsPerPage", "20");
    const theme = req.cookies.get("theme");
    console.log(cookiesList.get("resultsPerPage"));
    console.log(theme);
    console.log(requestHeaders.get('Authorization')); // Both can be used 
    console.log(headersList.get('Authorization'));
    return new Response('<h1>Profile data</h1>', {
        headers: {
            "Content-Type": "text/html",
            "Set-Cookie": "theme=dark"
        }
    });
}

