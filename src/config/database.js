module.exports = {
  dialect: 'postgres',
  host: '192.168.99.100', // substituir por localhost
  username: 'postgres',
  password: 'docker',
  database: 'gobarber',
  define: {
    timestamps: true,
    underscored: true,
    underscoredAll: true,
  },
};
