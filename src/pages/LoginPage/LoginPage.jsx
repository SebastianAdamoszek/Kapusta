import { LoginForm } from '../../components/LoginForm/LoginForm';
import { CabbagesTop } from '../../components/Background/Unauthorized/CabbagesTop/CabbagesTop';
import { Helmet, HelmetProvider } from 'react-helmet-async';
import { CabbagesBottom } from '../../components/Background/Unauthorized/CabbagesBottom/CabbagesBottom';
import { MainLogo } from '../../components/MainLogo/MainLogo';
import { useScreenSize } from '../../hooks/useScreenSize';

const Login = () => {
  const { mobileScreen, tabletScreen, desktopScreen } = useScreenSize();

  return (
    <HelmetProvider>
      <div>
        <Helmet>
          <title>Login</title>
        </Helmet>

        <CabbagesTop />
        <MainLogo />
        <LoginForm screensize={{ mobileScreen, tabletScreen, desktopScreen }} />
        <CabbagesBottom />
      </div>
    </HelmetProvider>
  );
};

export default Login;
