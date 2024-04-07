import styled from 'styled-components';

export const NotFoundContainer = styled.div`
  display: flex;
  flex-direction: column;
  row-gap: 40px;
  text-align: center;
  margin-top: 100px;
  color: red;
  position: relative;
  padding: 0 40px;

  @media screen and (min-width: 768px) {
    margin-top: 140px;
  }
`;

export const Text = styled.p`
  position: absolute;
  z-index: 1;
  bottom: 0;
  font-size: 20px;
  color: red;
  animation: flicker 1.5s infinite alternate;

  @keyframes flicker {
    0%,
    18%,
    22%,
    25%,
    53%,
    57%,
    100% {
      text-shadow: 0 0 4px #fff, 0 0 11px #fff, 0 0 19px #fff, 0 0 40px #0fa,
        0 0 80px #0fa, 0 0 90px #0fa, 0 0 100px #0fa, 0 0 150px #0fa;
    }

    20%,
    24%,
    55% {
      text-shadow: none;
    }
  }

  @media screen and (min-width: 768px) {
    font-size: 45px;
  }
`;
export const Image = styled.div`
  display: flex;
  justify-content: center;

  img {
    max-width: 100%;
    max-height: 100%;
    border-radius: 10px;
    box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
  }
`;
