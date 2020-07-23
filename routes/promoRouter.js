const express = require('express')
const bodyParser = require('body-parser')

const promoRouter = express.Router()

promoRouter.use(bodyParser.json())

promoRouter.route('/')
    .all((req, res, next) => {
        res.statusCode = 200
        res.setHeader('Content-Type', 'text/plain')
        next()
    })
    .get((req, res, next) => {
        res.end('Will Send All The Promos To You!!!!')
    })
    .post((req, res, next) => {
        res.end('Will add the Promo: ' + req.body.name + ' whit details: ' + req.body.description)
    })
    .put((req, res, next) => {
        res.statusCode = 403
        res.end('PUT operations not suported on /promotions ')
    })
    .delete((req, res, next) => {
        res.statusCode = 403
        res.end('Deleting all the Promos')
    })

promoRouter.route('/:promoId')
    .all((req, res, next) => {
        res.statusCode = 200
        res.setHeader('Content-Type', 'text/plain')
        next()
    })
    .get((req, res, next) => {
        res.end('Will Send details of the Promos:' + req.params.promoId  + ' To You')
    })
    .post((req, res, next) => {
        res.end('Post operations not suported on /promotions/:promoId' + 
            req.params.leaderId)
    })
    .put((req, res, next) => {
        res.write('Will update the Promo' + req.params.promoId + '\n')
        res.end('Will Update the Promo: ' + req.body.name + 
            'with details: ' + req.body.description)
    })
    .delete((req, res, next) => {
        res.end('Deleting : Promo' + req.params.promoId)
    })
    

module.exports = promoRouter