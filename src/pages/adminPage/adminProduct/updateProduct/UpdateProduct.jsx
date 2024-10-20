import "./UpdateProduct.scss";
import { Link } from "react-router-dom";

export default function UpdateProduct() {

    return (
        <div className="admin-product-add">
            <h1>Cập nhật sản phẩm</h1>
            <form>
                <div className="form-row">
                    <div className="form-group">
                        <label htmlFor="productName">Tên sản phẩm: <span className="obligatory">*</span></label>
                        <input
                            type="text"
                            id="productName"
                            required
                        />
                    </div>

                    <div className="form-group">
                        <label htmlFor="subCategory">Loại sản phẩm: <span className="obligatory">*</span></label>
                        <select
                            id="subCategory"
                            required
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
                            required
                            min="0"
                        />
                    </div>

                    <div className="form-group">
                        <label htmlFor="discount">Giảm giá: <span style={{ color: "red", fontSize: "13px" }}>300.000đ</span></label>
                        <input
                            type="number"
                            id="discount"
                            min="0"
                            max="100"
                        />
                    </div>
                </div>

                <div className="form-row">
                    <div className="form-group">
                        <label htmlFor="quantity">Số lượng:</label>
                        <input
                            type="number"
                            id="quantity"
                            min="0"
                        />
                    </div>

                    <div className="form-group">
                        <label htmlFor="statusCheckbox">Trạng thái:</label>
                        <input
                            type="checkbox"
                            id="statusCheckbox"
                        />
                        <span>Không còn bán</span>
                    </div>
                </div>

                <div className="form-row">
                    <div className="form-group image">
                        <label htmlFor="image">Ảnh: <span className="obligatory">*</span></label>
                        <input type="file" id="image" />
                        {/* {imagePreview && <img src={imagePreview} alt="Image Preview" className="image-preview" />} */}
                    </div>
                </div>

                <div className="form-group">
                    <label htmlFor="description">Mô tả:</label>
                    <textarea
                        id="description"
                        rows="4"
                    />
                </div>

                <div className="form-group_btn">
                    <Link to={'/admin/product'} className="btn-close_add">Quay lại</Link>
                    <button className="btn-add" type="submit">Lưu</button>
                </div>
            </form>
        </div>
    );
}