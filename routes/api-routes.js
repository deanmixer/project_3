// Requiring our models
const db = require(`../models`);
const express = require(`express`);
const router = express.Router();
const jwt = require('jsonwebtoken');
const bcrypt = require('bcrypt');
const saltRounds = 10;
const salt = bcrypt.genSaltSync(saltRounds);
const connection = require('../connection');

router.post('/login', function(req, res) {
    const email = req.body.email;
    const password = req.body.password;

    connection.query('SELECT * FROM users where email = ?', [email], function(err, data) {
        if (err) {
            return res.status(500).json({
                message: "Internal server error"
            });
        }

        if (data.length === 0) {
            res.send("Email not found. Please create an account")
            return res.status(402).json({
                message: "Email not found. Please create an account."
            });
        }
               
        const hashPassword = data[0].password;

        const isPasswordValid = bcrypt.compareSync(password, hashPassword);

        if (isPasswordValid) {
            const token = jwt.sign({ 
                // exp: Math.floor(Date.now() / 1000) + (60 * 60),
                email: data[0].email, 
                firstName: data[0].firstName,
                lastName: data[0].lastName,
                zipCode: data[0].zipCode,
                puppyName: data[0].puppyName,
                puppyGender: data[0].puppyGender,
                puppyBreed: data[0].puppyBreed,
                puppyPersonality: data[0].puppyPersonality,
                puppyAge: data[0].puppyAge,
                puppyWeight: data[0].puppyWeight,
                imgUrl: data[0].imgUrl
            }, 'ilovepups', { expiresIn: '1h' });
            return res.cookie("token", token).json({
                message: "Your are now logged in!"
            })
        }
            res.status(401).json({
                message: "Incorrect user name/password."
            })
    });
});

router.post('/signup', function(req, res) {
    const email = req.body.email;
    const password = bcrypt.hashSync(req.body.password, salt);
    const firstName = req.body.firstName;
    const lastName = req.body.lastName;
    const zipCode = req.body.zipCode;
    const puppyName = req.body.puppyName;
    const puppyGender = req.body.puppyGender;
    const puppyBreed = req.body.puppyBreed;
    const puppyPersonality = req.body.puppyPersonality;
    const puppyAge = req.body.puppyAge;
    const puppyWeight = req.body.puppyWeight;
    const imgUrl = req.body.imgUrl;

    connection.query('SELECT * FROM users where email = ?', [email], function(err, data) {
        if (err) {
            return res.status(500).json({
                message: "Internal server error"
            });
        }
        if (data.length === 0) {
            const user1 = { email, password, firstName, lastName, zipCode, puppyName, puppyGender, puppyBreed, puppyPersonality, puppyAge, puppyWeight, imgUrl };
            connection.query('INSERT INTO users SET ?', user1, function(error, results) {
                if (error) {
                    return res.status(500).json({
                        message: "Not able to create user"
                    });
                }
            });
                connection.query('SELECT * FROM users where email = ?', [email], function(err, data) {
                    if (err) {
                        return res.status(500).json({
                            message: "Internal server error"
                        });
                    }
                const token = jwt.sign({ 
                    // exp: Math.floor(Date.now() / 1000) + (60 * 60),
                    email: data[0].email, 
                    firstName: data[0].firstName,
                    lastName: data[0].lastName,
                    zipCode: data[0].zipCode,
                    puppyName: data[0].puppyName,
                    puppyGender: data[0].puppyGender,
                    puppyBreed: data[0].puppyBreed,
                    puppyPersonality: data[0].puppyPersonality,
                    puppyAge: data[0].puppyAge,
                    puppyWeight: data[0].puppyWeight,
                    imgUrl: data[0].imgUrl
                }, 'ilovepups', { expiresIn: '1h' });
                return res.cookie("token", token).json({
                    message: "User successfully created"
                });
            });          
        } else {
            res.status(403).json({
                message: "User already exists"
            });
        }
        // const email = data[0].email;
        // const password = data[0].password;
    });
    // req.session.email = email;
    // req.session.password = password; // not encrypted

    // res.json({
    //     redirect: '/search'
    // });
});

router.get('/signout', function(req, res) {
    req.session.destroy(function(err) {
        if (err) {
            res.redirect('/login');
        } else {
            res.redirect('/');
        }
    })
})

  module.exports = router;
