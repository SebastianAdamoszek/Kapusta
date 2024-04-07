import { Navigate } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { selectIsLoggedIn } from '../redux/selectors';

export const PrivateRoute = ({ component: Component }) => {
  const isLoggedIn = useSelector(selectIsLoggedIn);

  // Jeśli użytkownik jest zalogowany, zezwól na dostęp do komponentu, w przeciwnym razie przekieruj go do /login
  return isLoggedIn ? <Component /> : <Navigate to="/login" />;
};
