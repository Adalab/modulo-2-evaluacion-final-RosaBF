'use strict';

//1. Almacenar el listado de favoritos en LocalStorage.
//1.1.Al recargar la página el listado de favoritos debe mostrarse.
//localStorage.setItem('favoritesList', JSON.stringify(favoriteSeries));

console.log(favoriteSeries);

//Función LocalStorage para guardar los datos
//--- convierto el array de favoriteSeries en string.

const setData = () => {
  console.log('guardando en ls');
  const savedSeriesData = JSON.stringify(favoriteSeries);
  localStorage.setItem('favorites', savedSeriesData);
};

//Función LocalStorage para recuperar los datos de favoritas.

const getData = () => {
  const savedFavorites = localStorage.getItem('favorites');
  if (savedFavorites !== null) {
    favoriteSeries = JSON.parse(savedFavorites);
    paintFavorites();
  }
};

getData();
