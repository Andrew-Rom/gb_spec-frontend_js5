// Вы разрабатываете онлайн-магазин по заказу индивидуальных мебельных комплектов. Посетители сайта могут выбирать разные элементы мебели, цвета и материалы для своего гарнитура. После того как пользователь собрал свой комплект и сохраняет свой выбор, информация о нем сохраняется в куки. При следующем посещении сайта их индивидуальные настройки автоматически загружаются, и они видят ранее созданный мебельный комплект.

// 1. Создайте базовую HTML-структуру с различными элементами мебели (например, стол, стул, диван) и возможными параметрами для них (цвет, материал, дизайн).
// 2. Пользователи могут выбирать разные элементы и параметры, чтобы составить свой мебельный гарнитур.
// 3. После выбора всех желаемых параметров предоставьте кнопку "Сохранить комплект", которая сохраняет текущий выбор пользователя в куки.
// 4. При следующем посещении сайта автоматически загрузите сохраненные параметры из куки и отобразите ранее созданный комплект.
// 5. Убедитесь, что у пользователей есть возможность очистить сохраненные настройки (очистить куки).

document.addEventListener("DOMContentLoaded", loaded);

const saveBtn = document.querySelector("#save-btn");
const loadBtn = document.querySelector("#load-btn");
const clearBtn = document.querySelector("#clear-btn");

let tableSelectEl = document.querySelector("#table-color");
let chairSelectEl = document.querySelector("#chair-material");

saveBtn.addEventListener("click", saved);
loadBtn.addEventListener("click", loaded);
clearBtn.addEventListener("click", cleared);

function saved() {
    Cookies.set("table", tableSelectEl.value);
    Cookies.set("chair", chairSelectEl.value);
    alert("Конфигурация сохранена");
}

function loaded() {
    if (!Cookies.get("table")) {
        return alert("Конфигурация отсутствует")
    }
    tableSelectEl.value = Cookies.get("table");
    chairSelectEl.value = Cookies.get("chair");
    alert("Конфигурация загружена")
}

function cleared() {
    Cookies.remove("table");
    Cookies.remove("chair");
    alert("Конфигурация удалена");
}