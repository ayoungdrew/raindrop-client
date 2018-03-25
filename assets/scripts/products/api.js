'use strict'

const config = require('../config')
const store = require('../store')

const getProducts = function () {
  return $.ajax({
    url: config.apiUrl + '/products/',
    method: 'GET',
    headers: {
      contentType: 'application/json'
    }
  })
}

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

module.exports = {
  getProducts,
  getCarts,
  getOneCart
}
