import { Box, Typography } from '@mui/material';
import React from 'react';
import { useStyles } from './styles';

type PageTitleProps = {
  label?: string;
};

export const PageTitle: React.FC<PageTitleProps> = ({ label }) => {
  const classes = useStyles();
  return (
    <Box className={classes.root}>
      <Typography variant="h1">{label}</Typography>
    </Box>
  );
};
