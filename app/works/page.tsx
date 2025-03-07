// works/page.tsx - Server Component
import { getWorksPage } from "@/sanity/queries/page";
import ClientWorksPage from "./client-page";

export const revalidate = 0;

export default async function WorksPage() {
    const data = await getWorksPage();

    return <ClientWorksPage data={data} />;
}
