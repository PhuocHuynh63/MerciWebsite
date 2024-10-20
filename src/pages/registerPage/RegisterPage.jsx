import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import "bootstrap/dist/css/bootstrap.min.css";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { merci } from '../../service/merciSrc';

export default function RegisterPage() {
    const navigate = useNavigate();
    const [errors, setErrors] = useState({});
    const [formData, setFormData] = useState({
        name: '',
        userName: '',
        email: '',
        password: '',
        phone: '',
    });
    const [isLoading, setIsLoading] = useState(false);

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
    };

    const validateForm = () => {
        const newErrors = {};
        const isValidEmail = (email) => /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/.test(email);
        const isValidPassword = (password) => password.length >= 6;
        const isValidPhone = (phone) => /^\d{10,11}$/.test(phone);

        if (!formData.name) {
            newErrors.name = 'Vui lòng nhập tên.';
        }
        if (!formData.userName) {
            newErrors.userName = 'Vui lòng nhập tên đăng nhập.';
        }
        if (!formData.email) {
            newErrors.email = 'Vui lòng nhập email.';
        } else if (!isValidEmail(formData.email)) {
            newErrors.email = 'Email không hợp lệ.';
        }
        if (!formData.password) {
            newErrors.password = 'Vui lòng nhập mật khẩu.';
        } else if (!isValidPassword(formData.password)) {
            newErrors.password = 'Mật khẩu phải có ít nhất 6 ký tự.';
        }
        if (!formData.phone) {
            newErrors.phone = 'Vui lòng nhập số điện thoại.';
        } else if (!isValidPhone(formData.phone)) {
            newErrors.phone = 'Số điện thoại phải có 10-11 số.';
        }

        return newErrors;
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        setIsLoading(true);

        const newErrors = validateForm();
        if (Object.keys(newErrors).length > 0) {
            setErrors(newErrors);
            setIsLoading(false);
        } else {
            const userData = {
                email: formData.email,
                userName: formData.userName,
                password: formData.password,
                name: formData.name,
                phone: formData.phone,
            };

            console.log('Sending user data:', userData);

            merci.postRegister(userData)
                .then(response => {
                    console.log('Đăng ký thành công', response.data);
                    toast.success(response.data.message);
                    setTimeout(() => {
                        navigate('/signin');
                    }, 4000);
                })
                .catch(error => {
                    console.error('Đăng ký thất bại:', error);
                    toast.error('Đã xảy ra lỗi, vui lòng thử lại sau.');
                })
                .finally(() => {
                    setIsLoading(false);
                });
        }
    };

    return (
        <div className="container col-12 mt-5">
            <ToastContainer position="top-right" autoClose={5000} hideProgressBar={false} newestOnTop={true} closeOnClick rtl={false} pauseOnFocusLoss draggable pauseOnHover />
            <div className="row">
                <div className="col-md-6">
                    <img src='image_url' alt="Descriptive Text" style={{ width: "100%", height: "100%", objectFit: "cover" }} />
                </div>
                <div className="col-md-6">
                    <h2>Tham gia cùng chúng tôi</h2>
                    <form onSubmit={handleSubmit}>
                        <div className="form-group mb-3">
                            <label>Họ Tên</label>
                            <input
                                type="text"
                                name="name"
                                className={`form-control ${errors.name ? 'is-invalid' : ''}`}
                                value={formData.name}
                                onChange={handleChange}
                            />
                            {errors.name && <div className="invalid-feedback">{errors.name}</div>}
                        </div>
                        <div className="form-group mb-3">
                            <label>Tên Đăng Nhập</label>
                            <input
                                type="text"
                                name="userName"
                                className={`form-control ${errors.userName ? 'is-invalid' : ''}`}
                                value={formData.userName}
                                onChange={handleChange}
                            />
                            {errors.userName && <div className="invalid-feedback">{errors.userName}</div>}
                        </div>
                        <div className="form-group mb-3">
                            <label>Email</label>
                            <input
                                type="email"
                                name="email"
                                className={`form-control ${errors.email ? 'is-invalid' : ''}`}
                                value={formData.email}
                                onChange={handleChange}
                            />
                            {errors.email && <div className="invalid-feedback">{errors.email}</div>}
                        </div>
                        <div className="form-group mb-3">
                            <label>Mật Khẩu</label>
                            <input
                                type="password"
                                name="password"
                                className={`form-control ${errors.password ? 'is-invalid' : ''}`}
                                value={formData.password}
                                onChange={handleChange}
                            />
                            {errors.password && <div className="invalid-feedback">{errors.password}</div>}
                        </div>
                        <div className="form-group mb-3">
                            <label>Số Điện Thoại</label>
                            <input
                                type="text"
                                name="phone"
                                className={`form-control ${errors.phone ? 'is-invalid' : ''}`}
                                value={formData.phone}
                                onChange={handleChange}
                            />
                            {errors.phone && <div className="invalid-feedback">{errors.phone}</div>}
                        </div>
                        <button type="submit" className="btn btn-outline-primary btn-lg" disabled={isLoading}>
                            {isLoading ? 'Đang đăng ký...' : 'Đăng Ký'}
                        </button>
                    </form>
                </div>
            </div>
        </div>
    );
}
