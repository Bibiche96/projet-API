const express = require('express');
const port= 3000;
const app= express();


app.use(express.json());
app.use(express.urlencoded({extended:false} ));

app.use("/post",require("./routes/post.routes"));




app.listen (port ,()=>console.log("le serveur a demarré au port " + port))