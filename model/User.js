const mongoose = require("mongoose");
const userSchema = new mongoose.Schema({
name:String,
email:String,
password:String,
role:String,
RegisterDatetime:{type:Date,default:Date.now}
});

module.exports = mongoose.model("user",userSchema);