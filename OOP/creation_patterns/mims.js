// item creator
  // makes sure all necessary info is present and valid
  // required item info: 
    // SKU code, doesn't need to be unique
    // item name, min. of 5 chars not incl. spaces
    // category, min. 5 chars, one word only
    // quantity, must not be balnk, assume valid num will be provided
    // notValid property

// items manager
  // responsible for creating items, updating info about items, deleting items, querying info about items
  // item manager behaviors: 
    // create
    // update
    // delete
    // items
    // inStock
    // itemsInCategory


// reports manager
  // generates reports for a specific items or all items
  // reports for specific items are generated from report objects created from the report manager
  // the report manager is responsible for all items
  // methods on the reports manager: 
    // init
    // createReporter
    // reportInStock


let ItemManager = function () {
  // let items = [];

  function createItem(itemName, category, quantity) { 
    function generateSKU() {
      let strippedItemName = itemName.replace(/ /g, '').toUpperCase();
      let strippedCategory = category.replace(/ /g, '').toUpperCase();
      return strippedItemName.slice(0, 3).concat(strippedCategory.slice(0, 2));
    }

    function isValidItemName() {
      // must contain at least 5 non-space chars
      // count non-whitespace chars
    return (itemName.replace(/ /g, '').length >= 5);
    }
      
    function isValidCategory() {
      // must contain at least 5 non-space characters and only one word
      // split at white space
      // check array length == 1
      // check that string at arr[0] contains at least 5 chars
      return (category.split(' ').length === 1 && category.length >= 5);
    }

    function isValidQuantity() {
      return (quantity !== undefined);
    }

    let newItem = {};
    let invalidItem = { notValid: true };

    if (isValidItemName() && isValidCategory() && isValidQuantity()) {
      newItem.skuCode = generateSKU();
      newItem.itemName = itemName;
      newItem.category = category;
      newItem.quantity = quantity;
    } else {
      return invalidItem;
    }
    return newItem;
  }

  return {
    create(itemName, category, quantity) {
      let newItem = createItem(itemName, category, quantity);

      if (newItem.notValid) {
        return false;
      } else {
        this.items.push(newItem);
        return newItem;
      }
    }, 
    update(skuCode, obj) {
      this.items.forEach(item => {
        if (item.skuCode === skuCode) {
          for (let prop in obj) {
            item[prop] = obj[prop];
          }
        }
      })
    }, 
    delete(skuCode) {
      // iterate over the list of items with index
      // initialize a variable to a new array to keep track of the indices to delete
      // if the item's skuCode matches the skuCode provided, delete the item from the list of items
        // delete: store the current index in the tracking arr
        // this is to prevent mutation/deletion while iterating
      // iterate over the tracking array and delete the element at the current index
        // delete: splice the index of the current iteration in the list of items
      // return value doesn't matter
      let indicesToDelete = this.items.reduce((indices, item, idx) => { 
        if (item.skuCode === skuCode) {
          indices.push(idx);
        }
        return indices;
      }, []);
      indicesToDelete.forEach(index => this.items.splice(index, 1) );
    }, 
    items: [],
    inStock() {
      return this.items.filter(item => item.quantity > 0);
    },
    itemsInCategory(category) {
      return this.items.filter(item => item.category === category);
    }
  }
}();

let ReportManager = {
  init(itemManager) {
    this.items = itemManager;
    return this;
  },
  createReporter(skuCode) {
    let itemManager = this.items;
    let items = itemManager.items.filter(item => item.skuCode === skuCode);

    return {
      itemInfo() {
        items.forEach(item => {
          for (let prop in item) {
            console.log(`${prop}: ${item[prop]}`);
          }
        });
      },
    };
  },
  reportInStock() {
    console.log(this.items.inStock().map(item => item.itemName).join(', '));
  },
};

ItemManager.create('basket ball', 'sports', 0);           // valid item
ItemManager.create('asd', 'sports', 0); // not valid b/c item name < 5 chars
ItemManager.create('soccer ball', 'sports', 5);           // valid item
ItemManager.create('football', 'sports'); // not valid b/c quantity === undefined
ItemManager.create('football', 'sports', 3);              // valid item
ItemManager.create('kitchen pot', 'cooking items', 0); // not valid b/c category > 1 word
ItemManager.create('kitchen pot', 'cooking', 3);          // valid item

// console.log(ItemManager.items);
// returns list with the 4 valid items

ReportManager.init(ItemManager);
// ReportManager.reportInStock();
// logs soccer ball,football,kitchen pot

ItemManager.update('SOCSP', { quantity: 0 });
// console.log(ItemManager.inStock());
// // returns list with the item objects for football and kitchen pot
// ReportManager.reportInStock();
// // logs football,kitchen pot
// console.log(ItemManager.itemsInCategory('sports'));
// // returns list with the item objects for basket ball, soccer ball, and football
ItemManager.delete('SOCSP');
// console.log(ItemManager.items);
// // returns list with the remaining 3 valid items (soccer ball is removed from the list)

const kitchenPotReporter = ReportManager.createReporter('KITCO');
// kitchenPotReporter.itemInfo();
// // logs
// // skuCode: KITCO
// // itemName: kitchen pot
// // category: cooking
// // quantity: 3

ItemManager.update('KITCO', { quantity: 10 });
kitchenPotReporter.itemInfo();
// logs
// skuCode: KITCO
// itemName: kitchen pot
// category: cooking
// quantity: 10


//////// SCRAP

    // create a new object
    // check if the newly created object has a notValid property of false
    // if the notValid property is true, return false
    // otherwise return the newly created object

    // let newItem = itemCreator(itemName, category, quantity);
    // if (newItem.notValid) {
    //   return false;
    // } else {
    //   items.push(newItem);
    //   return newItem;
    // }

    // initialize a variable (newItem) to point to a new object
    // initialize a variable (invalidItem) to point to a new object with a notValid property set to true
    // check if the itemName is valid => isValid: set the newItem's name to itemName, otherwise return invalidItem
    // check if the category is valid => isValid: set the newItem's category to category, otherwise return invalidItem
    // check if the quantity is valid => isValid: set the newItem's quantity to quantity, otherwise, return invalidItem
    // generate the item's SKU code based on the newItem's name and category
    // push newItem to the list of items (items)
    // return newItem