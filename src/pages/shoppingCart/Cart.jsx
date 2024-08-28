import { useState } from 'react';
import './Cart.scss';
import { Link } from 'react-router-dom';

const Cart = () => {

    /**
    * Handle input quantity
    * Chưa xử lý trường hợp nhập quá số lượng có trong kho (Đợi back-end)
    */
    const [quantity, setQuantity] = useState(1);
    const handleQuantityChange = (e) => {
        const value = parseInt(e.target.value);
        if (isNaN(value) || value < 0) {
            setQuantity(1);
        } else {
            setQuantity(value);
        }
    }

    //Only allow number input
    const handleKeyPress = (e) => {
        if (!/[0-9]/.test(e.key)) {
            e.preventDefault();
        }
    }

    //Reset quantity to 1 when input is empty
    const handleMouseLeave = (e) => {
        if (e.target.value === '') {
            setQuantity(1);
        }
    }

    //Increase or decrease quantity
    const toggleQuantity = (value) => {
        if (value === '+') {
            setQuantity(prevQuantity => prevQuantity + 1);
        } else if (value === '-' && quantity > 1) {
            setQuantity(prevQuantity => prevQuantity - 1);
        }
    }
    //-------------End handle input quantity-------------//

    return (
        <div className="cart">
            <div className="container">
                <table>
                    <thead>
                        <tr>
                            <th>Sản phẩm</th>
                            <th>Mô tả</th>
                            <th>Đơn giá</th>
                            <th>Số lượng</th>
                            <th>Tổng</th>
                            <th>Thao tác</th>
                        </tr>
                    </thead>

                    <tbody>
                        <tr>
                            <td>
                                <img src="https://res.cloudinary.com/dwyzqcunj/image/upload/v1724224158/Remove-bg.ai_1720876902030_1_mbi9bc.svg" alt="" />
                                <div className="background">
                                    <img src="https://res.cloudinary.com/dwyzqcunj/image/upload/v1724834860/%C3%B4_2_iw8uvm.svg" alt="product" />
                                </div>
                            </td>
                            <td>Tinh dầu sả chanh 5ml</td>
                            <td>50.000đ</td>
                            <td className='quantity'>
                                <button cl value="-" onClick={() => toggleQuantity("-")}>-</button>
                                <input
                                    type="text"
                                    onChange={handleQuantityChange}
                                    value={quantity}
                                    onKeyPress={handleKeyPress}
                                    onMouseLeave={handleMouseLeave}
                                />
                                <button value="+" onClick={() => toggleQuantity("+")}>+</button>
                            </td>
                            <td>50.000đ</td>
                            <td>
                                <span>Xoá</span>
                            </td>
                        </tr>
                    </tbody>
                </table>

                <div className="total">
                    <span>Tổng: 50.000đ</span>
                </div>

                <div className="action">
                    <Link to='/'>
                        <button>
                            <span>Tiếp tục mua hàng</span>
                        </button>
                    </Link>
                    <button>
                        <span>Thanh toán</span>
                    </button>
                </div>
            </div>
            <div className="background">
                <div className="background-cloud">
                    <img src="https://res.cloudinary.com/dwyzqcunj/image/upload/v1724761940/m%C3%A2y_1_tcmrxx.svg" alt="" />
                </div>
                <div className="background-cloud2">
                    <img src="https://res.cloudinary.com/dwyzqcunj/image/upload/v1724761940/m%C3%A2y_1_tcmrxx.svg" alt="" />
                </div>
            </div>

        </div>
    );
}

export default Cart;