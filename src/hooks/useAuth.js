import { useSelector } from 'react-redux';
import {
  selectUserName,
  selectIsLoggedIn,
  selectUserEmail,
  selectIsRefreshing,
  selectIncomeSummary,
  selectExpensesSummary,
} from 'redux/Auth/selectors';

export const useAuth = () => {
  const isLoggedIn = useSelector(selectIsLoggedIn);
  const isRefreshing = useSelector(selectIsRefreshing);
  const userEmail = useSelector(selectUserEmail);
  const user = useSelector(selectUserName);
  const incomeSummary = useSelector(selectIncomeSummary);
  const expensesSummary = useSelector(selectExpensesSummary);

  return {
    isLoggedIn,
    isRefreshing,
    user,
    userEmail,
    incomeSummary,
    expensesSummary,
  };
};
