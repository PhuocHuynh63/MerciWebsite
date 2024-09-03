import './ListProduct.scss';
import SideBar from './sideBar/SideBar';

const ListProduct = () => {

    return (
        <div className='list-product'>
            <SideBar />
            <div className="container content">
                <div className="action"></div>

                <div className="list-product">
                    <div className="row">
                        <div className="col-md-3">
                            <div className="product">
                                <img src="https://via.placeholder.com/150" alt="product" />
                                <div className="product-info">
                                    <h4>Product Name</h4>
                                    <p>Product Description</p>
                                    <p>Price: $100</p>
                                    <button>Add to cart</button>
                                </div>
                            </div>
                        </div>
                        <div className="col-md-3">
                            <div className="product">
                                <img src="https://via.placeholder.com/150" alt="product" />
                                <div className="product-info">
                                    <h4>Product Name</h4>
                                    <p>Product Description</p>
                                    <p>Price: $100</p>
                                    <button>Add to cart</button>
                                </div>
                            </div>
                        </div>
                        <div className="col-md-3">
                            <div className="product">
                                <img src="https://via.placeholder.com/150" alt="product" />
                                <div className="product-info">
                                    <h4>Product Name</h4>
                                    <p>Product Description</p>
                                    <p>Price: $100</p>
                                    <button>Add to cart</button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

        </div>
    );
}

export default ListProduct;