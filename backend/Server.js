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

// ***************************************** Food **************************************************

app.get("/food1/",(req,res)=>{
    const sql = "SELECT ID,Item,Amount,DATE_FORMAT(Date, '%Y-%m-%d') As Date ,User_id FROM food";
    // const sql = "SELECT * FROM food";
    db.query(sql,(err,data)=>{
        if(err) return res.json(err);
        return res.json(data);
    });
});

app.post('/food1/food/create',(req,res) => {
    const sql = "INSERT INTO food (`ID`,`Item`,`Amount`,`Date`,`User_id`) VALUES (?)";
    const values = [
        req.body.ID,
        req.body.Item,
        req.body.Amount,
        req.body.Date,
        req.body.User_id
    ] 
    db.query(sql,[values],(err,data) => {
        if(err) return res.json(err);
        return res.json(data);
    });
});

app.get('/food1/edit/:id',(req,res) => { 
    const sql="SELECT ID,Item,Amount,DATE_FORMAT(Date,'%Y-%m-%d') As Date ,User_id FROM food where ID=?";
    const id = req.params.id;
    db.query(sql,[id],(err,result) => {
        if(err) return res.json({Error:err});
        return res.send(result);
    });
});

app.put('/food1/update/:id',(req,res) =>{
    const sql ="UPDATE food SET Item=?, Amount=?, Date=?, User_id=? where ID=?";
    const id = req.params.id;
    db.query(sql,[req.body.Item,req.body.Amount,req.body.Date,req.body.User_id,id],(err,result) => {
        if(err) return res.json(err);
        return res.json({updated : true})
    });
});


app.delete('/food1/food/:id',(req,res) => {
    const sql = "DELETE FROM food where ID=?";
    const id = req.params.id;
    db.query(sql,[id],(err,data) => {
        if(err) return res.json("Error");
        return res.json(data);
    });
});

// ***************************************** Bills **************************************************

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
    });
});

app.delete('/bills1/bills/:id',(req,res) => {
    const sql = "DELETE FROM bills where ID=?";
    const id = req.params.id;
    db.query(sql,[id],(err,data) => {
        if(err) return res.json("Error");
        return res.json(data);
    });
});

// ***************************************** Homeaccessary **************************************************

app.get("/homeaccessary1/",(req,res)=>{
    const sql = "SELECT ID,Item,Amount,DATE_FORMAT(Date, '%Y-%m-%d') As Date ,User_id FROM homeaccessary";
    db.query(sql,(err,data)=>{
        if(err) return res.json(err);
        return res.json(data);
    });
});

app.post('/homeaccessary1/homeaccessary/create',(req,res) => {
    const sql = "INSERT INTO homeaccessary (`ID`,`Item`,`Amount`,`Date`,`User_id`) VALUES (?)";
    const values = [
        req.body.ID,
        req.body.Item,
        req.body.Amount,
        req.body.Date,
        req.body.User_id
    ] 
    db.query(sql,[values],(err,data) => {
        if(err) return res.json(err);
        return res.json(data);
    });
});

app.get('/homeaccessary1/edit/:id',(req,res) => { 
    const sql="SELECT ID,Item,Amount,DATE_FORMAT(Date,'%Y-%m-%d') As Date ,User_id FROM homeaccessary where ID=?";
    const id = req.params.id;
    db.query(sql,[id],(err,result) => {
        if(err) return res.json({Error:err});
        return res.send(result);
    });
});

app.put('/homeaccessary1/update/:id',(req,res) =>{
    const sql ="UPDATE homeaccessary SET Item=?, Amount=?, Date=?, User_id=? where ID=?";
    const id = req.params.id;
    db.query(sql,[req.body.Item,req.body.Amount,req.body.Date,req.body.User_id,id],(err,result) => {
        if(err) return res.json(err);
        return res.json({updated : true})
    });
});

app.delete('/homeaccessary1/homeaccessary/:id',(req,res) => {
    const sql = "DELETE FROM homeaccessary where ID=?";
    const id = req.params.id;
    db.query(sql,[id],(err,data) => {
        if(err) return res.json("Error");
        return res.json(data);
    });
});

// ***************************************** Others **************************************************

app.get("/others1/",(req,res)=>{
    const sql = "SELECT ID,Item,Amount,DATE_FORMAT(Date, '%Y-%m-%d') As Date ,User_id FROM others";
    db.query(sql,(err,data)=>{
        if(err) return res.json("Error");
        return res.json(data);
    });
});

app.post('/others1/create',(req,res) => {
    const sql = "INSERT INTO others (`ID`,`Item`,`Amount`,`Date`,`User_ID`) VALUES (?)";
    const values = [
        req.body.ID,
        req.body.Item,
        req.body.Amount,
        req.body.Date,
        req.body.User_ID
    ] 
    db.query(sql,[values],(err,data) => {
        if(err) return res.json("Error");
        return res.json(data);
    });
});

app.get('/others1/edit/:id',(req,res) => { 
    const sql="SELECT ID,Item,Amount,DATE_FORMAT(Date,'%Y-%m-%d') As Date ,User_id FROM others where ID=?";
    const id = req.params.id;
    db.query(sql,[id],(err,result) => {
        if(err) return res.json({Error:err});
        return res.send(result);
    });
});

