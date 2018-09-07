var express=require("express");
var router = express.Router();

var mongoose = require('mongoose');
var Vehicles = mongoose.model('Vehicles');

router.get('/',function(req,res,next){   
    Vehicles.getAllVehicles(req,function(err,Vehicles){
        if(err){
            res.send(err);
        }
        res.json(Vehicles);
    });   
});

router.get('/:VehiclesId',function(req,res,next){      
    Vehicles.getlVehiclesById(req,function(err,Vehicles){
        if(err){
            res.send(err);
        }
        res.json(Vehicles);
    });   
});

/*router.get('/find/:query',function(req,res,next){      
    Vehicles.getlVehiclesByQueries(req,function(err,Vehicles){
        if(err){
            res.send(err);
        }
        res.json(Vehicles);
    });   
});*/

router.post('/',function(req,res,next){       
    Vehicles.addVehicles(req,function(err,Vehicles){
        if(err){
            res.send(err);
        }
        res.json(Vehicles);
    });   
});

router.put("/:VehiclesId",function(req,res,next){
    Vehicles.updateVehicles(req,function(err,Vehicles){
        if(err){
            res.send(err);
        }
        res.json(Vehicles);
    });   
});

router.delete('/:VehiclesId',function(req,res,next){        
    Vehicles.deleteVehicles(req,function(err,sucess){
        if(err){
            res.send(err);
        }
        res.json(sucess);
    });   
});


module.exports=router;