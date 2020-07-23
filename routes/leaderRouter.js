const express = require('express')
const bodyParser = require('body-parser')

const leaderRouter = express.Router()

leaderRouter.use(bodyParser.json())

leaderRouter.route('/')
    .all((req, res, next) => {
        res.statusCode = 200
        res.setHeader('Content-Type', 'text/plain')
        next()
    })
    .get((req, res, next) => {
        res.end('Will Send All The Leaders To You!!!!')
    })
    .post((req, res, next) => {
        res.end('Will add the Leader: ' + req.body.name + ' whit details: ' + req.body.description)
    })
    .put((req, res, next) => {
        res.statusCode = 403
        res.end('PUT operations not suported on /leaders ')
    })
    .delete((req, res, next) => {
        res.statusCode = 403
        res.end('Deleting all the Leaders')
    })

leaderRouter.route('/:leaderId')
    .all((req, res, next) => {
        res.statusCode = 200
        res.setHeader('Content-Type', 'text/plain')
        next()
    })
    .get((req, res, next) => {
        res.end('Will Send details of the Leader:' + req.params.leaderId  + ' To You')
    })
    .post((req, res, next) => {
        res.end('Post operations not suported on Leaders/' + 
            req.params.leaderId)
    })
    .put((req, res, next) => {
        res.write('Will update the Leader' + req.params.leaderId + '\n')
        res.end('Will Update the Leader: ' + req.body.name + 
            'with details: ' + req.body.description)
    })
    .delete((req, res, next) => {
        res.end('Deleting Leader: ' + req.params.leaderId)
    })
    

module.exports = leaderRouter