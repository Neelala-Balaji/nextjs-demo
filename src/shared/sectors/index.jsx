import React from "react";
import { useTranslations } from "next-intl";
import Link from "next/link";
import { Grid } from "@mui/material";
import SvgImage from "@/shared/image/index";
import Title from "@/shared/title/index";
import { removeInvalidObjects } from "@/lib/utils";
import { Condition } from "@/components/condition";
import NoData from "@/components/nodata/NoData";
// import { sectorIcons } from "../image/sectorIcons";

// export const getIcon = (sectorName) => {
//   const iconObject = sectorIcons.find((x) => x.title === sectorName);
//   return iconObject ? iconObject.iconName : sectorIcons.find((x) => x.title === 'Default').iconName;
// };

const SectorsList = ({ data: sectorData }) => {
  const t = useTranslations();

  const data = removeInvalidObjects(sectorData, ["id", "name"]);

  const renderGrid = () => {
    const rows = [];
    let isLastRow = false;
    const rowCount = Math.ceil(data.length / 6);

    for (let i = 0; i < rowCount; i++) {
      const start = i * 6;
      const end = start + 6;
      const row = data.slice(start, end);
      isLastRow = i === rowCount - 1;

      rows.push(
        <Grid
          key={`row-${i}`}
          container
          className={`grid-row${isLastRow ? " last-row" : ""}`}
        >
          {row.map((item, index) => (
            <Grid item xs={12} md={2} lg={2}  key={item.id}>
              <Link
                href={`/catalogue/sectors/${item.id}`}
                className="sectorLink"
              >
                <Grid
                  container
                  alignItems="center"
                  justifyContent="center"
                  item
                  className={`grid-column${
                    index === row?.length - 1 ? " last-column" : ""
                  }`}
                  space={2}
                >
                  <Grid item xs={2} lg={3}>
                    <SvgImage
                      url={`/svg/icon-default.svg`}
                      width={36}
                      height={36}
                      alt={item.name}
                    />

                  </Grid>
                  <Grid
                    item
                    xs={9}
                    alignItems="center"
                    justifyContent="center"
                    className="sectorItem"
                  >
                    {item.name}
                  </Grid>
                </Grid>
              </Link>
            </Grid>
          ))}
        </Grid>
      );
    }
    return rows;
  };

  return (
    <div className="sectorList">
      <Title
        componennt="h2"
        className="heading"
        title={t("DatasetsBySectors")}
        divider={true}
      />
      <Grid item>{renderGrid()}
      <Condition show={!data?.length}>
          <NoData />
        </Condition>
      </Grid>
    </div>
  );
};

export default SectorsList;
