
import RateRes from './../models/rateRes.js';
import User from './../models/user.js';
import Restaurant from '../models/restaurant.js';
export const rateRestaurant = async (req, res) => {
  try {
    const { user_id, res_id, amount } = req.body;
    const rating = await RateRes.create({ user_id, res_id, amount, date_rate: new Date() });
    
    // Trả về mã trạng thái 201 Created và thông tin của đánh giá đã được tạo
    res.status(201).json({
      message: 'Đánh giá nhà hàng thành công',
      rating,
    });
  } catch (error) {
    // Xử lý lỗi nếu có và trả về mã trạng thái 500 Internal Server Error
    console.error(`Lỗi khi đánh giá nhà hàng: ${error.message}`);
    res.status(500).json({ error: 'Lỗi khi đánh giá nhà hàng' });
  }
};

export const getRatingsByRestaurant = async (req, res) => {
  try {
    const { res_id } = req.params;
    const ratings = await RateRes.findAll({ where: { res_id }, include: User });
    res.status(200).json(ratings);
    
    // Log success message in Vietnamese
    console.log(`Lấy danh sách đánh giá của nhà hàng ${res_id} thành công vào lúc ${new Date()}`);
  } catch (error) {
    // Handle errors and send error response
    console.error(`Lỗi khi lấy danh sách đánh giá của nhà hàng ${res_id}: ${error.message}`);
    res.status(500).json({ error: `Lỗi khi lấy danh sách đánh giá của nhà hàng ${res_id}` });
  }
};

export const getRatingsByUser = async (req, res) => {
  try {
    const { user_id } = req.params;
    const ratings = await RateRes.findAll({ where: { user_id }, include: Restaurant });
    res.status(200).json(ratings);
    
    // Log success message in Vietnamese
    console.log(`Lấy danh sách đánh giá của người dùng ${user_id} thành công vào lúc ${new Date()}`);
  } catch (error) {
    // Handle errors and send error response
    console.error(`Lỗi khi lấy danh sách đánh giá của người dùng ${user_id}: ${error.message}`);
    res.status(500).json({ error: `Lỗi khi lấy danh sách đánh giá của người dùng ${user_id}` });
  }
};
