'use strict'

const productApi = require('./api')
const productUi = require('./ui.js')

const onGetProducts = function (event) {
  console.log('Clicked see all products button')

  productApi.getProducts()
    .then(productUi.getProductsSuccess)
    .catch(productUi.getProductsFailure)
}

const onGetCarts = function (event) {
  console.log('Clicked see all carts button')

  productApi.getCarts()
    .then(productUi.getCartsSuccess)
    .catch(productUi.getCartsFailure)
}

const onGetOneCart = function (event) {
  event.preventDefault()
  console.log('Clicked get one cart button')
  const cartId = $('#get-one-cart input').val()
  console.log(cartId)

  productApi.getOneCart(cartId)
    .then(productUi.getOneCartSuccess)
    .catch(productUi.getOneCartFailure)
}

const productHandlers = () => {
  $('#see-all-products').on('click', onGetProducts)
  $('#see-all-carts').on('click', onGetCarts)
  $('#get-one-cart').on('submit', onGetOneCart)
}

module.exports = {
  productHandlers
}
