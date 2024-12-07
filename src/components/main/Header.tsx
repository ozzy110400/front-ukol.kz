import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import Menu from '@mui/material/Menu';
import MenuIcon from '@mui/icons-material/Menu';
import Container from '@mui/material/Container';
import Button from '@mui/material/Button';
import MenuItem from '@mui/material/MenuItem';
import { useState } from 'preact/hooks';

const options = [
  { label: 'Наши услуги', target: 'services' },
  { label: 'О нас', target: 'about' },
  { label: 'Отзывы', target: 'reviews' },
];
function Header() {
  const [openNav, setOpenNav] = useState(false);

  const handleOpenNavMenu = () => {
    setOpenNav(true);
  };

  const handleCloseNavMenu = () => {
    setOpenNav(false);
  };

  return (
    <AppBar position="static" sx={{ backgroundColor: 'transparent', mt: 2, mr: 2 }} elevation={0} >
      <Container maxWidth="xl">
        <Toolbar disableGutters>
          <Box sx={{ display: { xs: 'flex', md: 'flex' }, mr: 1 }}>
            <img
              src="/img/logo.png" 
              alt="Logo"
              style={{ maxHeight: '80px', width: 'auto' }} 
            />
          </Box>
          <Typography
            variant="h6"
            noWrap
            component="a"
            href="#app-bar-with-responsive-menu"
            sx={{
              mr: 2,
            }}
          >
            UKOL.KZ
          </Typography>
         
          <Box sx={{ flexGrow: 1, display: { xs: 'none', md: 'flex' }, justifyContent: 'center' }}>
            {options.map((option) => (
              <Button
                key={option.target}
                onClick={() => {
                  document.getElementById(option.target)?.scrollIntoView({
                    behavior: 'smooth',
                    block: 'start',
                  });
                  handleCloseNavMenu();
                }}
                sx={{ 
                  my: 2,
                  display: 'block', 
                  flex: 1,
                  outline: 'none', // Remove the focus outline
                  boxShadow: 'none', // Remove the box shadow when clicked
                  '&:focus': {
                    outline: 'none', // Remove focus outline
                    boxShadow: 'none', // Remove box shadow on focus
                  },
                  '&:hover': {
                    backgroundColor: 'transparent', // Remove hover background color (if any)
                    boxShadow: 'none', // Remove box shadow on hover
                  },
                  '&:active': {
                    backgroundColor: 'transparent', // Remove active background color (if any)
                    boxShadow: 'none', // Remove box shadow on active state
                  },
                  '& .MuiTouchRipple-root': {
                    display: 'none', // Remove the ripple effect
                  },
                 }}
              >
                <Typography variant="h5">
                  {option.label}
                </Typography>
              </Button>
            ))}
          </Box>
          <Box sx={{ flexGrow: 1, display: { xs: 'flex', md: 'none' } }}>

          </Box>
          <Box sx={{ flexGrow: 0, display: { xs: 'flex', md: 'none' } }}>
            <IconButton
              size="large"
              aria-label="account of current user"
              aria-controls="menu-appbar"
              aria-haspopup="true"
              onClick={handleOpenNavMenu}
              color='primary'
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
                onClick={() => {
                  document.getElementById(option.target)?.scrollIntoView({
                    behavior: 'smooth',
                    block: 'start',
                  });
                  handleCloseNavMenu();
                }}
              >
                  <Typography  variant='h5' sx={{ textAlign: 'center' }}>{option.label}</Typography>
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
