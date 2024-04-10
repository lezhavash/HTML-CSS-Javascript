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
  countriesContainer.style.opacity = 1;
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

const getCountryData = function (country) {
  fetch(`https://restcountries.com/v3.1/name/${country}`).then((responce) =>
    responce.json().then(function (data) {
      renderCountry(data[0]);
      const arr = data[0].borders;
      if (!arr) return;
      arr.forEach(function (con) {
        fetch(`https://restcountries.com/v3.1/alpha/${con}`).then((responce) =>
          responce.json().then((data) => renderCountry(data[0], "neighbour"))
        );
      });
    })
  );
};

getCountryData("australia");
