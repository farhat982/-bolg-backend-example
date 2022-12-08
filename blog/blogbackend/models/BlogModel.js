const mongoose = require('mongoose')

const blogTemplate = new mongoose.Schema ({

    title:{
        type:String,
        required:true
    },
    mainBody:{
        type:String,
        required:true
    },
    author:{
        type:String,
        required:true
    },
    date:{
        type:Date,
        default:Date.now
    }
})

module.exports = mongoose.model('mytable', blogTemplate)