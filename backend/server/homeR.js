const express = require('express');
const cors = require("cors");
const mysql = require("mysql");

const app = express();
app.use(express.json());

app.use(cors());

const db = mysql.createConnection({
    host:"localhost",
    user: "root",
    password:"",
    database:"student_budgeting_system"
})

app.get("/rent1/",(req,res)=>{
    const sql = "SELECT ID,Name,Amount,DATE_FORMAT(Date, '%Y-%m-%d') As Date ,User_id FROM rent";
    db.query(sql,(err,data)=>{
        if(err) return res.json(err);
        return res.json(data);
    });
});

app.post('/rent1/rent/create',(req,res) => {
    const sql = "INSERT INTO rent (`ID`,`Name`,`Amount`,`Date`,`User_id`) VALUES (?)";
    const values = [
        req.body.ID,
        req.body.Name,
        req.body.Amount,
        req.body.Date,
        req.body.User_id
    ] 
    db.query(sql,[values],(err,data) => {
        if(err) return res.json(err);
        return res.json(data);
    });
});

app.get('/rent1/edit/:id',(req,res) => { 
    const sql="SELECT ID,Name,Amount,DATE_FORMAT(Date,'%Y-%m-%d') As Date ,User_id FROM rent where ID=?";
    const id = req.params.id;
    db.query(sql,[id],(err,result) => {
        if(err) return res.json({Error:err});
        return res.send(result);
    });
});

app.put('/rent1/update/:id',(req,res) =>{
    const sql ="UPDATE rent SET Name=?, Amount=?, Date=?, User_id=? where ID=?";
    const id = req.params.id;
    db.query(sql,[req.body.Name,req.body.Amount,req.body.Date,req.body.User_id,id],(err,result) => {
        if(err) return res.json(err);
        return res.json({updated : true})
    });
});

app.delete('/rent1/rent/:id',(req,res) => {
    const sql = "DELETE FROM rent where ID=?";
    const id = req.params.id;
    db.query(sql,[id],(err,data) => {
        if(err) return res.json("Error");
        return res.json(data);
    });
});

app.listen(8081,() => {
    console.log("Rent");
});