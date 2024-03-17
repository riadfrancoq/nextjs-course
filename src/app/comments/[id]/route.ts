import { redirect } from "next/navigation";

import { comments } from "../data";

export async function GET(_req: Request, context: { params: { id: string } }) {

    if (parseInt(context.params.id) > comments.length) {
        redirect('/comments');
    }

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


export async function DELETE(_req: Request, context: {
    params: {
        id: string
    }
}) {
    const index = comments.findIndex(comment => comment.id === parseInt(context.params.id));
    const deletedComment = comments[index]
    comments.splice(index, 1);
    return Response.json(deletedComment);
}