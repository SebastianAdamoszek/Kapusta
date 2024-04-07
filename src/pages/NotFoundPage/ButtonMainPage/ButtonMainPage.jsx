import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import {
  ArrowBack,
  ArrowBackIcon,
  ArrowBackDesk,
} from './ButtonMainPage.styled';
import iconBack from '../../../icons/back.svg';

export const ButtonMainPage = () => {
  const location = useLocation();
  const redirectTo = location.state?.from ?? '/expenses';

  return (
    <Link to={redirectTo}>
      <ArrowBack>
        <ArrowBackIcon src={iconBack} alt="arrow" />
        <ArrowBackDesk>Main Page</ArrowBackDesk>
      </ArrowBack>
    </Link>
  );
};
