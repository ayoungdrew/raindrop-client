'use strict'

const getCartsSuccess = function (data) {
  console.log('retrieved carts data is: ', data)
}

const getCartsFailure = function () {
  console.log('Failed to get all carts')
}

const getOneCartSuccess = function (data) {
  console.log('retrieved cart data is: ', data)
}

const getOneCartFailure = function () {
  console.log('Failed to get one cart')
}

const createCartSuccess = function (data) {
  console.log('created cart data is: ', data)
}

const createCartFailure = function () {
  console.log('Failed to create a cart')
}

module.exports = {
  getCartsSuccess,
  getCartsFailure,
  getOneCartSuccess,
  getOneCartFailure,
  createCartSuccess,
  createCartFailure
}
