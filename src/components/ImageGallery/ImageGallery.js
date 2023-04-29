import { ImageGalleryItem } from 'components/ImageGalleryItem/ImageGalleryItem';

export const ImageGallery = ({ values }) => {
  return (
    <ul className="GalleryList">
      {values.map(value => (
        <ImageGalleryItem
          key={value.id}
          previewURL={value.webformatURL}
          photoURL={value.largeImageURL}
          alt={value.tags}
        ></ImageGalleryItem>
      ))}
    </ul>
  );
};
