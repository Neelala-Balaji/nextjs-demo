'use client';

import React, { useState } from 'react';
import { useRouter, usePathname } from '@/navigation';
import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';
import LanguageIcon from '@mui/icons-material/Language';
import ArrowDropDownIcon from '@mui/icons-material/ArrowDropDown';
import CustomButton from '@/components/buttons';
import { Languages } from '@/constants/index';

import { useQuery, useMutation, useQueryClient  } from 'react-query';

const useLanguageState = () => {
  const { data: selectedLanguage } = useQuery('selectedLanguage', async () => {
    const lang = localStorage.getItem('lang') || 'en';
    return lang;
  });

  const changeLanguage = useMutation(
    (newLocale) => {
      localStorage.setItem("lang", newLocale);
    },
    { onSuccess: () => console.log('Language changed successfully') }
  );

  return { selectedLanguage, changeLanguage };
};


const LanguageDropdown = ({locale}) => {
  const [anchorEl, setAnchorEl] = useState(null);

  const { selectedLanguage, changeLanguage } = useLanguageState();
  const queryClient = useQueryClient();
  const router = useRouter();
  const pathname = usePathname();

  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  const handleLanguageChange = async (newLocale) => {
    try {
      await changeLanguage.mutateAsync(newLocale);
      queryClient.refetchQueries('selectedLanguage');
      router.push(pathname, { locale: newLocale });
      handleClose();
    } catch {
      console.log('Unable to change language');
    } finally {
      console.log('Changed language successfully');
    }
  };
  

  const languageMenu = () => (
    <Menu
      anchorEl={anchorEl}
      open={Boolean(anchorEl)}
      onClose={handleClose}
    >
      {Object.keys(Languages).map((key) => (
        <MenuItem
          key={key}
          onClick={() => handleLanguageChange(key)}
          className={selectedLanguage === key ? 'selected' : ''}
        >
          {Languages[key].label}
        </MenuItem>
      ))}
    </Menu>
  );

  const langMap = Languages[locale] || Languages[selectedLanguage];
  const lang = langMap ? langMap.label : 'English';

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
}

export default LanguageDropdown;
