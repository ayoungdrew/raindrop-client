'use strict'

const showProductsTemplate = require('../templates/product-listing.handlebars')

const getProductsSuccess = function (data) {
  console.log(data)

  const showProducts = showProductsTemplate({ products: data.products })
  $('#all-products-content').html(showProducts)
}

const getProductsFailure = function () {
  console.log('Failed to get all products')
}

module.exports = {
  getProductsSuccess,
  getProductsFailure
}
