"use client";

import React, { useState, useEffect } from "react";
import { useLocale } from "next-intl";
import { useQuery, useMutation, useQueryClient } from "@tanstack/react-query";
import { useRouter, usePathname } from "@/navigation";
import Menu from "@mui/material/Menu";
import MenuItem from "@mui/material/MenuItem";
import LanguageIcon from "@mui/icons-material/Language";
import ArrowDropDownIcon from "@mui/icons-material/ArrowDropDown";
import CustomButton from "@/components/buttons";
import { Languages } from "@/constants/index";

const LanguageDropdown = () => {
  const locale = useLocale();
  const [anchorEl, setAnchorEl] = useState(null);
  const [selectedLanguage, setSelectedLanguage] = useState(locale);
  const router = useRouter();
  const pathname = usePathname();

  useEffect(() => {
    if (!selectedLanguage) setSelectedLanguage(locale);
  }, [locale]);

  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  const handleLanguageChange = async (newLocale) => {
    try {
      setSelectedLanguage(newLocale);
      router.push(pathname, { locale: newLocale });
      handleClose();
    } catch {
      console.log("Unable to change language");
    } finally {
      console.log("Changed language successfully");
    }
  };

  const languageMenu = () => (
    <Menu anchorEl={anchorEl} open={Boolean(anchorEl)} onClose={handleClose}>
      {Object.keys(Languages).map((key) => (
        <MenuItem
          key={key}
          onClick={() => handleLanguageChange(key)}
          className={selectedLanguage === key ? "selected" : ""}
        >
          {Languages[key].label}
        </MenuItem>
      ))}
    </Menu>
  );

  const langMap = Languages[locale] || Languages[selectedLanguage];
  const lang = langMap ? langMap.label : "English";

  return (
    <>
      <CustomButton
        text={lang}
        variant="contained"
        color="secondary"
        startIcon={<LanguageIcon fontSize="small" />}
        endIcon={<ArrowDropDownIcon fontSize="small" />}
        onClick={handleClick}
      />
      {languageMenu()}
    </>
  );
};

export default LanguageDropdown;
