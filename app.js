// Require the framework and instantiate it
const fastify = require('fastify')({
  logger: {
    prettyPrint: true
  }
})
const fastifyStatic = require('fastify-static')
const path = require('path')
if(process.env.NODE_ENV !== 'production')
fastify.register(require('fastify-error-page'))


// Default Img
fastify.register(fastifyStatic, {
  root: path.join(__dirname, '59b514174bffe4ae402b3d63aad79fe0'),
  prefix: '/59b514174bffe4ae402b3d63aad79fe0/',
  decorateReply: false // the reply decorator has been added by the first plugin registration
})
//Themeforest WordPress Img Folder
fastify.register(fastifyStatic, {
  root: path.join(__dirname, '59b514174bffe4ae402b3d63aad79fe0/A18961AF4B7341366AB0F04C30227BC'),
  prefix: '/59b514174bffe4ae402b3d63aad79fe0/A18961AF4B7341366AB0F04C30227BC/',
  prefixAvoidTrailingSlash: true,
  decorateReply: false // the reply decorator has been added by the first plugin registration
})
// Themeforest Other Img
fastify.register(fastifyStatic, {
  root: path.join(__dirname, '59b514174bffe4ae402b3d63aad79fe0/C8216FE0F7F657023D244DF276F7FD55'),
  prefix: '/59b514174bffe4ae402b3d63aad79fe0/C8216FE0F7F657023D244DF276F7FD55/',
  decorateReply: false // the reply decorator has been added by the first plugin registration
})
// Codecanyon Plugins Img
fastify.register(fastifyStatic, {
  root: path.join(__dirname, '59b514174bffe4ae402b3d63aad79fe0/B5323956C253DC1D9B26FEF42FC81F76'),
  prefix: '/59b514174bffe4ae402b3d63aad79fe0/B5323956C253DC1D9B26FEF42FC81F76/',
  decorateReply: false // the reply decorator has been added by the first plugin registration
})
// Codecanyon Other Img
fastify.register(fastifyStatic, {
  root: path.join(__dirname, '59b514174bffe4ae402b3d63aad79fe0/D99838AD72AA81F2414063C950310582610ACBD9'),
  prefix: '/59b514174bffe4ae402b3d63aad79fe0/D99838AD72AA81F2414063C950310582610ACBD9/',
  decorateReply: false // the reply decorator has been added by the first plugin registration
})
// Apps Img
fastify.register(fastifyStatic, {
  root: path.join(__dirname, '59b514174bffe4ae402b3d63aad79fe0/G90425E31E9C2BF8FDA4206F964955D9'),
  prefix: '/59b514174bffe4ae402b3d63aad79fe0/G90425E31E9C2BF8FDA4206F964955D9/',
  decorateReply: false // the reply decorator has been added by the first plugin registration
})
// Games Img
fastify.register(fastifyStatic, {
  root: path.join(__dirname, '59b514174bffe4ae402b3d63aad79fe0/EF6C8D74112CB85772726245092434BB'),
  prefix: '/59b514174bffe4ae402b3d63aad79fe0/EF6C8D74112CB85772726245092434BB/',
  decorateReply: false // the reply decorator has been added by the first plugin registration
})
// Udemy Img
fastify.register(fastifyStatic, {
  root: path.join(__dirname, '59b514174bffe4ae402b3d63aad79fe0/FD8198068F6BF7F6BDA88A8047D4BC82DF17475AF634B30CE5'),
  prefix: '/59b514174bffe4ae402b3d63aad79fe0/FD8198068F6BF7F6BDA88A8047D4BC82DF17475AF634B30CE5',
  decorateReply: false // the reply decorator has been added by the first plugin registration
})
// Course Img
fastify.register(fastifyStatic, {
  root: path.join(__dirname, '59b514174bffe4ae402b3d63aad79fe0/HD4A165F35851A9851A619E6BF959BD0'),
  prefix: '/59b514174bffe4ae402b3d63aad79fe0/HD4A165F35851A9851A619E6BF959BD0/',
  decorateReply: false // the reply decorator has been added by the first plugin registration
})
// Declare a route
fastify.get('/start', async function (req, reply) {
  throw new Error('Opppps!')
})
