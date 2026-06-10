## JUSTIFICACION DE LOS ONDELETE
### Estacion
```Estacion
Estacion.hasMany(Conector, {
    foreignKey: {name: 'id_estacion', allowNull: false},
    onDelete: 'CASCADE'
});
```
si se elimina una estacion, se eliminaria el conector porque al tener una relacion de 1:N, el cascade borra el dato con el que este relacionado

### Usuario - Reserva
```Usuario
Usuario.belongsTo(Conector, {
    through: Reserva,
    foreignKey: 'id_usuario',
    otherKey: 'id_conector',
    onDelete: 'RESTRICT'
});
```
si se elimina la reserva el onDelete: 'RESTRICT' no permitira que se elimine el usuario si tiene algun historial

### Conector - Reserva
```Conector
Conector.belongsTo(Usuario, {
    through: Reserva,
    foreignKey: 'id_conector',
    otherKey: 'id_usuario',
    onDelete: 'RESTRICT'
});
```
si se elimina la reserva el onDelete: 'RESTRICT' no permitira que se elimine el conector ya que este solo se puede eliminar por medio de la estacion por medio del onDelete: 'CASCADE' anteriormente mencionado

### Cupon - Descuento
```Cupon
Cupon.belongsTo(Usuario, {
    through: Descuento,
    foreignKey: 'id_cupon',
    otherKey: 'id_usuario',
    onDelete: 'RESTRICT'
});
```
si se elimina la reserva el onDelete: 'RESTRICT' no permitira que se elimine el cupon porque lo que se busca eliminar es el descuento, pero el cupon sigue disponible para el usuario

### Cupon - Usuario
```Cupon
Usuario.belongsTo(Cupon, {
    through: Descuento,
    foreignKey: 'id_usuario',
    otherKey: 'id_cupon',
    onDelete: 'RESTRICT'
});
```
si se elimina la reserva el onDelete: 'RESTRICT' no permitira que se elimine el usuario debido a que ya tiene un historial

### DIAGRAMA DEL MER
<img width="1314" height="768" alt="image" src="https://github.com/user-attachments/assets/e4911e5d-8fba-49a8-9d8c-c930ee3270fa" />

















