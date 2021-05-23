'use strict';

/*1. Crear constante que hace referencia al botón y añadirle el eventlistener
2. Crear una función findTvShow();
2.1. Que haga una petición a la API de las series(fetch()) para que le devuelva la información del las series que hemos buscado.*/

let dataSeries = [];

const button = document.querySelector('.js-btn');
let ulList = document.querySelector('.js-movies-list');

button.addEventListener('click', findTvShow);

function findTvShow() {
  const inputValue = document.querySelector('.js-input').value;
  dataSeries = [];
  fetch(`http://api.tvmaze.com/search/shows?q=${inputValue}`)
    .then((response) => response.json())
    .then((data) => {
      for (const series of data) {
        dataSeries.push(series.show);
      }

      paintTvShow(dataSeries);
      allListenersToSeries();
    });
}

function paintTvShow(ev) {
  let fullShowList = '';
  ev.forEach((element) => {
    let image = '';
    if (element.image === null) {
      image = 'https://via.placeholder.com/210x295/ffffff/666666/?text=TV';
    } else {
      image = element.image.medium;
    }
    fullShowList += `<li class= js-poster favorite> <img src= ${image}></img>${element.name}</li>`;
  });

  ulList.innerHTML = fullShowList;
}
