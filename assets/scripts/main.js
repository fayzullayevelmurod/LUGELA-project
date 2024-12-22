
// burger
let media_menu = document.querySelector('.media_menu');
let burger_btn = document.querySelector('.burger_btn');

burger_btn.addEventListener('click', () => {
  media_menu.classList.toggle('active');
})
// burger


let swiper = new Swiper(".commentSwiper", {
  slidesPerView: 1,
  spaceBetween: 28,
  centeredSlides: true,
  loop: true,
  navigation: {
    nextEl: ".comment-button-next",
    prevEl: ".comment-button-prev",
  },
  pagination: {
    el: ".comment-pagination",
    clickable: true,
  },
  breakpoints: {
    1200: {
      slidesPerView: 1.9,
      spaceBetween: 20,
    },
  },
});


document.addEventListener("DOMContentLoaded", () => {
  const accordionItems = document.querySelectorAll(".accordion-item");

  accordionItems.forEach((item) => {
    const header = item.querySelector(".accordion-header");

    header.addEventListener("click", () => {
      // Faqat bitta accordionni ochish uchun
      accordionItems.forEach((i) => {
        if (i !== item) {
          i.classList.remove("active");
        }
      });

      // Aktiv accordionni o‘zgartirish
      item.classList.toggle("active");
    });
  });
});

// Calculation
const calculations = document.querySelectorAll('.calculation');

if (calculations.length) {
  calculations.forEach(el => {
    const minus = el.querySelector('.minus');
    const plus = el.querySelector('.plus');
    const text = el.querySelector('span');

    plus.onclick = () => {
      text.textContent = +text.textContent + 1;
    }

    minus.onclick = () => {
      if (+text.textContent != 1) {
        text.textContent = +text.textContent - 1;
      }
    }
  })
}
// Calculation end

let certificates_img = document.querySelectorAll('.certificates_block_img');
if (certificates_img.length) {
  certificates_img.forEach((el, elID) => {
    let img = el.querySelector('img');
    el.onclick = e => {
      e.preventDefault();
      let src = [];
      certificates_img.forEach(item => {
        src.push({
          'src': item.querySelector('img').getAttribute('src'),
          'thumb': item.querySelector('img').getAttribute('src'),
          'subHtml': '',
        });
      })
      if (document.querySelector('#lightgallery')) {
        document.querySelector('#lightgallery').remove();
      }
      const galleryContainer = document.createElement('div');
      galleryContainer.id = 'lightgallery';
      document.body.appendChild(galleryContainer);
      lightGallery(galleryContainer, {
        'data-size': '1600x1200',
        dynamic: true,
        dynamicEl: src,
        index: elID,
        thumbnail: true,
        zoomFromOrigin: false,
        appendSubHtmlTo: '.lg-item',
        getCaptionFromTitleOrAlt: false,
        preload: 2, 
      });
    }
  })
}