const path = require("path")
const express = require("express")
const bodyParser = require("body-parser")


const app = express()
const note = require("./note")


// to configure the view engine
app.set('view engine', 'hbs')

// To render static files
app.use(express.static(path.join(__dirname, "./public")))
// app.use(express.static("public"))
app.use(bodyParser.urlencoded({extended:true}))


//note controller
note(app)

const PORT =  process.env.PORT || 2000
 app.listen(PORT, ()=>{
console.log("server is listening")
 }) 
 
