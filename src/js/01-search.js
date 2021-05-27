'use strict';

/*1. Crear constante que hace referencia al botón y añadirle el eventlistener
2. Crear una función findTvShow();
2.1. Que haga una petición a la API de las series(fetch()) para que le devuelva la información del las series que hemos buscado.*/

let dataSeries = [];

const button = document.querySelector('.js-btn');
let ulList = document.querySelector('.js-movies-list');

button.addEventListener('click', findTvShow);

// buscar la info.
function findTvShow() {
  const inputValue = document.querySelector('.js-input').value;
  dataSeries = [];
  fetch(`//api.tvmaze.com/search/shows?q=${inputValue}`)
    .then((response) => response.json())
    .then((data) => {
      for (const series of data) {
        dataSeries.push(series.show);
      }

      paintTvShow();
    });
}
// Pintar la información.
function paintTvShow() {
  let fullShowList = '';
  dataSeries.forEach((serie) => {
    let image = '';
    if (serie.image === null) {
      image = 'https://via.placeholder.com/210x295/ffffff/666666/?text=TV';
    } else {
      image = serie.image.medium;
    }

    //buscar si la serie clickada está en favoritos:
    const isPresent = favoriteSeries.find((favoriteId) => {
      return favoriteId.id === serie.id;
    });

    console.log(serie.name, isPresent);

    // Si al iniciar la página el elemento "presente" está indefinido, nos muestra la lista completa. Si no, nos muestra la de favoritos.
    if (isPresent === undefined) {
      fullShowList += `<li data-id="${serie.id}" class= "js-poster">`;
    } else {
      fullShowList += `<li data-id="${serie.id}" class= "js-poster favorite">`;
    }
    fullShowList += `<img src="${image}">`;
    fullShowList += `<p>${serie.name}</p>`;
    fullShowList += `<p>${serie.schedule.time}</P>`;
    fullShowList += '</li>';
  });

  ulList.innerHTML = fullShowList;
  allListenersToSeries();
}

const buttonLog = document.querySelector('.button2');

buttonLog.addEventListener('click', handlerSeries);

function handlerSeries() {
  for (let i = 0; i < dataSeries.length; i++) {
    const allLisSeries = dataSeries[i].name;
    console.log(allLisSeries);
  }
}
