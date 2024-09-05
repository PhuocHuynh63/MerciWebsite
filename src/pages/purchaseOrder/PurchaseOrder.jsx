import { useState } from 'react';
import './PurchaseOrder.scss';
import { Link, NavLink } from 'react-router-dom';
import PurchaseOrderHeader from '../../components/purchaseOrderHeader/PurchaseOrderHeader';

const PurchaseOrder = () => {


    /**
     * Handle Status
     * @param {*} status 
     * @returns 
     */
    const switchStatus = (status) => {
        switch (status) {
            case 'Chờ xác nhận': return 'confirm';
            case 'Đang được xử lý': return 'pending';
            case 'Đang giao': return 'shipping';
            case 'Đã giao': return 'success';
            case 'Đã hủy': return 'cancel';
            default: return '';
        }
    }

    const handleStatusClassButton = (status) => {
        switch (switchStatus(status)) {
            case 'confirm':
                return 'btn-cancel';
            case 'pending':
                return 'btn-cancel';
            default:
                break;
        }
    }

    const handleStatusButton = (status) => {
        switch (switchStatus(status)) {
            case 'confirm':
                return 'Hủy đơn hàng';
            case 'pending':
                return 'Hủy đơn hàng';
            default:
                break;
        }
    }

    const handleStatusChange = (status) => {
        setStatusFilter(status);
    }

    const [showCancel, setShowCancel] = useState(false);
    const handleCloseCancel = () => setShowCancel(false);
    const handleShowCancel = (orderId) => {
        setSelectedOrderId(orderId);
        setShowCancel(true);
    };

    // const sortData = data.sort((a, b) => new Date(b.createdAt) - new Date(a.createdAt));
    // const filteredData = sortData.filter(order => statusFilter === 'Tất cả' || order.status === statusFilter);
    //----------------------End handle status----------------------//


    return (
        <div className='purchase-order'>
            <PurchaseOrderHeader onStatusChange={handleStatusChange} />
            <div className="body">
                {/* <p style={{ marginLeft: "30px", fontSize: "17px", fontStyle: "italic" }}>Ngày tạo đơn hàng: {new Date(order.createdAt).toLocaleString()}</p> */}
                <NavLink to={``}>
                    <div className="body_item">
                        <div className="left">
                            <img src={`https://res.cloudinary.com/dwyzqcunj/image/upload/v1724224158/Remove-bg.ai_1720876902030_1_mbi9bc.svg`} alt={``} />
                            <div className="content">
                                <p>Tealight mini</p>
                                <p>x3</p>
                            </div>
                        </div>
                        <div className="right">
                            {/* <p>{(item.quantity * item.price).toLocaleString('vi-VN')}đ</p> */}
                            <p>100.000đ</p>
                        </div>
                    </div>
                </NavLink>

                <div className="body_bot">
                    <div className="total">
                        <span>Tổng giá tiền: </span>
                        <span>
                            {/* {order.items.reduce((total, item) => total + item.price * item.quantity, 0).toLocaleString()}đ */}
                            100.000đ
                        </span>
                    </div>
                    <div className="btn">
                        {/* <NavLink className={`${switchStatus(order.status)}`}>
                            {order.status}
                        </NavLink>
                        <button className={handleStatusClassButton(order.status)} onClick={handleStatusButton(order.status) === 'Hủy đơn hàng' ? () => handleShowCancel(order.orderId) : null}>
                            {handleStatusButton(order.status)}
                        </button> */}
                    </div>
                </div>
            </div>
            <div className="body">
                {/* <p style={{ marginLeft: "30px", fontSize: "17px", fontStyle: "italic" }}>Ngày tạo đơn hàng: {new Date(order.createdAt).toLocaleString()}</p> */}


                <NavLink to={``}>
                    <div className="body_item">
                        <div className="left">
                            <img src={`https://res.cloudinary.com/dwyzqcunj/image/upload/v1724224158/Remove-bg.ai_1720876902030_1_mbi9bc.svg`} alt={``} />
                            <div className="content">
                                <p>Tealight mini</p>
                                <p>x3</p>
                            </div>
                        </div>
                        <div className="right">
                            {/* <p>{(item.quantity * item.price).toLocaleString('vi-VN')}đ</p> */}
                            <p>100.000đ</p>
                        </div>
                    </div>
                </NavLink>


                <div className="body_bot">
                    <div className="total">
                        <span>Tổng giá tiền: </span>
                        <span>
                            {/* {order.items.reduce((total, item) => total + item.price * item.quantity, 0).toLocaleString()}đ */}
                            100.000đ
                        </span>
                    </div>
                    <div className="btn">
                        {/* <NavLink className={`${switchStatus(order.status)}`}>
                            {order.status}
                        </NavLink>
                        <button className={handleStatusClassButton(order.status)} onClick={handleStatusButton(order.status) === 'Hủy đơn hàng' ? () => handleShowCancel(order.orderId) : null}>
                            {handleStatusButton(order.status)}
                        </button> */}

                        <button style={{ color: 'red' }}>
                            Nút ở đây này
                        </button>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default PurchaseOrder;