import { Route, Routes, Navigate } from 'react-router-dom';
import { lazy, useEffect } from 'react';
import { currentUser } from '../redux/Auth/operations';
import Layout from './Layout/Layout';
import { useDispatch, useSelector } from 'react-redux';
import { Loader } from './Loader/Loader';
import { selectIsRefreshing } from '../redux/selectors';
import { RestrictedRoute } from './RestrictedRoute';
import { PrivateRoute } from './PrivateRoute';

// const HomePage = lazy(() => import('../pages/HomePage/HomePage'));
const RegisterPage = lazy(() => import('../pages/RegisterPage/RegisterPage'));
const LoginPage = lazy(() => import('../pages/LoginPage/LoginPage'));
const ExpensesPage = lazy(() => import('../pages/ExpensesPage/ExpensesPage'));
const IncomePage = lazy(() => import('../pages/IncomePage/IncomePage'));
const ReportsPage = lazy(() => import('../pages/ReportsPage/ReportsPage'));
const NotFoundPage = lazy(() => import('../pages/NotFoundPage/NotFoundPage'));

const App = () => {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(currentUser());
  }, [dispatch]);

  const isRefreshing = useSelector(selectIsRefreshing);

  if (isRefreshing) {
    return <Loader />;
  }

  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route index element={<Navigate to="/login" />} />
        <Route
          path="/register"
          element={<RestrictedRoute component={RegisterPage} />}
        />
        <Route
          path="/login"
          element={<RestrictedRoute component={LoginPage} />}
        />
        <Route
          path="/expenses"
          element={<PrivateRoute component={ExpensesPage} />}
        />
        <Route
          path="/income"
          element={<PrivateRoute component={IncomePage} />}
        />
        <Route
          path="/reports"
          element={<PrivateRoute component={ReportsPage} />}
        />
        <Route path="*" element={<NotFoundPage />} />
      </Route>
    </Routes>
  );
};

export default App;
