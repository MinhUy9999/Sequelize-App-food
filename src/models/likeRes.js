import { DataTypes, Model } from "sequelize";
import sequelize from "./connect.js";
import Restaurant from "./restaurant.js";
import User from "./user.js";
class LikeRes extends Model {}

LikeRes.init(
  {
    user_id: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      allowNull: false,
      references: {
        model: User, // Reference to the User model if necessary
        key: 'user_id', // Assuming 'user_id' is the primary key in User table
      },
    },
    res_id: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      allowNull: false,
      references: {
        model: Restaurant, // Reference to the Restaurant model if necessary
        key: 'res_id', // Assuming 'res_id' is the primary key in Restaurant table
      },
    },
    date_like: {
      type: DataTypes.DATE,
      allowNull: false,
    },
  },
  {
    sequelize,
    modelName: 'LikeRes',
    tableName: 'like_res', // Make sure this matches your actual table name in the database
    timestamps: false, // Set to true if your table has timestamps (createdAt, updatedAt)
  }
);
  
  export default LikeRes;