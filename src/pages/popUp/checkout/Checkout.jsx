import { Modal } from "react-bootstrap"
import './Checkout.scss';
import { Link,useNavigate } from "react-router-dom";
import { useEffect,useState } from "react";
import { addressVietNam,merci } from "../../../service/merciSrc";
import { toast } from "react-toastify";
import { jwtDecode } from "jwt-decode";

const Checkout = (props) => {
    const { show,handleClose,cartItems,totalAmount } = props;

    const navigate = useNavigate();

    /**
     * Toggle payment method
     */
    const [paymentMethod,setPaymentMethod] = useState("COD");
    //----------------End Toggle payment method----------------//


    //Handle change value input
    const handleChange = (e) => {
        const { name,value } = e.target;
        setFormData({
            ...formData,
            [name]: value
        })

        if (errors[name]) {
            setErrors({
                ...errors,
                [name]: ""
            })
        }
    }
    //--------------------End Handle change value input--------------------//


    //Validate form
    const validate = () => {
        const newErrors = {};
        const isOnlyLetters = (name) => name.trim().length > 0 && /^[a-zA-ZàÀảẢãÃáÁạẠăĂằẰẳẲẵẴắẮặẶâÂầẦẩẨẫẪấẤậẬbBcCdDđĐeEèÈẻẺẽẼéÉẹẸêÊềỀểỂễỄếẾệỆfFgGhHiIìÌỉỈĩĨíÍịỊjJkKlKmMnNoOòÒỏỎõÕóÓọỌôÔồỒổỔỗỖốỐộỘơƠờỜởỞỡỠớỚợỢpPqQrRsStTuUùÙủỦũŨúÚụỤưƯừỪửỬữỮứỨựỰvVwWxXyYỳỲỷỶỹỸýÝỵỴzZ\s]+$/.test(name);
        const isValidEmail = (email) => email.trim().length > 0 && /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/.test(email);
        const isValidPhone = (phone) => phone.trim().length > 0 && /^\d{10,11}$/.test(phone);
        const isValidAddress = (address) => address.trim().length > 0;

        if (!formData.name) {
            newErrors.name = "Vui lòng nhập họ và tên";
        } else if (!isOnlyLetters(formData.name)) {
            newErrors.name = "Họ và tên không hợp lệ";
        }

        if (!formData.email) {
            newErrors.email = "Vui lòng nhập email";
        } else if (!isValidEmail(formData.email)) {
            newErrors.email = "Email không hợp lệ";
        }

        if (!formData.phone) {
            newErrors.phone = "Vui lòng nhập số điện thoại";
        } else if (!isValidPhone(formData.phone)) {
            newErrors.phone = "Số điện thoại không hợp lệ";
        }

        if (!formData.address) {
            newErrors.address = "Vui lòng nhập địa chỉ";
        } else if (!isValidAddress(formData.address)) {
            newErrors.address = "Địa chỉ không hợp lệ";
        }

        if (!formData.province) {
            newErrors.province = "Vui lòng chọn tỉnh/thành phố";
        }

        if (!formData.district) {
            newErrors.district = "Vui lòng chọn quận/huyện";
        }

        if (!formData.ward) {
            newErrors.ward = "Vui lòng chọn phường/xã";
        }

        setErrors(newErrors);

        if (Object.keys(newErrors).length > 0) return false;
        return true;
    }
    //----------------End Validate form----------------//


    /**
     * Handle select payment method
     * @param {*} method 
     */
    const handleSelectPaymentMethod = (method) => {
        setPaymentMethod(method);
        setFormData({
            ...formData,
            paymentMethod: method
        })
    }
    //----------------End Handle select payment method----------------//


    /**
     * Address 
     */
    //----------------Province----------------//
    const [provinces,setProvinces] = useState([]);
    const [selectProvince,setSelectProvince] = useState(null);
    const [formDataProvince,setFormDataProvince] = useState(null);

    useEffect(() => {
        addressVietNam.getProvinces()
            .then((res) => {
                setProvinces(res.results);
            })
            .catch((err) => {
                console.log(err);
            })
    },[])


    const handleSelectProvince = (e) => {
        setSelectProvince(e.target.value);
        setFormDataProvince(e.target.options[e.target.selectedIndex].text);
        setDistricts([]);
        setWards([]);
        setFormData({
            ...formData,
            province: e.target.value
        })

        if (errors.province) {
            setErrors({
                ...errors,
                province: ""
            })
        }
    }

    //----------------End Province----------------//


    //----------------District----------------//
    const [districts,setDistricts] = useState([]);
    const [selectDistrict,setSelectDistrict] = useState(null);
    const [formDataDistrict,setFormDataDistrict] = useState(null);


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
    },[selectProvince])

    const handleSelectDistrict = (e) => {
        setSelectDistrict(e.target.value);
        setFormDataDistrict(e.target.options[e.target.selectedIndex].text);
        setWards([]);
        setFormData({
            ...formData,
            district: e.target.value
        })

        if (errors.district) {
            setErrors({
                ...errors,
                district: ""
            })
        }
    }
    //----------------End District----------------//


    //----------------Ward----------------//
    const [wards,setWards] = useState([]);
    const [selectWard,setSelectWard] = useState(null);
    const [formDataWard,setFormDataWard] = useState(null);

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
    },[selectDistrict])

    const handleSelectWard = (e) => {
        setSelectWard(e.target.value);
        setFormDataWard(e.target.options[e.target.selectedIndex].text);
        setFormData({
            ...formData,
            ward: e.target.value
        })

        if (errors.ward) {
            setErrors({
                ...errors,
                ward: ""
            })
        }
    }
    //----------------End Address----------------//


    /**
    * Handle Form
    */
    const [errors,setErrors] = useState({})
    const [formData,setFormData] = useState({
        name: "",
        email: "",
        phone: "",
        note: "",
        address: "",
        province: "",
        district: "",
        ward: "",
        paymentMethod: "COD"
    })


    //Handle Submit form
    const handleSubmit = (e) => {
        e.preventDefault();
        const shippingAddress = `${formData.address}, ${formDataWard}, ${formDataDistrict}, ${formDataProvince}`;

        if (validate()) {
            const checkoutData = {
                guest: !isLoggedIn ? {
                    name: formData.name,
                    username: null,
                    email: formData.email,
                    phone: formData.phone,
                    shippingAddress: shippingAddress,
                } : null,
                userId: isLoggedIn ? userId : null,
                name: formData.name,
                email: formData.email,
                phone: formData.phone,
                shippingAddress: shippingAddress,
                totalAmount: totalAmount,
                orderType: paymentMethod,
                item: cartItems.map(item => ({
                    idProduct: item.idProduct,
                    quantity: item.quantity,
                })),
                note: formData.note,
                // totalAmount: 0,
            }

            console.log(checkoutData);


            merci.postOrder(checkoutData)
                .then((res) => {
                    console.log(res.data);
                    handleClose();
                    localStorage.removeItem('cartItems');
                    toast.success("Đặt hàng thành công");
                    if (res.data.status === 201) {
                        window.location.href = res.data.data;
                    } else {
                        navigate('/')
                    }
                })
                .catch((err) => {
                    console.log(err);
                    toast.error("Đặt hàng thất bại");
                })
        }
    }
    //----------------End Handle Submit form----------------//
    //----------------End Handle Form----------------//


    /**
      * Fetch user data from API and set it to state
      */
    const [isLoggedIn,setIsLoggedIn] = useState(false);
    const [user,setUser] = useState({});
    const [userId,setUserId] = useState(null);

    useEffect(() => {
        const token = localStorage.getItem('USER_INFO');
        if (token) {
            setIsLoggedIn(true); // Set user as logged in
            const decoded = jwtDecode(token);
            console.log(decoded);

            const id = decoded.id;

            merci.getUserById(id)
                .then((res) => {
                    const userData = res.data;
                    setUser(userData);
                    setUserId(id);
                    setFormData({
                        name: userData.name,
                        email: userData.email,
                        phone: userData.phone
                    });
                })
                .catch((err) => {
                    console.log("Error fetching user",err);
                });
        }
    },[]);

    return (
        <>
            <Modal show={show} onHide={handleClose} size='lg'>
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

                            <form className="checkout-info__form" onSubmit={handleSubmit}>
                                {/* Infomation */}
                                <div className="checkout-info__form__input">
                                    <input type="text" className={`name ${errors.name ? 'input-error' : ''}`} name="name" placeholder="Họ và tên..." value={formData.name} onChange={handleChange} />
                                    {errors.name && <p className="error">{errors.name}</p>}
                                </div>

                                <div className="group-1">
                                    <div className="checkout-info__form__input">
                                        <input type="text" className={`email ${errors.email ? 'input-error' : ''}`} name="email" placeholder="Email..." value={formData.email} onChange={handleChange} />
                                        {errors.email && <p className="error">{errors.email}</p>}
                                    </div>
                                    <div className="checkout-info__form__input">
                                        <input type="text" className={`phone ${errors.phone ? 'input-error' : ''}`} name="phone" placeholder="Số điện thoại" value={formData.phone} onChange={handleChange} />
                                        {errors.phone && <p className="error">{errors.phone}</p>}
                                    </div>
                                </div>

                                <div className="checkout-info__form__input">
                                    <input type="text" name="note" onChange={handleChange} value={formData.note} className="note" placeholder="Ghi chú" />
                                </div>
                                {/* End Information */}


                                {/* Address */}
                                <div className="group-address">
                                    <div className="title">
                                        <input type="radio" checked readOnly />
                                        <span>Giao tận nơi</span>
                                    </div>
                                    <div className="checkout-info__form__input">
                                        <input type="text" className={`address ${errors.address ? 'input-error' : ''}`} name="address" value={formData.address} placeholder="Địa chỉ" onChange={handleChange} />
                                        {errors.address && <p className="error">{errors.address}</p>}
                                    </div>
                                    <div className="group-address__detail">
                                        <div className="checkout-info__form__input">
                                            <select className={`province ${errors.province ? 'input-error' : ''}`} name="province" value={formData.province} onChange={handleSelectProvince}>
                                                <option value="">Tỉnh/Thành phố</option>
                                                {
                                                    provinces.map((province) => (
                                                        <option value={province.province_id} key={province.province_id}>
                                                            {province.province_name}
                                                        </option>
                                                    ))
                                                }
                                            </select>
                                            {errors.province && <span className="error">{errors.province}</span>}
                                        </div>
                                        <div className="checkout-info__form__input">
                                            <select className={`district ${errors.district ? 'input-error' : ''}`} name="district" value={formData.district} onChange={handleSelectDistrict}>
                                                <option value="">Quận/huyện</option>
                                                {
                                                    districts.map((district) => (
                                                        <option value={district.district_id} key={district.district_id}>
                                                            {district.district_name}
                                                        </option>
                                                    ))
                                                }
                                            </select>
                                            {errors.district && <span className="error">{errors.district}</span>}
                                        </div>
                                        <div className="checkout-info__form__input">
                                            <select className={`ward ${errors.ward ? 'input-error' : ''}`} name="ward" value={formData.ward} onChange={handleSelectWard}>
                                                <option value="">Phường/xã</option>
                                                {
                                                    wards.map((ward) => (
                                                        <option value={ward.ward_id} key={ward.ward_id}>
                                                            {ward.ward_name}
                                                        </option>
                                                    ))
                                                }
                                            </select>
                                            {errors.ward && <span className="error">{errors.ward}</span>}
                                        </div>
                                    </div>
                                </div>
                                {/* End Address */}


                                {/* Payment Method */}
                                <div className="payment-method">
                                    <br />
                                    <h2>Phương thức thanh toán</h2>
                                    <div className="item" >
                                        <div className="cod" onClick={() => handleSelectPaymentMethod('COD')} >
                                            <input type="radio" checked={paymentMethod === 'COD'} readOnly />
                                            <span>Thanh toán khi nhận hàng (COD)</span>
                                            <img src="https://cdn-icons-png.flaticon.com/512/9198/9198191.png" alt="" />
                                        </div>
                                        <div className="vnpay" onClick={() => handleSelectPaymentMethod('Thanh toán VNPAY')} >
                                            <input type="radio" checked={paymentMethod === 'Thanh toán VNPAY'} readOnly />
                                            <span>Thanh toán online qua ví VNPay</span>
                                            <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTp1v7T287-ikP1m7dEUbs2n1SbbLEqkMd1ZA&s" alt="" />
                                        </div>
                                        <div className="vnpay" onClick={() => handleSelectPaymentMethod('Payos')} >
                                            <input type="radio" checked={paymentMethod === 'Payos'} readOnly />
                                            <span>Thanh toán online qua Payos</span>
                                            <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRs9ULmmyJBs3PlqlSpI_pJTDenFeJFhi8UAQ&s" alt="" />
                                        </div>
                                    </div>
                                </div>
                                {/* End Payment method */}

                                <div className="button-action">
                                    <button className="cart-button" onClick={handleClose}>
                                        Giỏ hàng
                                    </button>
                                    <button type="submit" className="purchase-button">
                                        Hoàn tất đơn hàng
                                    </button>
                                </div>
                            </form>
                        </div>
                    </div>
                </Modal.Body>
            </Modal>
        </ >
    )
}

export default Checkout;