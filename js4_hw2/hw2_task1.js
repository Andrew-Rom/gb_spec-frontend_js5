// Задание 1

// Представьте, что у вас есть класс для управления библиотекой. В этом классе будет приватное свойство для хранения списка книг, а также методы для добавления книги, удаления книги и получения информации о наличии книги.

// Класс должен содержать приватное свойство #books, которое инициализируется пустым массивом и представляет собой список книг в библиотеке.

// Реализуйте геттер allBooks, который возвращает текущий список книг.

// Реализуйте метод addBook(title), который позволяет добавлять книгу в список. Если книга с таким названием уже существует в списке, выбросьте ошибку с соответствующим сообщением.

// Реализуйте метод removeBook(title), который позволит удалять книгу из списка по названию. Если книги с таким названием нет в списке, выбросьте ошибку с соответствующим сообщением.

// Реализуйте метод hasBook(title), который будет проверять наличие книги в библиотеке и возвращать true или false в зависимости от того, есть ли такая книга в списке или нет.

// Реализуйте конструктор, который принимает начальный список книг (массив) в качестве аргумента. Убедитесь, что предоставленный массив не содержит дубликатов; в противном случае выбрасывайте ошибку.

class Library {
  #books = [];

  get allBooks() {
    return this.#books;
  }

  addBook(title) {
    try {
      if (this.hasBook(title)) {
        throw new Error(`Ошибка добавления: книга \"${title}\" уже существует в списке.`);
      }
      this.#books.push(title);
    } catch (error) {
        console.error(error.message);
    }
  }

  removeBook(title) {
    try {
      if (!this.hasBook(title)) {
        throw new Error(`Ошибка удаления: книга \"${title}\" отсутствует в списке.`);
      }
      this.#books.splice(this.#books.indexOf(title), 1);
    } catch (error) {
        console.error(error.message);
    }
  }

  hasBook(title) {
    return this.#books.includes(title);
  }

  constructor(books) {
    try {
      if (books.length !== new Set(books).size) {
        throw new Error("Ошибка создания: cписок книг содержит дубликаты.");
      }
      this.#books.push(...books);
    } catch (error) {
      console.error(error.message);
    }
  }
}


const library = new Library(["1984", "Brave New World", "Fahrenheit 451"]);
console.log(library.allBooks);

library.addBook("Three body problem");
console.log(library.allBooks);

library.removeBook("1984");
console.log(library.allBooks);

const libraryError = new Library(["1984", "Brave New World", "Fahrenheit 451", "Fahrenheit 451"]);
library.addBook("Fahrenheit 451");
library.removeBook("Do Androids Dream of Electric Sheep?");
