/* eslint-disable no-unused-vars */
/* eslint-disable no-console */
var db = require("../db");

// console.log("models, index,", db);

module.exports = {
	messages: {
		get: function () {
			return new Promise((resolve, reject) => {
				let data = db.query(
					"SELECT users.user_name, messages.message, messages.roomname FROM messages JOIN users ON messages.user_id=users.user_id",
					(err, rows) => {
						if (err) reject(err);
						else resolve(rows); //뭐를 넣을건지
					}
				);
			});
		}, // a function which produces all the messages
		post: function ({ user_name, message, roomname }) {
			console.log("모델 메세지 포스트", user_name, message, roomname);
			let query =
				"INSERT INTO messages (user_name, message, roomname) VALUES ('test', 'test2', 'test3')";
			let arg = [user_name, message, roomname];
			return new Promise((resolve, reject) => {
				db.query(query, arg, (err, rows) => {
					if (!err) resolve(rows);
					else reject(err);
				});
			});
		}, // a function which can be used to insert a message into the database
	},

	users: {
		// Ditto as above.
		get: function () {
			console.log("모델 유저 겟");
			let data = db.query("SELECT * FROM users", function (err, rows, fields) {
				if (!err) console.log("the solution is: ", rows);
				else console.log("error while pergoming query", err);
			});
			console.log("메세지 쿼리", data);
		},
		post: function () {
			let data = db.query("SELECT * FROM users", function (err, rows, fields) {
				if (!err) console.log("the solution is: ", rows);
				else console.log("error while pergoming query", err);
			});
			console.log("모델 유저 포스트");
		},
	},
};
