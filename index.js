const express = require("express")

const app = express();

app.get("/", (req, res) => {
    res.send({"message": 'success'})    
})

app.listen(3000, ()=>{
    console.log("listening")
})