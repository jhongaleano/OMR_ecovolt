const { DataTypes } = require('sequelize');
const sequelize = require('../../Config/database');


const Descuento = sequelize.define('Descuento', {
    id_Descuento:{
        type: DataTypes.INTEGER,
        defaultValue: DataTypes.UUIDV4,
        primaryKey: true
    },
    id_usuario: {
        type: DataTypes.UUID,
        allowNull: false
    },
    id_cupon: {
        type: DataTypes.INTEGER,
        allowNull: true
    },
    aplicado_en_reserva: {
        type: DataTypes.STRING,
        allowNull: true
    },
    fecha_uso: {
        type: DataTypes.DATE,
        allowNull: false
    },
}, {
        timestamps: true,
        paranoid: true,
        tableName: 'descuentos'
    });

module.exports = Descuento;