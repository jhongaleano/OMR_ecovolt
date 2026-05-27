


const { DataTypes } = require('sequelize');
const sequelize = require('../../Config/database');


const Reserva = sequelize.define('Reserva', {
    id_reserva:{
        type: DataTypes.UUID,
        defaultValue: DataTypes.UUIDV4,
        primaryKey: true
    },
    id_usuario: {
        type: DataTypes.UUID,
        allowNull: false
    },
    id_estacion: {
        type: DataTypes.UUID,
        allowNull: false
    },
    fecha_reserva: {
        type: DataTypes.DATE,
        allowNull: false
    },hora_inicio: {
        type: DataTypes.TIME,
        allowNull: false
    },duracion_horas: {
        type: DataTypes.INTEGER,
        allowNull: false
    },
    isActive: {
        type: DataTypes.BOOLEAN,
        defaultValue: true
    },total_pagar: {
        type: DataTypes.DECIMAL(10, 2),
        allowNull: false
    },
}, {
        timestamps: true,
        paranoid: true, // Crear el campo deleted_at
        tableName: 'reservas' // En plural y en minusculas
    });

module.exports = Reserva;