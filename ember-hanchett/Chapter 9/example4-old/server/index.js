/*jshint node:true*/

const bodyParser = require('body-parser');


module.exports = function(app) {

		app.use(bodyParser.urlencoded({ extended: true }));

		app.get('/api/students', function (req, res) {    

			if (req.headers.authorization !== "Bearer secretcode") {
				return res.status(401).send('Unauthorized');
			}

			return res.status(200).send({
				students: [
			       { id: 1, name: 'Erik', age: 24 },
				   { id: 2, name: 'Suze', age: 32 },
				   { id: 3, name: 'Jill', age: 18 }
			]
			});
		});
		app.post('/token', function(req, res) {

			if (req.body.username === 'erik' && req.body.password === 'password') {
				res.send({ access_token: "secretcode" });
			} else {
				res.status(400).send({ error: "invalid_grant" });
			}

		});
};

