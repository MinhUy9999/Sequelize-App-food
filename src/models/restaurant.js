import { DataTypes, Model } from "sequelize";
import sequelize from "./connect.js";
class Restaurant extends Model {}

Restaurant.init(
  {
    res_id: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true,
    },
    res_name: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    image: {
      type: DataTypes.STRING,
    },
    desc: {
      type: DataTypes.STRING,
    },
  },
  {
    sequelize,
    modelName: 'Restaurant',
    tableName: 'restaurant',
    timestamps: false,
  }
);
  
  export default Restaurant;
