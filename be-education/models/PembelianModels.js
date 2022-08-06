export default (sequelize, DataTypes) => {
    const Pembelian = sequelize.define("pembelian", {
        status: {
            type: DataTypes.BOOLEAN, allowNull: false, defaultValue: false
        }
        
    },
    {
        freezeTableName: true
    });
    return Pembelian;
  };