import React from 'react';
import Image from "next/image";
import { Grid } from '@mui/material';
import SvgImage from "@/shared/image/index";
import { SvgIcon } from "@mui/material";
import { ReactComponent as IconAgriCuluture } from "../../../public/svg/ic-agriculture-active.svg";

const SectorsList = ({ data }) => {
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
        <Grid key={i} container className={`grid-row${isLastRow ? ' last-row' : ''}`}>
          {row.map((item, index) => (
            <Grid
              container
              alignItems="center"
              justifyContent="center"
              key={index}
              item
              xs={2}
              className={`grid-column${index === row?.length - 1 ? ' last-column' : ''}`}
              space={2}
            //   style={{
            //     borderBottom: isLastRow ? 'none' : '1px solid black',
            //     borderRight: index === 5 ? 'none' : '1px solid black',
            //   }}
            >
                <Grid item xs={6}>
                
                   
                    <Image src="/images/ndap_footer_logo.png" width="36" height="36" />
                    <Image src="/svg/ic-agriculture-active.svg" width="36" height="36" />
                    {/* <Image
      src="/svg/iconDefault.svg" // Path to your SVG in the public directory
      alt="Descriptive image alt text"
      width={32} // Optional width
      height={32} // Optional height
      priority // Prioritize loading for critical images (optional)
    /> */}
                </Grid>
                <Grid item xs={6}>{item.name}</Grid>
            </Grid>
          ))}
        </Grid>
      );
    }
    return rows;
  };

  return <Grid item>{renderGrid()}</Grid>;
};

export default SectorsList;
