
const sequelize = require('../../Config/database'); 
const Usuario = require('./Usuario');
const Estacion = require('./Estacion');
const Reserva = require('./Reserva');
const Conector = require('./Conector');





Estacion.hasMany(Conector, { foreignKey: 'id_estacion', as: 'conectores' });
Conector.belongsTo(Estacion, { foreignKey: 'id_estacion', as: 'estacion' });



Usuario.hasMany(Reserva, { foreignKey: 'id_usuario', as: 'reservas' });
Reserva.belongsTo(Usuario, { foreignKey: 'id_usuario', as: 'usuario' });


Conector.hasMany(Reserva, { foreignKey: 'id_conector', as: 'reservas' });
Reserva.belongsTo(Conector, { foreignKey: 'id_conector', as: 'conector' });

module.exports = {
    sequelize,
    Usuario,
    Estacion,
    Reserva,
    Conector
};