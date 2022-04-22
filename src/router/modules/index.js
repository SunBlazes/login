const files = require.context(".", false, /^\.\/(?!(index))\w+\.js$/)

let routes = []

files.keys().forEach((file) => {
  routes = routes.concat(files(file).default)
})

export default routes
