const { gql} = require('apollo-server'); //gpq, vamos a la sintaxis de graphical
const typeDefs =gql`
    #TYPES
    type Estudiante {
        id: ID
        nombreCompleto: String
        correo: String
        password: String
    }
    type Curso {
        id: ID
        nombre: String
        cuposDisponibles: Int
        nivel: Int
    }
    type Materia {
        id: ID
        nombre: String
        nombreProfesor: String
        areaConocimiento:String
        costo: Float
    }
    type Token {
        token: String
      }

    #INPUT TYPES
    input EstudianteInput {
        nombreCompleto: String!
        correo: String!
        password: String!
    }
    input CursoInput {
        nombre: String!
        cuposDisponibles: Int
        nivel: Int!
    }
    input MateriaInput {
        nombre: String!
        nombreProfesor: String!
        areaConocimiento:String!
        costo: Float
    }
    input CursoNombreInput{
        nombre: String!
    }
    type Query {
        obtenerEstudiantes: [Estudiante]
        obtenerCursoPorNombre(input: CursoNombreInput): Curso
        obtenerCursos: [Curso]
        obtenerMaterias: [Materia]
    }
    type Mutation {
        nuevoCurso(input:CursoInput ): String
    }
    


`;
module.exports= typeDefs;