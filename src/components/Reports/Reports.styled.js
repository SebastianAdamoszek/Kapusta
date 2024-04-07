import styled from 'styled-components';

export const ReportsPageContainer = styled.div`
  width: 320px;
  height: auto;
  margin: 65px auto;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  @media screen and (min-width: 768px) {
    min-width: 768px;
    margin: 0 auto;
  }

  @media screen and (min-width: 1280px) {
    min-width: 1280px;
  }
`;