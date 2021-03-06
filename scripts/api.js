'use strict';

const api = (function(){
  const BASE_URL = 'https://thinkful-list-api.herokuapp.com/lucaskasia';
  // This is going to be the underlying fetch function,
  // we'll just pass in the options from the CRUD methods
  function baseFetchMethod(...args) {
    // ...args is a spread operator meaning
    // it will combine all arguments into a local variable
    // aka it will run this function any number of arguments that you throw in
    let error = false;
    return fetch(...args)
      .then(response => {
        if (!response.ok) {
          // If we get an HTTP response but it's not 2xx status, it would be an error
          error = { code: response.status };
        }
        // parse the JSON response
        return response.json();
      })
      .then(data => {
        // If an error was found, reject the Promise with that error Object
        if (error) {
          error.message = data.message;
          return Promise.reject(error);
        }

        // Otherwise return the resolved newData
        return data;
      });
  }
  function getItems(){
    return baseFetchMethod(`${BASE_URL}/items`);
  }
  function createItem(name){
    let newItem = JSON.stringify({
      name: name,
    });
    const options = {
      method: 'POST',
      headers: new Headers({
        'Content-Type': 'application/json'
      }),
      body: newItem,
    };
    return baseFetchMethod(`${BASE_URL}/items`, options); // this is sending newItem in post request
  }

  function updateItem(id, updateData) {
    let updatedItem = JSON.stringify(updateData);
    const options = {
      method: 'PATCH',
      headers: new Headers({
        'Content-Type': 'application/json'
      }),
      body: updatedItem,
    };
    return baseFetchMethod(`${BASE_URL}/items/${id}`, options);
  }
  function deleteItem(id) {
    const options = {
      method: 'DELETE',
      headers: new Headers({
        'Content-Type': 'application/json'
      })
    };
    return baseFetchMethod(`${BASE_URL}/items/${id}`, options);
  }





  return  {
    getItems,
    createItem,
    updateItem,
    deleteItem
  };
}());
