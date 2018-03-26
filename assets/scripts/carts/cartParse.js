'use strict'

const store = require('../store')

// store all product objects locally in a hash, where each item obj is
// accessible by its product ID
// takes the API product data as an argument, and returns the same so it can be
// promise chained
const setAllProducts = function (data) {
  store.allProducts = {}
  data.products.forEach((product) => {
    store.allProducts[product._id] = product
  })
  console.log(store.allProducts)
  return data
}

// store all cart data locally, sort past carts, set cart totals
// takes the API cart data as an argument, and returns the same so it can be
// promise chained
const setAllLocalCarts = function (data) {
  // saves all of a user's carts from the API to local store
  store.allMyCarts = data.carts
  // sets all of the cart totals
  setAllCartTotals()
  console.log('store.allMyCarts is ', store.allMyCarts)
  // parses past purchase carts out from all of a users carts and stores locally
  setPastPurchases()
  // set the active cart, if there's more than one, set the most recent
  setNewestActiveCart()
  console.log('store.pastPurchases is ', store.pastPurchases)
  return data
}

// If there are more than one active carts (due to some internal error or
// malicious injection), choose the newest one
const setNewestActiveCart = function () {
  const activeCarts = store.allMyCarts.filter((cart) => cart.purchased === false)
  // sorts all the active carts by date
  activeCarts.sort(function (a, b) {
    return b.createdAt - a.createdAt
  })
  console.log('sorted activeCarts are ', activeCarts)
  store.activeCart = activeCarts[0]
  console.log('activeCart is ', store.activeCart)
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

// adds up the prices of all the items in a cart, and sets a `total` value in
// the cart object
const setCartTotal = function (cart) {
  let total = 0
  cart.cartProducts.forEach((cartProduct) => {
    total += cartProduct.price
  })
  cart.total = total
}

// package a locally stored cart (which contains products in the form of
// objects) into the format accepted by the API's update method (with an array
// of product IDs instead of an array of product objects)
const packageCartDataForAPI = function (cart) {
  const packagedCart = {
    id: cart.id,
    data: {
      cart: {
        purchased: cart.purchased,
        cartProducts: []
      }
    }
  }
  cart.cartProducts.forEach((product) => {
    packagedCart.data.cart.cartProducts.push(product._id)
  })
  return packagedCart
}

const addItemToCart = function (productId) {
  const product = store.allProducts[productId]
  store.activeCart.cartProducts.push(product)
  return packageCartDataForAPI(store.activeCart)
}

module.exports = {
  setAllLocalCarts,
  setAllProducts,
  addItemToCart
}
