export default (sequelize, DataTypes) => {
    const Pembelian = sequelize.define("pembelian", {
        status: {
            type: DataTypes.BOOLEAN, allowNull: false, defaultValue: false
        },
        batch_pembelian: {
            type: DataTypes.STRING
        },
        jadwal_waktu :{
            type: DataTypes.TEXT
        },
        jadwal_hari :{
            type: DataTypes.TEXT
        }
        
    },
    {
        freezeTableName: true
    });
    return Pembelian;
  };