const mongoose = require("mongoose");

const MateriaSchema = mongoose.Schema({
  nombre: {
    type: String,
    required: true,
    //trim: true,
  },
  nombreProfesor: {
    type: String,
    required:true,
  },
  areaConcimiento: {
    type: String,
    required:true,
  },
  costo: {
    type: Number,
    required:false,
    default: 50
  }

});
module.exports = mongoose.model("Materia", MateriaSchema);