"use client";

import React, { useState, useEffect } from "react";
import { Container } from "@mui/material";
import CustomModal from "@/components/modal/index";
import LoginForm from "./loginForm";
import { useModalContext } from "@/context/modalContext";
import { Condition } from '@/components/condition';

const Login = () => {
  const { closeModal, isLoginModalOpen } = useModalContext();

  const handleClose = () => {
    closeModal();
  };

  return (
    <Condition show={isLoginModalOpen}>
      <Container>
        <CustomModal open={isLoginModalOpen} handleClose={handleClose}>
          <LoginForm handleClose={handleClose} />
        </CustomModal>
      </Container>
    </Condition>
  );
};

export default Login;
