import {
  Box,
  Button,
  Typography,
  CircularProgress,
  AppBar,
  MenuItem,
} from '@mui/material';
import { useAtom } from 'jotai';
import { useLocation } from 'wouter-preact';
import { useState } from 'preact/hooks';
import logoImg from "/img/logo.svg";
import Menu from '@mui/material/Menu';
import MenuIcon from '@mui/icons-material/Menu';
import IconButton from '@mui/material/IconButton';
import Container from '@mui/material/Container';
import Toolbar from '@mui/material/Toolbar';

const options = [
  { label: 'Наши услуги', target: 'services' },
  { label: 'Отзывы', target: 'reviews' },
  { label: 'О нас', target: 'about' },
  { label: 'Контакты', target: 'contacts' },
  { label: 'Медикам', target: 'spec' },
];

function Header() {
  const [openNav, setOpenNav] = useState(false);
  const [, navigate] = useLocation();

  const handleOpenNavMenu = () => {
    setOpenNav(true);
  };

  const handleCloseNavMenu = () => {
    setOpenNav(false);
  };

  const handleMenuItemClick = (target: string, label: string) => {
    if (label === 'Медикам') {
      // Redirect to spec.ukol.kz when 'Медикам' is clicked
      window.location.href = 'https://spec.ukol.kz';
    } else {
      // Scroll to the corresponding section
      document.getElementById(target)?.scrollIntoView({
        behavior: 'smooth',
        block: 'start',
      });
    }
    handleCloseNavMenu();
  };

  return (
    <AppBar position="static" sx={{ backgroundColor: 'transparent', mt: 2, mr: 2 }} elevation={0}>
      <Container maxWidth="xl">
        <Toolbar disableGutters>
        <Box sx={{ display: { xs: 'flex', md: 'flex' }, mr: 1 }}>
            <img
              src={logoImg}
              alt="Logo"
              style={{ height: '30px',}} // Increased maxHeight
            />
          </Box>
          <Typography
            variant="h5"
            noWrap
            component="a"
            sx={{
              mr: 2,
              display: { xs: 'flex', md: 'none' },
              flexGrow: 1,
              fontFamily: 'monospace',
              fontWeight: 700,
              letterSpacing: '.3rem',
              color: 'inherit',
              textDecoration: 'none',
            }}
          >
            
          </Typography>
        
          <Box sx={{ flexGrow: 1, display: { xs: 'none', md: 'flex' }, justifyContent: 'center' }}>
            {options.map((option) => (
              <Button
                key={option.target}
                onClick={() => handleMenuItemClick(option.target, option.label)}
                sx={{
                  my: 2,
                  display: 'block',
                  flex: 1,
                  outline: 'none',
                  boxShadow: 'none',
                  '&:focus': {
                    outline: 'none',
                    boxShadow: 'none',
                  },
                  '&:hover': {
                    backgroundColor: 'transparent',
                    boxShadow: 'none',
                  },
                  '&:active': {
                    backgroundColor: 'transparent',
                    boxShadow: 'none',
                  },
                  '& .MuiTouchRipple-root': {
                    display: 'none',
                  },
                }}
              >
                <Typography variant="h5">{option.label}</Typography>
              </Button>
            ))}
          </Box>
          <Box sx={{ flexGrow: 0, display: { xs: 'flex', md: 'none' } }}>
            <IconButton
              size="large"
              aria-label="account of current user"
              aria-controls="menu-appbar"
              aria-haspopup="true"
              onClick={handleOpenNavMenu}
              color="primary"
              sx={{ color: '#000' }}
            >
              <MenuIcon sx={{ fontSize: '2.5rem', fontWeight: 'bold' }} />
            </IconButton>
            <Menu
              sx={{ mt: '45px' }}
              id="menu-appbar"
              anchorOrigin={{
                vertical: 'top',
                horizontal: 'right',
              }}
              keepMounted
              transformOrigin={{
                vertical: 'top',
                horizontal: 'right',
              }}
              open={openNav}
              onClose={handleCloseNavMenu}
            >
              {options.map((option) => (
                <MenuItem
                  key={option.target}
                  onClick={() => handleMenuItemClick(option.target, option.label)}
                >
                  <Typography variant="h5" sx={{ textAlign: 'center' }}>
                    {option.label}
                  </Typography>
                </MenuItem>
              ))}
            </Menu>
          </Box>
        </Toolbar>
      </Container>
    </AppBar>
  );
}

export default Header;