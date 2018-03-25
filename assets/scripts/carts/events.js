'use strict'

const cartApi = require('./api')
const cartUi = require('./ui.js')
const getFormFields = require('../../../lib/get-form-fields')

const onGetCarts = function (event) {
  console.log('Clicked see all carts button')

  cartApi.getCarts()
    .then(cartUi.getCartsSuccess)
    .catch(cartUi.getCartsFailure)
}

const onGetOneCart = function (event) {
  event.preventDefault()
  console.log('Clicked get one cart button')
  const cartId = $('#get-one-cart input').val()
  console.log('cartId is: ', cartId)

  cartApi.getOneCart(cartId)
    .then(cartUi.getOneCartSuccess)
    .catch(cartUi.getOneCartFailure)
}

const onCreateCart = function (event) {
  event.preventDefault()
  console.log('Clicked create cart button')

  const data = getFormFields(this)
  data.cart.cartProducts = data.cart.cartProducts.split(' ')
  console.log('new cart data is ', data.cart.cartProducts)

  cartApi.createCart(data)
    .then(cartUi.createCartSuccess)
    .catch(cartUi.createCartFailure)
}

const onUpdateCart = function (event) {
  event.preventDefault()
  console.log('Clicked update cart button')

  const cartId = $('#update-cart input').val()
  console.log('cartId is: ', cartId)
  const data = getFormFields(this)
  data.cart.cartProducts = data.cart.cartProducts.split(' ')
  console.log('patch data is ', data)

  cartApi.updateCart(cartId, data)
    .then(cartUi.updateCartSuccess)
    .catch(cartUi.updateCartFailure)
}

const onDeleteCart = function (event) {
  event.preventDefault()
  console.log('Clicked delete cart button')
  const cartId = $('#delete-cart input').val()
  console.log('cartId is: ', cartId)

  cartApi.deleteCart(cartId)
    .then(cartUi.deleteCartSuccess)
    .catch(cartUi.deleteCartFailure)
}

const addHandlers = () => {
  $('#see-all-carts').on('click', onGetCarts)
  $('#get-one-cart').on('submit', onGetOneCart)
  $('#create-cart').on('submit', onCreateCart)
  $('#update-cart').on('submit', onUpdateCart)
  $('#delete-cart').on('submit', onDeleteCart)
}

module.exports = {
  addHandlers
}
