import React from 'react';
import { AppBar, Toolbar, Typography } from '@mui/material'; 

interface GlobalHeaderProps {
  title: string;
}

const GlobalHeader: React.FC<GlobalHeaderProps> = ({ title }) => {
  return (
    <AppBar position="static">
      <Toolbar>
        <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
          {title}
        </Typography>
      </Toolbar>
    </AppBar>
  );
};

export default GlobalHeader;

