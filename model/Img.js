const mongoose = require('mongoose')
const Schema = mongoose.Schema

const imgSchema = new Schema({
    nId:String,
    title:String,
    imgUrl:String,
    description:String
})

const Img = mongoose.model('Img', imgSchema)

module.exports = Img