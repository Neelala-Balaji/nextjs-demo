"use client";

import React from "react";
import Image from "next/image";
import { voidFunction } from "@/lib/utils/index";

const SvgImage = ({
  url,
  width = 20,
  height = 20,
  onClick = voidFunction,
  verticalAlign = 2,
  hover = false,
  children,
  ...rest
}) => {
  if (url) {
    return (
      <span
        className={`icon-color ${hover ? "icon-color-hover" : ""} customIcon ${
          onClick ? "cursor-pointer" : ""
        } ${rest.className || ""}`}
        style={{
          verticalAlign: `-0.${verticalAlign}em`,
          color: rest.disabled ? "#cccccc" : "",
        }}
        onClick={onClick}
        {...rest}
      >
        <Image src={url} width={width} height={height} {...rest} />
        {children}
      </span>
    );
  }

  return null;
};

export default SvgImage;
