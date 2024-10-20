import { Link } from "react-router-dom";

export default function ViewProduct() {

    return (
        <div className="admin-product-view">
            <h1>Chi tiết sản phẩm</h1>
            <form>
                <div className="form-row">
                    <div className="form-group">
                        <label htmlFor="productName">Tên sản phẩm: <span className="obligatory">*</span></label>
                        <input
                            type="text"
                            id="productName"
                            disabled
                        />
                    </div>

                    <div className="form-group">
                        <label htmlFor="subCategory">Loại sản phẩm: <span className="obligatory">*</span></label>
                        <select
                            id="subCategory"
                            disabled
                        >

                        </select>
                    </div>
                </div>

                <div className="form-row">
                    <div className="form-group">
                        <label htmlFor="price">Giá: <span className="obligatory">*</span></label>
                        <input
                            type="number"
                            id="price"
                            disabled
                        />
                    </div>

                    <div className="form-group">
                        <label htmlFor="discount">Giảm giá: <span style={{ color: "red", fontSize: "13px" }}>300.000đ</span></label>
                        <input
                            type="number"
                            id="discount"
                            disabled
                        />
                    </div>
                </div>

                <div className="form-row">
                    <div className="form-group">
                        <label htmlFor="quantity">Số lượng:</label>
                        <input
                            type="number"
                            id="quantity"
                            disabled
                        />
                    </div>
                </div>

                <div className="form-row">
                    <div className="form-group image">
                        <label htmlFor="image">Ảnh: <span className="obligatory">*</span></label>
                        <input type="file" id="image" disabled />
                    </div>
                </div>

                <div className="form-group">
                    <label htmlFor="description">Mô tả:</label>
                    <textarea
                        id="description"
                        rows="4"
                        disabled
                    />
                </div>
                <div className="form-row">
                    <div className="form-group">
                        <label htmlFor="total_sold">Số lượt bán: </label>
                        <input
                            type="text"
                            id="total_sold"
                            disabled
                        />
                    </div>

                    <div className="form-group">
                        <label htmlFor="revenue">Doanh thu: </label>
                        <input
                            type="text"
                            id="revenue"
                            disabled
                        />
                    </div>
                </div>
                <div className="form-group_btn">
                    <Link to={'/admin/product'} className="btn-close_add">Quay lại</Link>
                    <Link to={`/admin/product/update/1`} className="btn-add" style={{ textAlign: "center" }}>Cập nhật <i className="fa-solid fa-arrow-right"></i></Link>
                </div>
            </form>
        </div>
    );
}