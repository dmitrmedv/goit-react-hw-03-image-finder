import ImageGalleryItem from 'components/ImageGalleryItem/';

export default function ImageGallery({ data }) {
  return (
    <ul class="gallery">
      {data.map(item => {
        return <ImageGalleryItem data={item} />;
      })}
    </ul>
  );
}
