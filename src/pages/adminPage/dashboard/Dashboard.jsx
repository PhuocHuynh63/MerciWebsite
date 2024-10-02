import "./Dashboard.scss";
import { useEffect, useState, useMemo } from "react";


export default function AdminPage() {
    const [showModal, setShowModal] = useState(false);

    return (
        <div className="adminpage">

            <div className="d-sm-flex align-items-center justify-content-between mb-4">
                <h1 className="h3 mb-0 text-gray-800">Dashboard</h1>
            </div>

            <div className="row">
                <div className="col-lg-4 col-md-6 mb-4">
                    <div className="card border-left-primary shadow h-100 py-2">
                        <div className="card-body">
                            <div className="row no-gutters align-items-center">
                                <div className="col mr-2">
                                    <div className="text-xs font-weight-bold text-primary text-uppercase mb-1">
                                        Đơn hàng
                                    </div>
                                    <div className="h5 mb-0 font-weight-bold text-gray-800">
                                        10
                                    </div>
                                </div>
                                <div className="col-auto">
                                    <i className="fas fa-calendar fa-2x text-gray-300"></i>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="col-lg-4 col-md-6 mb-4">
                    <div className="card border-left-success shadow h-100 py-2">
                        <div className="card-body">
                            <div className="row no-gutters align-items-center">
                                <div className="col mr-2">
                                    <div className="text-xs font-weight-bold text-success text-uppercase mb-1">
                                        Tổng doanh thu
                                    </div>
                                    <div className="h5 mb-0 font-weight-bold text-gray-800">
                                        3.000.000
                                    </div>
                                </div>
                                <div className="col-auto">
                                    <i className="fa-solid fa-dong-sign fa-2x text-gray-300"></i>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="col-lg-4 col-md-6 mb-4">
                    <div className="card border-left-info shadow h-100 py-2">
                        <div className="card-body">
                            <div className="row no-gutters align-items-center">
                                <div className="col mr-2">
                                    <div className="text-xs font-weight-bold text-info text-uppercase mb-1">
                                        Sản phẩm
                                    </div>
                                    <div className="row no-gutters align-items-center">
                                        <div className="col-auto">
                                            <div className="h5 mb-0 mr-3 font-weight-bold text-gray-800">
                                                2
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-auto">
                                    <i className="fas fa-clipboard-list fa-2x text-gray-300"></i>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <div className="box-order">
                <h2 className="title">Đơn hàng cần xác nhận</h2>
                <table className="order">
                    <thead>
                        <tr>
                            <th>Khách hàng</th>
                            <th>Ngày đặt hàng</th>
                            <th>Tổng tiền</th>
                            <th>Trạng thái</th>
                            <th>Thao tác</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td colSpan="5" style={{ backgroundColor: "white", fontWeight: "500" }}>Không có đơn hàng nào cần xác nhận</td>
                        </tr>
                        <tr className="adminpage">
                            <td>Huynh Minh Phuoc</td>
                            <td>25/09/2024</td>
                            <td>3.000.000</td>
                            <td>Đang được xử lý</td>
                            <td>
                                <div className="action">
                                    <a className="view btn btn-warning btn-sm">
                                        <i className="fa-solid fa-eye"></i>
                                    </a>
                                    <a className="check btn btn-success btn-sm">
                                        <i className="fa-solid fa-check"></i>
                                    </a>
                                </div>
                            </td>
                        </tr>
                    </tbody>
                </table>

                <div className="pagination">

                    <button className="page-link">
                        3
                    </button>

                </div>

                <div className="showAll">
                    <a href="#">
                        Xem tất cả đơn hàng
                        <i className="icon-show fa-solid fa-arrow-right"></i>
                    </a>
                </div>
                <hr />
            </div>
            <div className="box-detail">
                <div className="chart">
                    {/* <RevenueChart data={memoizedDailyRevenue} /> */}
                </div>


            </div>
        </div>
    );
}