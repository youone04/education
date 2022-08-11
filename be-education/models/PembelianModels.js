export default (sequelize, DataTypes) => {
    const Pembelian = sequelize.define("pembelian", {
        status: {
            type: DataTypes.BOOLEAN, allowNull: false, defaultValue: false
        },
        batch_pembelian: {
            type: DataTypes.STRING
        },
        bukti_pembayaran : {
            type: DataTypes.STRING
        }
    },
    {
        freezeTableName: true
    });
    return Pembelian;
  };