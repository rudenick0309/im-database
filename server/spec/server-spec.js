/* eslint-disable no-console */
/* You'll need to have MySQL running and your Node server running
 * for these tests to pass. */

const mysql = require("mysql");
const request = require("request"); // You might need to npm install the request module!
const expect = require("chai").expect;

describe("Sprint-database", () => {
	describe("Persistent Node Chat Server", function () {
		var dbConnection;

		beforeEach(function (done) {
			dbConnection = mysql.createConnection({
				user: "root",
				password: "",
				database: "chat",
			});
			dbConnection.connect();

			var tablename = "messages";

			/* Empty the db table before each test so that multiple tests
			 * (or repeated runs of the tests) won't screw each other up: */
			dbConnection.query("truncate " + tablename, done);
		});

		afterEach(function () {
			dbConnection.end();
		});

		it("Should insert posted messages to the DB", function (done) {
			// Post the user to the chat server.
			request(
				{
					method: "POST",
					uri: "http://127.0.0.1:3000/classes/users",
					json: { user_name: "Valjean" },
				},
				function () {
					// Post a message to the node chat server:
					request(
						{
							method: "POST",
							uri: "http://127.0.0.1:3000/classes/messages",
							json: {
								user_name: "Valjean",
								text: "In mercy's name, three days is all I need.",
								roomname: "Hello",
							},
						},
						function () {
							// Now if we look in the database, we should find the
							// posted message there.

							// TODO: You might have to change this test to get all the data from
							// your message table, since this is schema-dependent.
							var queryString = "SELECT * FROM messages";
							// var queryString =
							// 	"INSERT INTO messages (user_name, text, roomname) VALUES (?, ?, ?)";
							var queryArgs = []; // unexpeted AssertionError 2, 1
							// "In mercy's name, three days is all I need."

							dbConnection.query(queryString, queryArgs, function (
								err,
								results
							) {
								// Should have one result:
								if (err) {
									// console.log(err);
									console.log("서버스펙", results);
									throw err;
								}
								expect(results.length).to.equal(1);

								expect(results[0].text).to.equal(
									"In mercy's name, three days is all I need."
								);

								done();
							});
						}
					);
				}
			);
		});

		it("Should output all messages from the DB", function (done) {
			// Let's insert a message into the db
			var queryString =
				"INSERT INTO messages(user_name, text, roomname) VALUES (?, ?, ?)";
			// var queryString = "INSERT INTO users (user_name) VALUES (?)";
			var queryArgs = ["what", "Men like you can never change!", "main"];
			// TODO - The exact query string and query args to use
			// here depend on the schema you design, so I'll leave
			// them up to you. */

			dbConnection.query(queryString, queryArgs, function (err) {
				if (err) {
					throw err;
				}

				// Now query the Node chat server and see if it returns
				// the message we just inserted:
				request("http://127.0.0.1:3000/classes/messages", function (
					error,
					response,
					body
				) {
					var messageLog = JSON.parse(body);
					expect(messageLog[0].text).to.equal("Men like you can never change!");
					expect(messageLog[0].roomname).to.equal("main");
					done();
				});
			});
		});
	});
});
