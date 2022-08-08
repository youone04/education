export default (sequelize, DataTypes) => {
    const Batch = sequelize.define("batch", {
        batchColum : {
            type: DataTypes.STRING
        }        
    },
    {
        freezeTableName: true
    });
    return Batch;
  };