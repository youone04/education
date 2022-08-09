export default (sequelize, DataTypes) => {
    const MetodePembayaran = sequelize.define("metode_pembayaran", {
        nama_metode: {
            type: DataTypes.STRING
        },
        no_pembayaran: {
            type: DataTypes.STRING
        }
    },
    {
        freezeTableName: true
    });
    return MetodePembayaran;
  };