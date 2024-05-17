import React from "react";
import Image from "next/image";
import { SvgIcon } from "@mui/material";
import CustomIcons from "./icons";
import { voidFunction } from "@/utils/index";

//write image

const SvgImage = ({
  imageName = "IconDefault",
  url,
  width = 20,
  height = 20,
  onClick = false,
  verticalAlign = 2,
  hover = false,
  children,
  ...rest
}) => {
  const SvgComponent = CustomIcons[imageName];

  if (SvgComponent) {
    return (
      <span
        className={`icon-color ${hover ? "icon-color-hover" : ""} customIcon ${
          onClick ? "cursor-pointer" : ""
        } ${rest.className || ""}`}
        style={{
          verticalAlign: `-0.${verticalAlign}em`,
          color: rest.disabled ? "#cccccc" : "",
        }}
        onClick={onClick || voidFunction}
        {...rest}
      >
        <SvgComponent
          component={SvgComponent}
          fontSize={fontSize ? fontSize : "inherit"}
          style={{ width, height }}
          color={rest.disabled ? "disabled" : "inherit"}
        />
        {children}
      </span>
    );
  }

  if (url) {
    return <Image src={url} width={width} height={height} {...rest} />;
  }

  return null;
};

export default SvgImage;
