const express = require('express')
const app = express()
const PORT = process.env.PORT || 8080


app.get('/', (req, res) => res.json({
    slackUsername : "priest",
    backend : true,
    age : 23,
    Bio : "I am a Priest"
}))

app.listen(PORT, () => {
    console.log(`Listening at http://localhost${PORT}`)
})