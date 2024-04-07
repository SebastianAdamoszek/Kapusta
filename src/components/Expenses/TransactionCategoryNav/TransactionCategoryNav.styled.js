import styled from 'styled-components';
import { NavLink } from 'react-router-dom';

export const StyledNavMobile = styled.div`
  position: fixed;
  gap: 2px;
  bottom: 0;
  display: flex;
  background-color: #ffffff;
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

// import styled from '@emotion/styled';

// export const Container = styled.div`
//   position: relative;
//   height: 85px;
//   margin-bottom: 32px;
//   padding: 20px 10px 25px 10px;
//   display: flex;
//   justify-content: center;
//   box-shadow: 5px 10px 20px rgba(170, 178, 197, 0.4);
//   border-radius: 20px;
//   background-color: #ffffff;
//   @media screen and (min-width: 768px) {
//     height: 50px;
//     padding: 15px 134px;
//   }

//   @media screen and (min-width: 1280px) {
//     padding: 15px 299px;
//   }
// `;

// export const TotalData = styled.div`
//   width: calc((100%-1px) / 2);
//   align-items: center;
//   text-align: center;
//   &:last-child::before {
//     content: '';
//     display: block;
//     width: 1px;
//     height: 70px;
//     position: absolute;
//     top: 8px;
//     background-color: #e0e5eb;
//   }
//   @media screen and (min-width: 768px) {
//     display: flex;
//     justify-content: flex-start;
//     &:first-of-type {
//       justify-content: flex-end;
//       margin-right: 20px;
//     }
//     &:last-child::before {
//       height: 36px;
//     }
//   }
// `;

// export const Type = styled.p`
//   margin-bottom: 4px;
//   font-weight: 700;
//   font-size: 16px;
//   line-height: calc(16 / 14);
//   color: #52555f;
//   @media screen and (min-width: 768px) {
//     margin-bottom: 0px;
//     margin-right: 15px;
//     &:first-of-type {
//       margin-left: 20px;
//     }
//   }
// `;

// export const Total = styled.p`
//   font-weight: 700;
//   font-size: 14px;
//   line-height: calc(16 / 14);
//   color: ${({ typeReport }) =>
//     typeReport === 'Expenses' ? '#E53935' : '#407946'};
// `;
