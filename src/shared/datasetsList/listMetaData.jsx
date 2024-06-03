import React from "react";
import { useTranslations } from "next-intl";
import { Stack, Typography, Breadcrumbs } from "@mui/material";
import { Condition } from "@/components/condition";
import { formatDate } from "@/lib/utils";
import { PAGES } from "@/constants";

const ListMetaData = ({ data, page }) => {
  const t = useTranslations();
  return (
    <Stack
      spacing={2}
      className={page === PAGES.home ? "list-item" : "list-item-other"}
    >
      <Breadcrumbs separator="." aria-label="breadcrumb" className="period">
        <Condition show={data.timeGranulity}>
          <Typography key="1" color="grey.main">
            {data.timeGranulity}
          </Typography>
        </Condition>
        <Condition show={data.LocalityGranularity}>
          <Typography key="2" color="grey.main">
            {data.LocalityGranularity}
          </Typography>
        </Condition>
        <Condition show={data.LastUpdatedDate}>
          <Typography key="3" color="grey.main">
            {t("Last_updated")} {formatDate(data.LastUpdatedDate)}
          </Typography>
        </Condition>
        <Condition show={data.noOfColumns}>
          <Typography key="4" color="grey.main">
            {data.noOfColumns} {t("Columns")}
          </Typography>
        </Condition>
        <Condition show={data.domain}>
          <Typography key="5" color="grey.main">
            {data.domain}
          </Typography>
        </Condition>
      </Breadcrumbs>
    </Stack>
  );
};

export default ListMetaData;
