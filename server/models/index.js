/* eslint-disable no-unused-vars */
/* eslint-disable no-console */
var db = require("../db");

// console.log("models, index, 넘어옴?", db);
module.exports = {
	messages: {
		get: function () {}, // a function which produces all the messages
		post: function () {}, // a function which can be used to insert a message into the database
	},

	users: {
		// Ditto as above.
		get: function () {},
		post: function () {},
	},
};
