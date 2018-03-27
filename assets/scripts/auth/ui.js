'use strict'

const store = require('../store')
const toast = require('../templates/toast.js')

const signUpSuccess = function (data) {
  $('#sign-up-modal').modal('hide')
  $('#sign-up').get(0).reset()
  toast.success('Account successfully created!')
  console.log('Sign Up Success')
}

const signUpFailure = function () {
  $('#sign-up').get(0).reset()
  toast.failure('There was an error on creating your account. Please try again.')
  console.log('Sign Up Error')
}

const signInSuccess = function (data) {
  store.user = data.user
  console.log('User data is: ', data.user)
  $('#sign-in-modal').modal('hide')
  $('#sign-in').get(0).reset()
  toast.success('Successfully signed in.')
  console.log('Sign In Success')
  $('#intro-header').css({
    'display': 'block'
  })
}

const signInFailure = function (error) {
  $('#sign-in').get(0).reset()
  console.error(error)
  toast.failure('There was an error on your sign in attempt. Please try again.')
  console.log('Sign In Error')
}

const changePasswordSuccess = function (data) {
  $('#change-password-modal').modal('hide')
  $('#change-password').get(0).reset()
  toast.success('Successfully changed password.')
  console.log('Change Password Success')
}

const changePasswordFailure = function () {
  $('#change-password').get(0).reset()
  toast.failure('There was an error on your change password attempt. Please try again.')
  console.log('Change Password Error')
}

const signOutSuccess = function (data) {
  toast.success('Successfully signed out.')
  console.log('Sign Out Success')
  $('#sign-out').css({
    'display': 'none'
  })
  $('#sign-in').css({
    'display': 'block'
  })
}

const signOutFailure = function () {
  toast.failure('There was an error on your sign out attempt. Please try again.')
  console.log('Sign Out Error')
}

module.exports = {
  signUpSuccess,
  signUpFailure,
  signInSuccess,
  signInFailure,
  changePasswordSuccess,
  changePasswordFailure,
  signOutSuccess,
  signOutFailure
}
