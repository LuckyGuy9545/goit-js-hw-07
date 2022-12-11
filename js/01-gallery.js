import { galleryItems } from './gallery-items.js';
// Change code below this line
console.log(galleryItems);

//==Створити розмітку з цих елементів обєкту
//==? шаблонна строка?
//-- preview, original, description
const galleryRef = document.querySelector('.gallery');
const galleryList = createGalleryItems(galleryItems);

//==добавляем разметку в галерею
galleryRef.insertAdjacentHTML('beforeend', galleryList);

function createGalleryItems(items) {
    return items
        .map(({ preview, original, description }) => {
            return `
              <div class="gallery__item">
            <a class="gallery__link" href="large-image.jpg">
               <img
                  class="gallery__image"
                  src="${preview}
                  "data-source="${original}"
                  alt="${description}"
               />
            </a>
         </div>`
        })
        .join('');
}


//== а теперь слушатель
//== делегирование на контейнер div gallery и получение url original 
galleryRef.addEventListener('click', onPictureClick);

function onPictureClick(event) {
    event.preventDefault();
    if (event.target.nodeName !== 'IMG') {
        return
    }

    const UrlToOriginalImg = event.target.dataset.source
    console.log(UrlToOriginalImg)
    //== добавление модалки
const selectedImg = event.target.getAttribute('data-source');
const instance = basicLightbox.create(`
    <img src="${selectedImg}" width="1200" height="800">
`)

    instance.show();

    //== закрытие нажатием Esc
galleryRef.addEventListener('keydown', onEscClose);
function onEscClose(evt) {
    const EscKeyCode = 'Escape';
    if (evt.code === EscKeyCode) {
        instance.close();
        window.removeEventListener('keydown', onEscClose)
    }    
}
}






