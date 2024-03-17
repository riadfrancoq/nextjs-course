import { comments } from "../data";

export async function GET(_req: Request, context: { params: { id: string } }) {
    const comment = comments.find(comment => comment.id === Number(context.params.id));
    return Response.json(comment);

};

export async function  PATCH(req: Request, context: {
    params: {
        id: string
    }
}) {
    const {text}: { text: string } = await req.json();
    
    const index = comments.findIndex(comment => comment.id === parseInt(context.params.id));
    comments[index].text = text;
    return Response.json(comments[index]);

}