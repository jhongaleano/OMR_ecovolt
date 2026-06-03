

const {DataTypes} = require('sequelize');
const sequelize = require('../../Config/database');

const Reserva = require('./Reserva');

const Usuario = sequelize.define('Usuario', {
    id_usuario: {
        type: DataTypes.UUID,
        defaultValue: DataTypes.UUIDV4,
        primaryKey: true
    },
    nombreCompleto: {
        type: DataTypes.STRING(100),
        allowNull: false 
    },
    correo: {
        type: DataTypes.STRING(150),
        allowNull: false,
        unique: true,
        validate: {
            isEmail: true // Valida el formato antes de guardar
        }
    },
    telefono: {
        type: DataTypes.STRING(20),
        allowNull: true
    },
    contrasenna: {
        type: DataTypes.STRING(100),
        allowNull: true
    },
    ciudad: {
        type: DataTypes.STRING(50),
        allowNull: true
    },
    isActive: {
        type: DataTypes.BOOLEAN,
        defaultValue: true
    },
},
{    
    hooks:{
        afterDestroy: async(Usuario, options)=>{
            if(Usuario.isActive === false){

            await Reserva.destroy({
                    where: { id_usuario: Usuario.id_usuario},
                    transaction: options.transaction
                });
            }
        },
    }
},
 {
        timestamps: true,
        paranoid: true, // Crear el campo deleted_at
        tableName: 'usuarios' // En plural y en minusculas
    });

    module.exports = Usuario;