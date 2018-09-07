var mongoose = require('mongoose');

var PropertySchema = new mongoose.Schema({
    "TransactionType": {
        "type": "string",
        "required": true
    },
    "PropertyType": {
        "type": "string",
        "required": true
    },
    "BHK": {
        "type": "string",
        "required": true
    },
    "PreferredTenants": {
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
    }
});


var Properties=mongoose.model("Properties", PropertySchema);

Properties.getAllProperties=function(req,callback){
    Properties.find({},function (err,Properties) {        
        callback(err,Properties); 
    });
}

Properties.getlPropertiesById=function(req,callback){
    Properties.findById(req.params.PropertiesId,function (err,Properties) {        
        callback(err,Properties); 
    });
}

/*Properties.getlPropertiesByQueries=function(req,callback){      
    console.log(req.query);      
    Properties.find({'request':req.query},function (err, Properties){
        console.log("getlPropertiesByQueries");
        callback(Properties); 
    });
}*/

Properties.addProperties=function(req,callback){   
    var newProperties=new Properties(req.body); 
    newProperties.save(function (err,Properties) {       
        callback(err,Properties); 
    });
}

Properties.updateProperties=function(req,callback){        
    Properties.findOneAndUpdate(req.params.PropertiesId,req.body,{new:true},function (err,Properties) {        
        callback(err,Properties); 
    });
}

Properties.deleteProperties=function(req,callback){        
    Properties.remove({_id:req.params.PropertiesId},function (err,Properties) {        
        callback(err,"Successfully deleted Properties"); 
    });
}

module.exports =Properties;
