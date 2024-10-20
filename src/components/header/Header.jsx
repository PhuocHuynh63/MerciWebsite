import { Link, NavLink } from "react-router-dom";
import "./Header.scss"
import { useState, useEffect } from "react";
import ModalLogin from "../../pages/loginPage/ModalLogin/ModalLogin";
import { Dropdown } from "react-bootstrap";
import { localService } from "../../service/localService";


const Header = () => {

    /**
        * Take user info (username) from local storage by token
        */
    const token = localStorage.getItem('USER_INFO');


    /**
    * Logout
    */
    const handleLogout = () => {
        localService.remove()
        window.location.reload()
    }
    //-----End Logout-----//

    /**
     * Handle show login
     */
    const [showLogin, setShowLogin] = useState(false);
    const handleShowLogin = () => {
        setShowLogin(!showLogin);
    }
    //---------------------End Login---------------------//


    /**
     * Total cart items
     */
    const getCart = localStorage.getItem('cartItems') ? JSON.parse(localStorage.getItem('cartItems')) : [];
    const totalCart = getCart.length
    //-----End-----//

    if (!token) {
        return (
            <div className="header-container">
                <ModalLogin show={showLogin} handleClose={handleShowLogin} />
                <div className="d-flex flex-column mb-3 align-items-center logo">
                    <Link to='/'>
                        <img src="https://res.cloudinary.com/dwyzqcunj/image/upload/v1724080714/logo_merci_vhf1pe.svg" alt="" />
                    </Link>
                    <img src="https://res.cloudinary.com/dwyzqcunj/image/upload/v1724080757/Merci_Check_Point_2_1_lqax5i.svg" alt="" />
                </div>
                <nav className="navbar-center d-flex justify-content-center align-items-center">
                    <ul className="d-flex">
                        <li><NavLink to="/about-us">VỀ CHÚNG TÔI</NavLink></li>
                        <li><NavLink to="/list-product/1">SẢN PHẨM</NavLink></li>
                        <li><NavLink to="/list-product/2">QUÀ TẶNG</NavLink></li>
                    </ul>

                    <div className="navbar-right">
                        <div className="search">
                            <i className="fa-solid fa-magnifying-glass"></i>
                            <input type="text" placeholder="Tìm kiếm sản phẩm" />
                        </div>
                        <Link to='/cart'>
                            <div className="cart-icon">
                                <img src="https://res.cloudinary.com/dwyzqcunj/image/upload/v1724085139/Shopping_Bag_Full_jiir6o.svg" alt="" />
                                <span className="dot">{totalCart}</span>
                            </div>
                        </Link>

                        <div className="user-icon" onClick={handleShowLogin}>
                            <i className="fa-solid fa-user"></i>
                        </div>
                    </div>
                </nav>
            </div>
        );
    } else {
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
                        <li><NavLink to="/list-product/1">SẢN PHẨM</NavLink></li>
                        <li><NavLink to="/list-product/2">QUÀ TẶNG</NavLink></li>
                    </ul>

                    <div className="navbar-right">
                        <div className="search">
                            <i className="fa-solid fa-magnifying-glass"></i>
                            <input type="text" placeholder="Tìm kiếm sản phẩm" />
                        </div>
                        <Link to='/cart'>
                            <div className="cart-icon">
                                <img src="https://res.cloudinary.com/dwyzqcunj/image/upload/v1724085139/Shopping_Bag_Full_jiir6o.svg" alt="" />
                                <span className="dot">{totalCart}</span>
                            </div>
                        </Link>

                        <div className="user-icon">
                            <Dropdown>
                                <Dropdown.Toggle style={{ backgroundColor: 'transparent', border: 'none' }}>
                                    <img src="https://i0.wp.com/sbcf.fr/wp-content/uploads/2018/03/sbcf-default-avatar.png?ssl=1"
                                        style={{ width: '40px', height: '40px', borderRadius: '50%', cursor: 'pointer' }}
                                        alt="" />
                                </Dropdown.Toggle>

                                <Dropdown.Menu>
                                    <Dropdown.Item href="/profile">Thông tin cá nhân</Dropdown.Item>
                                    <Dropdown.Item><Link to={'/purchaseorder'}
                                        style={{
                                            color: 'var(--bs-dropdown-link-color)',
                                            fontWeight: '400'
                                        }}>Đơn mua</Link></Dropdown.Item>
                                    <Dropdown.Item onClick={handleLogout}>Đăng xuất</Dropdown.Item>
                                </Dropdown.Menu>
                            </Dropdown>

                        </div>
                    </div>
                </nav>
            </div>
        );
    }
}

export default Header;