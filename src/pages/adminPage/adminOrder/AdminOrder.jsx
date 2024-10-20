import "./AdminOrder.scss";

export default function AdminOrder() {

    return (
        <div className="admin-order">

            <h1>Quản lý đơn hàng</h1>

            <div className="admin-order_action">
                <div className="admin-order_search">
                    <input type="text" className="admin-order_searchinput" placeholder="Nhập mã đơn hàng" />
                    <i id="search" className="fa-solid fa-magnifying-glass"></i>
                </div>
            </div>

            <div className="box-order">
                <table className="order-list">
                    <thead>
                        <tr>
                            <th>ID</th>
                            <th style={{ textAlign: "left" }}>Người đặt</th>
                            <th style={{ textAlign: "left" }}>Email</th>
                            <th>Ngày đặt</th>
                            <th>Trạng thái</th>
                            <th>Thao tác</th>
                        </tr>
                    </thead>

                    <tbody>
                        <tr>
                            <td>1</td>
                            <td style={{ textAlign: "left" }}>Huỳnh Minh Phước</td>
                            <td style={{ textAlign: "left" }}>phuochmse171830@fpt.edu.vn</td>
                            <td>30/02/2024</td>
                            <td>
                                <select
                                    className="custom-select"
                                >
                                    <option value="Chờ xác nhận">Chờ xác nhận</option>
                                    <option value="Đang được xử lý">Đang được xử lý</option>
                                    <option value="Đang giao">Đang giao</option>
                                    <option value="Đã giao">Đã giao</option>
                                    <option value="Đã hủy">Đã hủy</option>
                                </select>
                            </td>
                            <td>
                                <a className="view btn btn-warning btn-sm">
                                    <i className="fa-solid fa-eye"></i>
                                </a>
                            </td>
                        </tr>
                    </tbody>
                </table>
            </div>
        </div>
    );
}