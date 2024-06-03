"use client";

import React from "react";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { ReactQueryDevtools } from "@tanstack/react-query-devtools";
import { NextIntlClientProvider } from "next-intl";
import { ThemeProvider } from "@mui/material/styles";
import CssBaseline from "@mui/material/CssBaseline";
import theme from "@/styles/theme";
import Header from "@/shared/header";
import Footer from "@/shared/footer";
import Main from "@/shared/main";
import { ModalProvider } from "@/context/modalContext";

const queryClient = new QueryClient();

const Providers = ({ children, locale, messages }) => {
  return (
    <QueryClientProvider client={queryClient}>
      <NextIntlClientProvider locale={locale} messages={messages}>
        <ThemeProvider theme={theme}>
          <CssBaseline />
          <ModalProvider>
            <Header />
            <Main>{children}</Main>
            <Footer />
          </ModalProvider>
        </ThemeProvider>
      </NextIntlClientProvider>
      {/* <ReactQueryDevtools initialIsOpen={false} /> */}
    </QueryClientProvider>
  );
};

export default Providers;
