'use strict'

const cartApi = require('./api')
const cartUi = require('./ui.js')
const cartParse = require('./cartParse.js')
const getFormFields = require('../../../lib/get-form-fields')
const store = require('../store')

// const showActiveCartTemplate = require('../templates/active-cart-listing.handlebars')

const onGetActiveCart = function (event) {
  store.activeCart ? cartUi.getActiveCartSuccess() : cartUi.getActiveCartFailure()
  return event
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

// adds selected item to activeCart in `store`, then packages the updated cart
// data and passes it to the API
const onAddToCart = function (event) {
  event.preventDefault()
  console.log('Clicked add to cart button')
  const productId = $(this).attr('data-id')
  const updatedCart = cartParse.addItemToCart(productId)
  console.log('Active cart now looks like...', updatedCart.data)
  cartApi.updateCart(store.activeCart._id, updatedCart.data)
    .then(cartUi.addToCartSuccess)
    .catch(cartUi.addToCartFailure)
}

// deletes a selected item from cart. If cart has only one item, destroys the cart
const onDeleteFromCart = function (event) {
  event.preventDefault()
  console.log('Clicked remove from cart button')
  const productId = $(this).attr('data-id')
  console.log('Product ID is...', productId)

  // this function parses the remove item request, if successful, returns packaged
  // cart data for an AJAX request, if not, returns 'marked for deletion'
  const updatedCart = cartParse.deleteItemFromCart(productId)

  // if cart needs to be deleted, delete, otherwise patch
  if (updatedCart === 'marked for deletion') {
    cartApi.deleteCart(store.activeCart._id)
      .then(cartUi.deleteCartSuccess)
      // next 3 .thens refresh the local cart data to match the cart data from
      // the API, and re-render the cart view
      .then(cartApi.getCarts)
      .then(cartParse.setAllLocalCarts)
      .then(onGetActiveCart)
      .catch(cartUi.deleteCartFailure)
  } else {
    cartApi.updateCart(store.activeCart._id, updatedCart.data)
      // TODO need a remove Item from cart update success UI function
      // next 3 .thens refresh the local cart data to match the cart data from
      // the API, and re-render the cart view
      .then(cartApi.getCarts)
      .then(cartParse.setAllLocalCarts)
      .then(onGetActiveCart)
      // TODO need a remove Item from cart update failure UI function
      .catch(cartUi.addToCartFailure)
  }
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
  $('#see-active-cart').on('click', onGetActiveCart)
  $('#see-all-carts').on('click', onGetCarts)
  $('#get-one-cart').on('submit', onGetOneCart)
  $('#create-cart').on('submit', onCreateCart)
  $('#update-cart').on('submit', onUpdateCart)
  // Add product to cart event handler
  $('body').on('click', '.add-to-cart', onAddToCart)
  $('body').on('click', '.remove-from-cart', onDeleteFromCart)
  $('#delete-cart').on('submit', onDeleteCart)
}

module.exports = {
  addHandlers
}
