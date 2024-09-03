import { Link } from 'react-router-dom';
import './ListProduct.scss';
import SideBar from './sideBar/SideBar';
import { useState } from 'react';

const ListProduct = () => {

    /**
     * Handle Dropdown
     */
    const [activeDropdown, setActiveDropdown] = useState('Mới nhất');
    //---------------Handle Dropdown-------------------//


    return (
        <div className='list-product'>
            <SideBar />
            <div className="container content">
                <div className="dropdown d-flex justify-content-end my-4 me-5">
                    <button className="btn dropdown-toggle custom-active" type="button" data-bs-toggle="dropdown" aria-expanded="false">
                        {activeDropdown}
                    </button>
                    <ul className="dropdown-menu custom-dropdown">
                        <li className={activeDropdown === 'Mới nhất' ? 'hide' : ''}>
                            <Link className="dropdown-item" to="#" onClick={() => setActiveDropdown('Mới nhất')}>Mới nhất</Link>
                        </li>
                        <li className={activeDropdown === 'Yêu thích' ? 'hide' : ''}>
                            <Link className="dropdown-item" to="#" onClick={() => setActiveDropdown('Yêu thích')}>Yêu thích</Link>
                        </li>
                        <li className={activeDropdown === 'Giảm giá' ? 'hide' : ''}>
                            <Link className="dropdown-item" to="#" onClick={() => setActiveDropdown('Giảm giá')}>Giảm giá</Link>
                        </li>
                    </ul>
                </div>

                <div className="list-product_item">
                    <div className="row d-flex justify-content-center align-items-center">
                        <div className="col-md-4">
                            <div className="product">
                                <div className="background">
                                    <img src="https://res.cloudinary.com/dwyzqcunj/image/upload/v1725335832/Rectangle_78_opzqmb.svg" alt="" />
                                    <Link to='/product/:slug'>
                                        <div className="product-info">
                                            <img src="https://via.placeholder.com/150" alt="product" />
                                            <p>Bình giữ nhiệt</p>
                                            <p>299.000 VNĐ</p>
                                        </div>
                                    </Link>
                                    <div className="action">
                                        <button>Thêm vào giỏ hàng</button>
                                        <button>Mua ngay</button>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="col-md-4">
                            <div className="product">
                                <div className="background">
                                    <img src="https://res.cloudinary.com/dwyzqcunj/image/upload/v1725335832/Rectangle_78_opzqmb.svg" alt="" />
                                    <Link to='/product/:slug'>
                                        <div className="product-info">
                                            <img src="https://via.placeholder.com/150" alt="product" />
                                            <p>Bình giữ nhiệt</p>
                                            <p>299.000 VNĐ</p>
                                        </div>
                                    </Link>
                                    <div className="action">
                                        <button>Thêm vào giỏ hàng</button>
                                        <button>Mua ngay</button>
                                    </div>
                                </div>
                            </div>
                        </div><div className="col-md-4">
                            <div className="product">
                                <div className="background">
                                    <img src="https://res.cloudinary.com/dwyzqcunj/image/upload/v1725335832/Rectangle_78_opzqmb.svg" alt="" />
                                    <Link to='/product/:slug'>
                                        <div className="product-info">
                                            <img src="https://via.placeholder.com/150" alt="product" />
                                            <p>Bình giữ nhiệt</p>
                                            <p>299.000 VNĐ</p>
                                        </div>
                                    </Link>
                                    <div className="action">
                                        <button>Thêm vào giỏ hàng</button>
                                        <button>Mua ngay</button>
                                    </div>
                                </div>
                            </div>
                        </div><div className="col-md-4">
                            <div className="product">
                                <div className="background">
                                    <img src="https://res.cloudinary.com/dwyzqcunj/image/upload/v1725335832/Rectangle_78_opzqmb.svg" alt="" />
                                    <Link to='/product/:slug'>
                                        <div className="product-info">
                                            <img src="https://via.placeholder.com/150" alt="product" />
                                            <p>Bình giữ nhiệt</p>
                                            <p>299.000 VNĐ</p>
                                        </div>
                                    </Link>
                                    <div className="action">
                                        <button>Thêm vào giỏ hàng</button>
                                        <button>Mua ngay</button>
                                    </div>
                                </div>
                            </div>
                        </div><div className="col-md-4">
                            <div className="product">
                                <div className="background">
                                    <img src="https://res.cloudinary.com/dwyzqcunj/image/upload/v1725335832/Rectangle_78_opzqmb.svg" alt="" />
                                    <Link to='/product/:slug'>
                                        <div className="product-info">
                                            <img src="https://via.placeholder.com/150" alt="product" />
                                            <p>Bình giữ nhiệt</p>
                                            <p>299.000 VNĐ</p>
                                        </div>
                                    </Link>
                                    <div className="action">
                                        <button>Thêm vào giỏ hàng</button>
                                        <button>Mua ngay</button>
                                    </div>
                                </div>
                            </div>
                        </div><div className="col-md-4">
                            <div className="product">
                                <div className="background">
                                    <img src="https://res.cloudinary.com/dwyzqcunj/image/upload/v1725335832/Rectangle_78_opzqmb.svg" alt="" />
                                    <Link to='/product/:slug'>
                                        <div className="product-info">
                                            <img src="https://via.placeholder.com/150" alt="product" />
                                            <p>Bình giữ nhiệt</p>
                                            <p>299.000 VNĐ</p>
                                        </div>
                                    </Link>
                                    <div className="action">
                                        <button>Thêm vào giỏ hàng</button>
                                        <button>Mua ngay</button>
                                    </div>
                                </div>
                            </div>
                        </div><div className="col-md-4">
                            <div className="product">
                                <div className="background">
                                    <img src="https://res.cloudinary.com/dwyzqcunj/image/upload/v1725335832/Rectangle_78_opzqmb.svg" alt="" />
                                    <Link to='/product/:slug'>
                                        <div className="product-info">
                                            <img src="https://via.placeholder.com/150" alt="product" />
                                            <p>Bình giữ nhiệt</p>
                                            <p>299.000 VNĐ</p>
                                        </div>
                                    </Link>
                                    <div className="action">
                                        <button>Thêm vào giỏ hàng</button>
                                        <button>Mua ngay</button>
                                    </div>
                                </div>
                            </div>
                        </div><div className="col-md-4">
                            <div className="product">
                                <div className="background">
                                    <img src="https://res.cloudinary.com/dwyzqcunj/image/upload/v1725335832/Rectangle_78_opzqmb.svg" alt="" />
                                    <Link to='/product/:slug'>
                                        <div className="product-info">
                                            <img src="https://via.placeholder.com/150" alt="product" />
                                            <p>Bình giữ nhiệt</p>
                                            <p>299.000 VNĐ</p>
                                        </div>
                                    </Link>
                                    <div className="action">
                                        <button>Thêm vào giỏ hàng</button>
                                        <button>Mua ngay</button>
                                    </div>
                                </div>
                            </div>
                        </div><div className="col-md-4">
                            <div className="product">
                                <div className="background">
                                    <img src="https://res.cloudinary.com/dwyzqcunj/image/upload/v1725335832/Rectangle_78_opzqmb.svg" alt="" />
                                    <Link to='/product/:slug'>
                                        <div className="product-info">
                                            <img src="https://via.placeholder.com/150" alt="product" />
                                            <p>Bình giữ nhiệt</p>
                                            <p>299.000 VNĐ</p>
                                        </div>
                                    </Link>
                                    <div className="action">
                                        <button>Thêm vào giỏ hàng</button>
                                        <button>Mua ngay</button>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                <nav aria-label="Page navigation example">
                    <ul className="pagination justify-content-center">
                        <li className="page-item disabled">
                            <a className="page-link" href="#">{'<'}</a>
                        </li>
                        <li className="page-item"><a className="page-link" href="#">1</a></li>
                        <li className="page-item"><a className="page-link" href="#">2</a></li>
                        <li className="page-item"><a className="page-link" href="#">3</a></li>
                        <li className="page-item">
                            <a className="page-link" href="#">{'>'}</a>
                        </li>
                    </ul>
                </nav>
            </div>
        </div>
    );
}

export default ListProduct;