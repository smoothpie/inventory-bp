'use strict';
module.exports = (sequelize, DataTypes) => {
  const Vendor = sequelize.define('Vendor', {
    title: {
      type: DataTypes.STRING,
      allowNull: false
    },
    email: {
      type: DataTypes.STRING
    }
  });

  Vendor.associate = (models) => {
    Vendor.hasMany(models.Model, {
      foreignKey: 'vendorName',
      as: 'models',
    });
  };

  return Vendor;
};
