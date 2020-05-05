/* eslint-disable no-unused-vars */
/* eslint-disable no-console */
var db = require("../db");

// console.log("models, index,", db);

module.exports = {
	messages: {
		get: function () {
			return new Promise((resolve, reject) => {
				let sql = "SELECT message, roomname FROM messages";
				db.query(sql, (err, result) => {
					if (err) {
						reject(err);
					} else {
						console.log(result);
						resolve(result);
					}

					// else resolve(rows); //뭐를 넣을건지
				});
			});
		}, // a function which produces all the messages
		post: function (p) {
			console.log("모델 메세지 포스트", message, roomname);
			let { message, roomname } = p;
			let sql = "INSERT INTO messages (message, roomname) VALUES ?";
			let arg = [message, roomname];
			return new Promise((resolve, reject) => {
				db.query(sql, arg, (err, result) => {
					if (err) {
						reject(err);
					} else {
						console.log("리절트", result);
						resolve(result);
					}
				});
			});
		}, // a function which can be used to insert a message into the database
	},

	users: {
		// Ditto as above.
		get: function () {
			return new Promise((resolve, reject) => {
				db.query("SELECT user_name FROM users", (err, res) => {
					if (!err) {
						resolve(res);
					} else {
						reject(err);
					}
				});
			});
		},
		post: function (p) {
			let { user_name } = p;
			let arg = [user_name];
			return new Promise((resolve, reject) => {
				db.query("INSERT INTO users VALUES (arg)", (err, result) => {
					if (err) {
						reject(err);
					} else {
						console.log(result);
						resolve(result);
					}
				});
			});
		},
	},
};
