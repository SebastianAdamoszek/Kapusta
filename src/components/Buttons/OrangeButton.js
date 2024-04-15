import PropTypes from 'prop-types';
import { StyledOrangeButton } from './Buttons.styled';

// pokazanie buttonów w oknie modalnym
export const OrangeButton = ({
  children,
  dispatch,
  closeModal,
  changeBalance,
}) => {
  const handleClick = () => {
    // czy chcesz sie wylogować?
    if (children === 'YES') {
      dispatch();
      closeModal();
    }
    // czy chcesz zrobić update balance?
    if (changeBalance) {
      dispatch();
      closeModal();
    }
  };

  return (
    <StyledOrangeButton onClick={handleClick}>{children}</StyledOrangeButton>
  );
};

OrangeButton.propTypes = {
  children: PropTypes.string.isRequired,
  dispatch: PropTypes.func,
  closeModal: PropTypes.func,
  changeBalance: PropTypes.func,
};
