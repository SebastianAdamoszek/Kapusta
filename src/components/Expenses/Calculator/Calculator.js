import calculator from './calculator.svg';
import {
  MobileNumber,
  InputMobile,
  Span,
  Number,
  InputNumber,
  Image,
} from './Calculator.styled';
import { useScreenSize } from 'hooks/useScreenSize';

export default function AmountInput() {
  const { mobileScreen } = useScreenSize();

  return (
    <>
      {mobileScreen ? (
        <MobileNumber>
          <InputMobile type="number" placeholder="00.00 USD" name="sum" />
          <Span>
            <img src={calculator} alt="calculator" />
          </Span>
        </MobileNumber>
      ) : (
        <Number>
          <InputNumber type="number" placeholder="0,00" name="sum" />
          <Image src={calculator} alt="calculator" />
        </Number>
      )}
    </>
  );
}
