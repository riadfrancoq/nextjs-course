import { type NextRequest } from "next/server";
import { headers } from "next/headers";

export async function GET(req: NextRequest) {
    const requestHeaders = new Headers(req.headers);
    const headersList = headers();
    console.log(requestHeaders.get('Authorization')); // Both can be used 
    console.log(headersList.get('Authorization'));
    return new Response('<h1>Profile data</h1>', {
        headers: {
            "Content-Type": "text/html"
        }
    });
}

