import { notFound } from "next/navigation";

function getRandomInt(count: number){
    return Math.floor(Math.random() * count);
};

export default function ReviewDetails({params}: {
    params: { productId: string, reviewId: string }
}) {
    const random : number = getRandomInt(2);

    if (random === 1) {
        throw new Error("Error loading review")
    }
    if (parseInt(params.reviewId) > 1000 || Number.isNaN(Number(params.reviewId)) ) {
        notFound();
    }

    return  (
        <h1>Details About the review {params.reviewId} of product {params.productId} </h1>
    );
}