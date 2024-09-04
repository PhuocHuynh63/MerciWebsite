
import { NavLink } from 'react-router-dom';
import './SidebarProfileUser.scss';

const SideBarProfileUser = () => {
    return (
        <div className="sidebar-profile-user">
            <div className="profile">
                <div className="profile-img">
                    <img src="https://res.cloudinary.com/dwyzqcunj/image/upload/v1724086930/Ellipse_5_etaqnt.svg" alt="" />
                </div>
                <div className='profile-name'>Username</div>
                <div className='profile-email'>username@gmail.com</div>
            </div>

            <div className="profile-tag">
                <NavLink to='/profile'>Thông tin tài khoản</NavLink>
                <NavLink to='/profile/changepassword'>Đổi mật khẩu</NavLink>
                <NavLink to='/profile/order'>Đơn mua</NavLink>
            </div>
        </div>
    );
}

export default SideBarProfileUser;