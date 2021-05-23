'use strict';

function allListenersToSeries() {
  const allSeries = document.querySelectorAll('.js-poster');
  for (const series of allSeries) {
    series.addEventListener('click', handleClickSeries);
  }
}

function handleClickSeries(event) {
  event.currentTarget.classList.toggle('favorite');
}
