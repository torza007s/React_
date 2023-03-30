
import { styled } from '@mui/material/styles';
import Box from '@mui/material/Box';

import MuiAppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';

import CssBaseline from '@mui/material/CssBaseline';
import Typography from '@mui/material/Typography';

import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';
import { useState, useMemo } from 'react';

import DashboardDetail from './DashboardDetail';
import { createTheme, ThemeProvider } from '@mui/material/styles';

import { Brightness4, Brightness7 } from '@mui/icons-material';


const drawerWidth = 240;



const AppBar = styled(MuiAppBar, {
  shouldForwardProp: (prop) => prop !== 'open',
})(({ theme, open }) => ({
  zIndex: theme.zIndex.drawer + 1,
  transition: theme.transitions.create(['width', 'margin'], {
    easing: theme.transitions.easing.sharp,
    duration: theme.transitions.duration.leavingScreen,
  }),
  ...(open && {
    marginLeft: drawerWidth,
    width: `calc(100% - ${drawerWidth}px)`,
    transition: theme.transitions.create(['width', 'margin'], {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.enteringScreen,
    }),
  }),
}));

const darkTheme1 = 
(dark) =>
createTheme({
  palette: {
    mode: dark ? 'dark' : 'light',
  },
})

export default function Dashboard2() {

  const [open, setOpen] = useState(false);

  const [dark, setDark] = useState(true);
  const darkTheme = useMemo(() => createTheme({
    palette: {
      mode: dark ? 'dark' : 'light'
    }
  }), [dark]);
  const handleDrawerOpen = () => {
    setOpen(true);
  };



  return (
    <ThemeProvider theme={darkTheme}>
      <Box sx={{ display: 'flex' }}>
        <CssBaseline />
        <AppBar position="fixed" open={open}>
          <Toolbar>
            <IconButton
              color="inherit"
              aria-label="open drawer"
              onClick={handleDrawerOpen}
              edge="start"
              sx={{
                marginRight: 5,
                ...(open && { display: 'none' }),
              }}
            >
              <MenuIcon />
            </IconButton>

            <Typography variant="h6" noWrap component="div" sx={{flexGrow: 1 }} >
              Dashboard
            </Typography>
            <IconButton onClick={() => setDark(!dark)} >
              {dark ? <Brightness7 /> : <Brightness4 />}
            </IconButton>

          </Toolbar>
        </AppBar>
        <DashboardDetail {...{ open, setOpen }} />
      </Box>
    </ThemeProvider>
  );
}