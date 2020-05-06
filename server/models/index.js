/* eslint-disable no-unused-vars */
/* eslint-disable no-console */

var db = require("../db");
//다시,
//여기가 db랑 왔다갔다 하는 부분.

//그러면 여기에서 sql??

// console.log("models, index,", db);

// username: "Valjean",
// text: "In mercy's name, three days is all I need.",
// roomname: "Hello"

module.exports = {
	messages: {
		get: function () {
			return new Promise((resolve, reject) => {
				let sql = "SELECT text, roomname FROM messages";
				db.query(sql, function (err, rows, fields) {
					if (!err) {
						resolve(rows);
					} else {
						reject(err);
					}
				});
			});
		}, // a function which produces all the messages
		post: function ({ user_name, text, roomname }) {
			console.log("텍스트", text);
			console.log("방이름", roomname);

			return new Promise((resolve, reject) => {
				let sql =
					"INSERT INTO messages (user_name, text, roomname) VALUES (?, ?, ?)";
				let params = [user_name, text, roomname];
				db.query(sql, params, function (err, rows, fields) {
					if (!err) {
						resolve(rows);
					} else {
						reject(err);
					}
				});
			});
		}, // a function which can be used to insert a message into the database
	},

	users: {
		// Ditto as above.
		get: function () {
			return new Promise((resolve, reject) => {
				let sql = "SELECT user_name FROM users";
				db.query(sql, function (err, rows, fields) {
					if (!err) {
						resolve(rows);
					} else {
						reject(err);
					}
				});
			});
		},
		post: function ({ user_name }) {
			console.log("유저이름", user_name);

			return new Promise((resolve, reject) => {
				let sql = "INSERT INTO users (user_name) VALUES (?)";
				let params = [user_name];
				db.query(sql, params, function (err, rows, fields) {
					if (!err) {
						resolve(rows);
					} else {
						reject(err);
					}
				});
			});
		},
	},
};
