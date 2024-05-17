"use client";

import React from "react";
import { NextIntlClientProvider } from "next-intl";
// import { AppRouterCacheProvider } from "@mui/material-nextjs/v14-appRouter";
import { ThemeProvider } from "@mui/material/styles";
import CssBaseline from "@mui/material/CssBaseline";
import { QueryClient, QueryClientProvider } from "react-query";
import theme from "@/styles/theme";
import Header from "@/shared/header";
import Footer from "@/shared/footer";
import Main from "@/shared/main";

const queryClient = new QueryClient();

const Providers = ({ children, locale, messages }) => {
  console.log("locale", locale, "messages", messages);

  return (
    <QueryClientProvider client={queryClient}>
      <NextIntlClientProvider locale={locale} messages={messages}>
        {/* <AppRouterCacheProvider options={{ enableCssLayer: true }}> */}
        <ThemeProvider theme={theme}>
          <CssBaseline />
          <Header />
          <Main>{children}</Main>
          <Footer />
        </ThemeProvider>
        {/* </AppRouterCacheProvider> */}
      </NextIntlClientProvider>
    </QueryClientProvider>
  );
};

export default Providers;
