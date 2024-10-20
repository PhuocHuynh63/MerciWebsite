import { Link } from "react-router-dom";
import "./AdminProduct.scss";

export default function AdminProduct() {

    return (
        <div className="admin-product">

            <h1 className="header-product">Quản lý sản phẩm</h1>

            <div className="admin-product_action">
                <Link to={'/admin/product/add'}>
                    <button className="btn-add_product"> + Thêm sản phẩm mới</button>
                </Link>
                <div className="admin-product_search">
                    <input type="text" className="admin-product_searchinput" placeholder="Nhập sản phẩm cần tìm" />
                    <i id="search" className="fa-solid fa-magnifying-glass"></i>
                </div>
            </div>


            {/* Table Product */}
            <div className="box-product">
                <table className="product-list">
                    <thead>
                        <tr>
                            <th>ID</th>
                            <th>Ảnh</th>
                            <th style={{ textAlign: "left" }}>Tên sản phẩm</th>
                            <th>Trạng thái</th>
                            <th>Loại sản phẩm</th>
                            <th>Giá giảm</th>
                            <th>Đơn Giá</th>
                            <th>Thao tác</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td>1</td>
                            <td>
                                <img className="product-image" src=''></img>
                            </td>
                            <td style={{ textAlign: "left" }}>Lược gỗ đàn hương</td>
                            <td>
                                Còn hàng
                            </td>
                            <td>Bán lẻ</td>
                            <td>300.000 đ</td>
                            <td>300.000 đ</td>
                            <td style={{ textAlign: "end" }}>
                                <div className="action" style={{ gap: '5px' }}>
                                    <a className="delete btn btn-danger btn-sm">
                                        <i className="fa-solid fa-trash"></i>
                                    </a>
                                    <Link className="view btn btn-warning btn-sm" to={`/admin/product/detail/1`}>
                                        <i className="fa-solid fa-eye"></i>
                                    </Link>
                                    <Link className="edit btn btn-success btn-sm" to={`/admin/product/update/1`}>
                                        <i className="fa-solid fa-pen-to-square"></i>
                                    </Link>
                                </div>
                            </td>
                        </tr>
                    </tbody>
                </table>
                {/* ----End----- */}
            </div>
        </div>
    );
}