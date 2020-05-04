/* eslint-disable no-unused-vars */
/* eslint-disable no-console */
var models = require("../models");
console.log("constrol, index, 넘어옴?", models);

module.exports = {
	messages: {
		get: function (req, res) {
			console.log("메세지 겟", req, res);
		}, // a function which handles a get request for all messages
		post: function (req, res) {
			console.log("메세지 포스트", req, res);
		}, // a function which handles posting a message to the database
	},

	users: {
		get: function (req, res) {
			console.log("control, user", req, res);
			console.log("control, messagea3298df796876", typeof models);
		}, // a function which handles a get request for all users
		post: function (req, res) {
			console.log("control, user", req, res);
			console.log("control, messagea3298df796876", typeof models);
		}, // a function which handles posting a user to the database
	},
};
