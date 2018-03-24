'use strict'

const productApi = require('./api')
const productUi = require('./ui.js')

const onGetProducts = function (event) {
  console.log('Clicked see all products button')

  productApi.getProducts()
    .then(productUi.getProductsSuccess)
    .catch(productUi.getProductsFailure)
}

const productHandlers = () => {
  $('#see-all-products').on('click', onGetProducts)
}

module.exports = {
  productHandlers
}
