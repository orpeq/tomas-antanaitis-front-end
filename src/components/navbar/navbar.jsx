import * as React from 'react';
import { Link } from 'react-router-dom';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import Menu from '@mui/material/Menu';
import MenuIcon from '@mui/icons-material/Menu';
import Container from '@mui/material/Container';
import MenuItem from '@mui/material/MenuItem';
import Logo from '../../assets/images/logo.png';
import LinkButton from '../buttons/link-button';
import SignUpButton from '../buttons/sign-up-button';
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';

const Navbar = () => {
  const [anchorElNav, setAnchorElNav] = React.useState(null);

  const handleOpenNavMenu = (event) => {
    setAnchorElNav(event.currentTarget);
  };

  const handleCloseNavMenu = () => {
    setAnchorElNav(null);
  };

  return (
    <AppBar
      position="static"
      sx={{
        backgroundColor: 'white',
        width: '100%',
      }}>
      <Container
        maxWidth="xl"
        sx={{
          height: { xs: 60, md: 101 },
        }}>
        <Toolbar sx={{ mt: { xs: 0, md: 2 }, padding: 0 }} disableGutters>
          <Box
            noWrap
            component="div"
            sx={{
              display: { xs: 'none', md: 'block' },
              width: 157,
              height: 33,
              paddingLeft: 1,
            }}>
            <Link to="/">
              <img src={Logo} alt="Coingate Logo" />
            </Link>
          </Box>

          <Box sx={{ display: { xs: 'block', md: 'none' } }}>
            <Menu
              sx={{
                justifyContent: 'center',
                display: { xs: 'block', md: 'none' },
              }}
              id="menu-appbar"
              anchorEl={anchorElNav}
              anchorOrigin={{
                vertical: 'bottom',
                horizontal: 'right',
              }}
              keepMounted
              transformOrigin={{
                vertical: 'top',
                horizontal: 'right',
              }}
              open={Boolean(anchorElNav)}
              onClose={handleCloseNavMenu}>
              <MenuItem
                key="products-mobile"
                component={Link}
                to="/products"
                onClick={handleCloseNavMenu}>
                <Typography textAlign="center">Products</Typography>
              </MenuItem>
              <MenuItem
                key="resources-mobile"
                component={Link}
                to="/resources"
                onClick={handleCloseNavMenu}>
                <Typography textAlign="center">Resources</Typography>
              </MenuItem>
              <MenuItem
                key="buy-now-mobile"
                component={Link}
                to="/buy-now"
                onClick={handleCloseNavMenu}>
                <Typography textAlign="center">Buy Instantly</Typography>
              </MenuItem>
              <MenuItem
                key="login-mobile"
                component={Link}
                to="/login"
                onClick={handleCloseNavMenu}>
                <Typography textAlign="center">Log In</Typography>
              </MenuItem>
              <MenuItem
                key="sign-up-mobile"
                component={Link}
                to="/sign-up"
                onClick={handleCloseNavMenu}>
                <Typography textAlign="center">Sign Up</Typography>
              </MenuItem>
            </Menu>
          </Box>

          <Typography
            variant="h6"
            noWrap
            component="div"
            sx={{
              flexGrow: 1,
              display: { xs: 'flex', md: 'none' },
              width: 153,
              height: 33,
            }}>
            <Link to="/">
              <img src={Logo} alt="Coingate Logo" />
            </Link>
          </Typography>
          <Box
            sx={{
              flexGrow: 1,
              display: { xs: 'none', md: 'flex' },
              justifyContent: 'flex-start',
            }}>
            <LinkButton
              key="products"
              component={Link}
              to="/products"
              onClick={handleCloseNavMenu}>
              Products
            </LinkButton>
            <LinkButton
              key="resources"
              component={Link}
              to="/resources"
              onClick={handleCloseNavMenu}>
              Resources
            </LinkButton>
            <LinkButton
              key="buy-now"
              component={Link}
              to="/buy-now"
              onClick={handleCloseNavMenu}>
              Buy Instantly
            </LinkButton>
          </Box>

          <LinkButton
            key="login"
            component={Link}
            to="/login"
            onClick={handleCloseNavMenu}
            sx={{ display: { xs: 'none', md: 'flex' }, paddingRight: 4 }}>
            Log In
          </LinkButton>

          <SignUpButton
            key="sign-up"
            component={Link}
            to="/sign-up"
            onClick={handleCloseNavMenu}
            sx={{
              display: { xs: 'none', md: 'flex' },
              paddingLeft: 4,
              justifyContent: 'flex-start',
            }}>
            Sign Up
            <ArrowForwardIosIcon sx={{ fontSize: '14px' }} />
          </SignUpButton>

          <IconButton
            sx={{ display: { xs: 'block', md: 'none' } }}
            size="large"
            aria-label="account of current user"
            aria-controls="menu-appbar"
            aria-haspopup="true"
            onClick={handleOpenNavMenu}>
            <MenuIcon variant="square" />
          </IconButton>
        </Toolbar>
      </Container>
    </AppBar>
  );
};

export default Navbar;
