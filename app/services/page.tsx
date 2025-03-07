// services/page.tsx - Server Component
import { getServicesPage } from "@/sanity/queries/page";
import ClientServicesPage from "./client-page";

export const revalidate = 0;

export default async function ServicesPage() {
    console.log("Fetching services page with slug:", "services");
    const data = await getServicesPage("services");

    return <ClientServicesPage data={data} />;
}
