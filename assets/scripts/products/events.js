'use strict'

const productApi = require('./api')
const productUi = require('./ui.js')
const cartParse = require('../carts/cartParse')

const onGetProducts = function (event) {
  console.log('Clicked see all products button')
  $('#intro-header').css({
    'display': 'none'
  })

  productApi.getProducts()
    // store all product objects locally in a hash, where each item obj is
    // accessible by its product ID
    .then(cartParse.setAllProducts)
    .then(productUi.getProductsSuccess)
    .catch(productUi.getProductsFailure)
}

const productHandlers = () => {
  $('#see-all-products, #all-products-button').on('click', onGetProducts)
  $('#test-forms-button').click(function () {
    $('.test-form').toggle()
  })
}

module.exports = {
  productHandlers
}
