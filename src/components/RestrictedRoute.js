import { Navigate } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { selectIsLoggedIn } from '../redux/selectors';

export const RestrictedRoute = ({ component: Component }) => {
  const isLoggedIn = useSelector(selectIsLoggedIn);

  // Jeśli użytkownik jest zalogowany, przekieruj go do /expenses, w przeciwnym razie zezwól na dostęp do komponentu (w tym przypadku login)
  return isLoggedIn ? <Navigate to="/expenses" /> : <Component />;
};
