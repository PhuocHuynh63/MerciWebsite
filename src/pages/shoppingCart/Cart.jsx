import { useEffect, useState } from 'react';
import './Cart.scss';
import { Link } from 'react-router-dom';
import Checkout from '../popUp/checkOut/Checkout';

const Cart = () => {

    /**
     * Handle modal show/hide (Payment)
     */
    const [show, setShow] = useState(false);
    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);
    //-------------End handle modal show/hide-------------//


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


    /**
      * Get cart items from local storage
      */
    const [cartItems, setCartItems] = useState([]);


    useEffect(() => {
        const storedCartItems = JSON.parse(localStorage.getItem('cartItems')) || [];
        setCartItems(storedCartItems);
    }, []);


    // Remove item from cart
    const handleRemoveItem = (productId) => {
        const updatedCartItems = cartItems.filter(item => item.productId !== productId);
        setCartItems(updatedCartItems);
        localStorage.setItem('cartItems', JSON.stringify(updatedCartItems));
    }
    //-------------------End remove item from cart-------------------//


    /**
     * Total price of all items in cart
     * @returns Total price of all items in cart
     */
    const getTotalPrice = () => {
        return cartItems.reduce((total, item) => total + item.totalPrice, 0).toLocaleString('vi-VN');
    };
    //-------------------End total price of all items in cart-------------------//

    return (
        <div className="cart">
            <Checkout show={show} handleClose={handleClose} />

            {cartItems.length === 0 ?
                <div className="empty-cart">
                    {/* <img src="https://res.cloudinary.com/dwyzqcunj/image/upload/v1724224158/Remove-bg.ai_1720876902030_1_mbi9bc.svg" alt="" /> */}
                    <p>Giỏ hàng của bạn đang trống</p>
                    <Link to='/'>
                        <button>
                            <span>Quay lại trang chủ</span>
                        </button>
                    </Link>
                </div>
                : (
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
                            {cartItems.map((item, index) => (

                                <tbody>
                                    <tr>
                                        <td>
                                            <img src={item.image} alt="" />
                                            <div className="background">
                                                <img src="https://res.cloudinary.com/dwyzqcunj/image/upload/v1724834860/%C3%B4_2_iw8uvm.svg" alt="product" />
                                            </div>
                                        </td>
                                        <td>{item.productName}</td>
                                        <td>{item.salePrice.toLocaleString()}đ</td>
                                        <td className='quantity'>
                                            <button value="-" onClick={() => toggleQuantity("-")}>-</button>
                                            <input
                                                type="text"
                                                onChange={handleQuantityChange}
                                                value={item.quantity}
                                                onKeyPress={handleKeyPress}
                                                onMouseLeave={handleMouseLeave}
                                            />
                                            <button value="+" onClick={() => toggleQuantity("+")}>+</button>
                                        </td>
                                        <td> {(item.quantity * item.salePrice).toLocaleString()}đ</td>
                                        <td>
                                            <span>Xoá</span>
                                        </td>
                                    </tr>
                                </tbody>
                            ))}
                        </table>
                        <div className="total">
                            <span>{getTotalPrice().toLocaleString()} đ</span>
                        </div>

                        <div className="action">
                            <Link to='/'>
                                <button>
                                    <span>Tiếp tục mua hàng</span>
                                </button>
                            </Link>
                            <button onClick={handleShow}>
                                <span>Thanh toán</span>
                            </button>
                        </div>
                    </div>
                )
            }
            < div className="background">
                <div className="background-cloud">
                    <img src="https://res.cloudinary.com/dwyzqcunj/image/upload/v1724761940/m%C3%A2y_1_tcmrxx.svg" alt="" />
                </div>
                <div className="background-cloud2">
                    <img src="https://res.cloudinary.com/dwyzqcunj/image/upload/v1724761940/m%C3%A2y_1_tcmrxx.svg" alt="" />
                </div>
            </div >
        </div>
    );
}

export default Cart;