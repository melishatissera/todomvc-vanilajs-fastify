// Require the fastify framework
const fastify = require('fastify')()

module.exports = async function (fastify, options) {
    fastify.register(require('fastify-static'), { root: __dirname })
}