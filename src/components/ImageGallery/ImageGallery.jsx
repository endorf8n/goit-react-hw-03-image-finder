import { ImageGalleryItem } from 'components/ImageGalleryItem/ImageGalleryItem';

export const ImageGallery = ({ images }) => {
  return (
    <ul className="gallery">
      {images.map(image => (
        <ImageGalleryItem {...image} key={image.id} />
      ))}
    </ul>
  );
};
