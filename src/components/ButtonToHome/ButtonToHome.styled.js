import styled from 'styled-components';

export const ArrowBack = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  transition: 0.25s ease-in-out;
  position: relative;
  top: 25px;
  left: -120px;
  z-index: 10;

  @media screen and (min-width: 768px) {
    top: 162px;
    left: -295px;
  }

  @media screen and (min-width: 1280px) {
    left: -460px;
  }
`;
export const ArrowBackIcon = styled.img`
  transition: 0.25s ease-in-out;
  ${ArrowBack}:hover & {
    transform: translateX(-5px);
  }
`;
export const ArrowBackDesk = styled.p`
  display: none;

  @media screen and (min-width: 768px) {
    display: block;
    font-size: 12px;
    font-weight: 400;
    color: var(--text-color-primary);
    width: 80px;
    text-align: right;
    transition: 0.25s ease-in-out;
  }

  ${ArrowBack}:hover & {
    color: var(--active-product-category-img);
  }
`;
