

const { DataTypes } = require('sequelize');
const sequelize = require('../../Config/database');

const Estacion = sequelize.define('Estacion', {
    id_estacion: {
        type: DataTypes.UUID,
        defaultValue: DataTypes.UUIDV4,
        primaryKey: true
    },
    nombre: {
        type: DataTypes.STRING(120),
        allowNull: false
    },
    latitud: {
        type: DataTypes.DECIMAL(9, 6),
        allowNull: false,
        validate: {
            min: -4,
            max: 13
        }
    },
    longitud: {
        type: DataTypes.DECIMAL(9, 6),
        allowNull: false,
        validate: {
            min: -82,
            max: -67
        }
    },
    precioKw: {
        type: DataTypes.DECIMAL(10, 2),
        allowNull: false,
        validate: {
            min: 0,
            
            // VALIDADOR PERSONALIZADO PARA EL PRECIO ABSURDO
            noCambioAbsurdo(nuevoPrecio) {

                const precioAnterior = this.previous('precioKw');

                if (precioAnterior !== undefined && precioAnterior > 0) {
                    const porcentajeCambio = Math.abs((nuevoPrecio - precioAnterior) / precioAnterior) * 100;
                    
                    if (porcentajeCambio > 50) {
                        throw new Error(`Cambio de precio absurdo. Varió un ${porcentajeCambio.toFixed(1)}% (Máximo permitido: 50%)`);
                    }
                }
            }
        }
    }
}, {
    timestamps: true,
    tableName: 'estaciones'
});


module.exports = Estacion;