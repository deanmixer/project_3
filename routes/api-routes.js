// Requiring our models
const db = require(`../models`);
const pupps = require('../models/pupps.js');

$('#submit').click(function() {

    let zipOne = $('#zipcode1').val();
    let zipTwo = $('#zipcode2').val();
    let url = "https://www.zipcodeapi.com/rest/EG6KJntsg3LVNpvjrIAs7CYJqvA9U3m9gChV0abLjYPXNX9NLaZJJTNkoZpqgpga/distance.json/" + zipOne + "/" + zipTwo + "/mile";
    console.log('Here')
    $.ajax({
        method: "GET",
        url: url
    }).done(function(err, response) {
        if (err) {
            console.log(err);
            return;
        }
        console.log(response);
    
    })
});


module.exports = function(app) {

    app.get('/api/pupps.js', function(req, res) {
        res.json(pupps);
    });

    app.post('/api/pupps', function(req, res) {
        
        var userInput = req.body;

        
    })
}