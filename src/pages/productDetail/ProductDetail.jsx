import { useEffect, useState } from 'react';
import './ProductDetail.scss';
import DashboardStar from '../../components/dashboardStar/DashboardStar';
import CommentModal from './commentModal/CommentModal';
import ListComment from '../../components/listComment/ListComment';
import { merci } from '../../service/merciSrc';
import { useParams } from 'react-router-dom';
import { notification } from 'antd';

const ProductDetail = () => {
    const { slug } = useParams();

    /**
     * Call API product detail
     */
    const [productDetail, setProductDetail] = useState({});
    useEffect(() => {
        merci.getProductDetail(slug)
            .then((res) => {
                setProductDetail(res.data.data);
            });
    }, [slug]);
    //-------------------End call API product detail-------------------//


    const [comboDetail, setComboDetail] = useState({});
    useEffect(() => {
        merci.getComboDetail(slug)
            .then((res) => {
                setComboDetail(res.data.data);
            });
    }, [slug]);


    /**
     * Modal Feedbacks
     */
    const [showModal, setShowModal] = useState(false);
    const handleOpenModal = () => {
        setShowModal(true);
    }
    //----------------End modal feedback------------------//


    /**
     * Form Submit Feedback Handler
     */
    const [formFeedback, setFormFeedback] = useState({
        name: '',
        email: '',
        phone: '',
        content: '',
        starRating: 0
    });

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormFeedback({
            ...formFeedback,
            [name]: value
        });
    }

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log(formFeedback);
    }
    //----------------End form submit feedback handler------------------//


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
     * Scroll to top when component is mounted
     */
    useEffect(() => {
        window.scrollTo(0, 300);
    }, []);
    //----------------End scroll to top------------------//


    /**
     * Handle rating, review
     */
    const [starRating, setStarRating] = useState(0);
    const handleStarRating = (rating) => {
        setStarRating(rating);
        setFormFeedback(prev => ({ ...prev, starRating: rating }));
    }

    const handleViewStarRating = (starIndex, rating) => {
        if (starIndex <= rating - 1) {
            return 'fa-solid fa-star';
        } else if (starIndex < rating && rating % 1 !== 0) {
            return 'fa-solid fa-star-half-stroke';
        } else {
            return 'fa-regular fa-star';
        }
    }
    //----------------End handle star rating------------------//


    /**
    * Handle click on cart icon
    * @param {*} e 
    * @param {*} product 
    * @returns 
    */
    const handleAddToCart = () => {
        // if (!productDetail || productDetail.quantity === 0 || productDetail.status === 'Hết hàng') {
        //     showModalnotify(
        //         <div className='notice__content'>
        //             <i className="check__icon fa-solid fa-circle-check"></i>
        //             <h1>Sản phẩm hiện đã hết hàng</h1>
        //         </div>
        //     );
        //     return;
        // }

        const item = {
            idProduct: productDetail.idProduct,
            idCategory: productDetail.idCategory,
            salePrice: productDetail.salePrice,
            image: productDetail.image,
            productName: productDetail.name,
            quantity,
            max: productDetail.quantity,
            price: productDetail.price,
            totalPrice: quantity * (productDetail.salePrice || productDetail.price),
        };

        let cartItems = JSON.parse(localStorage.getItem('cartItems')) || [];
        const existingItemIndex = cartItems.findIndex(cartItem => cartItem.idProduct === item.idProduct);

        if (existingItemIndex > -1) {
            const existingItem = cartItems[existingItemIndex];
            const newQuantity = existingItem.quantity + item.quantity;

            if (newQuantity > item.max) {
                existingItem.quantity = item.max;
                existingItem.totalPrice = item.max * (existingItem.salePrice || existingItem.price);
                notification.error({
                    message: 'Thông báo',
                    description: 'Số lượng sản phẩm đã đạt tối đa',
                    placement: 'topRight'
                });
                // showModalnotify(
                //     <div className='notice__content'>
                //         <i className="check__icon fa-solid fa-circle-check"></i>
                //         <h1>Đã đạt số lượng tối đa</h1>
                //     </div>
                // );
            } else {
                existingItem.quantity = newQuantity;
                existingItem.totalPrice = newQuantity * (existingItem.salePrice || existingItem.price);
                notification.success({
                    message: 'Thông báo',
                    description: 'Cập nhật giỏ hàng thành công',
                    placement: 'topRight'
                });
                // showModalnotify(
                //     <div className='notice__content'>
                //         <i className="check__icon fa-solid fa-circle-check"></i>
                //         <h1>Cập nhật giỏ hàng thành công</h1>
                //     </div>
                // );
            }
        } else {
            if (item.quantity > item.max) {
                item.quantity = item.max;
                item.totalPrice = item.max * (item.salePrice || item.price);
                // showModalnotify(
                //     <div className='notice__content'>
                //         <i className="check__icon fa-solid fa-circle-check"></i>
                //         <h1>Số lượng đã đạt tối đa</h1>
                //     </div>
                // );
            } else {
                item.totalPrice = item.quantity * (item.salePrice || item.price);
                notification.success({
                    message: 'Thông báo',
                    description: 'Thêm sản phẩm vào giỏ thành công',
                    placement: 'topRight'
                });
                // showModalnotify(
                //     <div className='notice__content'>
                //         <i className="check__icon fa-solid fa-circle-check"></i>
                //         <h1>Thêm sản phẩm vào giỏ thành công</h1>
                //     </div>
                // );
            }
            cartItems.push(item);
        }

        localStorage.setItem('cartItems', JSON.stringify(cartItems));
    };

    //------End------//

    return (
        <div className="product-detail">
            <div className="container product">
                <div className="row d-flex justify-content-around">

                    <div className="col-6 img">
                        <img src="https://res.cloudinary.com/dwyzqcunj/image/upload/v1724501740/Rectangle_34_oryboz.svg" alt="" />
                        <img src={productDetail.image} alt="" />
                    </div>

                    <div className="col-6 detail">
                        <div className="text">
                            <span>{productDetail.productName}</span>
                            <p>Miễn phí giao hàng | Giao hàng 1-2 ngày - TP. Hồ Chí Minh</p>
                            <span>{productDetail?.salePrice?.toLocaleString()}đ</span>

                            {productDetail && productDetail.salePrice !== null && productDetail.salePrice !== 0 && productDetail.price !== 0 ? (
                                <span>{productDetail.salePrice !== productDetail.price ? productDetail.price.toLocaleString() + 'đ' : null}</span>
                            ) : null}
                        </div>

                        <div className="quantity">
                            <button value="-" onClick={() => toggleQuantity("-")}>-</button>
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
                            <button className="add-to-cart" onClick={handleAddToCart}>Thêm vào giỏ hàng</button>
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
                    <span>{productDetail.description}</span>
                </div>
            </div>

            <form onSubmit={handleSubmit} className="container product-feedback">
                <div className="title">Đánh giá sản phẩm</div>

                <div className="feedback">
                    <div className="star">
                        {[1, 2, 3, 4, 5].map(star => (
                            <i
                                key={star}
                                id={`star-${star}`}
                                className={`fa-star ${star <= starRating ? 'fa-solid' : 'fa-regular'}`}
                                onClick={() => handleStarRating(star)}
                            ></i>
                        ))}
                    </div>

                    <div className="comment">
                        <div className="info">
                            <div className="name">
                                <p>Tên:</p>
                                <input type="text" name='name' value={formFeedback.name} onChange={handleChange} placeholder='Tên (Bắt buộc)' />
                            </div>
                            <div className="email">
                                <p>Email:</p>
                                <input type="email" name='email' value={formFeedback.email} onChange={handleChange} placeholder='Email (Bắt buộc)' />
                            </div>
                            <div className="phone">
                                <p>Số điện thoại:</p>
                                <input type="text" name='phone' value={formFeedback.phone} onChange={handleChange} placeholder='Số điện thoại (Bắt buộc)' />
                            </div>
                        </div>

                        <div className="content">
                            <div className="img">
                                <input type="file" />
                            </div>
                            <textarea name="content" value={formFeedback.content} onChange={handleChange} placeholder='Viết nội dung đánh giá của bạn'></textarea>
                        </div>
                    </div>
                </div>
                <div className="action">
                    <button className="submit-feedback">Gửi đánh giá</button>
                </div>
            </form>

            <div className="container product-feedback view-feedback">
                <div className="title">Đánh giá</div>

                <div className="feedback">
                    <DashboardStar handleViewStarRating={handleViewStarRating} />

                    <div className="comment">
                        <div className="list-comment">
                            <ListComment handleViewStarRating={handleViewStarRating} />

                            <div className="button-more">
                                <button className='more' onClick={handleOpenModal}>Xem thêm</button>
                            </div>
                        </div>
                    </div>
                </div >
            </div >

            <CommentModal isModalOpen={showModal} handleCancel={() => setShowModal(false)} handleViewStarRating={handleViewStarRating} />
        </div >
    );
}

export default ProductDetail;