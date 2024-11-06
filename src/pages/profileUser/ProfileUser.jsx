import { useEffect, useState } from "react";
import './ProfileUser.scss';
import { jwtDecode } from "jwt-decode";
import { merci } from "../../service/merciSrc";
const ProfileUser = () => {

    /**
     * Handle submit form
     */
    
    const [errors, setErrors] = useState({})
    const [formData, setFormData] = useState({
        name: '',
        birthday: '',
        phone: '',
        email: ''
    });

    const handleSubmit = (e) => {
        e.preventDefault();
        if (!validate()) return;
        console.log(formData);
    }
    //----------------End Handle submit form----------------//

    /**
     * Handle change input
     * @param {*} e 
     */
    
    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({
            ...formData,
            [name]: value
        });

        if (errors[name]) {
            setErrors({
                ...errors,
                [name]: ''
            });
        }
    }
    //----------------End Handle change input----------------//
    const [isLoggedIn, setIsLoggedIn] = useState(false);
    const [user, setUser] = useState({});
    const [userId, setUserId] = useState(null);
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
            //         setUser(userData);
            //         setUserId(id);
                    setFormData({
                        name: userData.name,
                        email: userData.email,
                        phone: userData.phone,
                        birthday: userData.birthday
                    });
                })
                .catch((err) => {
                    console.log("Error fetching user", err);
                });
        }
    }, []);

    /**
     * Validate form
     * @returns 
     */
    const validate = () => {
        const newErrors = {};
        const isOnlyLetters = (name) => name.trim().length > 0 && /^[a-zA-ZàÀảẢãÃáÁạẠăĂằẰẳẲẵẴắẮặẶâÂầẦẩẨẫẪấẤậẬbBcCdDđĐeEèÈẻẺẽẼéÉẹẸêÊềỀểỂễỄếẾệỆfFgGhHiIìÌỉỈĩĨíÍịỊjJkKlKmMnNoOòÒỏỎõÕóÓọỌôÔồỒổỔỗỖốỐộỘơƠờỜởỞỡỠớỚợỢpPqQrRsStTuUùÙủỦũŨúÚụỤưƯừỪửỬữỮứỨựỰvVwWxXyYỳỲỷỶỹỸýÝỵỴzZ\s]+$/.test(name);
        const isValidEmail = (email) => email.trim().length > 0 && /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/.test(email);
        const isValidPhone = (phone) => phone.trim().length > 0 && /^\d{10,11}$/.test(phone);

        if (!formData.name || !isOnlyLetters(formData.name)) {
            newErrors.name = 'Họ và tên không hợp lệ';
        }

        if (!formData.birthday) {
            newErrors.birthday = 'Ngày sinh không hợp lệ';
        }

        if (!formData.phone || !isValidPhone(formData.phone)) {
            newErrors.phone = 'Số điện thoại không hợp lệ';
        }

        if (!formData.email || !isValidEmail(formData.email)) {
            newErrors.email = 'Email không hợp lệ';
        }

        setErrors(newErrors);

        if (Object.keys(newErrors).length > 0) return false;
        return true;
    }
    //----------------End Validate form----------------//

    return (
        <div className="profile-user">
            <div className="title">
                <h4>HỒ SƠ CỦA TÔI</h4>
                <p>Quản lý thông tin hồ sơ để bảo mật tài khoản</p>
            </div>

            <form onSubmit={handleSubmit}>
                <div className="form-group">
                    <div className="form-input name">
                        <label htmlFor="name">Họ và tên: <span> (*)</span></label>
                        <input type="text" className={`name ${errors.name ? 'input-error' : ''}`} name='name' onChange={handleChange} value={formData.name} placeholder="Họ và tên" />
                        {errors.name && <p className="error">{errors.name}</p>}
                    </div>
                   
                    <div className="form-input phone">
                        <label htmlFor="phone">Số điện thoại: <span> (*)</span></label>
                        <input type="tel" className={`phone ${errors.phone ? 'input-error' : ''}`} name='phone' onChange={handleChange} value={formData.phone} placeholder="Số điện thoại" />
                        {errors.phone && <p className="error">{errors.phone}</p>}
                    </div>
                    <div className="form-input email">
                        <label htmlFor="email">Email: <span> (*)</span></label>
                        <input type="email" className={`email ${errors.email ? 'input-error' : ''}`} name='email' onChange={handleChange} value={formData.email} placeholder="Email" />
                        {errors.email && <p className="error">{errors.email}</p>}
                    </div>

                    <div className="row button">
                        <button className='btn-save' type='submit'>Cập nhật</button>
                    </div>
                </div>
            </form>
        </div>
    );
}

export default ProfileUser;


