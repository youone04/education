export default (sequelize, DataTypes) => {
    const User = sequelize.define("user", {
        name: {
            type: DataTypes.STRING
        },
        email: {
            type: DataTypes.STRING
        },
        password: {
            type: DataTypes.STRING
        },
        refresh_token: {
            type: DataTypes.TEXT
        },
    },{
        freezeTableName: true
    });
    return User;
  };