const express = require('express')
const app     = express()
const port    = 2505

app.use(express.static('public'))
app.use('/css', express.static(__dirname + 'public/css'))
app.use('/js', express.static(__dirname + 'public/js'))

app.set('views', './src/views')
app.set('view engine', 'ejs')

// set the router for /detect endpoint
const detectRouter = require('./src/routes/detect')
app.use('/detect', detectRouter)

app.listen(port, () => console.log(`Listening on port ${port}`))
