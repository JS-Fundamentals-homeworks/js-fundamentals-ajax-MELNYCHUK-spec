// На сторінці index.html знаходяться поля зазначені коментарем Task2
// При введені імені користувача в поле #userNameInput та натиску на кнопку
// #getUserButton потрібно зробити запит Fetch за посиланням - https://jsonplaceholder.typicode.com/users
// Віднайти користувача із введеним ім'ям, отримати місто його проживанння та
// відобразити у тезі #userCity
// Запустити програму потрібно за допомогою Live Server
// Перевірити правильність програми - команда node tests/task2.test.js

const userNameInput = document.getElementById("userNameInput");
const getUserButton = document.getElementById("getUserButton");

function FirstCapitalLetters(str) {
  return str
    .split(" ")
    .map((word) => word.charAt(0).toUpperCase() + word.slice(1).toLowerCase())
    .join(" ");
}

getUserButton.addEventListener("click", () => {
  const userName = FirstCapitalLetters(userNameInput.value.trim());

  fetch(`https://jsonplaceholder.typicode.com/users?name=${userName}`, {
    method: "GET",
  })
    .then((response) => response.json())
    .then((users) => {
      const user = users.find((user) => user.name === userName);
      const userCity = document.getElementById("userCity");

      if (user) {
        userCity.textContent = user.address.city;
      } else {
        userCity.textContent = "Не знайдено";
      }
    })
    .catch((error) => console.log("Помилка", error));
});
