async function routes(fastify, options) {
    fastify.get('/', async (request, reply) => {
        fastify.io.sockets.emit('message', 'Update')
        return { hello: 'world' }
    })
}

module.exports = routes
