var mongoose = require('mongoose');

var VehicleSchema = new mongoose.Schema({    
    "TransactionType": {
        "type": "string",
        "required": true
    },
    "VehicleType": {
        "type": "string",
        "required": true
    },
    "Brand": {
        "type": "string",
        "required": true
    },
    "Model": {
        "type": "string",
        "required": true
    },
    "Running": {
        "type": "string",
        "required": true
    },
    "PurchaseDate": {
        "type": "string",
        "required": true
    },
    "Price": {
        "type": "string",
        "required": true
    },
    "ContactPerson": {
        "type": "string",
        "required": true
    },
    "ContactNumber1": {
        "type": "string",
        "required": true
    },
    "ContactNumber2": {
        "type": "string",
        "required": true
    },
    "Description": {
        "type": "string",
        "required": true
    },
    "Status": {
        "type": "string",
        "required": true
    },
    "OwnerHand": {
        "type": "string",
        "required": true
    }
});

var Vehicle=mongoose.model("Vehicles", VehicleSchema);

Vehicle.getAllVehicles=function(req,callback){
    Vehicle.find({},function (err,Vehicle) {        
        callback(err,Vehicle); 
    });
}

Vehicle.getlVehiclesById=function(req,callback){
    Vehicle.findById(req.params.VehicleId,function (err,Vehicle) {        
        callback(err,Vehicle); 
    });
}

/*Vehicle.getlVehicleByQueries=function(req,callback){      
    console.log(req.query);      
    Vehicle.find({'request':req.query},function (err, Vehicle){
        console.log("getlVehicleByQueries");
        callback(Vehicle); 
    });
}*/

Vehicle.addVehicles=function(req,callback){   
    var newVehicle=new Vehicle(req.body); 
    newVehicle.save(function (err,Vehicle) {        
        callback(err,Vehicle); 
    });
}

Vehicle.updateVehicles=function(req,callback){        
    Vehicle.findOneAndUpdate(req.params.VehicleId,req.body,{new:true},function (err,Vehicle) {        
        callback(err,Vehicle); 
    });
}

Vehicle.deleteVehicles=function(req,callback){        
    Vehicle.remove({_id:req.params.VehicleId},function (err,Vehicle) {        
        callback(err,"Successfully deleted Vehicle"); 
    });
}

module.exports = Vehicle;
