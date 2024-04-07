import styled from 'styled-components';

export const HomeContainer = styled.div`
  max-width: 183px;
  margin: auto 0;

  @media screen and (min-width: 768px) {
    max-width: 426px;
    margin-left: 141px;
    position: relative
  }
  
  @media screen and (min-width: 1280px) {
   margin: 229px
   
  }
`;

export const TextGroup = styled.div`
  margin-top: 142px;

  @media screen and (min-width: 768px) {
    margin-top: 136px; 
  }

  @media screen and (min-width: 1280px) {
    margin-top: 364.5px;
  }

  & > svg {
    width: 183px;
    height: 46.34px;
    color: var(--textColor);
   

    @media screen and (min-width: 768px) {
      width: 306.52px;
      height: 77.69px;
    }
     @media screen and (min-width: 1280px) {
      width: 377px;
      height: 120px;
    }
  }
  & > p {
    padding: 0 30px;
    font-weight: 700;
    font-size: 12px;
    line-height: 1.15;
    letter-spacing: 0.15em;
    text-transform: uppercase;
    color: var(--text-color-secondary);
    

    @media screen and (min-width: 768px) {
      padding: 0 70px;
      font-size: 16px;
      line-height: 1.19;
      letter-spacing: 0.18em;
    }
  }
`;


