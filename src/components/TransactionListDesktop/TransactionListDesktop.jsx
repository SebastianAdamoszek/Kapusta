import { useDispatch, useSelector } from 'react-redux';
import PropTypes from 'prop-types';
import { selectIsLoading } from '../../redux/selectors';
import { deleteTransaction } from '../../redux/Transactions/operations';
import { ReactComponent as DeleteIcon } from './deleteIcon.svg';
import { StyledTransactionTable } from './TransactionListDesktop.styled';
import { useScreenSize } from 'hooks/useScreenSize';

export const TransactionListDesktop = ({ children }) => {
  const dispatch = useDispatch();

  const isLoading = useSelector(selectIsLoading);
  const { mobileScreen } = useScreenSize();

  // Green if INCOME and red if EXPENSES
  const color = children[1];
  let minus = '-';

  if (color === 'green') {
    minus = false;
  }

  const handleDelete = event => {
    dispatch(deleteTransaction(event.currentTarget.id));
    window.location.reload();
  };

  const sortedTransactions = children[0].slice().sort((a, b) => {
    const first = new Date(a.date).getTime();
    const second = new Date(b.date).getTime();
    if (first - second === 0) {
      return first;
    }
    return second - first;
  });

  const headers = ['DATE', 'DESCRIPTION', 'CATEGORY', 'SUM', ''];

  function capitalizeFirstLetter(string) {
    return string.charAt(0).toUpperCase() + string.slice(1);
  }

  return (
    !isLoading && (
      <StyledTransactionTable className="container">
        <thead>
          <tr>
            {!mobileScreen &&
              headers.map(header => (
                <th key={header}>{header.toUpperCase()}</th>
              ))}
          </tr>
          <tr></tr>
        </thead>

        <tbody>
          {sortedTransactions.slice(0, 20).map(el => {
            const { _id, description, amount, date, category } = el;
            return (
              <tr key={_id} style={{ height: 40 }}>
                <td>{date.split('-').reverse().join('.')}</td>
                <td>{capitalizeFirstLetter(description)}</td>
                <td>{category}</td>
                <td style={{ color }}>
                  {minus} {amount}.00 USD
                </td>
                <td>
                  <span
                    id={_id}
                    onClick={handleDelete}
                    style={{ cursor: 'pointer' }}
                  >
                    <DeleteIcon className="delete-icon" />
                  </span>
                </td>
              </tr>
            );
          })}
        </tbody>
      </StyledTransactionTable>
    )
  );
};

TransactionListDesktop.propTypes = {
  children: PropTypes.array.isRequired,
};
