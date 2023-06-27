import PropTypes from 'prop-types';
import { ButtonMore } from './button.styled';

export const Button = ({ onBtnMoreClick }) => {
  return (
    <ButtonMore type="button" onClick={onBtnMoreClick}>
      Load more
    </ButtonMore>
  );
};

Button.propTypes = {
  onBtnMoreClick: PropTypes.func.isRequired,
};
