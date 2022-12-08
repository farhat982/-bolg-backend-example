const express = require('express')
const router = express.Router()
const blogTemplateCopy = require('../models/BlogModel')


router.post('/blogs', (request , response) => {

    const blogPosted = new blogTemplateCopy ({
            title:request.body.title,
            mainBody:request.body.mainBody,
            author:request.body.author
    })

    blogPosted.save()
    .then(data =>{
        response.json(data)
    })
    .catch(error => {
        response.json(error)
    })
    
})

module.exports = router
