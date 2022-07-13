import * as React from 'react';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import { Link } from 'react-router-dom';

export default function Navbar() {
  return (
    <React.Fragment>
      <Box sx={{ display: 'flex', alignItems: 'center', textAlign: 'center', backgroundColor:'GrayText',marginBottom:'15px'}}>
        <Typography  mb='10px' fontWeight='700' fontSize='25px' sx={{ minWidth:150 }}>
            <Link to='/' underline="none">About</Link>
        </Typography>
        <Typography mb='10px' fontSize='20px' sx={{ minWidth: 150 }}>
            <Link to='/visualize' underline="hover">Visualize</Link>
        </Typography>
      </Box>
    </React.Fragment>
  );
}
