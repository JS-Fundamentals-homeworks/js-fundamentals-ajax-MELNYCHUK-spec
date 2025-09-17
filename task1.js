// Завдання: отримання даних про користувачів
// За допомогою засобі Fetch отримати інформацію про користувачів
// за посиланням - https://jsonplaceholder.typicode.com/users
// Імена користувачів відобразити в ненумерованому списку ul.usersList,
// який створений у файлі index.html
// Запустити програму за допомогою Live Server
// Перевірити за допомогою команди npm tests/task1.test.js

fetch("https://jsonplaceholder.typicode.com/users", { method: "GET" })
  .then((response) => response.json())
  .then((data) => {
    const usersList = document.querySelector(".usersList");
    data.forEach((user) => {
      const usersItem = document.createElement("li");
      usersItem.textContent = user.name;
      usersList.appendChild(usersItem);
    });
  })
  .catch((error) => console.log("Помилка", error));
