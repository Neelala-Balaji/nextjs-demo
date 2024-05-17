import React from "react";
import { NextIntlClientProvider } from "next-intl";
import { AppRouterCacheProvider } from "@mui/material-nextjs/v14-appRouter";
import { ThemeProvider } from "@mui/material/styles";
import CssBaseline from "@mui/material/CssBaseline";
import Header from "../shared/header";
import Footer from "../shared/footer";
import theme from "../styles/theme";

const LocaleLayout = ({ children, params: { locale } }) => {
  return (
    <html lang={locale}>
      <head>
        <meta charSet="UTF-8" />
        <meta
          name="viewport"
          content="width=device-width, initial-scale=1, maximum-scale=1"
        />
        <title>National Data and Analytics Platform</title>
        <meta
          name="description"
          content="The National Data and Analytics Platform (NDAP) facilitates and improves access to Indian government data. Through the platform, data sets from across India's extensive administrative landscape can be accessed. NDAP allows users to search, merge, visualize, and download datasets easily."
        />
        <meta
          name="keywords"
          content="Aam Aadmi Bima Yojana, AgMarkNet,Commodity Wise Price and Arrival Data, Agricultural Census , Annavitran - Distribution of Food Grains, Annual Survey of Industries (ASI), Atal Pension Yojana, AYUSH Infrastructure and Facilities, Basic Statistical Returns of Scheduled Commercial Banks in India, Census 2011, Central Electricity Authority (CEA) Monthly Power Reports, Climate Vulnerability Assessment for Adaptation Planning in India"
        />
        <meta name="theme-color" content="#ffffff" />
        <link rel="icon" href="/favicon.ico" />
        <link rel="icon" href="/favicon-32x32.ico" />
        <link rel="icon" href="/favicon-16x16.ico" />
        <link rel="manifest" href="/manifest.json" />
        <link rel="dns-prefetch" href="https://loadqa.ndapapi.com" />
        <link rel="dns-prefetch" href="https://api.userback.io" />
        <link rel="dns-prefetch" href="https://o1231585.ingest.sentry.io" />
        <link
          rel="dns-prefetch"
          href="https://j0hcxdonw8.execute-api.ap-south-1.amazonaws.com"
        />
        <link rel="apple-touch-icon" href="/apple-touch-icon.ico" />
        <link
          rel="stylesheet"
          href="https://cdnjs.cloudflare.com/ajax/libs/animate.css/4.1.1/animate.min.css"
        />
      </head>
      <body>
        <QueryClientProvider client={queryClient}>
          <NextIntlClientProvider locale={locale}>
            <AppRouterCacheProvider options={{ enableCssLayer: true }}>
              <ThemeProvider theme={theme}>
                <CssBaseline />
                <Header />
                <main>{children}</main>
                <Footer />
              </ThemeProvider>
            </AppRouterCacheProvider>
          </NextIntlClientProvider>
        </QueryClientProvider>
      </body>
    </html>
  );
};

export default LocaleLayout;
