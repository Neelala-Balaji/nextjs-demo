"use client";

import React from "react";
import { Grid } from "@mui/material";
import SectorsList from "@/shared/sectors";
import MinistriesList from "@/shared/ministries";
import DatasetsList from "@/shared/datasetsList";
import { useApiData } from "@/lib/queryClient/query";
import { fetchHomeData } from "@/app/api/home";
import DataFetcher from "@/lib/queryClient/queryResult";
import Loader from "@/components/loader";

const Home = () => {
  const usersQuery = useApiData("home", fetchHomeData);

  return (
    <>
      <Grid container justifyContent="center">
        <Grid container item xs={10} spacing={3}>
          <DataFetcher
            queryResult={usersQuery}
            renderLoading={<Loader loading={true} />}
            render={(data) => (
              <>
                <Grid item xs={12} sx={{ margin: "24px 0" }}>
                  <SectorsList data={data.sectors} />
                </Grid>
                <Grid item xs={12} sx={{ margin: "24px 0" }}>
                  <MinistriesList data={data.ministries} />
                </Grid>
                <Grid container item xs={12} spacing={3} sx={{ margin: "24px 0" }}>
                  <Grid item xs={12} lg={6}>
                    <DatasetsList data={data.mostviewed} page="home" title={'Mostvdata_title'} />
                  </Grid>
                  <Grid item xs={12} lg={6}>
                    <DatasetsList data={data.lastupdateddate} page="home" title={'RecentAdded_title'} />
                  </Grid>
                </Grid>
              </>
            )}
          />
        </Grid>
      </Grid>
    </>
  );
};

export default Home;
