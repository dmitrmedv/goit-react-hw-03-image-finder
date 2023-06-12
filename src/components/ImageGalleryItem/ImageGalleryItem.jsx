import css from './ImageGalleryItem.module.css';

export default function ImageGalleryItem({ data: { webformatURL } }) {
  return (
    <li className={css.ImageGalleryItem}>
      <img src={webformatURL} alt="" className={css.ImageGalleryItemImage} />
    </li>
  );
}
