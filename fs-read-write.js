const express = require('express');
const fs = require("fs");
const port = 7788;
const app = express();//create objext of express

app.use(express.json());
app.use(express.urlencoded({ extended: false }))


app.use(express.static('static'))
app.use("/", express.static('public'))

app.use(express.static('images'))
app.use("/", express.static('public/images'))





app.get("/", (req, res) => {


    // res.writeHead(200,{'Content-Type':'Text/Html'});
   
    res.sendFile(__dirname + "/index.html")
    let create = req.body.create;

})


app.get("/createfile", (req, res) => {


    if(fs.existsSync("neosoft.txt")){
        res.end("Already Exists");
    }
    else{
        fs.writeFile('neosoft.txt',"Welcome to Neosoft Your file! Created succesfully!!!",(err)=>{
            if(err) throw err
            else res.end('File Created');
        })
    }

})


app.get("/readdata", (req, res) => {


    if(fs.existsSync("neosoft.txt")){
        let data=fs.readFileSync("neosoft.txt");
        res.write("data.toString()");
    }
    else{
        res.end("File is not Exists");
    }



})


app.get("/deletefile", (req, res) => {



    if(fs.existsSync("neosoft.txt")){
        fs.unlink("neosoft.txt",(err)=>{
            if(err) throw err
            else res.end("File Deleted")
        })
    }
    else{
        res.end("File is not Exist");
    }

})


app.get("/updatefile", (req, res) => {

    if(fs.existsSync("neosoft.txt")){
        fs.existsSync("neosoft.txt")
            fs.appendFile("neosoft.txt","Data Added Successfully!",(err)=>{
                if (err) throw err
                else res.end("data Updated");
            });
        
    }
    else{
        res.end("file is not exists")
    }




})

app.listen(port,(err)=>{
    if(err) throw err
    else{
        console.log(`Server work on ${port}`)
    }
})