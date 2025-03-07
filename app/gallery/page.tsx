// gallery/page.tsx - Server Component
import { getGalleryPage } from "@/sanity/queries/page";
import ClientGalleryPage from "./client-page";

export const revalidate = 0;

export default async function GalleryPage() {
    const data = await getGalleryPage();

    return <ClientGalleryPage data={data} />;
}
