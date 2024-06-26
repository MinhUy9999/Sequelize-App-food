// models/rateRes.js

import { DataTypes, Model } from 'sequelize';
import sequelize from './connect.js'; // Import kết nối Sequelize của bạn
import User from './user.js'; // Import mô hình User
import Restaurant from './restaurant.js'; // Import mô hình Restaurant

class RateRes extends Model {}

RateRes.init(
  {
    user_id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      references: {
        model: User,
        key: 'user_id',
      },
    },
    res_id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      references: {
        model: Restaurant,
        key: 'res_id',
      },
    },
    amount: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },
    date_rate: {
      type: DataTypes.DATE,
      allowNull: false,
    },
  },
  {
    sequelize,
    modelName: 'RateRes',
    tableName: 'rate_res',
    timestamps: false,
  }
);

export default RateRes;
