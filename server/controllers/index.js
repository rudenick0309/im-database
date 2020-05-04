/* eslint-disable no-unused-vars */
/* eslint-disable no-console */
var models = require("../models");
// console.log("constrol, index, 넘어옴?", models);

module.exports = {
	messages: {
		get: function (req, res) {
			console.log("메세지 겟");
		}, // a function which handles a get request for all messages
		post: function (req, res) {
			console.log("메세지 포스트");
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
