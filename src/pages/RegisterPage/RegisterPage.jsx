import { RegistrationForm } from '../../components/RegistrationForm/RegistrationForm';
import { CabbagesTop } from '../../components/Background/Unauthorized/CabbagesTop/CabbagesTop';
import { Helmet, HelmetProvider } from 'react-helmet-async';
import { CabbagesBottom } from '../../components/Background/Unauthorized/CabbagesBottom/CabbagesBottom';
import { MainLogo } from '../../components/MainLogo/MainLogo';
import { useScreenSize } from '../../hooks/useScreenSize';

const Register = () => {
  const { mobileScreen, tabletScreen, desktopScreen } = useScreenSize();

  return (
    <HelmetProvider>
      <div>
        <Helmet>
          <title>Registration</title>
        </Helmet>
        <CabbagesTop />
        <MainLogo />
        <RegistrationForm
          screensize={{ mobileScreen, tabletScreen, desktopScreen }}
        />
        <CabbagesBottom />
      </div>
    </HelmetProvider>
  );
};
export default Register;
