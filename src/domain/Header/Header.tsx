import * as React from 'react';
import { HeaderTop, StyledLogo } from './Header.style';
import BurgerMenu from '../App/components/BurgerMenu';
import ReorderIcon from '@mui/icons-material/Reorder';
import { Typography } from '@mui/material';
import { useAuthChange } from '@/domain/App/hooks/useAuthChange';
import { useState } from 'react';
import { useMediaQuery } from '@mui/material';
import { theme } from '@/styles/theme';
import LoginLayout from '../App/components/LoginLayout';
const Header = () => {
  const [modalOpen, setModalOpen] = useState(false);
  const handleOpen = () => setModalOpen(true);
  const handleClose = () => setModalOpen(false);
  const { isLoggedIn } = useAuthChange();
  const isMediumDown = useMediaQuery(theme.breakpoints.down('md'));

  return (
    <>
      <HeaderTop>
        <StyledLogo style={{ marginLeft: isMediumDown ? '0rem' : '3rem' }} onClick={handleOpen}>
          <ReorderIcon />
          <Typography variant='h3'>Murzyniarnia</Typography>
        </StyledLogo>

        {isLoggedIn && <LoginLayout />}
        <BurgerMenu open={modalOpen} handleClose={handleClose} />
      </HeaderTop>
    </>
  );
};

export default Header;
