import { Component } from 'react';
import { ModalStyled, Overlay } from './modal.styled';

export class Modal extends Component {
  componentDidMount() {
    document.addEventListener('keydown', this.handleKeyDown);
  }
  componentWillUnmount() {
    document.removeEventListener('keydown', this.handleKeyDown);
  }

  handleKeyDown = e => {
    if (e.code === 'Escape') {
      this.props.onClose();
    }
  };

  handleOverlayClick = e => {
    if (e.target === e.currentTarget) {
      this.props.onClose();
    }
  };

  render() {
    const { src } = this.props;

    return (
      <Overlay onClick={this.handleOverlayClick}>
        <ModalStyled>
          <img src={src} alt="Big" />
        </ModalStyled>
      </Overlay>
    );
  }
}
