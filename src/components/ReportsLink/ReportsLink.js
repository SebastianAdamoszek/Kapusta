import { ReactComponent as Logo } from '../../icons/reports.svg';
import { Link } from 'react-router-dom';
import { ReportsContainer, Text } from './ReportsLink.styled';

export const ReportsLink = () => {
  return (
    <Link to="/reports">
      <ReportsContainer>
        <Text>Reports</Text>
        <Logo />
      </ReportsContainer>
    </Link>
  );
};
