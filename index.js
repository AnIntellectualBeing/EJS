import express from "express"
const app = express();

const port = 3000;

app.get("/", (req,res) => {
    const data = {
        tittle : "EJS Tags",
        seconds : new Date().getSeconds(),
        items : ["apple", "banana", "cherry"],
        htmlContent : "<em> Welcome to my ejs page</em>"
    };
    res.render("index.ejs",data);
})

app.listen(port, ()=>{
    console.log(`Server is running on port ${port}.`);
})