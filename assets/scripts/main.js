
let swiper = new Swiper(".treatmentsSwiper", {
  slidesPerView: 1.10,
  spaceBetween: 28,
  pagination: {
    el: ".swiper-pagination",
    clickable: true,
  },
  breakpoints: {
    640: {
      slidesPerView: 2.2,
      spaceBetween: 28,
    },
    993: {
      slidesPerView: 3.2,
      spaceBetween: 28,
    },
    1200: {
      slidesPerView: 3.6,
      spaceBetween: 40,
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
