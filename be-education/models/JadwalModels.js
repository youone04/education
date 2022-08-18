export default (sequelize, DataTypes) => {
    const Jadwal = sequelize.define("jadwal", {
        waktu: {
            type: DataTypes.STRING
        },
        hari: {
            type: DataTypes.STRING
        }
        
    },
    {
        freezeTableName: true
    });
    return Jadwal;
  };