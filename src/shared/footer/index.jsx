import React from "react";
import Link from "next/link";
import { useTranslations } from "next-intl";
import Image from "next/image";
import { Grid, Typography } from "@mui/material";
import { Link as MuiLink } from "@mui/material";
import Stack from "@mui/material/Stack";
import Divider from "@mui/material/Divider";

const Footer = () => {
  const t = useTranslations();
  return (
    <Grid
      container
      justifyContent={"center"}
      className="footer"
      spacing={2}
      sx={{ paddingLeft: { xs: 2, sm: 2 }, paddingRight: { xs: 2, sm: 2 } }}
    >
      <Divider
        orientation="horizontal"
        sx={{ border: "1px solid #f2f4f8", width: "100%" }}
      />

      <Grid container item justifyContent={"center"}>
        <Grid item xs={12} sm={2}>
          <Image
            src="/images/ndap_footer_logo.png"
            alt="ndap-footer-logo"
            width={130}
            height={50}
          />
        </Grid>
        <Grid item xs={6} sm={2}>
          <Stack direction="column" spacing={1}>
            <Link href="/info/about">{t("about", { domain: "NDAP" })}</Link>
            <Link href="/info/sitemap">{t("sitemap")}</Link>
            <Link href="/info/termsandconditions">
              {t("termsandconditions")}
            </Link>
          </Stack>
        </Grid>
        <Grid item xs={6} sm={2}>
          <Stack direction="column" spacing={1}>
            <Link href="/info/accessibility">
              {t("Accessibility")} {t("Document")}
            </Link>
            <Link href="/info/standardization">{t("Standardization")}</Link>
            <Link href="/info/policy">{t("policy")}</Link>
          </Stack>
        </Grid>

        <Grid item xs={6} sm={2}>
          <Stack direction="column" spacing={1}>
            <Link href="/info/sampleusecases">{t("SampleUseCases")}</Link>
            <Link href="/info/newsletter">{t("News_Community")}</Link>
            <Link href="/info/about">{t("ResearchPapers")}</Link>
            <Link href="/info/researchpapers">{t("Publications")}</Link>
          </Stack>
        </Grid>

        <Grid
          item
          xs={6}
          sm={2}
          spacing={3}
          sx={{
            borderLeft: { lg: "1px solid #6c757d" },
            paddingLeft: { lg: "3%" },
          }}
        >
          <Grid item xs={12}>
            <Typography variant="subtitle2">{t("contact")}:</Typography>
            <Typography variant="p">adviserdma-niti[at]gov[dot]in</Typography>
          </Grid>

          <Grid item xs={12}>
            <Typography variant="subtitle2">
              {t("SocialMediaConnect")}:
            </Typography>
            <Stack
              direction="row"
              spacing={2}
              alignItems="center"
              sx={{ marginTop: "5px" }}
            >
              <MuiLink
                href="https://twitter.com/NDAP_NITIAayog"
                underline="none"
                target="_blank"
              >
                <Image
                  src="/images/twitter.png"
                  alt="twitter"
                  width={40}
                  height={32}
                />
              </MuiLink>
              <MuiLink
                href="https://www.linkedin.com/company/national-data-and-analytics-platform-ndap/"
                underline="none"
                target="_blank"
              >
                <Image
                  src="/images/linkedin.png"
                  alt="linkedin"
                  width={25}
                  height={25}
                />
              </MuiLink>
              <MuiLink
                href="https://www.youtube.com/@nitiaayog3987/videos"
                underline="none"
                target="_blank"
              >
                <Image
                  src="/images/youtube.png"
                  alt="youtube"
                  width={36}
                  height={36}
                />
              </MuiLink>
            </Stack>
          </Grid>
        </Grid>
      </Grid>

      <Grid container item justifyContent="center" alignItems="center">
        <Divider
          orientation="horizontal"
          variant="middle"
          sx={{
            border: "1px solid #f2f4f8",
            opacity: "0.7",
            margin: "10px 0 15px 0",
            width: '100%'
          }}
        />
        <Stack
          direction="column"
          alignItems="center"
          justifyContent="center"
          sx={{ color: "#789" }}
          spacing={{ xs: 1, sm: 1, lg: 0 }}
        >
          <Typography variant="subtitle2" align="center">
            © {new Date().getFullYear()} {t("Welcome_beta")}. {t("CopyRights")}{" "}
            {t("By")}
            <MuiLink
              href="https://www.niti.gov.in/"
              underline="none"
              target="_blank"
              sx={{ paddingLeft: "5px", color: "#1d40cf !important" }}
            >
              {t("NitiAyog")}.
            </MuiLink>
          </Typography>
          <Typography
            variant="subtitle2"
            sx={{ display: "flex", alignItems: "center" }}
            align="center"
          >
            {t("ImplementationPartner")}
            <MuiLink
              href="https://otsi-global.com/"
              underline="none"
              target="_blank"
              sx={{ paddingLeft: "10px" }}
            >
              <Image
                src="/images/otsi-logo.png"
                alt="youtube"
                width={85}
                height={35}
              />
            </MuiLink>
          </Typography>
        </Stack>
      </Grid>
    </Grid>
  );
};

export default Footer;
