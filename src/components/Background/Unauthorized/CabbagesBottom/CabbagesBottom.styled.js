import styled from 'styled-components';

import cabbageCoupleMobile from '../../../../images/mobile/cabbageCoupleMobile.png';
import cabbageCoupleTablet from '../../../../images/tablet/cabbageCoupleTablet.png';

export const StyledImage = styled.div`
  position: absolute;
  z-index: -1;
  top: 776px;
  left: 10%;
  background-image: url(${cabbageCoupleMobile});
  background-repeat: no-repeat;
  width: 83px;
  height: 89px;

  @media screen and (min-width: 768px) {
    background-image: url(${cabbageCoupleTablet});
    width: 183px;
    height: 142px;
    top: 826px;
    left: 13%;

    @media screen and (min-width: 1280px) {
      top: 658px;
      left: 17%;
    }
  }
`;
