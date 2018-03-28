'use strict'

const productApi = require('./api')
const productUi = require('./ui.js')
const cartParse = require('../carts/cartParse')

const onGetProducts = function (event) {
  console.log('Clicked see all products button')
  $('#intro-header, #intro-see-all-products, #intro-about-raindrop, #user-account').hide()

  productApi.getProducts()
    // store all product objects locally in a hash, where each item obj is
    // accessible by its product ID
    .then(cartParse.setAllProducts)
    .then(productUi.getProductsSuccess)
    .catch(productUi.getProductsFailure)
}

const onGetProductsByCategory = function (event) {
  console.log('Clicked #products-clothing')
  $('#intro-header, #intro-see-all-products, #intro-about-raindrop, #user-account').hide()
  const category = $(this).attr('data-id')

  productApi.getProductsByCategory(category)
    .then(productUi.getProductsSuccess)
    .catch(productUi.getProductsFailure)
}

const productHandlers = () => {
  $('#see-all-products, #all-products-button').on('click', onGetProducts)
  $('#test-forms-button').click(function () {
    $('.test-form').toggle()
  })
  $('#products-clothing').on('click', onGetProductsByCategory)
  $('#products-electronics').on('click', onGetProductsByCategory)
  $('#products-entertainment').on('click', onGetProductsByCategory)
  $('#products-home-office').on('click', onGetProductsByCategory)
  $('#products-sports-outdoors').on('click', onGetProductsByCategory)
  // $('#test-this-shit').on('click', onGetProductsByCategory)
}

module.exports = {
  productHandlers
}
