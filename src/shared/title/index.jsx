import React from "react";
import Link from "next/link";
import { Grid, Divider } from "@mui/material";
import { Condition } from "@/components/condition";

const Title = ({
  title,
  className,
  component: Component = "h1",
  more = "",
  divider,
  link = false,
  ...props
}) => {
  return (
    <div>
      <Grid container>
        <Grid item xs={more ? 11 : 12}>
          <Component className={className} {...props}>
            {title}
          </Component>
        </Grid>
      </Grid>
      <Condition>
        <Divider
          variant="fullwidth"
          orientation="horizontal"
          className={`home-divider`}
        />
      </Condition>
    </div>
  );
};

export default Title;
