'use strict'

const authEvents = require('./auth/events.js')
const productEvents = require('./products/events.js')

$(() => {
  authEvents.addHandlers()
})

$(() => {
  productEvents.productHandlers()
})
