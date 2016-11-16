var mongoose = require('mongoose'),
  Schema = mongoose.Schema;

var CocheSchema = new Schema({
  Marca: String,
  Modelo: String,
  Caballos: Number,
  Color: String
});


mongoose.model('Coche', CocheSchema);