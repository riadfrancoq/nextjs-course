import Link from "next/link";

export default function ProductList() {
    const productId = 100;
    return  (
        <>
        <h2> <Link href="/"> Home</Link> </h2>
        <h2> Product List </h2>
        <h2> <Link href="products/1">Product 1</Link> </h2>
        <h2> <Link href="products/2">Product 2</Link> </h2>
        <h2> <Link href="products/3" replace>Product 3</Link> </h2> 
        <h2> <Link href={`products/${productId}`}> Product {productId}</Link></h2>
        </>  
    );

    // replace -  Replace the current history state instead of adding a new url into 
};