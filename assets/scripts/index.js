'use strict'

const authEvents = require('./auth/events.js')
const productEvents = require('./products/events.js')
const cartEvents = require('./carts/events.js')

$(() => {
  authEvents.addHandlers()
  productEvents.productHandlers()
  cartEvents.addHandlers()
})
