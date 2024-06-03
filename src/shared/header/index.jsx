import React from 'react';
import { Grid, Tooltip } from '@mui/material';
import Image from 'next/image';
import Link from 'next/link';
import MailOutlineIcon from '@mui/icons-material/MailOutline';
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';
import SearchBar from "@/components/searchbar";
import CustomButton from '@/components/buttons';
import LanguageDropdown from '@/shared/language/index';
import { useModalContext } from '@/context/modalContext';
import Login from '../login/page';

const Header = () => {
  const { openModal } = useModalContext();
  return (
    <header >
      <Grid container alignItems="center" sx={{ backgroundColor: '#192c6d', height: 64 }}>
        <Grid item xs={12} xl={3} sx={{ paddingLeft: '10px', paddingRight: '10px' }}>
          <Login />
          <Link href="/">
              <Image
                src="/images/ndap_header_logo.png"
                alt="ndap-header-logo"
                width={130}
                height={50}
              />
          </Link>
        </Grid>
        <Grid item xs={12} xl={9} container alignItems="center" justifyContent="flex-end" sx={{ '& > *': { paddingLeft: '5px' } }}>
          <Grid item>
            <SearchBar />
          </Grid>
          <Grid item>
          <CustomButton href="/newsletter" text="Newsletter" variant="contained" color="secondary" startIcon={<MailOutlineIcon fontSize="small" />} />
          </Grid>
          <Grid item>
            <CustomButton href="/catalogue" text="Data Catalogue" variant="contained" color="secondary" endIcon={<ArrowForwardIcon fontSize="small" />} />
          </Grid>
          <Grid item>
            <CustomButton text="Screen Reader" variant="contained" color="secondary" />
          </Grid>
          <Grid item>
            <LanguageDropdown />
          </Grid>
          <Grid item>
          <CustomButton text="A+" variant="contained" color="secondary" />
         
          <CustomButton text="A" variant="contained" color="secondary" />
         
          <CustomButton text="A-" variant="contained" color="secondary" />
          </Grid>
          <Grid item>
            <Tooltip title="Help on NDAP">
              <CustomButton href="/help" text="Help" variant="contained" color="secondary" />
            </Tooltip>
          </Grid>
          <Grid item>
            <Tooltip title="Login">
              <CustomButton onClick={openModal} text="Login" variant="outlined" color="secondary" />
            </Tooltip>
          </Grid>
        </Grid>
      </Grid>
    </header>
  );
};

export default Header;
