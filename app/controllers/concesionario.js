var express = require('express');
var router = express.Router();
var _ =require('lodash');
var xmlify = require('xmlify');

var mongoose = require('mongoose');
var Coche = mongoose.model('Coche');

module.exports = function (app) {
  app.use('/coches', router);
};

/* GET home page. */
router.get('/', function(req, res, next) {
	Coche.find(function (err, cochesEncontrados) {
	  if (err) return handleError(err);
	  //Código que queremos ejecutar cuando hemos encontrado "personajes"
		res.render('concesionario', { title: 'Coches', coches: cochesEncontrados });
	  });
 
});

router.post('/', function(req, res) { 
                    
	var nuevoCoche = new Coche ({
	  Marca: req.body.Marca,
	  Modelo: req.body.Modelo,
	  Caballos: req.body.Caballos,
	  Color: req.body.Color
	  });
	  
    
	nuevoCoche.save(function (err) {
	  if (err) return handleError(err);
	  res.redirect('/coches');
	});
  
});

router.get('/json', function(req, res, next) {
	Coche.find(function(err, cochesEncontrados) {
		if (err) return next(err);
		res.json(cochesEncontrados);
	});
});


router.get('/xml', function(req, res, next) {
	 Coche.find(function(err, cochesEncontrados) {
		 if (err) return next(err);
		 res.send(xmlify(cochesEncontrados, 'coches'));
	 });
});

 

router.get('/:ID', function(req, res) {
                    //código para gestionar esta petición
var ID = req.params.ID;

  Coche.findOne({ '_id': ID },function (err, CocheEncontrado) {
    if (err) throw err;
	console.log(CocheEncontrado);
	res.render('coche', {coche: CocheEncontrado});
    
  });
 });

router.delete('/:ID', function(req, res) {
  var ID = req.params.ID;
  Coche.remove({ _id: ID }, function (err) {
	if (err) return handleError(err);
	res.redirect('/coches');
 
	});
                
 
});				 



				 