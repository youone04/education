export default (sequelize, DataTypes) => {
    const Roles = sequelize.define("role", {
        role: {
            type: DataTypes.STRING
        }
        
    },
    {
        freezeTableName: true
    });
    return Roles;
  };