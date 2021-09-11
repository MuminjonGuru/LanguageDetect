const express = require('express')
const detectRouter = express.Router()
const axios = require('axios')

detectRouter.get('', async(req, res) => {
    try{
        // lookup given query
        const response = await axios.get('https://api.languagelayer.com/detect?access_key=f3d276ac0beac680f6a2a6eeb640102c&query=programming')

        // send json response to embedded js 
        res.render('detect', { detectedData : response.data.results })  // data is here json

    } catch (error) {
        if(error.response) {
            console.log(error.response.data)
        } else if(error.request) {
            console.log(error.request)
        } else {
            console.log('Error', error.message)
        }
    }
});

module.exports = detectRouter
