import { Link,useParams } from 'react-router-dom';
import './ListProduct.scss';
import SideBar from './sideBar/SideBar';
import { useEffect,useState } from 'react';
import { merci } from '../../service/merciSrc';
import { notification } from 'antd';

const ListProduct = () => {
    const { id } = useParams();
    const categoryId = parseInt(id);

    /**
     * Handle Dropdown
     */
    const [activeDropdown,setActiveDropdown] = useState('Mới nhất');

    /**
     * Get list product by category
     */
    const [products,setProducts] = useState([]);
    const [currentPage,setCurrentPage] = useState(1);
    const productsPerPage = 9;

    // Filtered by price range
    const [filteredProducts,setFilteredProducts] = useState([]);
    const [minPrice,setMinPrice] = useState(10000); // Giá mặc định ban đầu là tối đa

    useEffect(() => {
        merci.getProductsByCategory(id)
            .then(res => {
                console.log(res.data);

                if (id == 1) {
                    setProducts(res.data.data.products);
                    setFilteredProducts(res.data.data.products);
                } else if (id == 2) {
                    setProducts(res.data.data.products);
                    setFilteredProducts(res.data.data.products);
                }
            })
            .catch(err => {
                console.log(err);
            });
    },[id]);

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
    const currentProducts = filteredProducts.slice(indexOfFirstProduct,indexOfLastProduct);

    const totalPages = Math.ceil(filteredProducts.length / productsPerPage);

    const handlePageChange = (pageNumber) => {
        setCurrentPage(pageNumber);
    };

    /**
    * Handle click on cart icon
    * @param {*} e 
    * @param {*} product 
    * @returns 
    */
    const handleAddToCart = (e,product) => {
        const quantity = 1;

        const item = {
            idProduct: product.idProduct,
            idCategory: product.idCategory,
            salePrice: product.salePrice,
            image: product.image,
            productName: product.name,
            quantity,
            max: product.quantity,
            price: product.price,
            totalPrice: quantity * (product.salePrice || product.price),
        };

        let cartItems = JSON.parse(localStorage.getItem('cartItems')) || [];
        const existingItemIndex = cartItems.findIndex(cartItem => cartItem.idProduct === item.idProduct);

        if (existingItemIndex > -1) {
            const existingItem = cartItems[existingItemIndex];
            const newQuantity = existingItem.quantity + item.quantity;

            if (newQuantity > item.max) {
                existingItem.quantity = item.max;
                existingItem.totalPrice = item.max * (existingItem.salePrice || existingItem.price);
                notification.error({
                    message: 'Thông báo',
                    description: 'Số lượng sản phẩm đã đạt tối đa',
                    placement: 'topRight'
                });
            } else {
                existingItem.quantity = newQuantity;
                existingItem.totalPrice = newQuantity * (existingItem.salePrice || existingItem.price);
                notification.success({
                    message: 'Thông báo',
                    description: 'Cập nhật giỏ hàng thành công',
                    placement: 'topRight'
                });
            }
        } else {
            if (item.quantity > item.max) {
                item.quantity = item.max;
                item.totalPrice = item.max * (item.salePrice || item.price);
            } else {
                item.totalPrice = item.quantity * (item.salePrice || item.price);
                notification.success({
                    message: 'Thông báo',
                    description: 'Thêm sản phẩm vào giỏ thành công',
                    placement: 'topRight'
                });
            }
            cartItems.push(item);
        }

        localStorage.setItem('cartItems',JSON.stringify(cartItems));
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
                    <div className="row">
                        {currentProducts.length === 0 && <p style={{ textAlign: 'center',color: '#fff',fontWeight: '700',fontSize: '30px' }}>Không có sản phẩm nào</p>}
                        {currentProducts.map((product,index) => (
                            categoryId === 1 ? (
                                <div className="col-md-4 col-lg-4 custom" key={index}>
                                    <div className="product d-flex justify-content-center">
                                        <div className="item">
                                            <div className="product-info">
                                                <Link to={`/product/${product.slug}`}>
                                                    <img src={product.image} alt="product" />
                                                    <p>{product.name}</p>
                                                    <p>{product?.salePrice?.toLocaleString()}đ</p>
                                                </Link>
                                                <div className="action">
                                                    <button onClick={(e) => handleAddToCart(e,product)}>Thêm vào giỏ hàng</button>
                                                    <Link to={`/product/${product.slug}`}>
                                                        <button>Mua ngay</button>
                                                    </Link>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            ) : categoryId === 2 ? (
                                <div className="col-md-4 col-lg-4 custom" key={index}>
                                    <div className="product d-flex justify-content-center">
                                        <div className="item">
                                            <div className="product-info">
                                                <Link to={`/product/${product.slug}`}>
                                                    <img src={product.image} alt="product" />
                                                    <p>{product.name}</p>
                                                    <p>{product?.salePrice?.toLocaleString()}đ</p>
                                                </Link>
                                                <div className="action">
                                                    <button onClick={(e) => handleAddToCart(e,product)}>Thêm vào giỏ hàng</button>
                                                    <Link to={`/product/${product.slug}`}>
                                                        <button>Mua ngay</button>
                                                    </Link>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            ) : null
                        ))}
                    </div>
                </div>

                {/* Pagination */}
                <nav aria-label="Page navigation example">
                    <ul className="pagination justify-content-center">
                        <li className={`page-item ${currentPage === 1 ? 'disabled' : ''}`}>
                            <button className="page-link" onClick={() => handlePageChange(currentPage - 1)}>{'<'}</button>
                        </li>
                        {[...Array(totalPages)].map((_,index) => (
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
        </div >
    );
};

export default ListProduct;
