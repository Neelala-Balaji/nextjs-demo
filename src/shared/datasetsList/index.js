import React from "react";
import { useTranslations } from "next-intl";
import Link from "next/link";
import { Grid } from "@mui/material";
import Title from "@/shared/title/index";
import { Condition } from "@/components/condition";
import SvgImage from "@/shared/image/index";
import { PAGES } from "@/constants";
import ListMetaData from "./listMetaData";
import NoData from "@/components/nodata/NoData";
import CustomLink from "@/components/link/customLink";

const DatasetsList = ({ data, page = false, title }) => {
  const t = useTranslations();

  return (
    <div className="sectorList">
      <Title
        componennt="h2"
        className="heading"
        title={t(title)}
        divider={true}
      />
      <Grid container spacing={3}>
        {data?.map((item) => (
          <Grid
            item
            xs={12}
            key={item.source_code}
            className={
              page === PAGES.home
                ? "dataset-list-wrapper"
                : "dataset-collection-wrapper"
            }
          >
            <CustomLink
              href={`/dataset/${item.source_code}`}
              className="datasetLink"
            >
              <Grid container spacing={2}>
                <Grid xs={1} lg={1}>
                  <SvgImage
                    url="/svg/datasets.svg"
                    width={36}
                    height={36}
                    alt={item.SourceName}
                  />
                </Grid>
                <Grid
                  xs={10}
                  lg={11}
                  sx={{ marginLeft: { xs: "20px", lg: "0px" } }}
                >
                  <div>{item.SourceName}</div>
                  <Condition show={item.MinistryName}>
                    {item.MinistryName}
                  </Condition>
                  <Condition show={!page}>{item.SourceName}</Condition>
                  <ListMetaData data={item} page={page} />
                </Grid>
              </Grid>
            </CustomLink>
            {/* <Link href={`/dataset/${item.source_code}`} className="datasetLink">
              <Grid container spacing={2}>
                <Grid xs={1} lg={1}>
                  <SvgImage
                    url="/svg/datasets.svg"
                    width={36}
                    height={36}
                    alt={item.SourceName}
                  />
                </Grid>
                <Grid
                  xs={10}
                  lg={11}
                  sx={{ marginLeft: { xs: "20px", lg: "0px" } }}
                >
                  <div>{item.SourceName}</div>
                  <Condition show={item.MinistryName}>
                    {item.MinistryName}
                  </Condition>
                  <Condition show={!page}>{item.SourceName}</Condition>
                  <ListMetaData data={item} page={page} />
                </Grid>
              </Grid>
            </Link> */}
          </Grid>
        ))}
      </Grid>

      <Condition show={!data?.length}>
        <NoData />
      </Condition>
    </div>
  );
};

export default DatasetsList;
