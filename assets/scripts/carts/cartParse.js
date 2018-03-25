'use strict'

const store = require('../store')

const setAllLocalCarts = function (data) {
  // saves all of a user's carts from the API to local store
  store.allMyCarts = data.carts
  // sets all of the cart totals
  setAllCartTotals()
  console.log('store.allMyCarts is ', store.allMyCarts)
  // parses past purchase carts out from all of a users carts and stores locally
  setPastPurchases()
  console.log('store.pastPurchases is ', store.pastPurchases)
  return data
}

// parses past purchase carts out from all of a users carts and stores locally
const setPastPurchases = function () {
  store.pastPurchases = store.allMyCarts.filter((cart) => cart.purchased === true)
}

// sets all local cart totals
const setAllCartTotals = function () {
  // iterates through all local carts and runs a callback to calculate and set
  // that cart's total cost
  store.allMyCarts.forEach(setCartTotal)
}

// adds up the prices of all the items in a cart, and sets a `total` value
const setCartTotal = function (cart) {
  let total = 0
  cart.cartProducts.forEach((cartProduct) => {
    total += cartProduct.price
  })
  cart.total = total
}

module.exports = {
  setAllLocalCarts
}
