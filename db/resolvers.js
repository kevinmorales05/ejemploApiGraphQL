//importamos Modelos
const Estudiante = require("../Models/Estudiante");
const Curso = require("../Models/Curso");
const Materia = require("../Models/Materia");

const resolvers = {
   Query:{
    obtenerEstudiantes: async (_,{input}, ctx) => {
        const estudiantes = await Estudiante.find();
        return estudiantes;
    },

    obtenerCursos: async(_,{input}, ctx)=> {
        const cursos = await Curso.find();
        return cursos;
    },
    obtenerMaterias:async(_,{input}, ctx)=> {
        const materias = await Materia.find();
        return materias;
    },
    obtenerCursoPorNombre: async(_,{input}, ctx)=> {
        const curso = await Curso.findOne({ nombre: input.nombre})
        return curso;
    },
    
   },
   Mutation: {
    nuevoCurso: async ( _, { input }, ctx ) =>{
        try {
          const curso= new Curso(input);
          
          //almacenar en la base de datos
          const resultado = await curso.save();
          return "Curso creado exitosamente";
        } catch (error) {
          console.log(error);
        }
      },
   }
}

module.exports= resolvers;