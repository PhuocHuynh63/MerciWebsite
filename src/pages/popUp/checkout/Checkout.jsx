import { Modal } from "react-bootstrap"
import './Checkout.scss';
import { Link } from "react-router-dom";
import { useEffect, useState } from "react";
import { addressVietNam } from "../../../service/merciSrc";

const Checkout = (props) => {
    const { show, handleClose } = props;

    /**
     * Toggle payment method
     */
    const [paymentMethod, setPaymentMethod] = useState("COD");
    const handlePaymentMethod = (e) => {
        setPaymentMethod(e.target.value);
    }



    /**
     * Address 
     */
    //----------------Province----------------//
    const [provinces, setProvinces] = useState([]);
    const [selectProvince, setSelectProvince] = useState(null);

    console.log(selectProvince);


    useEffect(() => {
        addressVietNam.getProvinces()
            .then((res) => {
                setProvinces(res.results);
            })
            .catch((err) => {
                console.log(err);
            })
    }, [])


    const handleSelectProvince = (e) => {
        setSelectProvince(e.target.value);
        setDistricts([]);
        setWards([]);
    }

    //----------------End Province----------------//


    //----------------District----------------//
    const [districts, setDistricts] = useState([]);
    const [selectDistrict, setSelectDistrict] = useState(null);

    console.log(selectDistrict);


    useEffect(() => {
        if (selectProvince) {
            addressVietNam.getDistricts(selectProvince)
                .then((res) => {
                    setDistricts(res.results);
                })
                .catch((err) => {
                    console.log(err);
                })
        }
    }, [selectProvince])

    const handleSelectDistrict = (e) => {
        setSelectDistrict(e.target.value);
        setWards([]);
    }
    //----------------End District----------------//


    //----------------Ward----------------//
    const [wards, setWards] = useState([]);
    const [selectWard, setSelectWard] = useState(null);

    useEffect(() => {
        if (selectDistrict) {

            addressVietNam.getWards(selectDistrict)
                .then((res) => {
                    setWards(res.results);
                })
                .catch((err) => {
                    console.log(err);
                })
        }
    }, [selectDistrict])

    const handleSelectWard = (e) => {
        setSelectWard(e.target.value);
    }
    //----------------End Address----------------//


    return (
        <>
            <Modal show={show} onHide={handleClose} dialogClassName="modal-80w">
                <Modal.Header>
                    <Modal.Title><img src="https://res.cloudinary.com/dwyzqcunj/image/upload/v1724918865/Artboard_1_1_eic3yr.svg" /></Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <div className="checkout container">
                        <div className="breadcrumb">
                            <Link to="/">
                                <span>Thanh toán&nbsp;</span>
                            </Link>
                            <span>{" >"} Thông tin giao hàng</span>
                        </div>

                        <div className="checkout-info">
                            <h2>Thông tin giao hàng</h2>

                            <div className="checkout-info__form">
                                {/* Infomation */}
                                <div className="checkout-info__form__input">
                                    <input type="text" className="name" placeholder="Họ và tên..." />
                                </div>

                                <div className="group-1">
                                    <div className="checkout-info__form__input">
                                        <input type="text" className="email" placeholder="Email..." />
                                    </div>
                                    <div className="checkout-info__form__input">
                                        <input type="text" className="phone" placeholder="Số điện thoại" />
                                    </div>
                                </div>

                                <div className="checkout-info__form__input">
                                    <input type="text" className="note" placeholder="Ghi chú" />
                                </div>
                                {/* End Information */}


                                {/* Address */}
                                <div className="group-address">
                                    <div className="title">
                                        <input type="radio" checked />
                                        <span>Giao tận nơi</span>
                                    </div>
                                    <div className="checkout-info__form__input">
                                        <input type="text" className="address" placeholder="Địa chỉ" />
                                    </div>
                                    <div className="group-address__detail">
                                        <div className="checkout-info__form__input">
                                            <select className="province" onChange={handleSelectProvince}>
                                                <option value="">Tỉnh/Thành phố</option>
                                                {
                                                    provinces.map((province) => (
                                                        <option value={province.province_id} key={province.province_id}>
                                                            {province.province_name}
                                                        </option>
                                                    ))
                                                }
                                            </select>
                                        </div>
                                        <div className="checkout-info__form__input">
                                            <select className="district" onChange={handleSelectDistrict}>
                                                <option value="">Quận/huyện</option>
                                                {
                                                    districts.map((district) => (
                                                        <option value={district.district_id} key={district.district_id}>
                                                            {district.district_name}
                                                        </option>
                                                    ))
                                                }
                                            </select>
                                        </div>
                                        <div className="checkout-info__form__input">
                                            <select className="ward" onChange={handleSelectWard}>
                                                <option value="">Phường/xã</option>
                                                {
                                                    wards.map((ward) => (
                                                        <option value={ward.ward_id} key={ward.ward_id}>
                                                            {ward.ward_name}
                                                        </option>
                                                    ))
                                                }
                                            </select>
                                        </div>
                                    </div>
                                </div>
                                {/* End Address */}


                                {/* Payment Method */}
                                <div className="payment-method">
                                    <br />
                                    <h2>Phương thức thanh toán</h2>
                                    <div className="item">
                                        <div className="cod">
                                            <input type="radio" checked={paymentMethod === 'COD'} onClick={() => setPaymentMethod('COD')} />
                                            <span>Thanh toán khi nhận hàng (COD)</span>
                                            <img src="https://cdn-icons-png.flaticon.com/512/9198/9198191.png" alt="" />
                                        </div>
                                        <div className="momo" checked={paymentMethod === 'momo'} onClick={() => setPaymentMethod('momo')}>
                                            <input type="radio" />
                                            <span>Thanh toán online qua ví MoMo</span>
                                            <img src="https://res.cloudinary.com/dwyzqcunj/image/upload/v1725006693/1111111111111111111_1_bzt2tu.svg" alt="" />
                                        </div>
                                    </div>
                                </div>
                                {/* End Payment method */}
                            </div>
                        </div>
                    </div>
                </Modal.Body>
                <Modal.Footer>
                    <button className="cart-button" onClick={handleClose}>
                        Giỏ hàng
                    </button>
                    <button className="purchase-button" onClick={handleClose}>
                        Hoàn tất đơn hàng
                    </button>
                </Modal.Footer>
            </Modal>
        </ >
    )
}

export default Checkout;