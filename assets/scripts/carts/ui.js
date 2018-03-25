'use strict'

const getCartsSuccess = function (data) {
  console.log('cart data is: ', data)
}

const getCartsFailure = function () {
  console.log('Failed to get all products')
}

const getOneCartSuccess = function (data) {
  console.log('cart data is: ', data)
}

const getOneCartFailure = function () {
  console.log('Failed to get all products')
}

module.exports = {
  getCartsSuccess,
  getCartsFailure,
  getOneCartSuccess,
  getOneCartFailure
}
