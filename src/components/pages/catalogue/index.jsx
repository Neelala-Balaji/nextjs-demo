"use client";

import React, { useMemo, useCallback } from "react";
import { useApiData } from "@/lib/queryClient/query";
import { useSearchParams, useRouter } from "next/navigation";
import { fetchCatalogueData } from "@/app/api/catalogue";
import DataFetcher from "@/lib/queryClient/queryResult";
import { Grid, Button } from "@mui/material";
import { CATALOG_DEFAULT_PARMAS } from "@/constants";
import { updateQueryParams } from "@/lib/utils/index";
import Loader from "@/components/loader";

const CatalogueClient = ({ params }) => {
  const [searchParams] = useSearchParams();
  const router = useRouter();
  console.log("CatalogueDetails params:", params, searchParams);

  const requestParams = useMemo(() => {
    const query = { ...CATALOG_DEFAULT_PARMAS };

    if (params.slug) {
      const [type, value] = params.slug;
      if (type === "sectors") {
        query.sectors = value;
      } else if (type === "ministries") {
        query.ministries = value;
      }
    }

    return query;
  }, [params]);

  const catalogQuery = useApiData("catalogue", () => fetchCatalogueData(requestParams));

  const parseQueryParams = useCallback((newParams) => {

    const updatedParams = { ...requestParams, ...newParams };

    const url = updateQueryParams(updatedParams);

    router.push(url.toString(), { shallow: true });

    catalogQuery.refetch();
  }, [requestParams, router, catalogQuery]);

  return (
    <DataFetcher
      queryResult={catalogQuery}
      renderLoading={<Loader loading={true} />}
      render={(data) => (
        <>
          <Grid item xs={12} sx={{ margin: "24px 0" }}>
            <h1>Catalogue Details</h1>
            <p>Params: {JSON.stringify(params)}</p>
            <p>Search Params: {searchParams?.toString()}</p>
            <Button
              onClick={() => parseQueryParams({ sectors: "newSector" })}
            >
              Update Sector
            </Button>
            <Button
              onClick={() => parseQueryParams({ ministries: "newMinistry" })}
            >
              Update Ministry
            </Button>
          </Grid>
        </>
      )}
    />
  );
};

export default CatalogueClient;