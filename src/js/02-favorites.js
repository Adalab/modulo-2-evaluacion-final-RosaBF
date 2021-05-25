'use strict';

let favoriteSeries = [];
let ulListFavorites = document.querySelector('.js-favorites-list');

//Función que añade o  quita la etiqueta favorite.
//Identificar la li pulsada
function handleClickSeries(event) {
  // Después, obtener la información asociada a cada serie (en cada li vamos a tener que identificar un valor "id" para asociarlo a cada )

  //----->solución posible
  //Creo = clikcedSerieId es el Id de la serie sobre el que he hecho click. Está nombrado en la función paintTvShow como serie.id.

  const clickedSerieId = parseInt(event.currentTarget.dataset.id);
  //convertimos de cadena a número para que luego no nos de problemas.

  console.log('Favoritos antes', favoriteSeries);

  //buscar si la serie clickada está en favoritos.
  // find nos devuelve el primer elemento que cumple esta condición y si no lo encuentra nos devuelve Undefined:
  const isPresent = favoriteSeries.find(
    (favorite) => favorite.id === clickedSerieId
  );

  if (isPresent === undefined) {
    const allTheClickedSerieData = dataSeries.find(
      (objSerie) => objSerie.id === clickedSerieId
    );

    //el id de la serie donde la usuria ha hecho click no está en el array de favoritos, lo incluimos con push.
    favoriteSeries.push(allTheClickedSerieData);
  } else {
    favoriteSeries = favoriteSeries.filter(
      (favorite) => favorite.id !== clickedSerieId
    );
    //esto va a generar un array nuevo que asigno a mi variable global
    //---->favoriteSeries (con esto machaco el anterior favorites)
  }
  setData();
  paintFavorites();
  paintTvShow();
  console.log('Favoritos despues', favoriteSeries);
}
//queremos crear otro array con todas las series menos en las que he hecho click. (distintas a mis clikcedSerieId) este array va a ser mi nuevo favorito.

// seleccionamos por id (del objeto del array que nos da la api) para que no se repitan
function paintFavorites() {
  let favoritesHTML = '';
  for (let i = 0; i < favoriteSeries.length; i++) {
    favoritesHTML += `<li class="favorite-item">`;
    favoritesHTML += `<h2 class="favorite-name">${favoriteSeries[i].name}</h2>`;
    if (favoriteSeries[i].image === null) {
      favoritesHTML += `<img class="favorite-image" src='https://via.placeholder.com/210x295/ffffff/666666/?text=TV';/>`;
    } else {
      favoritesHTML += `<img class="favorite-image" src="${favoriteSeries[i].image.medium}"/>`;
    }
    favoritesHTML += `<span class="js-poster" data-id="${favoriteSeries[i].id}">X<span>`;
    favoritesHTML += '</li>';
  }
  ulListFavorites.innerHTML = favoritesHTML;
  allListenersToSeries();
}

// Función escuchadora del evento click en una serie marcada como favorita.
//Dentro del for of añadimos el addEventListener y como parámetro la función que se realiza sobre el listener series y que es otra función (callback)---->handleClickSeries, definida al comienzo del fichero.
function allListenersToSeries() {
  const allSeries = document.querySelectorAll('.js-poster');
  for (const series of allSeries) {
    series.addEventListener('click', handleClickSeries);
  }
}
