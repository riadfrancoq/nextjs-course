import { comments } from "../data";

export async function GET(_req: Request, context: { params: { id: string } }) {
    const comment = comments.find(comment => comment.id === Number(context.params.id));
    return Response.json(comment);

};
