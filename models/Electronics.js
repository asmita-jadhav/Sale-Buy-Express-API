var mongoose = require('mongoose');

var ElectronicsSchema = new mongoose.Schema({
    "ElectronicsId":{
        "type":"number",
        "required":true
    },
    "TransactionType": {
        "type": "string",
        "required": true
    },
    "Device": {
        "type": "string",
        "required": true
    },
    "ModelName": {
        "type": "string",
        "required": true
    },
    "AvailabilityFrom": {
        "type": "string",
        "required": true
    },
    "Address": {
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
    "Price": {
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
    },
    "created_date": {
        "type": "Date",
        default: Date.now 
     }
});


var Electronics=mongoose.model("Electronics", ElectronicsSchema);

Electronics.getAllElectronics=function(req,callback){
    Electronics.find({},function (err,Electronics) {        
        callback(err,Electronics); 
    });
}

Electronics.getlElectronicsById=function(req,callback){
    Electronics.findById(req.params.ElectronicsId,function (err,Electronics) {        
        callback(err,Electronics); 
    });
}

/*Electronics.getlElectronicsByQueries=function(req,callback){      
    console.log(req.query);      
    Electronics.find({'request':req.query},function (err, Electronics){
        console.log("getlElectronicsByQueries");
        callback(Electronics); 
    });
}*/

Electronics.addElectronics=function(req,callback){   
    var newElectronics=new Electronics(req.body); 
    newElectronics.save(function (err,Electronics) {        
        callback(err,Electronics); 
    });
}

Electronics.updateElectronics=function(req,callback){        
    Electronics.findOneAndUpdate(req.params.ElectronicsId,req.body,{new:true},function (err,Electronics) {        
        callback(err,Electronics); 
    });
}

Electronics.deleteElectronics=function(req,callback){        
    Electronics.remove({_id:req.params.ElectronicsId},function (err,Electronics) {        
        callback(err,"Successfully deleted Electronics"); 
    });
}

module.exports = Electronics;
