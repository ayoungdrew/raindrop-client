'use strict'

const cartApi = require('./api')
const cartUi = require('./ui.js')
const cartParse = require('./cartParse.js')
const getFormFields = require('../../../lib/get-form-fields')
const store = require('../store')

// const showActiveCartTemplate = require('../templates/active-cart-listing.handlebars')

const onGetActiveCart = function (event) {
  store.activeCart ? cartUi.getActiveCartSuccess() : cartUi.getActiveCartFailure()
}

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

const onAddToCart = function (event) {
  event.preventDefault()
  console.log('Clicked add to cart button')
  console.log('Product ID is...', $(this).attr('data-id'))
  const updatedCart = cartParse.addItemToCart($(this).attr('data-id'))
  console.log('Active cart now looks like...', updatedCart.data)
  cartApi.updateCart(store.activeCart._id, updatedCart.data)
    .then(cartUi.addToCartSuccess)
    .catch(cartUi.addToCartFailure)
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

// Stripe stuff - not working
// const onSubmitCart = function (event) {
// app.post('/charge', (req, res, next) => {
//     charge(req).then(data => {
//       res.render('thanks')
//     }).catch(error => {
//       res.render('error', error)
//     })
// })
// }

const addHandlers = () => {
  $('#see-active-cart').on('click', onGetActiveCart)
  $('#see-all-carts').on('click', onGetCarts)
  $('#get-one-cart').on('submit', onGetOneCart)
  $('#create-cart').on('submit', onCreateCart)
  $('#update-cart').on('submit', onUpdateCart)
  // Add product to cart event handler
  $('body').on('click', '.add-to-cart', onAddToCart)
  $('#delete-cart').on('submit', onDeleteCart)
}

module.exports = {
  addHandlers
}
