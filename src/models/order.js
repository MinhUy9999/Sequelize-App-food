import { DataTypes, Model } from "sequelize";
import sequelize from "./connect.js";
import User from './user.js'; // Import mô hình User
import Food from './food.js'; // Import mô hình Food

class Order extends Model {}

Order.init(
  {
    user_id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      references: {
        model: User,
        key: 'user_id',
      },
    },
    food_id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      references: {
        model: Food,
        key: 'food_id',
      },
    },
    amount: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },
    code: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    arr_sub_id: {
      type: DataTypes.STRING,
      allowNull: false,
    },
  },
  {
    sequelize,
    modelName: 'Order',
    tableName: 'order',
    timestamps: false,
  }
);
  
  export default Order;