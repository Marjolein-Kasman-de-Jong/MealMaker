// ---------------------------------------------------------------------------
// Codecademy Front-End Engineer Career Path - Meal Maker Project
// ---------------------------------------------------------------------------

const menu = {
  _meal: '',
  _price: 0,
  set meal(mealToCheck) {
    if (typeof mealToCheck === 'string') {
      return this._meal = mealToCheck;
    }
  },
  set price(priceToCheck) {
    if (typeof priceToCheck === 'number') {
      return this._price = priceToCheck;
    }
  },
  get todaysSpecial() {
    if (this._meal || this._price) {
      return `Today's Special is ${this._meal} for \u20AC${this._price}!`;
    }
    else {
      return "Meal or price was not set correctly!";
    }
  }
};

// ---------------------------------------------------------------------------
// Extra assignment
// ---------------------------------------------------------------------------

// Array of meals and prices

const opties = [
  {"meal": "French Fries", "price": 2.75},
  {"meal": "Tomato Soup", "price": 2.50},
  {"meal": "Spaghetti", "price": 4.00},
  {"meal": "Sandwich", "price": 2.50},
  {"meal": "Salad", "price": 3.00}
];

// Randomly selects option from array of meals and prices

const optionPicker = Math.floor(Math.random()*(opties.length));
const pick = opties[optionPicker];

// Sends selected option to getter/setter

menu.meal = pick.meal;
menu.price = pick.price;

// Calls getter and logs output to console

console.log(menu.todaysSpecial);