const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");
const cookieParser = require("cookie-parser");
const dotenv = require("dotenv");
const MedModel = require("./models/Schema");
const axios = require("axios");

dotenv.config();

const app = express();
app.use(express.json());
app.use(
	cors({
		origin: ["http://localhost:3000"],
		methods: ["GET", "POST"],
		credentials: true,
	})
);

app.use(cookieParser());

mongoose
	.connect(process.env.DB_URI, {
		useUnifiedTopology: true,
		useNewUrlParser: true,
	})
	.then(() => {
		console.log("DB Connected");
	})
	.catch((err) => {
		console.log(err);
	});

app.post("/register", (req, res) => {
	const { username, email, password } = req.body;
	console.log({ username, email, password });
	bcrypt
		.hash(password, 10)
		.then((hash) => {
			MedModel.create({
				username: username,
				email: email,
				password: hash,
			})
				.then((user) => res.json("success uploading one user"))
				.catch((err) => res.json(err));
		})
		.catch((err) => {
			console.log(err);
		});
});

app.post("/login", (req, res) => {
	const { email, password } = req.body;
	MedModel.findOne({ email: email }).then((user) => {
		if (user) {
			bcrypt.compare(password, user.password, (err, response) => {
				if (response) {
					console.log(response);
					const token = jwt.sign(
						{ email: user.email },
						process.env.SECRET_KEY,
						{ expiresIn: "4h" }
					);
					res.cookie("token", token);
					return res.json("success finding the user");
				} else {
					return res.status(401).json("user not found");
				}
			});
		} else {
			return res.status(404).json("user not found");
		}
	});
});

app.get("/home", (req, res) => {
	const token = req.cookies.token;
	if (!token) {
		// return res.status(401).json({ message: "Unauthorized token is not found" });
		return res.redirect("/Login?message=notloggedin");
	}
	jwt.verify(token, process.env.SECRET_KEY, (err, decoded) => {
		if (err) {
			return res
				.status(401)
				.json({ message: "Unauthorized token is not found" });
		}
		const userEmail = decoded.email;
		MedModel.findOne({ email: userEmail }).then((user) => {
			if (user) {
				return res.json({ user });
			} else {
				return res.json({ message: "User not found" });
			}
		});
	});
});

app.post("/logout", (req, res) => {
	// Clear the token cookie by setting it to an empty string and immediately expiring it
	res.cookie("token", "", { expires: new Date(0) });
	res.json({ message: "Logged out succesfully " });
});

app.listen(4000, (req, res) => {
	console.log("Server is running on local port 4000");
});
