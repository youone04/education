export default (sequelize, DataTypes) => {
    const Waktu = sequelize.define("waktu", {
        waktu: {
            type: DataTypes.STRING
        }
        
    },
    {
        freezeTableName: true
    });
    return Waktu;
  };