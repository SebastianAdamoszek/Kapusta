import styled from 'styled-components';
import { NavLink } from 'react-router-dom';

export const Container = styled.div`
  max-width: 100vw;
  overflow-x: auto;
  height: 100vh;
  margin: 0 auto;
  padding: 0;
`;

export const Header = styled.header`
  position: fixed;
  z-index: 100;
  display: flex;
  background-color: var(--bg-white-color);
  width: 100vw;
`;
export const Nav = styled.div`
  display: flex;
  width: 100vw;
  align-items: center;
  justify-content: space-between;
  padding: 12px 16px 12px 16px;
`;
export const LogoContainer = styled.div`
  display: flex;
  align-items: center;
`;

export const LogoSVG = styled.svg`
  width: 90px;
  height: 31px;
`;
export const Link = styled(NavLink)`
  transition: transform 0.3s cubic-bezier(0.25, 0.1, 0.25, 1);
  &:hover {
    transform: scale(1.05);
  }
`;
export const RightNav = styled.div`
  display: flex;
  align-items: center;
`;
