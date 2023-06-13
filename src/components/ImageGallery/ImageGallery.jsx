import css from './ImageGallery.module.css';
import ImageGalleryItem from 'components/ImageGalleryItem/';

export default function ImageGallery({ data }) {
  return (
    <ul className={css.ImageGallery}>
      {data.map(item => {
        return <ImageGalleryItem key={item.id} data={item} />;
      })}
    </ul>
  );
}
