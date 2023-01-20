const mongoose = require("mongoose");
const { MONGODB_URI } = process.env;

exports.connect = () => {
	// Connecting to the database
	console.log("Trying")
	mongoose
		.connect(MONGODB_URI, {
			useNewUrlParser: true,
			useUnifiedTopology: true
		})
		.then((res) => {
			console.log("Successfully connected to database");
		})
		.catch((error) => {
			console.log("database connection failed. exiting now...");
			console.error(error);
			process.exit(1);
		});
};
