const express = require('express')
const app = express()
const port = 3000

// create an express server
const express = require(‘express’)
const app = express()

// use PagePress template engine
const pagePress = require('page-press')
app.use(pagePress)

// English home page request
app.get('/en', (req, res) => {

    // render new page from index.html
    res.render(
        __dirname + '/index.html', // template
        {},                        // no placeholder bindings
        'en'                       // language code
    )

})

// Sinhalese home page request
app.get('/si', (req, res) => {

    // render new page from index.html
    res.render(
        __dirname + '/index.html', // template
        {},                        // no placeholder bindings
        'si'                       // language code
    )

})

// Spanish home page request
app.get('/es', (req, res) => {

    // render new page from index.html
    res.render(
        __dirname + '/index.html', // template
        {},                        // no placeholder bindings
        'es'                       // language code
    )

})

// start the server
app.listen(80)
