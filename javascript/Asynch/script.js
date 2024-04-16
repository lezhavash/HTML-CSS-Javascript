"use strict";

const btn = document.querySelector(".btn-country");
const countriesContainer = document.querySelector(".countries");

///////////////////////////////////////

// const getCountryData = function (country) {
//   const request = new XMLHttpRequest();
//   request.open("GET", `https://restcountries.com/v3.1/name/${country}`);
//   request.send();

//   request.addEventListener("load", function () {
//     const [data] = JSON.parse(this.responseText);
//     console.log(data);
//     const html = `
//        <article class="country">
//           <img class="country__img" src="${data.flags.svg}" />
//           <div class="country__data">
//             <h3 class="country__name">${data.name.common}</h3>
//             <h4 class="country__region">${data.region}</h4>
//             <p class="country__row"><span>👫</span>${(
//               +data.population / 1000000
//             ).toFixed(1)}</p>
//             <p class="country__row"><span>🗣️</span>${
//               Object.values(data.languages)[0]
//             }</p>
//             <p class="country__row"><span>💰</span>${
//               Object.values(data.currencies)[0].name
//             }</p>
//           </div>
//         </article>
//   `;

//     countriesContainer.insertAdjacentHTML("beforeend", html);
//     countriesContainer.style.opacity = 1;
//   });
// };

// getCountryData("georgia");

const renderCountry = function (data, className = " ") {
  const html = `
       <article class="country ${className}">
          <img class="country__img" src="${data.flags.svg}" />
          <div class="country__data">
            <h3 class="country__name">${data.name.common}</h3>
            <h4 class="country__region">${data.region}</h4>
            <p class="country__row"><span>👫</span>${(
              +data.population / 1000000
            ).toFixed(1)}</p>
            <p class="country__row"><span>🗣️</span>${
              Object.values(data.languages)[0]
            }</p>
            <p class="country__row"><span>💰</span>${
              Object.values(data.currencies)[0].name
            }</p>
          </div>
        </article>
  `;
  countriesContainer.insertAdjacentHTML("beforeend", html);
};

const renderError = function (msg) {
  countriesContainer.innerHTML = " ";
  countriesContainer.insertAdjacentText("beforeend", msg);
};

// const getCountryAndNeighbour = function (country) {
//   const request = new XMLHttpRequest();
//   request.open("GET", `https://restcountries.com/v3.1/name/${country}`);
//   request.send();

//   request.addEventListener("load", function () {
//     const [data] = JSON.parse(this.responseText);
//     //Render country1
//     renderCountry(data);
//     ////
//     const naighbour = data.borders;
//     if (!naighbour) return;
//     naighbour.forEach(function (n) {
//       const requestN = new XMLHttpRequest();
//       requestN.open("GET", `https://restcountries.com/v3.1/alpha/${n}`);
//       requestN.send();
//       requestN.addEventListener("load", function () {
//         const [dataN] = JSON.parse(this.responseText);
//         renderCountry(dataN, "neighbour");
//       });
//     });
//   });
// };
// getCountryAndNeighbour("portugal");

// const newCountry = function (con) {
//   fetch(`https://restcountries.com/v3.1/name/${con}`)
//     .then((res) => res.json())
//     .then(function (test) {
//       renderCountry(test[0]);
//       const n = test[0].borders[0];
//       console.log(n);

//       if (!n) return;
//       return fetch(`https://restcountries.com/v3.1/alpha/${n}`);
//     })
//     .then((resp) => resp.json())
//     .then((data) => renderCountry(data[0], "neighbour"))
//     .catch((err) => {
//       console.error(err);
//       renderError("Somthing went wrong");
//     });
// };

// const getJson = function (url, errorMsg = "Somthing went wrong") {
//   return fetch(url).then((responce) => {
//     if (!responce.ok) throw new Error(`${errorMsg} (${responce.status})`);
//     return responce.json();
//   });
// };

// const getCountryData = function (country) {
//   getJson(`https://restcountries.com/v3.1/name/${country}`)
//     .then((data) => {
//       renderCountry(data[0]);
//       const arr = data[0].borders;
//       if (!arr) throw new Error("No Neighbour Found");
//       arr.forEach(function (con) {
//         getJson(`https://restcountries.com/v3.1/alpha/${con}`).then((data) => {
//           renderCountry(data[0], "neighbour");
//         });
//       });
//     })
//     .catch((err) => {
//       console.error(`${err}`);
//       renderError(`Somthing went wrong ${err.message}`);
//     })
//     .finally(() => {
//       countriesContainer.style.opacity = 1;
//     });
// };

