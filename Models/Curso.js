const mongoose = require("mongoose");

const CursoSchema = mongoose.Schema({
  nombre: {
    type: String,
    required: true,
    //trim: true,
  },
  cuposDisponibles: {
    type: Number,
    required:false,
    default: 100,
  },
  nivel: {
    type: Number,
    required:true
  }
});
module.exports = mongoose.model("Curso", CursoSchema);
