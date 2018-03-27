'use strict'

const authEvents = require('./auth/events.js')
const productEvents = require('./products/events.js')
const cartEvents = require('./carts/events.js')
const checkoutEvents = require('./checkouts/events.js')

$(() => {
  authEvents.addHandlers()
  productEvents.productHandlers()
  cartEvents.addHandlers()
  checkoutEvents.checkoutHandlers()
  $('#sign-out-menu, #change-password-menu, #cart-menu, #account-menu, .add-to-cart-button, .test-form, #user-account').hide()
  // $('#change-password-menu').hide()
})
