import Order from './../models/order.js';

export const createOrder = async (req, res) => {
  try {
    const { user_id, food_id, amount, code, arr_sub_id } = req.body;
    const order = await Order.create({ user_id, food_id, amount, code, arr_sub_id });

    // Trả về mã trạng thái 201 Created và thông tin của đơn hàng đã được tạo
    res.status(201).json({
      message: 'Đặt hàng thành công',
      order,
    });
  } catch (error) {
    // Xử lý lỗi nếu có và trả về mã trạng thái 500 Internal Server Error
    console.error(`Lỗi khi đặt hàng: ${error.message}`);
    res.status(500).json({ error: 'Lỗi khi đặt hàng' });
  }
};