// btn.addEventListener("click", function () {
//   getCountryData("georgia");
// });

// let xy = [];

// navigator.geolocation.getCurrentPosition(
//   function (position) {
//     const { latitude } = position.coords;
//     const { longitude } = position.coords;
//     xy = [latitude, longitude];
//   },
//   function () {
//     alert("Culd not get your positon");
//   }
// );

// const whereAmI = function ([lat, lng]) {
//   fetch(
//     `https://geocode.maps.co/reverse?lat=${lat}&lon=${lng}&api_key=66168c1d7b13c712489973pfqbbe0d0`
//   )
//     .then((responce) => {
//       if (!responce.ok) throw new Error(`${responce.status} ვერ ვუკავშირდები`);
//       return responce.json();
//     })
//     .then((data) => {
//       const country = data.address.country;
//       if (!country) throw new Error(`მსგავს ლოკაციაზე არაა ქვეყანა !!!!!!`);
//       return fetch(`https://restcountries.com/v3.1/name/${country}`);
//     })
//     .then((responce) => {
//       if (!responce.ok) throw new Error(`ვერ მოიძებნა ქვეყანაზე`);
//       return responce.json();
//     })
//     .then((data) => renderCountry(data[0]))
//     .catch((err) => {
//       console.log(`${err}`);
//       renderError(`Somthing went wrong ${err.message}`);
//     })
//     .finally(() => (countriesContainer.style.opacity = 1));
// };

// btn.addEventListener("click", function () {
//   whereAmI(xy);
// });

// const lotteryPromise = new Promise(function (resolve, reject) {
//   console.log("Lotter draw is happening");

//   setTimeout(function () {
//     if (Math.random() >= 0.5) {
//       resolve("You Win");
//     } else {
//       reject(new Error("You Lose your money"));
//     }
//   }, 2000);
// });

// lotteryPromise
//   .then((res) => console.log(res))
//   .catch((err) => console.error(err));

// const wait = function (seconds) {
//   return new Promise(function (resolve) {
//     setTimeout(resolve, seconds * 1000);
//   });
// };

// wait(2).then(() => console.log("Test"));

const wait = function (seconds) {
  return new Promise(function (resolve) {
    setTimeout(resolve, seconds * 1000);
  });
};

const src = document.querySelector(".images");

const createImage = function (imgPath) {
  return new Promise(function (resolve, reject) {
    const img = document.createElement("img");
    img.src = imgPath;

    img.addEventListener("load", function () {
      src.append(img);
      resolve(img);
    });

    img.addEventListener("error", function () {
      reject(new Error("სურათვი ვერ მოიძებნა"));
    });
  });
};

// let currentImg;
// createImage("img/img-1.jpg")
//   .then((img) => {
//     currentImg = img;
//     return wait(2);
//   })
//   .then(() => {
//     currentImg.style.display = "none";
//     return createImage("img/img-2.jpg");
//   })
//   .then((img) => {
//     currentImg = img;
//     return wait(2);
//   })
//   .then(() => {
//     currentImg.style.display = "none";
//     return createImage("img/img-3.jpg");
//   })
//   .then((img) => {
//     currentImg = img;
//     return wait(2);
//   })
//   .then(() => {
//     currentImg.style.display = "none";
//   })
//   .catch((err) => console.error(err));

const loadNPause = async function () {
  try {
    let img = await createImage("img/img-1.jpg");
    console.log(img);
    await wait(2);
    img.style.display = "none";

    img = await createImage("img/img-2.jpg");
    console.log(img);
    await wait(2);
    img.style.display = "none";

    img = await createImage("img/img-3.jpg");
    console.log(img);
    await wait(2);
    img.style.display = "none";
  } catch (err) {
    console.error(err);
  }
};

// loadNPause();

const aloadAll = async function (imgArr) {
  try {
    const imgs = imgArr.map(async function (img) {
      const data = await createImage(img);

      data.classList.add("parallel");
      return data;
    });
    const imgsEl = await Promise.all(imgs);
    console.log(imgs);
    console.log(imgsEl);
  } catch (err) {
    console.error(err);
  }
};

aloadAll(["img/img-1.jpg", "img/img-2.jpg", "img/img-3.jpg"]);
