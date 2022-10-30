const express = require('express')
const app = express()
const PORT = process.env.PORT || 8080
const cors = require('cors')

app.use(cors());


app.get('/', (req, res) => res.json({
    slackUsername : "priest",
    backend : true,
    age : 23,
    bio : "I am a Priest"
}))

app.listen(PORT, () => {
    console.log(`Listening at http://localhost${PORT}`)
})