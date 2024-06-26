// models/food.js

import { DataTypes, Model } from 'sequelize';
import sequelize from './connect.js'; // Import kết nối Sequelize của bạn
import FoodType from './foodType.js'; // Import mô hình FoodType

class Food extends Model {}

Food.init(
  {
    food_id: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true,
    },
    food_name: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    image: {
      type: DataTypes.STRING,
    },
    price: {
      type: DataTypes.FLOAT,
      allowNull: false,
    },
    desc: {
      type: DataTypes.STRING,
    },
    type_id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      references: {
        model: FoodType,
        key: 'type_id',
      },
    },
  },
  {
    sequelize,
    modelName: 'Food',
    tableName: 'food',
    timestamps: false,
  }
);

export default Food;
