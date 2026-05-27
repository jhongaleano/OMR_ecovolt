
const sequelize = require('../../Config/database'); 
const Usuario = require('./Usuario');
const Estacion = require('./Estacion');
const Reserva = require('./Reserva');
const Conector = require('./Conector');


Usuario.hasMany(Reserva, { foreignKey: 'id_usuario', as: 'reservas' });
Reserva.belongsTo(Usuario, { foreignKey: 'id_usuario', as: 'usuario' });

Estacion.hasMany(Reserva, { foreignKey: 'id_estacion', as: 'reservas' });
Reserva.belongsTo(Estacion, { foreignKey: 'id_estacion', as: 'estacion' });

Estacion.hasMany(Conector, { foreignKey: 'id_estacion', as: 'conectores' });
Conector.belongsTo(Estacion, { foreignKey: 'id_estacion', as: 'estacion' });


module.exports = {
    sequelize,
    Usuario,
    Estacion,
    Reserva,
    Conector
};