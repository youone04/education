export default (sequelize, DataTypes) => {
    const Link = sequelize.define("link", {
        judul : {
            type: DataTypes.STRING
        },
        keterangan : {
            type: DataTypes.STRING
        },
        link: {
            type: DataTypes.STRING
        },        
    },
    {
        freezeTableName: true
    });
    return Link;
  };