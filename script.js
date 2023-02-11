/////// BURGER ////////

let burger = document.querySelector(".burger");
let menu = document.querySelector(".header__nav");
let menuLinks = menu.querySelectorAll(".nav__link");

burger.addEventListener("click", function () {
  burger.classList.toggle("burger--active");

  menu.classList.toggle("header__nav--active");

  document.body.classList.toggle("stop-scroll");
});

menuLinks.forEach(function (el) {
  el.addEventListener("click", function () {
    burger.classList.remove("burger--active");
    menu.classList.remove("header__nav--active");
    document.body.classList.remove("stop-scroll");
  });
});

//////// FORM SEARCH OPEN //////////

document.querySelector(".header__btn").addEventListener("click", function () {
  document.querySelector(".header__form").classList.add("form__active");
  this.classList.add("active");
});
document.querySelector(".form-close").addEventListener("click", function () {
  let form = document.querySelector(".header__form");
  form.classList.remove("form__active");
  form.querySelector("input").value = "";
  document.querySelector(".header__btn").classList.remove("active");
});

document.addEventListener("click", function (e) {
  let target = e.target;
  let form = document.querySelector(".header__form");
  if (!target.closest(".form-container")) {
    form.classList.remove("form__active");
    form.querySelector("input").value = "";
    document.querySelector(".header__form").classList.remove("active");
  }
});

/////// SWIPER ////////

const container = document.querySelector(".hero__container");
const swiper = new Swiper(".hero__swiper", {
  // Default parameters

  speed: 300,
  pagination: {
    el: ".swiper__pagination",
    type: "bullets",
    clickable: true,
  },
});

/////// TAB ////////

document.querySelectorAll(".tabs-nav__btn").forEach(function (tabsBtn) {
  tabsBtn.addEventListener("click", function (e) {
    const path = e.currentTarget.dataset.path;

    document.querySelectorAll(".tabs-nav__btn").forEach(function (btn) {
      btn.classList.remove("tabs-nav__btn--active");
    });
    e.currentTarget.classList.add("tabs-nav__btn--active");

    document.querySelectorAll(".tabs-item").forEach(function (tabsBtn) {
      tabsBtn.classList.remove("tabs-item--active");
    });

    document
      .querySelector(`[data-target="${path}"]`)
      .classList.add("tabs-item--active");
  });
});

/////// ACCORDION ////////

document.addEventListener("DOMContentLoaded", function () {
  let acc = new Accordion(".faq__items", {
    duration: 700,
    elementClass: "faq__item",
    triggerClass: "faq__top",
    panelClass: "faq__bottom",
    showMultiple: false,

    collapse: true,
  });
});
