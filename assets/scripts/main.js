
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
