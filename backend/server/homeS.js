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
});

app.get("/",(req,res)=>{
    const sql = "SELECT * FROM student";
    db.query(sql,(err,data)=>{
        if(err) return res.json(err);
        return res.json(data);
    });
});

app.post('/student/create',(req,res) => {
    const sql = "INSERT INTO student (`ID`,`Name`,`Income`) VALUES (?)";
    const values = [
        req.body.ID,
        req.body.Name,
        req.body.Income,
        req.body.Password
    ] 
    db.query(sql,[values],(err,data) => {
        if(err) return res.json("Error");
        return res.json(data);
    });
});

app.get('/edit/:id',(req,res) => { 
    const sql="SELECT * FROM student where ID=?";
    const id = req.params.id;
    db.query(sql,[id],(err,result) => {
        if(err) return res.json({Error:err});
        return res.send(result);
    });
});

app.put('/update/:id',(req,res) =>{
    const sql ="UPDATE student SET Name=?, Income=?, Password=? where ID=?";
    const id = req.params.id;
    db.query(sql,[req.body.Name,req.body.Income,req.body.Password,req.params.id],(err,result) => {
        if(err) return res.json(err);
        return res.json({updated : true})
    });
});

app.delete('/student/:id',(req,res) => {
    const sql = "DELETE FROM student where ID=?";
    const id = req.params.id;
    db.query(sql,[id],(err,data) => {
        if(err) return res.json("Error");
        return res.json(data);
    });
});

app.listen(8081,() => {
    console.log("Student");
});