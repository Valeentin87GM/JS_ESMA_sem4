// ""Получение данных о пользователе""

// Реализуйте функцию getUserData, которая принимает идентификатор пользователя (ID) в качестве аргумента и использует fetch 
// для получения данных о пользователе с заданным ID с удаленного сервера. Функция должна возвращать промис, который разрешается 
// с данными о пользователе в виде объекта. Если пользователь с указанным ID не найден, промис должен быть отклонен с 
// соответствующим сообщением об ошибке.

// Подсказка, с последовательностью действий:
// getUserData использует fetch для получения данных о пользователе с удаленного сервера. Если запрос успешен (с кодом 200), 
// функция извлекает данные из ответа с помощью response.json() и возвращает объект с данными о пользователе. 
// Если запрос неуспешен, функция отклоняет промис с сообщением об ошибке.


/* не получилось использовать fetch............

fetch('./usersData.json')
  .then(response => {
    if (!response.ok) {
      throw new Error('Ой, ошибка в fetch: ' + response.statusText);
    }
    return response.json();
  })
  .then(jsonData => console.log(jsonData))
  .catch(error => console.error('Ошибка при исполнении запроса: ', error));

*/


const usersData = '{ "15":{"id":1,"name":"Иван","age":25}, "2":{"id":2,"name":"Пётр","age":35}, "3":{"id":3,"name":"Олег","age":20}}';



const getUserData = function(data,idUser){
    const dataParse = JSON.parse(data);
    
    Object.values(dataParse).forEach(user => {
        result = `Пользователь с  id = ${idUser} не числится`
        console.log(user.id);
        if (user.id == idUser) {
            console.log('Совпадение данных');
            result = user;
        }       
    });
    return result
}



const searchUser = getUserData(usersData, 1);

console.log(searchUser);



