/* global shoppingList, store, Item, api */
'use strict';
$(document).ready(function() {
  shoppingList.bindEventListeners();
  shoppingList.render();
  api.getItems()
    .then((res) => res.json())
    .then((items) => {
      items.forEach((item) => store.addItem(item));
      shoppingList.render();
    });

  // api.getItems()
  //   .then(res => res.json())
  //   .then((items) => {
  //     const item = items[0];
  //     return api.updateItem(item.id, { name: 'foobar' });
  //   })
  //   .then(res => res.json())
  //   .then(() => console.log('updated!'));
  // Testing updateItem function
});



//   .then(result => result.json())
//   .then(resultJson => console.log(resultJson));
// api.createItem('pears')
//   .then(res => res.json())
//   .then((newItem) => {
//     return api.getItems();
//   })
//   .then(res => res.json())
//   .then((items) => {
//     console.log(items);
//   });
