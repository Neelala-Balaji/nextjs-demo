"use client";

import { useMutation, useQueryClient } from "@tanstack/react-query";

const MODAL_STATE_KEY = "loginModalState";

export const useLoginModalState = () => {
  const queryClient = useQueryClient();

  const openModalMutation = useMutation({
    mutationFn: () => Promise.resolve(true),
    onSuccess: () => {
      queryClient.setQueryData([MODAL_STATE_KEY], true);
    },
  });

  const closeModalMutation = useMutation({
    mutationFn: () => Promise.resolve(false),
    onSuccess: () => {
      queryClient.setQueryData([MODAL_STATE_KEY], false);
    },
  });

  const isLoginModalOpen = queryClient.getQueryData([MODAL_STATE_KEY]) || false;

  const openModal = () => {
    openModalMutation.mutate();
  };

  const closeModal = () => {
    closeModalMutation.mutate();
  };

  return {
    openModal,
    closeModal,
    isLoginModalOpen,
  };
};
