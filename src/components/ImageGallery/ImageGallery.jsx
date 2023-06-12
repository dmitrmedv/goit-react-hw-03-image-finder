import css from './ImageGallery.module.css';
import ImageGalleryItem from 'components/ImageGalleryItem/';

export default function ImageGallery({ data }) {
  return (
    <ul className={css.ImageGallery}>
      {console.log(data)}
      {data.map(item => {
        console.log(item);
        return <ImageGalleryItem key={item.id} data={item} />;
      })}
    </ul>
  );
}
