// Задание 1

// • Используя Symbol.iterator, создайте объект "Музыкальная коллекция", который можно итерировать. Каждая итерация должна возвращать следующий альбом из коллекции.

// • Создайте объект musicCollection, который содержит массив альбомов и имеет свойство-символ Symbol.iterator. Каждый альбом имеет следующую структуру:

// {
// title: "Название альбома",
// artist: "Исполнитель",
// year: "Год выпуска"
// }

// • Реализуйте кастомный итератор для объекта musicCollection. Итератор должен перебирать альбомы по порядку.
// • Используйте цикл for...of для перебора альбомов в музыкальной коллекции и вывода их на консоль в формате: Название альбома - Исполнитель (Год выпуска)

const albums = [
  { title: "Meteora", artist: "Linkin Park", year: 2007 },
  { title: "Black Holes and Revelations", artist: "Muse", year: 2006 },
  { title: "Evolve", artist: "Imagine Dragons", year: 2017 },
];

let musicCollection = {
  albums: [...albums],
  [Symbol.iterator]: function () {
    let albumIndex = 0;
    return {
      next: () => {
        if (albumIndex >= this.albums.length) {
          return { done: true };
        } else {
          return { value: this.albums[albumIndex++], done: false };
        }
      },
    };
  },
};

for (const album of musicCollection) {
  console.log(`${album.title} - ${album.artist} (${album.year})`);
}
