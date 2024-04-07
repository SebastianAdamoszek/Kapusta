import styled from 'styled-components';

import cabbageGroupMobile from '../../../../images/mobile/cabbageGroupMobile.png';
import cabbageGroupTablet from '../../../../images/tablet/cabbageGroupTablet.png';

export const StyledImage = styled.div`
  position: absolute;
  top: 160px;
  right: 0;
  width: 49px;
  height: 89px;
  background-image: url(${cabbageGroupMobile});
  background-repeat: no-repeat;

  @media screen and (min-width: 768px) {
    top: 84px;
    right: 0;
    background-image: url(${cabbageGroupTablet});
    background-repeat: repeat;
    width: 100%;
    height: 232px;
  }
`;
