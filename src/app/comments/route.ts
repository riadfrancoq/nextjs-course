import { comments } from "./data";

export async function GET() {
    return Response.json(comments);
}

export async function POST(req: Request) {
    const comment = await req.json();
    const newComment = {
        id: comments.length + 1,
        text: comment.text
    };
    return new Response(JSON.stringify(newComment), {
        headers: {
            "Content-Type": "application/json",
        },
        status: 201
    });
}