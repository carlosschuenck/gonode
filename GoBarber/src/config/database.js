module.exports = {
  dialect: 'postgres',
  host: '192.168.99.100',
  username: 'docker',
  password: 'docker',
  database: 'postgres',
  operatorAliases: false,
  define: {
    timestamps: true,
    underscored: true,
    underscoredAll: true
  }
}
