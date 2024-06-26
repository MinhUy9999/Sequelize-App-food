import LikeRes from "../models/likeRes.js";
import User from "../models/user.js";
import Restaurant from "../models/restaurant.js";export const likeRestaurant = async (req, res) => {
  try {
    const { user_id, res_id } = req.body;
    const like = await LikeRes.create({ user_id, res_id, date_like: new Date() });
    res.status(201).json({ message: "Thích nhà hàng thành công", like });
    
    // Optionally, you can log a success message in Vietnamese
    console.log(`Người dùng ${user_id} đã thích nhà hàng ${res_id} thành công vào lúc ${new Date()}`);
  } catch (error) {
    console.error(`Lỗi khi thích nhà hàng: ${error.message}`);
    res.status(500).json({ error: error.message });
  }
};

export const getAllLikes = async (req, res) => {
  try {
    const likes = await LikeRes.findAll();
    res.status(200).json(likes);
    
    // Log success message in Vietnamese
    console.log(`Lấy danh sách tất cả các lượt thích thành công vào lúc ${new Date()}`);
  } catch (error) {
    // Handle errors and send error response
    console.error(`Lỗi khi lấy danh sách các lượt thích: ${error.message}`);
    res.status(500).json({ error: "Lỗi khi lấy danh sách các lượt thích" });
  }
};


export const unlikeRestaurant = async (req, res) => {
  try {
    const { user_id, res_id } = req.body;
    await LikeRes.destroy({ where: { user_id, res_id } });
    res.status(200).json({ message: 'Hủy thích nhà hàng thành công' });

    // Log success message in Vietnamese
    console.log(`Người dùng ${user_id} đã hủy thích nhà hàng ${res_id} thành công vào lúc ${new Date()}`);
  } catch (error) {
    // Handle errors and send error response
    console.error(`Lỗi khi hủy thích nhà hàng: ${error.message}`);
    res.status(500).json({ error: 'Lỗi khi hủy thích nhà hàng' });
  }
};

  
export const getLikesByRestaurant = async (req, res) => {
  try {
    const { res_id } = req.params;
    const likes = await LikeRes.findAll({ where: { res_id }, include: User });
    res.status(200).json(likes);
    
    // Log success message in Vietnamese
    console.log(`Lấy danh sách các lượt thích của nhà hàng ${res_id} thành công vào lúc ${new Date()}`);
  } catch (error) {
    // Handle errors and send error response
    console.error(`Lỗi khi lấy danh sách các lượt thích của nhà hàng ${res_id}: ${error.message}`);
    res.status(500).json({ error: `Lỗi khi lấy danh sách các lượt thích của nhà hàng ${res_id}` });
  }
};

  
export const getLikesByUser = async (req, res) => {
  try {
    const { user_id } = req.params;
    const likes = await LikeRes.findAll({ where: { user_id }, include: Restaurant });
    res.status(200).json(likes);
    
    // Log success message in Vietnamese
    console.log(`Lấy danh sách các lượt thích của người dùng ${user_id} thành công vào lúc ${new Date()}`);
  } catch (error) {
    // Handle errors and send error response
    console.error(`Lỗi khi lấy danh sách các lượt thích của người dùng ${user_id}: ${error.message}`);
    res.status(500).json({ error: `Lỗi khi lấy danh sách các lượt thích của người dùng ${user_id}` });
  }
};
