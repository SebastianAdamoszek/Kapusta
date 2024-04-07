import { useSelector } from 'react-redux';
import { useLocation } from 'react-router';
import {
  selectIncomeSummary,
  selectExpensesSummary,
  selectIsLoading,
} from '../../redux/selectors';
import {
  StyledSummaryTable,
  StyledSummaryRow,
  StyledSummaryMonth,
  StyledSummaryTableHead,
  StyledSummaryValue,
} from './Summary.styled';

export const Summary = () => {
  const location = useLocation();

  const isLoading = useSelector(selectIsLoading);
  const incomeData = useSelector(selectIncomeSummary);
  const expensesData = useSelector(selectExpensesSummary);
  let data;

  if (location.pathname === '/home/income') {
    data = Object.entries(incomeData) ?? [];
  }
  if (location.pathname === '/home/expenses') {
    data = Object.entries(expensesData) ?? [];
  }

  return (
    !isLoading && (
      <StyledSummaryTable>
        <StyledSummaryTableHead>SUMMARY</StyledSummaryTableHead>
        {data?.map(el => {
          if (el[1] === 'N/A') {
            return false;
          } else {
            return (
              <StyledSummaryRow key={`${el[0]}${el[1]}`}>
                <StyledSummaryMonth>{el[0]}</StyledSummaryMonth>
                <StyledSummaryValue>{el[1]}.00</StyledSummaryValue>
              </StyledSummaryRow>
            );
          }
        })}
      </StyledSummaryTable>
    )
  );
};
