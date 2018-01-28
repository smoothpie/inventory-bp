'use strict';
module.exports = (sequelize, DataTypes) => {
  const Order = sequelize.define('Order', {
    size: {
      type: DataTypes.INTEGER,
      allowNull: false
    }
  });

  Order.associate = (models) => {
    Order.belongsTo(models.Model, {
      foreignKey: 'modelId',
      onDelete: 'CASCADE',
    });
  }

  return Order;
};
