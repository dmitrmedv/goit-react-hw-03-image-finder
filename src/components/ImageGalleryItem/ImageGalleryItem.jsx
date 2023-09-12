import css from './ImageGalleryItem.module.css';

export const ImageGalleryItem = ({ data }) => {
  return data.map(({ id, webformatURL, tags }) => {
    return (
      <li className={css.galleryItem} key={id}>
        <img src={webformatURL} alt={tags} />
      </li>
    );
  });
};
