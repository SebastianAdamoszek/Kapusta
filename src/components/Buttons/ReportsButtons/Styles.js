import { styled } from 'styled-components';
import { Link } from 'react-router-dom';

export const StyledReportsButtonLink = styled(Link)`
  display: flex;
  align-items: baseline;
  justify-content: center;
  margin-bottom: 45px;
  text-align: center;
  text-decoration: none;
  color: var(--text-color-primary);
  :hover,
  :focus {
    color: var(--btn-orange-bg-color);
  }
  :hover .reportIcon,
  :focus .reportIcon {
    fill: var(--btn-orange-bg-color);
  }
  @media screen and (min-width: 768px) {
    margin-bottom: 0;
  }
  @media screen and (min-width: 1280px) {
    position: absolute;
    top: 11px;
    right: 0;
  }

  .reportIcon {
    margin-left: 20px;
    width: 14px;
    height: 14px;
    fill: var(--btn-grey-text-color);
  }
`;
