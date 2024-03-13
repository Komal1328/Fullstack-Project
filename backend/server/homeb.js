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

app.get("/bills1/",(req,res)=>{
    const sql =  "SELECT ID,Type,Amount,DATE_FORMAT(Date, '%Y-%m-%d') As Date ,User_id FROM bills";
    db.query(sql,(err,data)=>{
        if(err) return res.json(err);
        return res.json(data);
    });
});

app.post('/bills1/bills/create',(req,res) => {
    const sql = "INSERT INTO bills (`ID`,`Type`,`Amount`,`Date`,`User_ID`) VALUES (?)";
    const values = [
        req.body.ID,
        req.body.Type,
        req.body.Amount,
        req.body.Date,
        req.body.User_id
    ] 
    db.query(sql,[values],(err,data) => {
        if(err) return res.json(err);
        return res.json(data);
    });
});


app.get('/bills1/edit/:id',(req,res) => { 
    const sql="SELECT ID,Type,Amount,DATE_FORMAT(Date,'%Y-%m-%d') As Date ,User_id FROM bills where ID=?";
    const id = req.params.id;
    db.query(sql,[id],(err,result) => {
        if(err) return res.json({Error:err});
        return res.send(result);
    });
});

app.put('/bills1/update/:id',(req,res) =>{
    const sql ="UPDATE bills SET Type=?, Amount=?, Date=?, User_id=? where ID=?";
    const id = req.params.id;
    db.query(sql,[req.body.Type,req.body.Amount,req.body.Date,req.body.User_id,id],(err,result) => {
        if(err) return res.json(err);
        return res.json({updated : true})
    })
})

app.delete('/bills1/bills/:id',(req,res) => {
    const sql = "DELETE FROM bills where ID=?";
    const id = req.params.id;
    db.query(sql,[id],(err,data) => {
        if(err) return res.json("Error");
        return res.json(data);
    });
});

app.listen(8081,() => {
    console.log("Bills");
});