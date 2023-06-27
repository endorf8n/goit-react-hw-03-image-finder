import { ImageGalleryItem } from 'components/ImageGalleryItem/ImageGalleryItem';
import { GalleryList } from './imageGallery.styled';

export const ImageGallery = ({ images }) => {
  return (
    <GalleryList>
      {images.map(image => (
        <ImageGalleryItem {...image} key={image.id} />
      ))}
    </GalleryList>
  );
};
