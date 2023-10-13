module.exports = (sequelize, DataTypes) => {
    const CommunicationHistories = sequelize.define("CommunicationHistories", {
      id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true,
      },
      comType: {
        type: DataTypes.STRING,
        defaultValue: "",
      },
      to: {
        type: DataTypes.STRING,
        defaultValue: "",
      },
      sub: {
        type: DataTypes.STRING,
        defaultValue: "",
      },
      status: {
        type: DataTypes.STRING,
        defaultValue: "",
      },
      
      deletedAt: {
        type: "TIMESTAMP",
        allowNull: true,
      }, 
      createdAt: {
        type: "TIMESTAMP",
        allowNull: true,
      }, 
      updatedAt: {
        type: "TIMESTAMP",
        allowNull: true,
      },
    });
  
  
    return CommunicationHistories;
  };
  