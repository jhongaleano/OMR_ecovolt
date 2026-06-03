
const sequelize = require('../../Config/database'); 
const Usuario = require('./Usuario');
const Estacion = require('./Estacion');
const Reserva = require('./Reserva');
const Conector = require('./Conector');





Estacion.hasMany(Reserva, { foreignKey: 'id_estacion', as: 'reservas' });
Reserva.belongsTo(Estacion, { foreignKey: 'id_estacion', as: 'estacion' });


Conector.belongsToMany(Usuario, { through: 'Reserva', foreignKey: 'id_conector' });
Usuario.belongsToMany(Conector, { through: 'Reserva', foreignKey: 'id_usuario' });

Estacion.hasMany(Conector, { foreignKey: 'id_estacion', as: 'conectores' });
Conector.belongsTo(Estacion, { foreignKey: 'id_estacion', as: 'estacion' });


module.exports = {
    sequelize,
    Usuario,
    Estacion,
    Reserva,
    Conector
};