


const { DataTypes } = require('sequelize');
const sequelize = require('../../Config/database');

const Conector = sequelize.define('Conector', {
    id_conector: {
        type: DataTypes.UUID,
        defaultValue: DataTypes.UUIDV4,
        primaryKey: true
    },
    id_estacion: {
        type: DataTypes.UUID,
        allowNull: false
    },
    codigo_fisico: {
        type: DataTypes.STRING(50),
        allowNull: false
    },
    estado: {
        type: DataTypes.STRING(20),
        allowNull: false,
    }
}, {
        timestamps: true,
        paranoid: true,
        tableName: 'conectores'
    });



module.exports = Conector;