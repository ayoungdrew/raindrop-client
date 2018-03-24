'use strict'

const getProductsSuccess = function (data) {
  console.log(data)
}

const getProductsFailure = function () {
  console.log('Failed to get all products')
}

module.exports = {
  getProductsSuccess,
  getProductsFailure
}
