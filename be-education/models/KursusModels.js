export default (sequelize, DataTypes) => {
    const Kursus = sequelize.define("kursus", {
        judul: {
            type: DataTypes.STRING
        },
        gambar: {
            type: DataTypes.STRING
        },
        harga: {
            type: DataTypes.INTEGER
        },
        deskripsi: {
            type: DataTypes.STRING
        },
        hari: {
            type: DataTypes.STRING
        },
        waktu: {
            type: DataTypes.STRING
        },
        syllabus: {
            type: DataTypes.STRING
        }

        
    },
    {
        freezeTableName: true
    });
    return Kursus;
  };