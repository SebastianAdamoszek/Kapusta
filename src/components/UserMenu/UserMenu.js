import { useScreenSize } from '../../hooks/useScreenSize';
import { useDispatch, useSelector } from 'react-redux';
import { logout } from '../../redux/Auth/operations';
import {
  Container,
  UserArea,
  LogoutButton,
  Avatar,
  Name,
  LogoutIcon,
} from './UserMenu.styled';
import logoutSvg from '../../icons/logOut.svg';
import { selectUserName } from '../../redux/selectors';
import { Confirm } from 'components/ModalLogOutAndConfirm/ModalLogOutAndConfirm';
import { useState } from 'react';
export const UserMenu = () => {
  const [modalOpen, setModalOpen] = useState(false);
  const userName = useSelector(selectUserName);
  const firstLetter = userName ? userName.charAt(0).toUpperCase() : '';
  const dispatch = useDispatch();
  const handleLogout = () => dispatch(logout());
  const handleModalOpen = () => {
    setModalOpen(true);
  };
  const handleModalClose = () => {
    setModalOpen(false);
  };
  const { mobileScreen } = useScreenSize();
  return (
    <Container>
      <UserArea>
        {mobileScreen ? (
          <Avatar>{firstLetter}</Avatar>
        ) : (
          <>
            <Avatar>{firstLetter}</Avatar> <Name>{userName}</Name>
          </>
        )}
      </UserArea>{' '}
      {mobileScreen ? (
        <>
          <LogoutButton onClick={handleModalOpen}>
            <LogoutIcon>
              <image href={logoutSvg} />
            </LogoutIcon>
          </LogoutButton>
        </>
      ) : (
        <>
          <LogoutButton onClick={handleModalOpen}>Exit</LogoutButton>
        </>
      )}
      {modalOpen && (
        <Confirm closeModal={handleModalClose} dispatch={handleLogout}>
          Do you really want to leave?
        </Confirm>
      )}{' '}
    </Container>
  );
};
