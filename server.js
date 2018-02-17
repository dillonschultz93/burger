// ==== Dependencies ==========================================================
const express = require('express')
const bodyParser = require('body-parser')
const methodOverride = require('method-override')

// ==== App setup =============================================================
const app = express()
const PORT = process.env.PORT || 8080

app.use(express.static('public'))

app.use(bodyParser.urlencoded({extended: true}))
app.use(bodyParser.json())
app.use(bodyParser.text({type: 'text/html'}))

app.use(methodOverride('_method'))

const exphbs = require("express-handlebars")

app.engine("handlebars", exphbs({ defaultLayout: "main" }))
app.set("view engine", "handlebars")

// ==== Routes ================================================================
const routes = require("./controllers/burgers_controller.js");

app.use('/', routes);

// Start the app and listen on a PORT
app.listen(PORT, function(){
  console.log(`App listening on PORT: ${PORT}`)
})