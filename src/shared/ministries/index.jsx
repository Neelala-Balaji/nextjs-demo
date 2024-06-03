import React from "react";
import { useTranslations } from "next-intl";
import Link from "next/link";
import { Grid, Divider } from "@mui/material";
import ArrowForwardIosIcon from "@mui/icons-material/ArrowForwardIos";
import { removeInvalidObjects } from "@/lib/utils";
import { Condition } from "@/components/condition";
import NoData from "@/components/nodata/NoData";

const MinistriesList = ({ data: ministryData, limit = 18 }) => {
  const t = useTranslations();

  const data = removeInvalidObjects(ministryData, ["id", "ministry_name"]);

  return (
    <div className="ministryList">
      <Grid container>
        <Grid item xs={10}>
          <h2 className="heading">{t("Datasets_on_minist")}</h2>
        </Grid>

        <Grid
          container
          item
          xs={2}
          justifyContent="right"
          alignItems={"center"}
        >
          <Link href={`/catalogue/ministries/`} className="more">
            {t("Seeall_minist")}
          </Link>
        </Grid>
      </Grid>
      <Divider
        variant="fullwidth"
        orientation="horizontal"
        className={`home-divider`}
      />
      <Grid container>
        {data?.slice(0, limit)?.map((item) => (
          <Grid item xs={12} md={4} lg={4} key={item.id}>
            <Link
              href={`/catalogue/ministries/${item.id}`}
              className="ministryLink"
            >
              {item.ministry_name}
              <span className="right">
                <ArrowForwardIosIcon
                  sx={{ color: "#2e5cf6", fontSize: "medium" }}
                />
              </span>
            </Link>
          </Grid>
        ))}
        <Condition show={!data?.length}>
          <NoData />
        </Condition>
      </Grid>
    </div>
  );
};

export default MinistriesList;
