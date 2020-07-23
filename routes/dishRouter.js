const express = require('express')
const bodyParser = require('body-parser')

const dishRouter = express.Router()

dishRouter.use(bodyParser.json())

dishRouter.route('/')
    .all((req, res, next) => {
        res.statusCode = 200
        res.setHeader('Content-Type', 'text/plain')
        next()
    })
    .get((req, res, next) => {
        res.end('Will Send All The Dishes To You!!!!')
    })
    .post((req, res, next) => {
        res.end('Will add the dish: ' + req.body.name + ' whit details: ' + req.body.description)
    })
    .put((req, res, next) => {
        res.statusCode = 403
        res.end('PUT operations not suported on /dishes ')
    })
    .delete((req, res, next) => {
        res.statusCode = 403
        res.end('Deleting all the dishes')
    })

dishRouter.route('/:dishId')
    .all((req, res, next) => {
        res.statusCode = 200
        res.setHeader('Content-Type', 'text/plain')
        next()
    })
    .get((req, res, next) => {
        res.end('Will Send details of the dish:' + req.params.dishId  + ' To You')
    })
    .post((req, res, next) => {
        res.end('Post operations not suported on dishes/' + 
            req.params.dishId)
    })
    .put((req, res, next) => {
        res.write('Will update the dish' + req.params.dishId + '\n')
        res.end('Will Update the dish: ' + req.body.name + 
            'with details: ' + req.body.description)
    })
    .delete((req, res, next) => {
        res.end('Deleting dish: ' + req.params.dishId)
    })
    

module.exports = dishRouter