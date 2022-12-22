// function getData(data) {
//   // Promise Objesi döndüren fonksiyon
//   return new Promise(function (resolve, reject) {
//     setTimeout(function () {
//       if (typeof data === "string") {
//         // Olumlu
//         resolve(data);
//       } else {
//         // Olumsuz
//         reject(new Error("Lütfen string değer giriniz"));
//       }
//     }, 3000);
//   });
// }
// getData(23)
//   .then((response) => console.log("Gelen Değer " + response))
//   .catch((err) => console.error(err));

function addTwo(number) {
  return new Promise((resolve, reject) => {
    setTimeout(function () {
      if (typeof number === "number") {
        resolve(number + 30);
      } else {
        reject(new Error("Lütfen bir sayı giriniz"));
      }
    }, 3000);
  });
}

addTwo(50)
  .then((response) => {
    console.log(response);
    return response + 25;
  })
  .then((response2) => console.log(response2))
  .catch((err) => console.error(err));
