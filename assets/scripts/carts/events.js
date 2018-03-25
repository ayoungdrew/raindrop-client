'use strict'

const cartApi = require('./api')
const cartUi = require('./ui.js')

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
  console.log(cartId)

  cartApi.getOneCart(cartId)
    .then(cartUi.getOneCartSuccess)
    .catch(cartUi.getOneCartFailure)
}

const addHandlers = () => {
  $('#see-all-carts').on('click', onGetCarts)
  $('#get-one-cart').on('submit', onGetOneCart)
}

module.exports = {
  addHandlers
}
