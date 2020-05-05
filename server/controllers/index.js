/* eslint-disable no-unused-vars */
/* eslint-disable no-console */
var models = require("../models");
// console.log("constrol, index, 넘어옴?", models);

module.exports = {
	messages: {
		get: function (req, res) {
			console.log("req.url", req.url, "req.method", req.method);
			console.log("메세지 겟");
			// res.send();
		}, // a function which handles a get request for all messages
		post: function (req, res) {
			console.log("req.url : ", req.url, "req.method : ", req.method);
			console.log("이건", req.body);
			let body = "";
			var status = 204;
			res.writeHead(status, defaultCorsHeaders);
			req
				.on("data", (chunk) => {
					body += chunk;
				})
				.on("end", () => {
					console.log(body);
					const data = JSON.parse(body);
					console.log(data);
				});
		}, // a function which handles posting a message to the database
	},

	users: {
		get: function (req, res) {
			// console.log("control, user", req, res);
			console.log("유저 겟");
		}, // a function which handles a get request for all users
		post: function (req, res) {
			// console.log("control, user", req, res);
			console.log("유저 포스트");
		}, // a function which handles posting a user to the database
	},
};

const defaultCorsHeaders = {
	"access-control-allow-origin": "*",
	"access-control-allow-methods": "GET, POST, PUT, DELETE, OPTIONS",
	"access-control-allow-headers": "content-type, accept",
	"access-control-max-age": 10, // Seconds.
};
