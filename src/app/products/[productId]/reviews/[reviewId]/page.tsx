import { notFound } from "next/navigation";

export default function ReviewDetails({params}: {
    params: { productId: string, reviewId: string }
}) {
    if (parseInt(params.reviewId) > 1000 || Number.isNaN(Number(params.reviewId)) ) {
        notFound();
    }

    return  (
        <h1>Details About the review {params.reviewId} of product {params.productId} </h1>
    );
}