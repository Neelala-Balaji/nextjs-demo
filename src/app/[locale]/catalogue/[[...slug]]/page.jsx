import { HydrationBoundary, dehydrate } from "@tanstack/react-query";
import CatalogueDetails from "@/components/pages/catalogue";
import generateMetadata from "@/lib/metadata";
import { getQueryClient } from "@/lib/queryClient";
import { fetchCatalogueData } from "@/app/api";
import { CATALOG_DEFAULT_PARMAS } from "@/constants";

export const metadata = generateMetadata(
  { title: "Catalogue", description: "Find all datasets across sectors and ministries hosted on the National Data and Analytics Platform (NDAP). NDAP provides easy access to a wide range of data from various government sectors, ensuring transparency and aiding research and decision-making. The platform includes datasets on health, education, finance, agriculture, and more, making it a valuable resource for data-driven insights and analyses."},
  { withSuffix: true }
);

async function getCatalogueData() {
  const queryClient = getQueryClient();

  await queryClient.prefetchQuery({
    queryKey: ["catalogue"],
    queryFn: () => fetchCatalogueData(CATALOG_DEFAULT_PARMAS),
  });

  return dehydrate(queryClient);
}

const Catalogue = async ({ params }) => {
  const dehydratedState = await getCatalogueData();

  return (
    <HydrationBoundary state={dehydratedState}>
      <CatalogueDetails params={params} />
    </HydrationBoundary>
  );
};

export default Catalogue;
