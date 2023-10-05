const mongoose = require("mongoose");

const MedSchema = new mongoose.Schema({
	username: String,
	email: String,
	password: String,
});

const MedModel = mongoose.model("Med", MedSchema);
module.exports = MedModel;
