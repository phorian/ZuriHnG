const express = require('express')
const app = express()
const port = 8080


app.get('/', (req, res) => res.json({
    slackUsername : "priest",
    backend : true,
    age : 23,
    Bio : "Excited to be a part of HNG"
}))

app.listen(port, () => {
    console.log(`Listening at http://localhost${port}`)
})