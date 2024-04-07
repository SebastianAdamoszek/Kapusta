import {
  HomeContainer,
  TextGroup,
} from './MainLogo.styled';

import Icon from 'images/sprite.svg';

export const MainLogo = () => {
return (
    <>
      <HomeContainer>
          <TextGroup>
            <svg alt="icon-kapusta">
              <use href={`${Icon}#icon-kapusta`}></use>
            </svg>
            <p>Smart Finance</p>
          </TextGroup>
      </HomeContainer>
    
    </>
  );
};

