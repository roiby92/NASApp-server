const express = require('express')
const router = express.Router()
const Img = require('../model/Img')

router.get('/images', function (req, res) {
    Img.find({}).
        then(images => res.send(images))
        .catch(e => console.log(e))
})

router.post('/image', async function (req, res) {
    const image = new Img(req.body)
    await image.save()
    res.send(image)
})

router.delete('/image/:id', function ( req,res) {
    const {id}  = req.params
    Img.findByIdAndDelete(id)
        .then(image => res.send(image))
        .catch(e => console.log(e))
})

module.exports = router