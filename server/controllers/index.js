/* eslint-disable no-unused-vars */
/* eslint-disable no-console */
var models = require("../models");
// console.log("constrol, index, 넘어옴?", models);

module.exports = {
	messages: {
		get: function (req, res) {
			// console.log("req.url", req.url, "req.method", req.method);
			console.log("메세지 겟", models.req);
			return new Promise((resolve, reject) => {
				// if (err) reject(err);
				resolve();
			});
		}, // a function which handles a get request for all messages
		post: function (req, res) {
			var body = req.body;
			console.log("메제시 바디 포스트", body);
			// var userName = document.querySelector(".inputUser").value;
		}, // a function which handles posting a message to the database
	},

	users: {
		get: function (req, res) {
			// console.log("control, user", req, res);
			let body = req.body;
			console.log("유저 겟", body);
		}, // a function which handles a get request for all users
		post: function (req, res) {
			// console.log("control, user", req, res);
			// var userMessage = document.querySelector(".inputChat").value;
			let body = req.body;
			console.log("유저 포스트", body);
		}, // a function which handles posting a user to the database
	},
};

// const defaultCorsHeaders = {
// 	"access-control-allow-origin": "*",
// 	"access-control-allow-methods": "GET, POST, PUT, DELETE, OPTIONS",
// 	"access-control-allow-headers": "content-type, accept",
// 	"access-control-max-age": 10, // Seconds.
// };
