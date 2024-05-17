import React from 'react';
import Button from '@mui/material/Button';
import Tooltip from '@mui/material/Tooltip';
import { useRouter } from '@/navigation';

const CustomButton = ({ text, href, locale, color, variant, startIcon, endIcon, tooltip, onClick, className }) => {
  const router = useRouter();

  const handleClick = (e) => {
    if (href) {
      router.push(href);
    } else if (onClick) {
      onClick(e);
    }
  };

  const button = (
    <Button
      color={color}
      variant={variant}
      startIcon={startIcon}
      endIcon={endIcon}
      onClick={handleClick}
      className={className}
      disableRipple
    >
      {text}
    </Button>
  );

  return tooltip ? (
    <Tooltip title={tooltip}>
      {button}
    </Tooltip>
  ) : button;
}

export default CustomButton;
