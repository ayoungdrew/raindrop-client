'use strict'

const config = require('../config')
const store = require('../store')

const getCarts = function () {
  return $.ajax({
    url: config.apiUrl + '/carts/',
    method: 'GET',
    headers: {
      contentType: 'application/json',
      Authorization: 'Token token=' + store.user.token
    }
  })
}

const getOneCart = function (cartId) {
  return $.ajax({
    url: config.apiUrl + '/carts/' + cartId,
    method: 'GET',
    headers: {
      contentType: 'application/json',
      Authorization: 'Token token=' + store.user.token
    }
  })
}

const createCart = function (data) {
  return $.ajax({
    url: config.apiUrl + '/carts',
    method: 'POST',
    headers: {
      contentType: 'application/json',
      Authorization: 'Token token=' + store.user.token
    },
    data
  })
}

const updateCart = function (cartId, data) {
  return $.ajax({
    url: config.apiUrl + '/carts/' + cartId,
    method: 'PATCH',
    headers: {
      contentType: 'application/json',
      Authorization: 'Token token=' + store.user.token
    },
    data
  })
}

const purchasedTrue = function (data) {
  return $.ajax({
    url: config.apiUrl + '/carts/' + store.activeCart._id,
    method: 'PATCH',
    headers: {
      contentType: 'application/json',
      Authorization: 'Token token=' + store.user.token
    },
    data: {
      cart: {
        purchased: true,
        cartProducts: store.activeCart.cartProducts
      }
    }
  })
}

const deleteCart = function (cartId) {
  return $.ajax({
    url: config.apiUrl + '/carts/' + cartId,
    method: 'DELETE',
    headers: {
      contentType: 'application/json',
      Authorization: 'Token token=' + store.user.token
    }
  })
}

module.exports = {
  getCarts,
  getOneCart,
  createCart,
  updateCart,
  purchasedTrue,
  deleteCart
}
