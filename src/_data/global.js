module.exports = function() {
  return {
    env: process.env.MY_ENVIRONMENT || "dev"
  }
}
