// models/subFood.js

import { DataTypes, Model } from 'sequelize';
import sequelize from '../database'; // Import kết nối Sequelize của bạn
import Food from './food.js'; // Import mô hình Food

class SubFood extends Model {}

SubFood.init(
  {
    sub_id: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true,
    },
    sub_name: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    sub_price: {
      type: DataTypes.FLOAT,
      allowNull: false,
    },
    food_id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      references: {
        model: Food,
        key: 'food_id',
      },
    },
  },
  {
    sequelize,
    modelName: 'SubFood',
    tableName: 'sub_food',
    timestamps: false,
  }
);

export default SubFood;
