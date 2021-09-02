require('dotenv').config() // this allows to stash "artificial env variables" in the project
const express = require('express')
const cors = require('cors')

console.log(process.env.USERNAME)
console.log(process.env.HOME)
console.log(process.env.PORT)
console.log(process.env.LADY)
console.log(process.env.API_SECRET)

const PORT = process.env.PORT || 5000 //fallback is a good idea


const server = express()

server.use(express.json())
server.use(cors())

server .get('/', (req, res)=>{
    res.send(`<h1>Web 45 ROCKS!</h1>`)
})

server.get('/api', (req,res) =>{
    res.json({ message: 'web 45 is awesome!'})
})

server.listen(PORT, () =>{
    console.log(`listening on port ${PORT}`)
});
