'use strict';

const api = (function(){
  const BASE_URL = 'https://thinkful-list-api.herokuapp.com/lucaskasia';

  function getItems(){
    // return Promise.resolve('A successful response!');
    return fetch(`${BASE_URL}/items`);
  }

  return  {
    getItems
  };
}());
