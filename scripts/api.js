'use strict';

const api = (function(){
  const BASE_URL = 'https://thinkful-list-api.herokuapp.com/lucaskasia';

  function getItems(){
    // return Promise.resolve('A successful response!');
    return fetch(`${BASE_URL}/items`);
  }
  function createItem(name){
    let newItem = JSON.stringify({
      name: name,
    });
    // JSON.stringify(newItem);
    const options = {
      method: 'POST',
      headers: new Headers({
        'Content-Type': 'application/json'
      }),
      body: newItem,
    }

    return fetch(`${BASE_URL}/items`, options)//this is sending newItem in post request

  }





  return  {
    getItems,
    createItem,
  };
}());
