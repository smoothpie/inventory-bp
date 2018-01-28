'use strict';
module.exports = (sequelize, DataTypes) => {
  const Model = sequelize.define('Model', {
    title: {
      type: DataTypes.STRING,
      allowNull: false
    },
    description: {
      type: DataTypes.STRING
    },
    price: {
      type: DataTypes.INTEGER
    },
    amount: {
      type: DataTypes.INTEGER
    },
    image: {
      type: DataTypes.STRING
    }
  });

  Model.associate = (models) => {
    Model.belongsTo(models.Category, {
      foreignKey: 'categoryId',
      onDelete: 'CASCADE',
    });
    Model.belongsTo(models.Vendor, {
      foreignKey: 'vendorName',
      onDelete: 'CASCADE',
    });
    Model.hasMany(models.Order, {
      foreignKey: 'modelId',
      as: 'orders',
    });
  };

  return Model;
};
