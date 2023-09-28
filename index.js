
const express = require('express')
const app = express()
const route = require("./routs/rout")
const bodyParser = require('body-parser')
const cors = require('cors')

app.use(bodyParser.urlencoded({ extended: true }));
app.use(cors())
app.use(bodyParser.json())


app.use(route)



app.listen(3000, () => console.log(`server working on port 3000`))