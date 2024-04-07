import { Helmet, HelmetProvider } from 'react-helmet-async';
import { ButtonMainPage } from './ButtonMainPage/ButtonMainPage';
import { NotFoundContainer, Image, Text } from './NotFoundPage.styled';
import { CabbagesBottom } from '../../components/Background/Authorized/CabbagesBottom';
import ImageComponent from './Image';
import errorImage from './moneylost.jpg';

const NotFound = () => {
  return (
    <HelmetProvider>
      <Helmet>
        <title>Page Error</title>
      </Helmet>
      <ButtonMainPage />
      <NotFoundContainer>
        <Image>
          <Text>Sorry, page not found !</Text>
          <ImageComponent src={errorImage} alt="Error 404" />
        </Image>
      </NotFoundContainer>

      <CabbagesBottom />
    </HelmetProvider>
  );
};

export default NotFound;
