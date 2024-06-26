// models/foodType.js

import { DataTypes, Model } from 'sequelize';
import sequelize from './connect.js'; // Import kết nối Sequelize của bạn

class FoodType extends Model {}

FoodType.init(
  {
    type_id: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true,
    },
    type_name: {
      type: DataTypes.STRING,
      allowNull: false,
    },
  },
  {
    sequelize,
    modelName: 'FoodType',
    tableName: 'food_type',
    timestamps: false,
  }
);

export default FoodType;
