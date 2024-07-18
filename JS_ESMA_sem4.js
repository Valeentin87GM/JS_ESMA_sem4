// ""Получение данных о пользователе""

// Реализуйте функцию getUserData, которая принимает идентификатор пользователя (ID) в качестве аргумента и использует fetch 
// для получения данных о пользователе с заданным ID с удаленного сервера. Функция должна возвращать промис, который разрешается 
// с данными о пользователе в виде объекта. Если пользователь с указанным ID не найден, промис должен быть отклонен с 
// соответствующим сообщением об ошибке.

// Подсказка, с последовательностью действий:
// getUserData использует fetch для получения данных о пользователе с удаленного сервера. Если запрос успешен (с кодом 200), 
// функция извлекает данные из ответа с помощью response.json() и возвращает объект с данными о пользователе. 
// Если запрос неуспешен, функция отклоняет промис с сообщением об ошибке.




let result = fetch('./usersData.json')
  .then(response => {
    if (!response.ok) {
      throw new Error('Ой, ошибка в fetch: ' + response.statusText);
    }
    return response.json();
  })
  .then(jsonData => getUserData(jsonData,5))
  .catch(error => console.error('Ошибка при исполнении запроса: ', error));


const getUserData = function(data,idUser){
    
    
    Object.values(data).forEach(user => {
        result = `Пользователь с  id = ${idUser} не числится`
        
        if (user.id == idUser) {
            console.log('Совпадение данных');
            result = user;
        }       
    });
    console.log(result);
    return result

}



// const searchUser = getUserData(result, 1);

// console.log(searchUser);



// ""Отправка данных на сервер""

// Реализуйте функцию saveUserData, которая принимает объект с данными о пользователе в качестве аргумента и использует fetch 
// для отправки этих данных на удаленный сервер для сохранения. Функция должна возвращать промис, который разрешается, если данные успешно отправлены, или отклоняется в случае ошибки.

// *Подсказка *
// // Пример использования функции

// const user = {
// name: 'John Smith',
// age: 30,
// email: 'john@example.com'
// };

// saveUserData(user)
// .then(() => {
// console.log('User data saved successfully');
// })
// .catch(error => {
// console.log(error.message);
// });

// saveUserData использует fetch для отправки данных о пользователе на удаленный сервер для сохранения. 
// Она отправляет POST-запрос на URL-адрес /users с указанием типа содержимого application/json и сериализует объект с данными 
// о пользователе в JSON-строку с помощью JSON.stringify(). Если запрос успешен (с кодом 200), функция разрешает промис. 
// Если запрос неуспешен, функция отклоняет промис с сообщением

// как пример для отсыла данные
const newUser = {
    id: 10,
    name: "Елена"
};

let data = new FormData();
data.append("json", JSON.stringify(newUser));

fetch("http://localhost:8000/saveUserData.json", {
    method: "POST",
    body: data
}).then(function(response) {
    
    if (!response.ok) {
        
        return Promise.reject(new Error(
            'Response failed: ' + response.status + ' (' + response.statusText + ')'
        ));
    }

    return response.json();
}).then(function(data) {
    // ... Делаем что-то с данными.
    console.log("Данные успешно сохранены");
}).catch(function(error) {
    // ... Обрабатываем ошибки.
    console.log(error.message);
});

