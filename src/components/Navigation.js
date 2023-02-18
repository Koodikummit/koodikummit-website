import React from 'react';
import { Scrollchor } from 'react-scrollchor';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import Menu from '@mui/material/Menu';
import MenuIcon from '@mui/icons-material/Menu';
import Container from '@mui/material/Container';
import Avatar from '@mui/material/Avatar';
import Button from '@mui/material/Button';
import Tooltip from '@mui/material/Tooltip';
import MenuItem from '@mui/material/MenuItem';
import KoodikummitLogo from '../assets/koodikummit-logo.svg';

const pages = [
  { label: 'Main', id: '#main' },
  { label: 'About us', id: '#aboutus' },
  { label: 'Our friends', id: '#ourfriends' },
  { label: 'For companies', id: '#forcompanies' },
  { label: 'FAQ', id: '#faq' },
  { label: 'Contact', id: '#contactus' },
];

const ResponsiveAppBar = ({ sections }) => {
  const [anchorElNav, setAnchorElNav] = React.useState(null);
  const [anchorElUser, setAnchorElUser] = React.useState(null);

  const handleOpenNavMenu = (event) => {
    setAnchorElNav(event.currentTarget);
  };
  const handleOpenUserMenu = (event) => {
    setAnchorElUser(event.currentTarget);
  };

  const handleCloseNavMenu = () => {
    setAnchorElNav(null);
  };

  const handleCloseUserMenu = () => {
    setAnchorElUser(null);
  };

  return (
    <AppBar
      position="sticky"
      color=""
      sx={{ paddingTop: '1rem', paddingBottom: '1rem' }}
    >
      <Container maxWidth="xl">
        <Toolbar disableGutters>
          <Typography
            variant="h6"
            noWrap
            component="div"
            sx={{ mr: 2, display: { xs: 'none', md: 'flex' } }}
          >
            <KoodikummitLogo style={{ height: 75, width: 75 }} />
          </Typography>

          <Box sx={{ display: { md: 'none' }, position: { xs: 'absolute' } }}>
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
              {sections.map((section) => (
                <Scrollchor to={section.slug}>
                  <MenuItem key={section.slug} onClick={handleCloseNavMenu}>
                    <Typography textAlign="center">{section.name}</Typography>
                  </MenuItem>
                </Scrollchor>
              ))}
            </Menu>
          </Box>
          <Typography
            variant="h6"
            noWrap
            component="div"
            sx={{
              flexGrow: 1,
              display: { xs: 'flex', md: 'none' },
              justifyContent: 'center',
            }}
          >
            <KoodikummitLogo style={{ height: 75, width: 75 }} />
          </Typography>
          <Box sx={{ flexGrow: 1, display: { xs: 'none', md: 'flex' } }}>
            {sections.map((section) => (
              <Scrollchor to={section.slug}>
                <Button
                  key={section.slug}
                  onClick={handleCloseNavMenu}
                  sx={{ my: 2, mx: 2, color: 'black', display: 'block' }}
                >
                  {section.name}
                </Button>
              </Scrollchor>
            ))}
          </Box>
        </Toolbar>
      </Container>
    </AppBar>
  );
};
export default ResponsiveAppBar;
