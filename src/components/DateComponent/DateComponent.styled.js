import styled from 'styled-components';

export const DateSelectWrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 5px;
  margin: 56px 0 32px 0;
  z-index: 10;

  @media screen and (min-width: 768px) {
    position: relative;
    top: 75px;
    right: -280px;

    @media screen and (min-width: 1280px) {
      right: -450px;
    }
  }
  h3 {
    font-weight: 500;
    color: var(--secondaryTextColor);
  }
`;
export const DateSelect = styled.div`
  display: flex;
  gap: 10px;
  align-items: center;
  justify-content: center;
  margin-bottom: 32px;

  @media screen and (min-width: 768px) {
    margin-bottom: 0;
  }
`;
export const DateSelectPrev = styled.img`
  cursor: pointer;
  transition: 0.25s ease-in-out;

  &:hover {
    transform: translateX(-2px) scale(1.2);
  }
`;

export const DateSelectNext = styled.img`
  cursor: pointer;
  transition: 0.25s ease-in-out;

  &:hover {
    transform: translateX(2px) scale(1.2);
  }
`;