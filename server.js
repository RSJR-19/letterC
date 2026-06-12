require('dotenv').config();

const express = require('express');
const mysql = require('mysql2');
const app = express();
const PORT = process.env.PORT;


app.use(express.json());
app.use(express.static('public'));

const db = mysql.createConnection({
    host: process.env.DB_HOST,
    user: process.env.DB_USER,
    password: process.env.DB_PASSWORD,
    database: process.env.DB_DATABASE
});

db.connect((err)=>{
    if (err){
        console.error('Error connecting to MySQL database:', err);
        return;
    }
    console.log('Successfully Connected!');
})

app.post('/api/secrets', (req, res)=>{
    const userMessage = req.body.message;

    const tempId = Math.random().toString(36).substring(2, 9);

    const sqlQuery = "INSERT INTO sent_messages (id, message) VALUES (?, ?)";


    db.query(sqlQuery, [tempId, userMessage], (err, result) =>{
        if (err){
            console.error('Database Insert Error:', err);
            return res.status(500).json({error: 'Failed to store message'});
        }
        res.json({
            success: true,
            message: 'Message Sent Successfully!',
            secretId: tempId
        })
    })
})

app.listen(PORT, ()=>{
    console.log(`Server running at http://localhost:${PORT}`);
})