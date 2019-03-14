// Requiring our models
const db = require('../models'), bcrypt = require('bcrypt'), Sequelize = require('sequelize')
const zipCodeUrl = 'https://www.zipcodeapi.com/rest/EG6KJntsg3LVNpvjrIAs7CYJqvA9U3m9gChV0abLjYPXNX9NLaZJJTNkoZpqgpga/distance.json/" + zipOne + "/" + zipTwo + "/mile';


module.exports = function(app) {
    // app.post('/api/login', function(req, res) {
    //     db.User.findOne({where: {user_login : req.body.user_login}
    //     }).then((user)=>{
    //         bcrypt.compare(req.body.user_password, user.user_password, (err, loginSuccess)=>{
    //             if (loginSuccess){
    //                 res.json(user)
    //             }
    //             else {
    //                 res.json(false)
    //             }
    //         })
    //     });
    // });

    // app.post('api/signup', function(req, res){
    //     db.User.findOne({where: {user_login : req.body.user_login}
    //     }).then((user)=>{
    //         if (user) res.json(false);
    //         else {
    //             const {user_login, user_password} = req.body;
    //             bcrypt.hash(user_password, 10, (err, hash)=>{
    //                 db.User.create({user_login: user_login, user_password: hash})
    //                 .then(newUser => {
    //                     res.json(newUser);
    //                 })
    //             })
    //         }
    //     });
    // });

    // app.post('/api/newuser', function(req, res){
    //     db.User.findOne({where: {id: req.body.userId}
    //     }).then((dbuser)=>{
    //         dbuser.update({
    //             first_name: req.body.first_name,
    //             last_name:  req.body.last_name,
    //             email:      req.body.email
    //         }).then(updatedUser =>{
    //             db.Dog.create({
    //                 puppy_name:   req.body.puppy_name,
    //                 puppy_gender: req.body.puppy_gender,
    //                 puppy_breed:  req.body.puppy_breed,
    //                 address:      req.body.address
    //             }).then(() =>{
    //                 res.json(updatedUser);
    //             })
    //         })
    //     })
    // })

    app.post('/result', function(req, res) {
        console.log(req.body);
        res.json('Hey');
    })
}