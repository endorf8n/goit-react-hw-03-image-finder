import { ButtonMore } from './button.styled';

export const Button = ({ onBtnMoreClick }) => {
  return (
    <ButtonMore type="button" onClick={onBtnMoreClick}>
      Load more
    </ButtonMore>
  );
};
