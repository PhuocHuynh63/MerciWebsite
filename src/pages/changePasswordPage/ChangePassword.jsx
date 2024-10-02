import { useState } from 'react';
import './ChangePassword.scss';

const ChangePassword = () => {

    /**
     * Handle Submit form
     */
    const [errors, setErrors] = useState({});
    const [formData, setFormData] = useState({
        password: '',
        newPassword: '',
        confirmPassword: ''
    });

    const handleSubmit = (e) => {
        e.preventDefault();
        if (!validate()) return;
        console.log(formData);
    }
    //----------------End Handle Submit form----------------//


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


    /**
     * Validate form
     * @returns 
     */
    const validate = () => {
        const newErrors = {};
        const isValidPassword = (password) => password.trim().length > 0 && password.trim().length >= 6;
        const isValidConfirmPassword = (confirmPassword) => confirmPassword.trim().length > 0 && confirmPassword.trim() === formData.newPassword;

        if (!formData.password || !isValidPassword(formData.password)) {
            newErrors.password = 'Mật khẩu không hợp lệ';
        }

        if (!formData.newPassword || !isValidPassword(formData.newPassword)) {
            newErrors.newPassword = 'Mật khẩu ít nhất 6 ký tự';
        }

        if (!formData.confirmPassword || !isValidConfirmPassword(formData.confirmPassword)) {
            newErrors.confirmPassword = 'Mật khẩu không trùng khớp';
        }

        if (Object.keys(newErrors).length > 0) {
            setErrors(newErrors);
            return false;
        }
        return true;
    }
    //----------------End Validate form----------------//


    return (
        <div className='change-password'>
            <div className="title">
                <h4>Thay đổi mật khẩu</h4>
                <p>Bạn nên cập nhập mật khẩu thường xuyên vì lý do bảo mật</p>
            </div>

            <form onSubmit={handleSubmit}>
                <div className="form-group">
                    <div className="form-input old-password">
                        <label htmlFor="old-password">Mật khẩu cũ: </label>
                        <input
                            type="password"
                            name='password'
                            className={`password ${errors.password ? 'input-error' : ''}`}
                            placeholder="Mật khẩu cũ"
                            value={formData.password}
                            onChange={handleChange}
                        />
                        {errors.password && <p className="error">{errors.password}</p>}

                    </div>

                    <div className="form-input new-password">
                        <label htmlFor="new-password">Mật khẩu cũ: </label>
                        <input
                            type="password"
                            name='newPassword'
                            className={`newPassword ${errors.newPassword ? 'input-error' : ''}`}
                            placeholder="Mật khẩu mới"
                            value={formData.newPassword}
                            onChange={handleChange}
                        />
                        {errors.newPassword && <p className="error">{errors.newPassword}</p>}
                    </div>

                    <div className="form-input confirm-password">
                        <label htmlFor="new-password">Mật khẩu cũ: </label>

                        <input
                            type="password"
                            name='confirmPassword'
                            className={`confirmPassword ${errors.newPassword ? 'input-error' : ''}`}
                            placeholder="Nhập lại mật khẩu mới"
                            value={formData.confirmPassword}
                            onChange={handleChange}
                        />
                        {errors.confirmPassword && <p className="error">{errors.confirmPassword}</p>}
                    </div>
                    <div className="row button">
                        <button className='btn-save' type='submit'>Lưu</button>
                    </div>
                </div>
            </form>
        </div>
    );
}

export default ChangePassword;