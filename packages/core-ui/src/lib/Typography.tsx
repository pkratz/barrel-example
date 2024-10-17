import MuiTypography, { TypographyProps } from '@mui/material/Typography';
import React from 'react';

export const Typography = React.forwardRef<HTMLSpanElement, TypographyProps>(
  (props, ref) => {
    return <MuiTypography {...props} ref={ref} />;
  }
);
