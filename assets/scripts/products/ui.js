'use strict'

const showProductsTemplate = require('../templates/product-listing.handlebars')
const toast = require('../templates/toast.js')

const getProductsSuccess = function (data) {
  console.log(data)
  const showProducts = showProductsTemplate({ products: data.products })
  $('#all-products-content').html(showProducts)
}

const getProductsFailure = function () {
  toast.failure('Server connection error. Please try again later.')
  console.log('Failed to get all products')
}

module.exports = {
  getProductsSuccess,
  getProductsFailure
}
