import { Suspense } from 'react';
import { Outlet } from 'react-router-dom';
import {
  Container,
  Header,
  Link,
  LogoContainer,
  LogoSVG,
  Nav,
} from './Layout.styled';
import { Loader } from 'components/Loader/Loader';
import logoKapusta from '../../icons/logoKapusta.svg';
import { useSelector } from 'react-redux';
import { selectIsLoggedIn } from '../../redux/selectors';
import { UserMenu } from 'components/UserMenu/UserMenu';

const Layout = () => {
  const isLoggedIn = useSelector(selectIsLoggedIn);

  const AuthorizedNav = () => {
    return (
      <Nav>
        <LogoContainer>
          <Link to="/" end>
            <LogoSVG>
              <image href={logoKapusta} />
            </LogoSVG>
          </Link>
        </LogoContainer>
        <UserMenu />
      </Nav>
    );
  };
  const UnauthorizedNav = () => {
    return (
      <Nav>
        <LogoContainer>
          <Link to="/" end>
            <LogoSVG>
              <image href={logoKapusta} />
            </LogoSVG>
          </Link>
        </LogoContainer>
      </Nav>
    );
  };
  return (
    <Container>
      <Header>{isLoggedIn ? <AuthorizedNav /> : <UnauthorizedNav />}</Header>
      <Suspense fallback={<Loader />}>
        <Outlet />
      </Suspense>
    </Container>
  );
};
export default Layout;
