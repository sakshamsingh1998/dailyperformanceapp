const mongoose = require("mongoose");
const vehicleSchema = new mongoose.Schema({
VehicleNo:String,
Make:String,
Model:String,
VehicleType:String,
Branch:String,
GaadiMalik:String,
GaadiMalikMob:String,
From:String,
To:String,
DriverName:String,
OddLocation:String,
FollowUp:String,
EwayBillExpiry:String,
UpdatedBy:String,
UpdateDatetime:{type:Date,default:Date.now}
});

module.exports = mongoose.model("vehicle",vehicleSchema);