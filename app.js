'use strict'

const fastify = require('fastify')

function build(opts={}) {
  const app = fastify(opts)

  app.get('/get', async function (request, reply) {
    reply.send({ hello: 'world' })
  })

  app.post('/post', async function (request, reply) {
   reply.send({...request.body, comment: 'POST'})
  })

  app.put('/put', async function (request, reply) {
    reply.send({...request.body, comment: 'PUT'})
  })

  app.delete('/delete', async function (request, reply) {
    reply.send({comment: 'DELETE'})
  })

  return app
}

module.exports = build