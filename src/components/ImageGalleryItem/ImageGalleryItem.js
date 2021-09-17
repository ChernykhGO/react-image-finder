// Компонент элемента списка с изображением. Создает DOM-элемент следующей
// структуры.
// ```html
// <li className="ImageGalleryItem">
//   <img src="" alt="" className="ImageGalleryItem-image" />
// </li>
// ```;
import s from "./ImageGalleryItem.module.css";
import PropTypes from "prop-types";

export default function ImageGalleryItem({
  id,
  webformatURL,
  tags,
  largeImageURL,
  onClick,
}) {
  return (
    <li
      key={id}
      className={s.ImageGalleryItem}
      onClick={() => onClick(largeImageURL)}
    >
      <img src={webformatURL} alt={tags} className={s.ImageGalleryItem_image} />
    </li>
  );
}

ImageGalleryItem.propTypes = {
  ondeleteContact: PropTypes.func,
  contacts: PropTypes.array,
};
