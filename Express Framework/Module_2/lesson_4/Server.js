//Imports
const express = require('express')
//Instantiations
const app = express()

app.use((req, res, next) => {
    
})

//Routes
app.get('/', (req, res) => {
    res.send({msg:'Hello world'})
})

//Bootup
app.listen(3000)