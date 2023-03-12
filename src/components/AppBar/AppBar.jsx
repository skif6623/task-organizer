import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import Menu from '@mui/material/Menu';
import MenuIcon from '@mui/icons-material/Menu';
import Container from '@mui/material/Container';
import MenuItem from '@mui/material/MenuItem';
import { NavLink } from 'react-router-dom';
import { NavButton } from './AppBar.styled';

export function ResponsiveAppBar() {
  const [anchorElNav, setAnchorElNav] = React.useState(null);

  const handleOpenNavMenu = event => {
    setAnchorElNav(event.currentTarget);
  };

  const handleCloseNavMenu = () => {
    setAnchorElNav(null);
  };

  return (
    <AppBar position="static">
      <Container maxWidth="xl">
        <Toolbar disableGutters>
          <Typography
            variant="h6"
            noWrap
            component="a"
            href="/"
            sx={{
              mr: 2,
              display: { xs: 'none', md: 'flex' },
              fontFamily: 'monospace',
              fontWeight: 700,
              color: 'inherit',
              textDecoration: 'none',
            }}
          >
            TaskOrg
          </Typography>

          <Box sx={{ flexGrow: 1, display: { xs: 'flex', md: 'none' } }}>
            <IconButton
              size="large"
              aria-label="account of current user"
              aria-controls="menu-appbar"
              aria-haspopup="true"
              onClick={handleOpenNavMenu}
              color="inherit"
            >
              <MenuIcon />
            </IconButton>
            <Menu
              id="menu-appbar"
              anchorEl={anchorElNav}
              anchorOrigin={{
                vertical: 'bottom',
                horizontal: 'left',
              }}
              keepMounted
              transformOrigin={{
                vertical: 'top',
                horizontal: 'left',
              }}
              open={Boolean(anchorElNav)}
              onClose={handleCloseNavMenu}
              sx={{
                display: { xs: 'block', md: 'none' },
              }}
            >
              <MenuItem onClick={handleCloseNavMenu}>
                <Typography textAlign="center">
                  <NavLink
                    to="/"
                    onClick={handleCloseNavMenu}
                    sx={{ my: 2, color: 'white', display: 'block' }}
                  >
                    Home
                  </NavLink>
                </Typography>
              </MenuItem>
              <MenuItem onClick={handleCloseNavMenu}>
                <Typography textAlign="center">
                  <NavLink
                    to="/board"
                    onClick={handleCloseNavMenu}
                    sx={{ my: 2, color: 'white', display: 'block' }}
                  >
                    Board
                  </NavLink>
                </Typography>
              </MenuItem>
            </Menu>
          </Box>
          <Typography
            variant="h5"
            noWrap
            component="a"
            href=""
            sx={{
              mr: 2,
              display: { xs: 'flex', md: 'none' },
              flexGrow: 1,
              fontFamily: 'monospace',
              fontWeight: 700,
              color: 'inherit',
              textDecoration: 'none',
            }}
          >
            TaskOrg
          </Typography>
          <Box
            sx={{
              display: { xs: 'none', md: 'flex', gap: '30px' },
              marginLeft: 'auto',
            }}
          >
            <NavButton
              to="/"
              onClick={handleCloseNavMenu}
              sx={{
                my: 2,
                color: 'white',
                display: 'block',
              }}
            >
              Home
            </NavButton>
            <NavButton
              to="/board"
              onClick={handleCloseNavMenu}
              sx={{ my: 2, color: 'white', display: 'block' }}
            >
              Board
            </NavButton>
          </Box>
        </Toolbar>
      </Container>
    </AppBar>
  );
}
