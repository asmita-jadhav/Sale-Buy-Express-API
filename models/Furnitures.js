var mongoose = require('mongoose');

var FurnitureSchema = new mongoose.Schema({
    "TransactionType": {
			"type": "string",
			"required": true
	},
	"FurnitureType": {
			"type": "string",
			"required": true
	},
	"Specification": {
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

var Furnitures=mongoose.model("Furnitures", FurnitureSchema);

Furnitures.getAllFurnitures=function(req,callback){
    Furnitures.find({},function (err,Furnitures) {        
        callback(err,Furnitures); 
    });
}

Furnitures.getlFurnituresById=function(req,callback){
    Furnitures.findById(req.params.FurnituresId,function (err,Furnitures) {        
        callback(err,Furnitures); 
    });
}

/*Furnitures.getlFurnituresByQueries=function(req,callback){      
    console.log(req.query);      
    Furnitures.find({'request':req.query},function (err, Furnitures){
        console.log("getlFurnituresByQueries");
        callback(Furnitures); 
    });
}*/

Furnitures.addFurnitures=function(req,callback){   
    var newFurnitures=new Furnitures(req.body); 
    newFurnitures.save(function (err,Furnitures) {        
        callback(err,Furnitures); 
    });
}

Furnitures.updateFurnitures=function(req,callback){        
    Furnitures.findOneAndUpdate(req.params.FurnituresId,req.body,{new:true},function (err,Furnitures) {        
        callback(err,Furnitures); 
    });
}

Furnitures.deleteFurnitures=function(req,callback){        
    Furnitures.remove({_id:req.params.FurnituresId},function (err,Furnitures) {        
        callback(err,"Successfully deleted Furnitures"); 
    });
}

module.exports = Furnitures;
