import { Metadata } from "next";
type Props = {
    params: {
        productId: string
    };
};

export const generateMetadata = async({params}: Props): Promise<Metadata> => {
    const title = await new Promise(resolve => {
        setTimeout(() => {
            resolve(`!Phone ${params.productId}`)
        }, 100); // The web page need to wait until the data is fetched
    })
    return {
        title: `Product ${title}`
    };
};

export default function ProductDetails({params}: Props) {
    return  (
        <h1>Details About the product {params.productId} </h1>
    );
};