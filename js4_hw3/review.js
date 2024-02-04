// Страница просмотра отзывов:
//      Показывает список всех продуктов, о которых были оставлены отзывы.
//      При клике на название продукта отображается список всех отзывов по этому продукту.
//      Возможность удаления отзыва (при нажатии на кнопку "Удалить" рядом с отзывом, данный отзыв удаляется из LocalStorage).

let reviewBox = document.querySelector(".review_box");

let reviewsList = [];

function showAllReviews() {
  reviewsList.forEach((item) => {
    let productContainer = document.createElement("details");
    productContainer.className = "product_container";

    let productTitle = document.createElement("summary");
    productTitle.className = "product_title";
    productTitle.innerHTML = item.product;
    productContainer.appendChild(productTitle);

    item.reviews.forEach((review) => {
      let reviewContainer = document.createElement("div");
      reviewContainer.className = "review_container";
      reviewContainer.insertAdjacentHTML(
        "beforeend",
        `
        <p class="review_text">${review.text}</p>
        <button class="review_btn">Удалить отзыв</button>
        `
      );
      productContainer.appendChild(reviewContainer);
    });
    reviewBox.appendChild(productContainer);
  });
}

if (
  localStorage.getItem("reviews") === null ||
  JSON.parse(localStorage.getItem("reviews")).length === 0
) {
  alert("Опубликованных отзывов нет");
} else {
  reviewsList = JSON.parse(localStorage.getItem("reviews"));
  showAllReviews();
  modifyReviews();
}

function modifyReviews() {
  let delButtons = document.querySelectorAll(".review_btn");
  delButtons.forEach((btn) => {
    btn.addEventListener("click", (e) => {
      if (
        e.target.parentElement.previousSibling.innerText !== null &&
        e.target.previousSibling.previousSibling.innerText !== null
      ) {
        const delIndexProduct = reviewsList.findIndex(
          (review) =>
            review.product === e.target.parentElement.previousSibling.innerText
        );

        const delIndexText = reviewsList[delIndexProduct].reviews.findIndex(
          (txt) =>
            txt.text === e.target.previousSibling.previousSibling.innerText
        );

        reviewsList[delIndexProduct].reviews.splice(delIndexText, 1);

        if (reviewsList[delIndexProduct].reviews.length === 0) {
          reviewsList.splice(delIndexProduct, 1);
          e.target.parentElement.parentElement.remove();
        } else {
          e.target.parentElement.remove();
        }

        localStorage.setItem("reviews", JSON.stringify(reviewsList));
      }
    });
  });
}
