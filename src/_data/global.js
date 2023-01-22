module.exports = function() {
  return {
    env: process.env.NODE_ENV === "production" ? "prod" : "dev"
  }
}
