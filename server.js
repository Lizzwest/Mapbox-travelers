let express = require('express')
let app = express()
let ejsLayouts = require('express-ejs-layouts')
const methodOverride= require("method-override")

app.use(ejsLayouts);
app.set('view engine', 'ejs');
app.use(express.urlencoded({ extended: false }));
app.use(express.static("static"));
app.use(methodOverride('_method'))

app.get('/', (req, res)=>{
  res.render('home')
})


app.get("/search", (req, res)=>{
 geo
  res.render("results")
})
app.listen(process.env.PORT || 8000, console.log('🎧 Port 8000 🎧'))