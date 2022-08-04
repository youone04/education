export default (sequelize, DataTypes) => {
    const Hari = sequelize.define("hari", {
        hari: {
            type: DataTypes.STRING
        }
        
    },
    {
        freezeTableName: true
    });
    return Hari;
  };