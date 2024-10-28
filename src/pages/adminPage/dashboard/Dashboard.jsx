import { merci } from "../../../service/merciSrc";
import "./Dashboard.scss";
import { useEffect,useState,useMemo } from "react"
import RevenueChart from "../../../components/chart/chart";

export default function Dashboard() {
    const [showModal,setShowModal] = useState(false);


    /**
     * Get order status API
     */
    const [order,setOrder] = useState([]);
    useEffect(() => {
        merci.getOrder()
            .then((res) => {
                setOrder(res.data.data);
            })
            .catch((err) => {
                console.log(err);
            });
    },[]);
    //-----End-----//


    /**
     * Get product API
     */
    const [product,setProduct] = useState([]);
    useEffect(() => {
        merci.getProducts()
            .then((res) => {
                setProduct(res.data.data);
            })
            .catch((err) => {
                console.log(err);
            });
    },[]);
    //-----End-----//


    /**
     * revenue calculation
     * @returns revenue
     */
    const [dailyRevenue,setDailyRevenue] = useState([]);

    const calculateRevenue = () => {
        let completedOrders = order.filter((item) => item.paymentStatus === "Đã thanh toán");
        let revenue = completedOrders.reduce((total,item) => total + item.totalAmount,0);
        return revenue.toLocaleString('vi-VN');
    }

    const calculateDailyRevenue = () => {
        let completedOrders = order.filter((item) => item.paymentStatus === "Đã thanh toán");

        let dailyRevenueData = completedOrders.reduce((acc,item) => {
            let date = new Date(item.updatedAt); // Use updatedAt for the delivery date
            let formattedDate = date.toLocaleDateString('vi-VN',{ day: '2-digit',month: '2-digit',year: 'numeric' });
            if (!acc[formattedDate]) {
                acc[formattedDate] = 0;
            }
            acc[formattedDate] += item.totalAmount;
            return acc;
        },{});

        let formattedDailyRevenueData = Object.keys(dailyRevenueData).map(date => ({
            date,
            revenue: dailyRevenueData[date]
        }));

        setDailyRevenue(formattedDailyRevenueData);
    }
    //-----End-----//

    /**
     * Filter order by status
     */
    // const orderNeedConfirm = order.filter((item) => item.status === "Chờ xác nhận");
    //-----End-----//


    /**
     * Pagination
     */
    // const [currentPage, setCurrentPage] = useState(1);
    // const ordersPerPage = 5;
    // const indexOfLastOrder = currentPage * ordersPerPage;
    // const indexOfFirstOrder = indexOfLastOrder - ordersPerPage;
    // const currentOrders = orderNeedConfirm.slice(indexOfFirstOrder, indexOfLastOrder);

    // const paginate = (pageNumber) => setCurrentPage(pageNumber);

    // const pageNumbers = [];
    // for (let i = 1; i <= Math.ceil(orderNeedConfirm.length / ordersPerPage); i++) {
    //     pageNumbers.push(i);
    // }
    //-----End-----//

    /**
     * Handle tracking popup
     */
    // const [showTrackingPopUp, setShowTrackingPopUp] = useState(false);

    // const handleCloseTrackingPopUp = () => setShowTrackingPopUp(false);
    // const handleShowTrackingPopUp = (orderId) => {
    //     setCurrentOrderId(orderId);
    //     setShowTrackingPopUp(true)
    // };
    //-----End-----//

    useEffect(() => {
        if (order.length > 0) {
            calculateDailyRevenue();
        }
    },[order]);

    const memoizedDailyRevenue = useMemo(() => dailyRevenue,[dailyRevenue]);

    console.log(memoizedDailyRevenue);
    return (
        <div className="adminpage">

            <div className="d-sm-flex align-items-center justify-content-between mb-4">
                <h1 className="h3 mb-0 text-gray-800">Dashboard</h1>
            </div>
            <div className="container">

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
                                            {order.length}
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
                                            {calculateRevenue()}
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
                                                    {product.length}
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

                        <tr className="adminpage">
                            <td>Huynh Minh Phuoc</td>
                            <td>30/02/2024</td>
                            <td>300000</td>
                            <td>Đang xử lý</td>
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
                    {/* {pageNumbers.map(number => (
                        <button key={number} onClick={() => paginate(number)} className="page-link">
                            {number}
                        </button>
                    ))} */}
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
                    <RevenueChart data={memoizedDailyRevenue} />
                </div>
            </div>
        </div>
    );
}