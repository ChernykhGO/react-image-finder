// Список карточек изображений. Создает DOM-элемент следующей структуры.
// ```html
// <ul className="ImageGallery">
//   <!-- Набор <li> с изображениями -->
// </ul>
// ```;

import ImageGalleryItem from "../ImageGalleryItem/ImageGalleryItem";
import s from "./ImageGallery.module.css";

export default function ImageGallery({ images, onClick }) {
  // console.log(images)
  return (
    <ul className={s.imageGallery}>
      {images.map(({ id, webformatURL, tags, largeImageURL }) => (
        <ImageGalleryItem
          key={id}
          webformatURL={webformatURL}
          largeImageURL={largeImageURL}
          tags={tags}
          onClick={onClick}
        />
      ))}
    </ul>
  );
}
