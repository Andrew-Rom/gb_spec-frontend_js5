// Создайте интерактивную веб-страницу для оставления и просмотра отзывов о продуктах.
// Пользователи могут добавлять отзывы о различных продуктах и просматривать добавленные отзывы.

// Страница добавления отзыва:
//      Поле для ввода названия продукта.
//      Текстовое поле для самого отзыва.
//      Кнопка "Добавить отзыв", которая сохраняет отзыв о продукте в LocalStorage.

const feedbackTitleEl = document.getElementById("feedback_title");
const feedbackTextEl = document.getElementById("feedback_text");
let btnCreateReview = document.querySelector(".feedback_button");
let btnShowReviews = document.querySelector(".read_button");

let reviewsList = [];

document.addEventListener("DOMContentLoaded", reviewsLoad);

function reviewsLoad() {
  if (localStorage.getItem("reviews") !== null) {
    reviewsList = JSON.parse(localStorage.getItem("reviews"));
  }
}

function reviewsSave() {
  try {
    if (feedbackTitleEl.value.length === 0) {
      feedbackTitleEl.classList.add("feedback_text__invalid");
      throw new Error("Ошибка: поле ввода не заполнено.");
    }
    if (feedbackTextEl.value.length === 0) {
      feedbackTextEl.classList.add("feedback_text__invalid");
      throw new Error("Ошибка: поле ввода не заполнено.");
    }
    let existProductIndex = reviewsList.findIndex(
      (review) => review.product === feedbackTitleEl.value
    );
    if (existProductIndex >= 0) {
      reviewsList[existProductIndex].reviews.push({
        text: feedbackTextEl.value,
      });
    } else {
      const newProductReview = {
        product: feedbackTitleEl.value,
        reviews: [
          {
            text: feedbackTextEl.value,
          },
        ],
      };
      reviewsList.push(newProductReview);
    }
    feedbackTitleEl.value = null;
    feedbackTextEl.value = null;
    alert("Ваш отзыв опубликован");
    localStorage.setItem("reviews", JSON.stringify(reviewsList));
  } catch (error) {
    alert(error.message);
    console.log(error.message);
  }
}

btnCreateReview.addEventListener("click", reviewsSave);

feedbackTitleEl.addEventListener("focus", function () {
  if (feedbackTitleEl.classList.contains("feedback_text__invalid")) {
      feedbackTitleEl.classList.remove("feedback_text__invalid");
  }
});

feedbackTextEl.addEventListener("focus", function () {
  if (feedbackTextEl.classList.contains("feedback_text__invalid")) {
      feedbackTextEl.classList.remove("feedback_text__invalid");
  }
});

btnShowReviews.addEventListener("click", function () {
    window.location.href = "reviews.html";
    constract();
});
