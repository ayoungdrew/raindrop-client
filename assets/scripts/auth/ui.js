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

module.exports = {
  signUpSuccess,
  signUpFailure
}
