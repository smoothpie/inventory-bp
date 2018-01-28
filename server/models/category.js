'use strict';
module.exports = (sequelize, DataTypes) => {
  const Category = sequelize.define('Category', {
    title: {
      type: DataTypes.STRING,
      allowNull: false
    },
    description: {
      type: DataTypes.STRING
    },
    image: {
      type: DataTypes.STRING
    }
  });

  Category.associate = (models) => {
    Category.hasMany(models.Model, {
      foreignKey: 'categoryId',
      as: 'models',
    });
  };

  return Category;
};
