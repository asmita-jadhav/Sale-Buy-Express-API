var express=require("express");
var router = express.Router();

var mongoose = require('mongoose');
var Furnitures = mongoose.model('Furnitures');

router.get('/',function(req,res,next){    
    Furnitures.getAllFurnitures(req,function(err,Furnitures){
        if(err){
            res.send(err);
        }
        res.json(Furnitures);
    });   
});

router.get('/:FurnituresId',function(req,res,next){      
    Furnitures.getlFurnituresById(req,function(err,Furnitures){
        if(err){
            res.send(err);
        }
        res.json(Furnitures);
    });   
});

/*router.get('/find/:query',function(req,res,next){      
    Furnitures.getlFurnituresByQueries(req,function(err,Furnitures){
        if(err){
            res.send(err);
        }
        res.json(Furnitures);
    });   
});*/

router.post('/',function(req,res,next){    
    Furnitures.addFurnitures(req,function(err,Furnitures){
        if(err){
            res.send(err);
        }
        res.json(Furnitures);
    });   
});

router.put("/:FurnituresId",function(req,res,next){
    Furnitures.updateFurnitures(req,function(err,Furnitures){
        if(err){
            res.send(err);
        }
        res.json(Furnitures);
    });   
});

router.delete('/:FurnituresId',function(req,res,next){    
    Furnitures.deleteFurnitures(req,function(err,sucess){
        if(err){
            res.send(err);
        }
        res.json(sucess);
    });   
});


module.exports=router;