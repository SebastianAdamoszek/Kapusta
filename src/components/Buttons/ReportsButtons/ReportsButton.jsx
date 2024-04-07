import React from 'react';
import { useLocation } from 'react-router-dom';
import { ReactComponent as Reports } from '../../../icons/reports.svg';
import { StyledReportsButtonLink } from './Styles';

export default function ReportsButton() {
  const location = useLocation();

  return (
    <StyledReportsButtonLink to="/reports" state={{ from: location }}>
      <span>Reports</span>
      <Reports className="reportIcon" />
    </StyledReportsButtonLink>
  );
}
