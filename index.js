const express = require("express")
const app = express()

//uando o express como view engine
app.set('view engine','ejs')
//arquivos estaticos

app.use(express.static('public'))

app.get("/",(req,res) =>{
  res.render("index")
})

app.get("/perguntar",(req,res) =>{
    res.render("index")
  })

app.listen(8080,() =>{console.log("App rodando")})