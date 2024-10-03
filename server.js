const express = require("express");
const mysql = require('mysql');
const cors = require('cors');

const app = express();
app.use(cors());
app.use(express.json());

const db = mysql.createConnection({
    host:"localhost",
    user:"root",
    password:"",
    database:"team1"
})

const bcrypt = require('bcrypt');
const saltRounds = 10;

app.post('/login', (req, res) => {
    const sql = "SELECT * FROM admin WHERE email = ?";

    db.query(sql, [req.body.email], (err, data) => {
        if (err) {
            return res.status(500).json("Error checking login");
        }
        if (data.length === 0) {
            return res.status(400).json("Email not found");
        }

        const user = data[0];
        bcrypt.compare(req.body.password, user.password, (err, result) => {
            if (err) {
                return res.status(500).json("Error comparing passwords");
            }
            if (!result) {
                return res.status(400).json("Incorrect password");
            }

            return res.status(200).json("Login successful");
        });
    });
});



app.post('/signup', (req, res) => {
    const checkEmailSql = "SELECT * FROM admin WHERE email = ?";
    const insertSql = "INSERT INTO admin (fname, lname, email, password) VALUES (?)";

    db.query(checkEmailSql, [req.body.email], (err, result) => {
        if (err) {
            return res.status(500).json("Error checking email");
        }
        if (result.length > 0) {
            return res.status(400).json("Email already registered");
        }

        // Hash the password before inserting
        bcrypt.hash(req.body.password, saltRounds, (err, hash) => {
            if (err) {
                return res.status(500).json("Error hashing password");
            }

            const values = [
                req.body.fname,
                req.body.lname,
                req.body.email,
                hash // Store the hashed password
            ];

            db.query(insertSql, [values], (err, data) => {
                if (err) {
                    return res.status(500).json("Error inserting data");
                }
                return res.status(200).json("Signup successful");
            });
        });
    });
});
