const router = require("express").Router();
const Vehicle = require("../model/Vehicle");
const verify = require("../routes/verifyToken");


//Add Vehicles
router.post("/",verify,async(req,res)=>{
   const vehicle = new Vehicle({
    VehicleNo:req.body.VehicleNo,
    Make:req.body.Make,
    Model:req.body.Model,
    VehicleType:req.body.VehicleType,
    Branch:req.body.Branch,
    GaadiMalik:req.body.GaadiMalik,
    GaadiMalikMob:req.body.GaadiMalikMob,
    From:req.body.From,
    To:req.body.To,
    DriverName:req.body.DriverName,
    OddLocation:req.body.OddLocation,
    FollowUp:req.body.FollowUp,
    EwayBillExpiry:req.body.EwayBillExpiry,
    UpdatedBy:req.body.UpdatedBy,
   });
   try {
     const savedVehicle = await vehicle.save();
     res.send(savedVehicle);
   } catch (error) {
       res.status(400).send(error);
       }
});

//Get All Vehicles
router.get("/", async (req,res)=>{
    try {
        const vehicles = await Vehicle.find();
        res.json(vehicles)   
    } catch (error) {

        
    }
});

//Single Vehicles
router.get("/:vehicleId",async (req,res)=>{
    try {
        const vehicle = await Vehicle.findById(req.params.vehicleId);
        res.json(vehicle);
    } catch (error) {
        res.json({ message: error});
    }
});

//Update Vehicles
router.put("/:vehicleId",verify,async (req,res)=>{
    try {
       const vehicle = {
        VehicleNo:req.body.VehicleNo,
        Make:req.body.Make,
        Model:req.body.Model,
        VehicleType:req.body.VehicleType,
        Branch:req.body.Branch,
        GaadiMalik:req.body.GaadiMalik,
        GaadiMalikMob:req.body.GaadiMalikMob,
        From:req.body.From,
        To:req.body.To,
        DriverName:req.body.DriverName,
        OddLocation:req.body.OddLocation,
        FollowUp:req.body.FollowUp,
        EwayBillExpiry:req.body.EwayBillExpiry,
        UpdatedBy:req.body.UpdatedBy,
        };
        const updatedVehicle = await Vehicle.findByIdAndUpdate({_id: req.params.vehicleId},vehicle);

        res.json(updatedVehicle);
    } catch (error) {
       res.json({ message:error });
    }
});

//delete Vehicles
router.delete("/:vehicleId",verify,async (req,res)=>{
  try {
      const removeVehicle = await Vehicle.findByIdAndDelete(req.params.vehicleId);
      res.json(removeVehicle);
      
  } catch (error) {
      res.json({ message:error })
      
  }
});

module.exports= router;