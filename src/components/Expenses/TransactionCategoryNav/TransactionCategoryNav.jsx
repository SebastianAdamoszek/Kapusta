import React from 'react';

import {
  StyledNavMobile,
  StyledNavDesktop,
  Link,
} from './TransactionCategoryNav.styled';

export const TransactionNavMobile = () => {
  return (
    <StyledNavMobile>
      <Link to="/expenses">expenses</Link>
      <Link to="/income">income</Link>
    </StyledNavMobile>
  );
};

export const TransactionNavDesktop = () => {
  return (
    <StyledNavDesktop>
      <Link to="/expenses">expenses</Link>
      <Link to="/income">income</Link>
    </StyledNavDesktop>
  );
};

