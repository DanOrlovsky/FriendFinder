const Friends = require('../data/friends');


module.exports = (app) => {
    app.get('/api/getfriends', (req, res) => {
        res.json(Friends);
    });

    app.post('/api/compareFriends', (req, res) => {
        console.log(req.body);
        let user = req.body;
        let totalDifferences = 2000;
        let lowestIdx = 0;
        for(var i = 0; i < Friends.length; i++) {
            let tempDifference = 0;
            for(var j = 0; j < user.scores.length; j++) {
                tempDifference += Math.abs(user.scores[j] - Friends[i].scores[j])
            }
            if(tempDifference < totalDifferences) { 
                lowestIdx = i;
                totalDifferences = tempDifference;
            }
        }
        Friends.push(user);
        res.json(Friends[lowestIdx]);
    });
};