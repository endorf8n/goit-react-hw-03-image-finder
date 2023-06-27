export const ImageGalleryItem = ({ webformatURL, tags, largeImageURL }) => {
  return (
    <li className="gallery-item">
      <img src={webformatURL} alt={tags} />
    </li>
  );
};
