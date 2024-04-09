import styled from 'styled-components';
import { NavLink } from 'react-router-dom';

export const StyledNavMobile = styled.div`
  position: fixed;
  gap: 2px;
  bottom: 0;
  display: flex;
  background-color: #ffffff;
  @media screen and (min-width: 768px) {
  display: none;
  }
`;
export const StyledNavDesktop = styled.div`
  display: flex;
  position: absolute;
  top: -40px;
  left: 0;
`;
export const Link = styled(NavLink)`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 50vw;
  padding: 20px 0;
  text-decoration: none;
  text-transform: uppercase;
  text-align: center;
  color: #000000;
  font-weight: 700;
  background-color: #f5f6fb;

  @media screen and (min-width: 768px) {
    width: 138px;
    height: 40px;
    background-color: #fafbfd;
    border-radius: 18px 18px 0 0;
  }
  &:hover,
  &:focus {
    color: #ff751d;
    background-color: #fefefe;
  }
  &.active {
    color: #ffffff;
    background-color: #ff751d;
    @media screen and (min-width: 768px) {
      color: #ff751d;
      background-color: #fefefe;
    }
  }
`;