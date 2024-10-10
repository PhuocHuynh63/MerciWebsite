import { Link, useParams } from 'react-router-dom';
import './ListProduct.scss';
import SideBar from './sideBar/SideBar';
import { useEffect, useState } from 'react';
import { merci } from '../../service/merciSrc';

const ListProduct = () => {
    const { id } = useParams();

    /**
     * Handle Dropdown
     */
    const [activeDropdown, setActiveDropdown] = useState('Mới nhất');

    /**
     * Get list product by category
     */
    const [products, setProducts] = useState([]);
    const [currentPage, setCurrentPage] = useState(1);
    const productsPerPage = 9;

    // Filtered by price range
    const [filteredProducts, setFilteredProducts] = useState([]);
    const [minPrice, setMinPrice] = useState(10000); // Giá mặc định ban đầu là tối đa

    useEffect(() => {
        merci.getProductsByCategory(id)
            .then(res => {
                if (id == 1) {
                    setProducts(res.data.data.products);
                    setFilteredProducts(res.data.data.products);
                } else if (id == 2) {
                    setProducts(res.data.data.combos);
                    setFilteredProducts(res.data.data.combos);
                }
            })
            .catch(err => {
                console.log(err);
            });
    }, [id]);


    /**
     * Lọc sản phẩm theo giá
     */
    const filterByPrice = (price) => {
        setMinPrice(price);
        const filtered = products.filter(product => product.salePrice <= price);
        setFilteredProducts(filtered);
    };

    /**
     * Pagination logic
     */
    const indexOfLastProduct = currentPage * productsPerPage;
    const indexOfFirstProduct = indexOfLastProduct - productsPerPage;
    const currentProducts = filteredProducts.slice(indexOfFirstProduct, indexOfLastProduct);

    const totalPages = Math.ceil(filteredProducts.length / productsPerPage);

    const handlePageChange = (pageNumber) => {
        setCurrentPage(pageNumber);
    };

    return (
        <div className='list-product'>
            <SideBar onPriceFilter={filterByPrice} minPrice={minPrice} />
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
                        {currentProducts.length === 0 && <p style={{ textAlign: 'center', color: '#fff', fontWeight: '700', fontSize: '30px' }}>Không có sản phẩm nào</p>}
                        {currentProducts.map((product, index) => (
                            <div className="col-md-4" key={index}>
                                <div className="product">
                                    <div className="background">
                                        <img src="https://res.cloudinary.com/dwyzqcunj/image/upload/v1725335832/Rectangle_78_opzqmb.svg" alt="" />
                                        <Link to={`/product/${product.slug}`}>
                                            <div className="product-info">
                                                <img src={product.image} alt="product" />
                                                <p>{product.name}</p>
                                                <p>{product?.salePrice?.toLocaleString()}đ</p>
                                            </div>
                                        </Link>
                                        <div className="action">
                                            <button>Thêm vào giỏ hàng</button>
                                            <button>Mua ngay</button>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>

                {/* Pagination */}
                <nav aria-label="Page navigation example">
                    <ul className="pagination justify-content-center">
                        <li className={`page-item ${currentPage === 1 ? 'disabled' : ''}`}>
                            <button className="page-link" onClick={() => handlePageChange(currentPage - 1)}>{'<'}</button>
                        </li>
                        {[...Array(totalPages)].map((_, index) => (
                            <li key={index} className={`page-item ${currentPage === index + 1 ? 'active' : ''}`}>
                                <button className="page-link" onClick={() => handlePageChange(index + 1)}>{index + 1}</button>
                            </li>
                        ))}
                        <li className={`page-item ${currentPage === totalPages ? 'disabled' : ''}`}>
                            <button className="page-link" onClick={() => handlePageChange(currentPage + 1)}>{'>'}</button>
                        </li>
                    </ul>
                </nav>
            </div>
        </div>
    );
};

export default ListProduct;
