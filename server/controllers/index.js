/* eslint-disable no-unused-vars */
/* eslint-disable no-console */
var models = require("../models");

// 다시...

module.exports = {
	messages: {
		get: async function (req, res) {
			try {
				let data = await models.messages.get();
				const result = await res.send(data);
				return result;
			} catch (err) {
				res.send(err);
			}
			// console.log("겟 메세지", data);
			// res.status(200).send(JSON.stringify(data));
		}, // a function which handles a get request for all messages
		post: async function (req, res) {
			let data = await models.messages.post(req.body);
			console.log("포스트 메세지", data);
			res.status(200).send(JSON.stringify(data));
			// var userName = document.querySelector(".inputUser").value;
		}, // a function which handles posting a message to the database
	},

	users: {
		get: async function (req, res) {
			let data = await models.messages.get();
			console.log("겟 유저", data);
			res.status(200).send(JSON.stringify(data));
		}, // a function which handles a get request for all users
		post: async function (req, res) {
			let data = await models.messages.post(req.body);
			console.log("포스트 유저", data);
			res.status(200).send(JSON.stringify(data));
		}, // a function which handles posting a user to the database
	},
};

// const defaultCorsHeaders = {
// 	"access-control-allow-origin": "*",
// 	"access-control-allow-methods": "GET, POST, PUT, DELETE, OPTIONS",
// 	"access-control-allow-headers": "content-type, accept",
// 	"access-control-max-age": 10, // Seconds.
// };
