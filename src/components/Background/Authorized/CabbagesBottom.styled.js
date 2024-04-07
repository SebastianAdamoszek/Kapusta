import styled from 'styled-components';

import cabbageGroupTablet from '../../../images/tablet/cabbageGroupTablet.png';
import cabbageCoupleTablet from '../../../images/tablet/cabbageCoupleTablet.png';

export const StyledImage = styled.div`
  @media screen and (min-width: 768px) {
    position: absolute;
    z-index: -1;
    bottom: 59px;
    right: 88px;
    background-image: url(${cabbageCoupleTablet});
    background-repeat: no-repeat;
    width: 183px;
    height: 146px;

    @media screen and (min-width: 1280px) {
      z-index: -1;
      bottom: 0;
      right: 0;
      background-image: url(${cabbageGroupTablet});
      background-repeat: repeat;
      width: 100%;
      height: 23%;
    }
  }
`;

// to jeszcze muszę dopracować
