import css from './ImageGallery.module.css';
import { ImageGalleryItem } from 'components/ImageGalleryItem/ImageGalleryItem';

export const ImageGallery = ({ data }) => {
  return (
    <ul className={css.gallery}>
      <ImageGalleryItem data={data} />
    </ul>
  );
};
