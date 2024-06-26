// controllers/userController.js
import User from '../models/user.js';

export const getAllUsers = async (req, res) => {
  try {
    const users = await User.findAll();
    res.status(200).json(users);
    
    // Log success message in Vietnamese
    console.log(`Lấy danh sách tất cả người dùng thành công vào lúc ${new Date()}`);
  } catch (error) {
    // Handle errors and send error response
    console.error(`Lỗi khi lấy danh sách tất cả người dùng: ${error.message}`);
    res.status(500).json({ error: 'Lỗi khi lấy danh sách tất cả người dùng' });
  }
};

