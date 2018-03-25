'use strict'

const getCartsSuccess = function (data) {
  console.log('retrieved carts data is: ', data)
}

const getCartsFailure = function (error) {
  console.log('Failed to get all carts')
  console.log(error)
}

const getOneCartSuccess = function (data) {
  console.log('retrieved cart data is: ', data)
}

const getOneCartFailure = function (error) {
  console.log('Failed to get one cart')
  console.log(error)
}

const createCartSuccess = function (data) {
  console.log('created cart data is: ', data)
}

const createCartFailure = function (error) {
  console.log('Failed to create a cart')
  console.log(error)
}

const updateCartSuccess = function (data) {
  console.log('Successfully updated cart')
}

const updateCartFailure = function (error) {
  console.log('Failed to update a cart')
  console.log(error)
}

const deleteCartSuccess = function (data) {
  console.log('Successfully deleted cart')
}

const deleteCartFailure = function (error) {
  console.log('Failed to delete a cart')
  console.log(error)
}

module.exports = {
  getCartsSuccess,
  getCartsFailure,
  getOneCartSuccess,
  getOneCartFailure,
  createCartSuccess,
  createCartFailure,
  updateCartSuccess,
  updateCartFailure,
  deleteCartSuccess,
  deleteCartFailure
}
