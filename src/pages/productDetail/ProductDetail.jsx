import { useState } from 'react';
import './ProductDetail.scss';

const ProductDetail = (props) => {
    const { slug } = props;

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
        <div className="product-detail">
            <div className="container product">
                <div className="row d-flex justify-content-around">
                    <div className="col-6 img">
                        <img src="https://res.cloudinary.com/dwyzqcunj/image/upload/v1724501740/Rectangle_34_oryboz.svg" alt="" />
                        <img src="https://res.cloudinary.com/dwyzqcunj/image/upload/v1724501913/SET_THU%E1%BB%B6_H%E1%BB%92NG_1_ie6gqc.svg" alt="" />
                    </div>
                    <div className="col-6 detail">
                        <div className="text">
                            <span>SET QUÀ TẶNG THUỶ HỒNG</span>
                            <p>Miễn phí giao hàng | Giao hàng 1-2 ngày - TP. Hồ Chí Minh</p>
                            <p>449.000đ</p>
                        </div>

                        <div className="quantity">
                            <button cl value="-" onClick={() => toggleQuantity("-")}>-</button>
                            <input
                                type="text"
                                onChange={handleQuantityChange}
                                value={quantity}
                                onKeyPress={handleKeyPress}
                                onMouseLeave={handleMouseLeave}
                            />
                            <button value="+" onClick={() => toggleQuantity("+")}>+</button>
                        </div>

                        <div className="action">
                            <button className="add-to-cart">Thêm vào giỏ hàng</button>
                            <button className="purchase">Tiến hành thanh toán</button>
                        </div>
                    </div>
                    <div className="background">
                        <img src="https://res.cloudinary.com/dwyzqcunj/image/upload/v1724761940/m%C3%A2y_1_tcmrxx.svg" alt="" />
                    </div>
                </div>

            </div>

            <div className="container product-description">
                <div className="background">
                    <img src="https://res.cloudinary.com/dwyzqcunj/image/upload/v1724761940/m%C3%A2y_1_tcmrxx.svg" alt="" />
                </div>
                <div className="title">Mô tả sản phẩm</div>
                <div className="text">
                    <span><strong>Tinh dầu sả chanh</strong> là sản phẩm thiên nhiên tinh khiết, chiết xuất từ sả chanh tươi ngon. Với hương thơm tươi mát, tinh dầu này mang lại cảm giác thư giãn và nhiều lợi ích cho sức khỏe như khử mùi, làm sạch không khí, giảm căng thẳng, chăm sóc da và xua đuổi côn trùng. Sử dụng tinh dầu bằng cách nhỏ vài giọt vào máy khuếch tán, pha loãng với dầu nền để massage, hoặc nhỏ vào bồn tắm để thư giãn. Tinh dầu sả chanh 5ml là lựa chọn hoàn hảo để mang lại hương thơm tự nhiên và lợi ích sức khỏe cho cuộc sống của bạn.</span>
                </div>
            </div>
        </div>
    );
}

export default ProductDetail;