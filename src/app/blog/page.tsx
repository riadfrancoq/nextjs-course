import { Metadata } from "next";

export const metadata: Metadata = {
    title: {
        absolute: "Blog" // The template has been ignored
    }

}

export default function Blog() {
    return <h1> Hello Blog</h1>
}