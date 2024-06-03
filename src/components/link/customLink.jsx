import React from 'react';
import { useModalContext } from '@/context/modalContext';

const CustomLink = ({ href, className, children }) => {
  const { openModal } = useModalContext();
  const isLoggedIn = true; // Replace this with your actual login check

  const handleClick = (e) => {
    if (!isLoggedIn) {
      e.preventDefault();
      openModal(href);
    }
  };

  return (
    <a href={href} className={className} onClick={handleClick}>
      {children}
    </a>
  );
};

export default CustomLink;
