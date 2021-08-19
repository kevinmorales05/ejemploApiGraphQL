const mongoose = require("mongoose");

const EstudianteSchema = mongoose.Schema({
  nombreCompleto: {
    type: String,
    required: true,
    default: "Usuario"
    //trim: true,
  },
  correo: {
    type: String,
    required: true,
    trim: true,
    unique: true, //solo un correo por estudiante
    lowercase: true, //almacena todo en minuscula
  },
  password: {
    type: String,
    required: true,
    trim: true,
  }
});
module.exports = mongoose.model("Estudiante", EstudianteSchema);
