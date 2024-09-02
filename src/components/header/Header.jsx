import { Link, NavLink } from "react-router-dom";
import "./Header.scss"

const Header = () => {
    return (
        <div className="header-container">
            <div className="d-flex flex-column mb-3 align-items-center logo">
                <Link to='/'>
                    <img src="https://res.cloudinary.com/dwyzqcunj/image/upload/v1724080714/logo_merci_vhf1pe.svg" alt="" />
                </Link>
                <img src="https://res.cloudinary.com/dwyzqcunj/image/upload/v1724080757/Merci_Check_Point_2_1_lqax5i.svg" alt="" />
            </div>
            <nav className="navbar-center d-flex justify-content-center align-items-center">
                <ul className="d-flex">
                    <li><NavLink to="/about-us">VỀ CHÚNG TÔI</NavLink></li>
                    <li><NavLink to="/">LIÊN HỆ</NavLink></li>
                    <li><NavLink to="/">SẢN PHẨM</NavLink></li>
                    <li><NavLink to="/">QUÀ TẶNG</NavLink></li>
                </ul>

                <div className="navbar-right">
                    <div className="search">
                        <i className="fa-solid fa-magnifying-glass"></i>
                        <input type="text" placeholder="Tìm kiếm sản phẩm" />
                    </div>
                    <Link to='/cart'>
                        <div className="cart-icon">
                            <img src="https://res.cloudinary.com/dwyzqcunj/image/upload/v1724085139/Shopping_Bag_Full_jiir6o.svg" alt="" />
                            <span className="dot">1</span>
                        </div>
                    </Link>

                </div>
            </nav>


        </div>
    );
}

export default Header;