import { useState } from 'react';
import './ChangePassword.scss';

const ChangePassword = () => {
    const [password, setPassword] = useState('');
    const [newPassword, setNewPassword] = useState('');
    const [confirmPassword, setConfirmPassword] = useState('');
    const [error, setError] = useState('');

    const handleSubmit = async (e) => {
        e.preventDefault();
        if (newPassword !== confirmPassword) {
            setError('Passwords do not match');
            return;
        }

        try {
            await changePassword(password, newPassword);
            setPassword('');
            setNewPassword('');
            setConfirmPassword('');
            setError('');
        } catch (error) {
            setError(error.message);
        }
    };

    return (
        <div className='change-password'>
            <div className="title">
                <h4>Thay đổi mật khẩu</h4>
                <p>Bạn nên cập nhập mật khẩu thường xuyên vì lý do bảo mật</p>
            </div>

            <form onSubmit={handleSubmit}>
                <input
                    type="password"
                    placeholder="Mật khẩu cũ"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                />
                <input
                    type="password"
                    placeholder="Mật khẩu mới"
                    value={newPassword}
                    onChange={(e) => setNewPassword(e.target.value)}
                />
                <input
                    type="password"
                    placeholder="Nhập lại mật khẩu mới"
                    value={confirmPassword}
                    onChange={(e) => setConfirmPassword(e.target.value)}
                />
                <button type="submit">Change Password</button>
                {error && <p>{error}</p>}
            </form>
        </div>
    );
}

export default ChangePassword;