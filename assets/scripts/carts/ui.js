'use strict'

const store = require('../store')
const toast = require('../templates/toast.js')

const showActiveCartTemplate = require('../templates/active-cart-listing.handlebars')
const showPastPurchasesTemplate = require('../templates/past-purchase-listing.handlebars')

const getActiveCartSuccess = function () {
  const showActiveCart = showActiveCartTemplate({ cartProducts: store.activeCart.cartProducts })
  $('#active-cart-content').html(showActiveCart)
  $('#active-cart-total').html(`<h2>Total: ${store.activeCart.total.toFixed(2)}</h2>`)
}

const getActiveCartFailure = function (error) {
  console.log('Failed to get active cart')
  $('#active-cart-content').html('<p>Your Cart is Empty!</p>')
  $('#active-cart-total').html(``)
  console.log(error)
}

const getPastPurchasesSuccess = function () {
  const showPastPurchases = showPastPurchasesTemplate({ pastPurchases: store.pastPurchases })
  $('#past-purchases-content').html(showPastPurchases)
}

const getPastPurchasesFailure = function (error) {
  console.log('Failed to get past purchases')
  console.log(error)
}

// only used for testing purposes, can delete once mvp is met
const getCartsSuccess = function (data) {
  console.log('retrieved carts data is: ', data)
}

// only used for testing purposes, can delete once mvp is met
const getCartsFailure = function (error) {
  console.log('Failed to get all carts')
  toast.failure('Server connection error. Please try again later.')
  console.log(error)
}

// only used for testing purposes, can delete once mvp is met
const getOneCartSuccess = function (data) {
  console.log('retrieved cart data is: ', data)
}

// only used for testing purposes, can delete once mvp is met
const getOneCartFailure = function (error) {
  console.log('Failed to get one cart')
  console.log(error)
}

// only used for testing purposes, can delete once mvp is met
const createCartSuccess = function (data) {
  console.log('created cart data is: ', data)
}

// only used for testing purposes, can delete once mvp is met
const createCartFailure = function (error) {
  console.log('Failed to create a cart')
  console.log(error)
}

// only used for testing purposes, can delete once mvp is met
const updateCartSuccess = function (data) {
  console.log('Successfully updated cart')
}

// only used for testing purposes, can delete once mvp is met
const updateCartFailure = function (error) {
  console.log('Failed to update a cart')
  console.log(error)
}

const addToCartSuccess = function (data) {
  toast.success('Item added to cart.')
  console.log('Added product cart')
}

const addToCartFailure = function (error) {
  toast.failure('Server connection error. Please try again later.')
  console.log('Failed to add product to cart')
  console.log(error)
}

module.exports = {

  getActiveCartSuccess,
  getActiveCartFailure,
  getPastPurchasesSuccess,
  getPastPurchasesFailure,
  getCartsSuccess,
  getCartsFailure,
  getOneCartSuccess,
  getOneCartFailure,
  createCartSuccess,
  createCartFailure,
  updateCartSuccess,
  updateCartFailure,
  addToCartSuccess,
  addToCartFailure
}