
var friends= require('../data/friends.js');



module.exports = function(app){


	app.get('/api/friends', function(req, res){
		res.json(friends);
	});

	app.post('/api/friends', function(req, res){
		var match = {
			name: "",
			img: "",
			diff: 1000
		};	
		var userinfo 	= req.body;
		var answers 	= userinfo.answers;
		var totaldiff = 0;

		for  (var i=0; i< friends.length; i++) {
			console.log(friends[i].name);
			totaldiff = 0;
			for (var j=0; j< friends[i].answers[j]; j++){
				totaldiff += Math.abs(parseInt(answers[j]) - parseInt(friends[i].answers[j]));
				if (totaldiff <= match.diff){
					match.name = friends[i].name;
					match.img = friends[i].img;
					match.diff = totaldiff;
				}
			}
		}

		friends.push(userinfo);

		res.json(match);

	});

}