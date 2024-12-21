const express = require('express')
const app = express()
const PORT = 3000

app.use( express.json() )

app.get('/lang', (req, res) => {   /// REST API LANG ROUTES TESTING 
    res.status(200).send({
        ipAddress: getIp,
    })
})

var getIp = 7

app.post('/lang/:region/', (req, res) => {

    const { region } = req.params
    const { language } = req.body

    if (!language) {
        return res.status(418).send({ message: "No language inputted" })
    }

    res.send({
        language: `${language}`, region: `${region}`,
    })

})

app.listen(PORT)

