import { Modal } from 'components/Modal/Modal';
import { Component } from 'react';
import { GalleryImage, GalleryItem } from './imageGalleryItem.styled';

export class ImageGalleryItem extends Component {
  state = {
    showModal: false,
  };
  toggleModal = () => {
    this.setState(prevState => ({
      showModal: !prevState.showModal,
    }));
  };

  render() {
    const { webformatURL, tags, largeImageURL } = this.props;
    const { showModal } = this.state;

    return (
      <GalleryItem>
        <GalleryImage
          src={webformatURL}
          alt={tags}
          onClick={this.toggleModal}
        />
        {showModal ? (
          <Modal onClose={this.toggleModal} src={largeImageURL} />
        ) : null}
      </GalleryItem>
    );
  }
}
