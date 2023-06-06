export default function ImageGalleryItem({ url, name }) {
  return (
    <li class="gallery-item">
      <img src={url} alt={name} />
    </li>
  );
}
