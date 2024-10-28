import { useEffect,useState } from "react";
import "./AdminOrder.scss";
import { merci } from "../../../service/merciSrc";
import TrackingPopup from "./orderDetail.jsx/OrderDetail";

export default function AdminOrder() {

    /**
    * Get order status API
    */
    const [orders,setOrders] = useState([]);
    useEffect(() => {
        merci.getOrder()
            .then((res) => {
                setOrders(res.data.data);
            })
            .catch((err) => {
                console.log(err);
            });
    },[]);
    //-----End-----//


    /**
     * Update order status
     */
    const handleStatusChange = (orderId,newStatus) => {
        const payload = {
            orderId: orderId,
            status: newStatus
        };

        merci.putStatusOrder(payload)
            .then(res => {
                setOrders(prevOrders =>
                    prevOrders.map(order =>
                        order.orderId === orderId ? { ...order,status: newStatus } : order
                    )
                );
                window.location.reload();
                console.log("Order status updated from AdminOrder",res.data);
            })
            .catch(err => {
                console.log("Error updating order status from AdminOrder",err);
            });
    };
    //-----End-----//


    /**
     * format date
     * @param {*} dateString 
     * @returns 
     */
    const formatDate = (dateString) => {
        const date = new Date(dateString);
        const day = date.getDate().toString().padStart(2,'0');
        const month = (date.getMonth() + 1).toString().padStart(2,'0');
        const year = date.getFullYear();
        return `${day}/${month}/${year}`;
    };
    //-----End-----//


    /**
    * Call API to get order detail
    */
    const [showModalOrderDetail,setShowModalOrderDetail] = useState(false);
    const [activeOrderId,setActiveOrderId] = useState(null);
    const [orderDetail,setOrderDetail] = useState([]);
    //---------------------------------End---------------------------------//
    return (
        <div className="admin-order">
            <TrackingPopup show={showModalOrderDetail} handleClose={() => setShowModalOrderDetail(false)} idOrder={activeOrderId} />

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
                        {orders.map((item) => (
                            <tr key={item.idOrder}>
                                <td>{item.idOrder}</td>
                                <td style={{ textAlign: "left" }}>{item.name}</td>
                                <td style={{ textAlign: "left" }}>{item.email}</td>
                                <td>{formatDate(item.createdAt)}</td>
                                <td>
                                    <select
                                        className="custom-select"
                                        value={item.paymentStatus}
                                        onChange={(e) => handleStatusChange(item.idOrder,e.target.value)}
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
                                        <i className="fa-solid fa-eye" onClick={() => setActiveOrderId(item.idOrder)}></i>
                                    </a>
                                </td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>
        </div >
    );
}