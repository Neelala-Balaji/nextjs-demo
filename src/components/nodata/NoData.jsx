//create a reusable component for no data found
import React from "react";
import { useTranslations } from "next-intl";
import { Grid } from "@mui/material";
import SvgImage from "@/shared/image/index";

const NoData = ({ title = 'DataNotAvailable' }) => {
  const t = useTranslations();

  return (
    <Grid container justifyContent="center" alignItems="center">
      <Grid item>
        <SvgImage
          url="/svg/noData.svg"
          width={100}
          height={100}
          alt={t(title)}
        />
        <p>{t(title)}</p>
      </Grid>
    </Grid>
  );
};

export default NoData;
