module.exports = (sequelize, DataTypes) => {
  const Appointment = sequelize.define('Appointment', {
    date: DataTypes.DATE
  })

  Appointment.associate = models => {
    // belongsTo realiza o relacionamento colocando o id do usuario dentro da tabela Appointment
    Appointment.belongsTo(models.User, { foreignKey: 'user_id' })
    Appointment.belongsTo(models.User, { foreignKey: 'provider_id' })
  }

  return Appointment
}
