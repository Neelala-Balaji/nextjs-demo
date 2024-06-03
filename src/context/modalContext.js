import React, { createContext, useContext } from "react";
import { useLoginModalState } from "@/hooks/useLoginModalState";

const ModalContext = createContext();

export const ModalProvider = ({ children }) => {
  const modalState = useLoginModalState();

  return (
    <ModalContext.Provider value={modalState}>{children}</ModalContext.Provider>
  );
};

export const useModalContext = () => {
  return useContext(ModalContext);
};
