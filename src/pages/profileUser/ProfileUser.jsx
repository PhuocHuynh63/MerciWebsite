import './ProfileUser.scss';

const ProfileUser = () => {
    return (
        <div className="profile-user">
            <div className="title">
                <h4>HỒ SƠ CỦA TÔI</h4>
                <p>Quản lý thông tin hồ sơ để bảo mật tài khoản</p>
            </div>

            <form>
                <div className="form-group">
                    <div className="form-input name">
                        <label htmlFor="name">Họ và tên: <span> (*)</span></label>

                        <input type="text" placeholder="Họ và tên" />
                    </div>
                    <div className="form-input birthday">
                        <label htmlFor="birthday">Ngày sinh: <span> (*)</span></label>
                        <input type="date" />
                    </div>
                    <div className="form-input phone">
                        <label htmlFor="phone">Số điện thoại: <span> (*)</span></label>

                        <input type="tel" placeholder="Số điện thoại" />
                    </div>
                    <div className="form-input email">
                        <label htmlFor="email">Email: <span> (*)</span></label>

                        <input type="email" placeholder="Email" />
                    </div>

                    <div className="btn col-9">
                        <button className='btn-save'>Cập nhật</button>
                    </div>
                </div>
            </form>
        </div>
    );
}

export default ProfileUser;
