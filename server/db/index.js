/* eslint-disable no-console */
var Sequelize = require("sequelize");
// var mysql = require("mysql");

// // process.env로 시작하는 모든 변수들은 환경 변수(environmental variables)입니다.
// // 환경 변수는 터미널에서 다음 명령을 이용하여 설정할 수 있습니다.
// // export DATABASE_SPRINT_PASSWORD='1111'
const password = "";

const host = "localhost";

// // 데이터베이스 연결을 만들고, 연결 객체를 export 하세요.
// // 연결에 필요한 몇가지 정보가 있습니다. 먼저 user는 root, 패스워드는 위 password 변수를 사용하세요.
// // 그리고 실제로 연결할 데이터베이스의 위치(host)는 host 변수를 사용하세요.
// // 데이터베이스 이름(database)은 "chat"로 지정하세요.

// var dbConnection = mysql.createConnection({
// 	host: host,
// 	user: "root",
// 	password: password,
// 	// port: 3000,
// 	database: "chat",
// });
// // dbConnection.connect();
// // dbConnection.end();

// module.exports = dbConnection;

// // =============================== 시퀄라이저

var db = new Sequelize("chat", "root", password, {
	host: host,
	dialect: "mysql",
});
/* TODO this constructor takes the database name, user_name, then password.
 * Modify the arguments if you need to */

/* first define the data structure by giving property names and datatypes
 * See http://sequelizejs.com for other datatypes you can use besides STRING. */
var User = db.define("User", {
	user_name: Sequelize.STRING,
});

var Message = db.define("Message", {
	user_name: Sequelize.STRING,
	text: Sequelize.STRING,
	roomname: Sequelize.STRING,
});

/* Sequelize comes with built in support for promises
 * making it easy to chain asynchronous operations together */
User.sync()
	.then(function () {
		// Now instantiate an object and save it:
		return User.create({ user_name: "Jean zValjean" });
	})
	.then(function () {
		// Retrieve objects from the database:
		return User.findAll({ where: { user_name: "Jean zValjean" } });
	})
	.then(function (users) {
		users.forEach(function (user) {
			console.log(user.user_name + " exists");
		});
		db.close();
	})
	.catch(function (err) {
		// Handle any error in the chain
		console.error(err);
		db.close();
	});

Message.sync()
	.then(function () {
		// Now instantiate an object and save it:
		return Message.create({
			user_name: "Jean bValjean",
			text: "1",
			roomname: "2",
		});
	})
	.then(function () {
		// Retrieve objects from the database:
		return Message.findAll({
			where: { user_name: "Jean bValjean", text: "1", roomname: "2" },
		});
	})
	.then(function (Messages) {
		Messages.forEach(function (Message) {
			console.log(Message.user_name + " eeeexists");
		});
		db.close();
	})
	.catch(function (err) {
		// Handle any error in the chain
		console.error(err);
		db.close();
	});