app.put('/others1/update/:id',(req,res) =>{
    const sql ="UPDATE others SET Item=?, Amount=?, Date=?, User_id=? where ID=?";
    const id = req.params.id;
    db.query(sql,[req.body.Item,req.body.Amount,req.body.Date,req.body.User_id,id],(err,result) => {
        if(err) return res.json(err);
        return res.json({updated : true})
    });
});

app.delete('/others1/others/:id',(req,res) => {
    const sql = "DELETE FROM others where ID=?";
    const id = req.params.id;
    db.query(sql,[id],(err,data) => {
        if(err) return res.json("Error");
        return res.json(data);
    });
});

// ***************************************** Rent **************************************************

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

// *******************************Total*******************************************************************

app.get("/total1/",(req,res)=>{
    const sql = "SELECT * FROM total";
    db.query(sql,(err,data)=>{
        if(err) return res.json(err);
        return res.json(data);
    });
});

app.get("/total1/get/",(req,res)=>{
    // const sql = "SELECT * FROM total";
    const sql = "SELECT s.ID, s.Name , s.startamount, t.Amount,(s.startamount-t.Amount) as saveamt from student s, total t WHERE s.ID=t.ID";
    db.query(sql,(err,data)=>{
        if(err) return res.json(err);
        return res.json(data);
    });
});

app.get("/total1/fetch/",(req,res)=>{
    // const sql = "SELECT * FROM total";
    const sql = " SELECT COALESCE(SUM(Amount), 0) AS Amount, 'Rent' AS ExpenseType FROM rent WHERE User_id = User_id UNION ALL SELECT COALESCE(SUM(Amount), 0) AS Amount, 'Home Accessory' AS ExpenseType FROM homeaccessary WHERE User_id = User_id UNION ALL SELECT COALESCE(SUM(Amount), 0) AS Amount, 'Food' AS ExpenseType FROM food WHERE User_id = User_id UNION ALL SELECT COALESCE(SUM(Amount), 0) AS Amount, 'Bills' AS ExpenseType FROM bills WHERE User_id = User_id UNION ALL SELECT COALESCE(SUM(Amount), 0) AS Amount, 'Others' AS ExpenseType FROM others WHERE User_id = User_id "
    const User_id=req.params.User_id;
    db.query(sql,(err,data)=>{
        if(err) return res.json(err);
        return res.json(data);
    });
});

// ***************************************** Stdent **************************************************

app.get("/student1/",(req,res)=>{
    const sql = "SELECT * FROM student";
    db.query(sql,(err,data)=>{
        if(err) return res.json(err);
        return res.json(data);
    });
});

// app.post('/student1/student/create',(req,res) => {
//     const sql = "INSERT INTO student (`ID`,`Name`,`Income`,`startAmount`) VALUES (?)";
//     const values = [
//         req.body.ID,
//         req.body.Name,
//         req.body.Income,
//         req.body.startAmount
//     ] 
//     db.query(sql,[values],(err,data) => {
//         if(err) return res.json(err);
//         return res.json(data);
//     });
// });

app.get('/student1/edit/:id',(req,res) => { 
    const sql="SELECT ID,Name,Income,startAmount FROM student where ID=?";
    const id = req.params.id;
    db.query(sql,[id],(err,result) => {
        if(err) return res.json({Error:err});
        return res.send(result);
    });
});

app.put('/student1/update/:id',(req,res) =>{
    const sql ="UPDATE student SET Name=?, Income=?, startAmount=? where ID=?";
    const id = req.params.id;
    db.query(sql,[req.body.Name,req.body.Income,req.body.startAmount,id],(err,result) => {
        if(err) return res.json(err);
        return res.json({updated : true})
    });
});

// app.delete('/student1/student/:id',(req,res) => {
//     const sql = "DELETE FROM student where ID=?";
//     const id = req.params.id;
//     db.query(sql,[id],(err,data) => {
//         if(err) return res.json("Error");
//         return res.json(data);
//     });
// });

// ***************************************** Registration **************************************************

app.post('/register',(req,res) => {
    const sql = "INSERT INTO register (`Name`,`Income`,`Gender`,`Pno`,`Email`,`Password`) VALUES (?)";  
    const values = [
        req.body.Name,
        req.body.Income,
        req.body.Gender,
        req.body.Pno,
        req.body.Email,
        req.body.Password
    ] 
    db.query(sql,[values],(err,data) => {
        
        if(err) {
            // console.error("Registration error",err);
            return res.json({ error: err.message });
        }
        return res.json(data);
    })
})

app.post('/login',(req,res) => {
    
    const sql = "SELECT * FROM register WHERE Email = ? AND Password = ? ";
    db.query(sql,[req.body.Email, req.body.Password],(err,data) => {
        if(err) {
            return res.json({error:err});
        }
        console.log('Query Result:', data)
        if(data.length > 0){
            return res.json("Success");
        }else{
            console.log('Number of Rows:', data.length);
            return res.json("Failed");
        }
    })
})

app.listen(8081,() => {
    console.log("Listning");
});