// blog/page.tsx - Server Component
import { getPosts, Post } from "@/sanity/queries/posts";
import Image from "next/image";
import Link from "next/link";
import ClientBlogPage from "./client-page";

export const revalidate = 0;

export default async function BlogPage() {
    const postsData: Post[] = await getPosts();

    return <ClientBlogPage postsData={postsData} />;
}
