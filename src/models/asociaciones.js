
const sequelize = require('../../Config/database'); 
const Usuario = require('./Usuario');
const Estacion = require('./Estacion');
const Reserva = require('./Reserva');
const Conector = require('./Conector');
const Cupon = require('./Cupon');
const Descuento = require('./Descuento');

Estacion.hasMany(Conector, {
    foreignKey: {name: 'id_estacion', allowNull: false},
    onDelete: 'CASCADE'
});
Conector.belongsTo(Estacion, {foreignKey: 'id_estacion'});

Usuario.belongsTo(Conector, {
    through: Reserva,
    foreignKey: 'id_usuario',
    otherKey: 'id_conector',
    onDelete: 'RESTRICT'
});
Conector.belongsTo(Usuario, {
    through: Reserva,
    foreignKey: 'id_conector',
    otherKey: 'id_usuario',
    onDelete: 'RESTRICT'
});

Usuario.hasMany(Reserva, {foreignKey: 'id_usuario'});
Reserva.belongsTo(Usuario, {foreignKey: 'id_usuario'});

Conector.hasMany(Reserva, {foreignKey: 'id_conector'});
Reserva.belongsTo(Conector, {foreignKey: 'id_conector'});

Usuario.belongsTo(Cupon, {
    through: Descuento,
    foreignKey: 'id_usuario',
    otherKey: 'id_cupon',
    onDelete: 'RESTRICT'
});

Cupon.belongsTo(Usuario, {
    through: Descuento,
    foreignKey: 'id_cupon',
    otherKey: 'id_usuario',
    onDelete: 'RESTRICT'
});

Usuario.hasMany(Descuento, {foreignKey: 'id_usuario'});
Descuento.belongsTo(Usuario, {foreignKey: 'id_usuario'});

Cupon.hasMany(Descuento, {foreignKey: 'id_cupon'});
Descuento.belongsTo(Cupon, {foreignKey: 'id_cupon'});

module.exports = {
    sequelize,
    Usuario,
    Estacion,
    Reserva,
    Conector,
    Cupon,
    Descuento,
};