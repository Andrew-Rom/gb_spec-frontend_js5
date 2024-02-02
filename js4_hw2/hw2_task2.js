// Задание 2

// Вы разрабатываете систему отзывов для вашего веб-сайта. Пользователи могут оставлять отзывы, но чтобы исключить слишком короткие или слишком длинные сообщения, вы решаете установить некоторые ограничения.

// Создайте HTML-структуру с текстовым полем для ввода отзыва, кнопкой для отправки и контейнером, где будут отображаться отзывы.

// Напишите функцию, которая будет добавлять отзыв в контейнер с отзывами. Однако если длина введенного отзыва менее 50 или более 500 символов, функция должна генерировать исключение.

// При добавлении отзыва, он должен отображаться на странице под предыдущими отзывами, а не заменять их.

const initialData = [
  {
    product: "Apple iPhone 13",
    reviews: [
      {
        id: "1",
        text: "Отличный телефон! Батарея держится долго.",
      },
      {
        id: "2",
        text: "Камера супер, фото выглядят просто потрясающе.",
      },
    ],
  },
  {
    product: "Samsung Galaxy Z Fold 3",
    reviews: [
      {
        id: "3",
        text: "Интересный дизайн, но дорогой.",
      },
    ],
  },
  {
    product: "Sony PlayStation 5",
    reviews: [
      {
        id: "4",
        text: "Люблю играть на PS5, графика на высоте.",
      },
    ],
  },
];

const minFeedbackLength = 50;
const maxFeedbackLength = 500;

const reviewsEl = document.querySelector(".reviews");
const feedbackTitleEl = document.getElementById("feedback_title");
const feedbackTextEl = document.getElementById("feedback_text");
const buttonEl = document.querySelector(".feedback_button");

initialData.forEach((product) => {
  product.reviews.forEach((review) => {
    let feedback = document.createElement("div");
    const reviewTitle = document.createElement("h4");
    reviewTitle.innerHTML = product.product;
    const reviewText = document.createElement("p");
    reviewText.innerHTML = review.text;
    feedback.appendChild(reviewTitle);
    feedback.appendChild(reviewText);
    reviewsEl.appendChild(feedback);
  });
});

buttonEl.addEventListener("click", function () {
    try {
        if (feedbackTextEl.value.length < minFeedbackLength) {
            throw new Error("Ошибка: введенный текст слишком короткий.");
        }
        if (feedbackTextEl.value.length > maxFeedbackLength) {
            throw new Error("Ошибка: введенный текст слишком длинный.")
        }
        let feedback = document.createElement("div");
        const reviewTitle = document.createElement("h4");
        reviewTitle.innerHTML = feedbackTitleEl.value;
        const reviewText = document.createElement("p");
        reviewText.innerHTML = feedbackTextEl.value;
        feedback.appendChild(reviewTitle);
        feedback.appendChild(reviewText);
        reviewsEl.appendChild(feedback)
        feedbackTitleEl.value = null;
        feedbackTextEl.value = null;
    } catch (error) {
        feedbackTextEl.classList.add("feedback_text__invalid");
        feedbackTextEl.value = error.message;
        console.log(error.message)
    }
});

feedbackTextEl.addEventListener("focus", function () {
    feedbackTextEl.value = null;
    if (feedbackTextEl.classList.contains("feedback_text__invalid")) {
        feedbackTextEl.classList.remove("feedback_text__invalid");
    }
});
