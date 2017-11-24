// ------------------------------------------------------
// -- API Routes                                       --
// ------------------------------------------------------

// Require our Friends data
const Friends = require('../data/friends');


module.exports = (app) => {
    // GET: /api/getfriends
    // Returns friends data as a json object
    app.get('/api/getfriends', (req, res) => {
        res.json(Friends);
    });

    // POST: /api/compareFriends
    // Sends a friend object via ajax, compares it with the friends in the database, and returns the closest match.
    app.post('/api/compareFriends', (req, res) => {
        // Grabs the posted data
        let user = req.body;
        // Set lowestDifference to an extremely high number so even in the event where two users are completely different, lowestDifference will
        // be set
        let lowestDifference = 2000;
        // index of the lowest matching difference.
        let lowestIdx = 0;
        // Opens a loop through the friends object
        for(var i = 0; i < Friends.length; i++) {
            let tempDifference = 0; // Temporary difference
            // Loops through the users' scores.
            for(var j = 0; j < user.scores.length; j++) {
                // We are getting the absolute value of the differences, and adding to our temp variable.
                tempDifference += Math.abs(user.scores[j] - Friends[i].scores[j])
            }
            // Check if this userscore difference is lower than the current lowest
            if(tempDifference < lowestDifference) { 
                // If it is, assign the index of the friend and reassign the lowest difference.
                lowestIdx = i;
                lowestDifference = tempDifference;
            }
        }
        // Add the new user to the friends object
        Friends.push(user);
        // Send the matching user back to our form.
        res.json(Friends[lowestIdx]);
    });
};