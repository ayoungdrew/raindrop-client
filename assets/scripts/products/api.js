'use strict'

const config = require('../config')

const getProducts = function () {
  return $.ajax({
    url: config.apiUrl + '/products/',
    method: 'GET',
    headers: {
      contentType: 'application/json'
    }
  })
}

module.exports = {
  getProducts
}
