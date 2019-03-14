module.exports = function(sequelize, DataTypes) {
  const playDate = sequelize.define('playDate', {
    id: {
      type: DataTypes.INTEGER(255),
      allowNull: false,
      autoIncrement: true,
      primaryKey: true,
    },
    match_sender: {
      type: DataTypes.STRING(255),
      allowNull: false,
    },
    match_receiver: {
      type: DataTypes.STRING(255),
      allowNull: false,
    },
    date: {
      type: DataTypes.DATE,
      allowNull: false,
    },
    time: {
      type: DataTypes.TIME,
      allowNull: false,
    },
    location: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    accepted: {
      type: DataTypes.BOOLEAN,
      allowNull: false,
    },
  });
  return playDate;
};
