const fastify = require('fastify')()

fastify.get('/', async (request, reply) => {
  return { hello: 'world' }
})

const start = async () => {
  try {
    await fastify.listen(process.env['NODE_PORT'] || 7004, process.env['NODE_ADDRESS'] || '0.0.0.0')
    console.info(`server listening on http://%s:%s`, fastify.server.address().address, fastify.server.address().port)
  } catch (err) {
    console.error(err)
    process.exit(1)
  }
}

start()
