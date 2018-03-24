const productApi = require('./api')

const onGetProducts = function (event) {
  console.log('Clicked see all products button')

  productApi.getProducts()
}

const productHandlers = () => {
  $('#see-all-products').on('click', onGetProducts)
}

module.exports = {
  productHandlers
}
