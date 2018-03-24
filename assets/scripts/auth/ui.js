'use strict'

const signUpSuccess = function (data) {
  $('#sign-up-modal').modal('hide')
  $('#sign-up').get(0).reset()
  console.log('Sign Up Success')
}

const signUpFailure = function () {
  $('#sign-up').get(0).reset()
  console.log('Sign Up Error')
}

const signInSuccess = function (data) {
  $('#sign-in').get(0).reset()
  console.log('Sign In Success')
}

const signInFailure = function () {
  $('#sign-in').get(0).reset()
  console.log('Sign In Error')
}

module.exports = {
  signUpSuccess,
  signUpFailure,
  signInSuccess,
  signInFailure
}
