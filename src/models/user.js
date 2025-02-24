import { DataTypes,Model } from "sequelize";
import sequelize from "./connect.js";


class User extends Model{}
User.init (
  {
  user_id: {
    type: DataTypes.INTEGER,
    primaryKey: true,
    autoIncrement: true
  },
  full_name: {
    type: DataTypes.STRING,
    allowNull: false
  },
  email: {
    type: DataTypes.STRING,
    allowNull: false,
    unique: true
  },
  password: {
    type: DataTypes.STRING,
    allowNull: false
  }
}, {
  sequelize,
  modelName: 'user',
  tableName: 'user',
  timestamps: false // Không sử dụng timestamps
});
  

  
  export default User;