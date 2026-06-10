const { DataTypes } = require('sequelize');
const sequelize = require('../../Config/database');

const Cupon = sequelize.define('Cupon', {
    id_cupon:{
        type: DataTypes.INTEGER,
        defaultValue: DataTypes.UUIDV4,
        primaryKey: true
    },
    codigo: {
        type: DataTypes.STRING,
        allowNull: false
    },
    descuento_porcentaje: {
        type: DataTypes.DECIMAL(9,6),
        allowNull: false
    },
    fecha_expiracion: {
        type: DataTypes.DATE,
        allowNull: false
    },
}, {
        timestamps: true,
        paranoid: true,
        tableName: 'cupones'
    });

module.exports = Cupon;