// При клике по элементу галереи должно открываться модальное окно с темным
// оверлеем и отображаться большая версия изображения. Модальное окно должно
// закрываться по нажатию клавиши `ESC` или по клику на оверлее.

// Внешний вид похож на функционал этого
// [VanillaJS-плагина](https://basiclightbox.electerious.com/), только вместо
// белого модального окна рендерится изображение (в примере нажми `Run`). Анимацию
// делать не нужно!

// ```html
// <div className="Overlay">
//   <div className="Modal">
//     <img src="" alt="" />
//   </div>
// </div>
// ```

import s from "./Modal.module.css";

export default function Modal({ largeImageURL, tags, onClick }) {
  return (
    <div className={s.Overlay} onClick={onClick}>
      <div className={s.Modal}>
        <img src={largeImageURL} alt={tags} />
      </div>
    </div>
  );
}
