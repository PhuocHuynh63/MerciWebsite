// import { useState,useEffect } from 'react';
// import './PurchaseOrder.scss';
// import { Link, NavLink } from 'react-router-dom';
// import PurchaseOrderHeader from '../../components/purchaseOrderHeader/PurchaseOrderHeader';
// import { jwtDecode } from "jwt-decode";
// import { merci } from "../../service/merciSrc";
// const PurchaseOrder = () => {


//     /**
//      * Handle Status
//      * @param {*} status 
//      * @returns 
//      */
//     const switchStatus = (status) => {
//         switch (status) {
//             case 'Chờ xác nhận': return 'confirm';
//             case 'Đang được xử lý': return 'pending';
//             case 'Đang giao': return 'shipping';
//             case 'Đã giao': return 'success';
//             case 'Đã hủy': return 'cancel';
//             default: return '';
//         }
//     }

//     const handleStatusClassButton = (status) => {
//         switch (switchStatus(status)) {
//             case 'confirm':
//                 return 'btn-cancel';
//             case 'pending':
//                 return 'btn-cancel';
//             default:
//                 break;
//         }
//     }

//     const handleStatusButton = (status) => {
//         switch (switchStatus(status)) {
//             case 'confirm':
//                 return 'Hủy đơn hàng';
//             case 'pending':
//                 return 'Hủy đơn hàng';
//             default:
//                 break;
//         }
//     }

//     const handleStatusChange = (status) => {
//         setStatusFilter(status);
//     }

//     const [showCancel, setShowCancel] = useState(false);
//     const handleCloseCancel = () => setShowCancel(false);
//     const handleShowCancel = (orderId) => {
//         setSelectedOrderId(orderId);
//         setShowCancel(true);
//     };
//     const [formData, setFormData] = useState({
//         name: '',
//         birthday: '',
//         phone: '',
//         email: ''
//     });
//     const [isLoggedIn, setIsLoggedIn] = useState(false);
//     const [user, setUser] = useState({});
//     const [userId, setUserId] = useState(null);

//     useEffect(() => {
//         const token = localStorage.getItem('USER_INFO');
//         if (token) {
//             setIsLoggedIn(true); // Set user as logged in
//             const decoded = jwtDecode(token);
//             console.log(decoded);

//             const id = decoded.id;
            
//              merci.getUserById(id)
//                  .then((res) => {
//                    const userData = res.data;
//             //         setUser(userData);
//             //         setUserId(id);
                   
//                 })
//                 .catch((err) => {
//                     console.log("Error fetching user", err);
//                 });

                    
//                merci.getYourHistoryOrder(id).then((res) => {const orderdata = res.data;
//                 console.log(res.data);
//                 }

//                ) 
//         }
//     }, []);
//     // const sortData = data.sort((a, b) => new Date(b.createdAt) - new Date(a.createdAt));
//     // const filteredData = sortData.filter(order => statusFilter === 'Tất cả' || order.status === statusFilter);
//     //----------------------End handle status----------------------//


//     return (
//         <div className='purchase-order'>
//             <PurchaseOrderHeader onStatusChange={handleStatusChange} />
//             <div className="body">
//                 {/* <p style={{ marginLeft: "30px", fontSize: "17px", fontStyle: "italic" }}>Ngày tạo đơn hàng: {new Date(order.createdAt).toLocaleString()}</p> */}
//                 <NavLink to={``}>
//                     <div className="body_item">
//                         <div className="left">
//                             <img src={`https://res.cloudinary.com/dwyzqcunj/image/upload/v1724224158/Remove-bg.ai_1720876902030_1_mbi9bc.svg`} alt={``} />
//                             <div className="content">
//                                 <p>Tealight mini</p>
//                                 <p>x3</p>
//                             </div>
//                         </div>
//                         <div className="right">
//                             {/* <p>{(item.quantity * item.price).toLocaleString('vi-VN')}đ</p> */}
//                             <p>100.000đ</p>
//                         </div>
//                     </div>
//                 </NavLink>

//                 <div className="body_bot">
//                     <div className="total">
//                         <span>Tổng giá tiền: </span>
//                         <span>
//                             {/* {order.items.reduce((total, item) => total + item.price * item.quantity, 0).toLocaleString()}đ */}
//                             100.000đ
//                         </span>
//                     </div>
//                     <div className="btn">
//                         {/* <NavLink className={`${switchStatus(order.status)}`}>
//                             {order.status}
//                         </NavLink>
//                         <button className={handleStatusClassButton(order.status)} onClick={handleStatusButton(order.status) === 'Hủy đơn hàng' ? () => handleShowCancel(order.orderId) : null}>
//                             {handleStatusButton(order.status)}
//                         </button> */}
//                     </div>
//                 </div>
//             </div>
//             <div className="body">
//                 {/* <p style={{ marginLeft: "30px", fontSize: "17px", fontStyle: "italic" }}>Ngày tạo đơn hàng: {new Date(order.createdAt).toLocaleString()}</p> */}


//                 <NavLink to={``}>
//                     <div className="body_item">
//                         <div className="left">
//                             <img src={`https://res.cloudinary.com/dwyzqcunj/image/upload/v1724224158/Remove-bg.ai_1720876902030_1_mbi9bc.svg`} alt={``} />
//                             <div className="content">
//                                 <p>Tealight mini</p>
//                                 <p>x3</p>
//                             </div>
//                         </div>
//                         <div className="right">
//                             {/* <p>{(item.quantity * item.price).toLocaleString('vi-VN')}đ</p> */}
//                             <p>100.000đ</p>
//                         </div>
//                     </div>
//                 </NavLink>


//                 <div className="body_bot">
//                     <div className="total">
//                         <span>Tổng giá tiền: </span>
//                         <span>
//                             {/* {order.items.reduce((total, item) => total + item.price * item.quantity, 0).toLocaleString()}đ */}
//                             100.000đ
//                         </span>
//                     </div>
//                     <div className="btn">
//                         {/* <NavLink className={`${switchStatus(order.status)}`}>
//                             {order.status}
//                         </NavLink>
//                         <button className={handleStatusClassButton(order.status)} onClick={handleStatusButton(order.status) === 'Hủy đơn hàng' ? () => handleShowCancel(order.orderId) : null}>
//                             {handleStatusButton(order.status)}
//                         </button> */}

//                         <button style={{ color: 'red' }}>
//                             Nút ở đây này
//                         </button>
//                     </div>
//                 </div>
//             </div>
//         </div>
//     );
// }

// export default PurchaseOrder;


import { useState, useEffect } from 'react';
import './PurchaseOrder.scss';
import { NavLink } from 'react-router-dom';
import PurchaseOrderHeader from '../../components/purchaseOrderHeader/PurchaseOrderHeader';
import { jwtDecode } from "jwt-decode";
import { merci } from "../../service/merciSrc";

const PurchaseOrder = () => {
    const [showCancel, setShowCancel] = useState(false);
    const [historyOrder, setHistoryOrder] = useState([]);
    const [isLoggedIn, setIsLoggedIn] = useState(false);
    const [userId, setUserId] = useState(null);

    useEffect(() => {
        const token = localStorage.getItem('USER_INFO');
        if (token) {
            setIsLoggedIn(true);
            const decoded = jwtDecode(token);
            const id = decoded.id;

            // Fetch user order history
            merci.getYourHistoryOrder(id)
                .then((res) => {
                    const orderData = res.data.data;
                    console.log(orderData)
                    if (Array.isArray(orderData)) {
                        setHistoryOrder(orderData); // Gán dữ liệu đơn hàng vào state
                    } else {
                        console.error("Expected orderData to be an array");
                    }
                       // Store order history data
                })
                .catch((err) => {
                    console.error("Error fetching order history:", err);
                });
        }
    }, []);

    // Function to format order status
    const switchStatus = (status) => {
        switch (status) {
            case 'Chờ xác nhận': return 'confirm';
            case 'Đang được xử lý': return 'pending';
            case 'Đang giao': return 'shipping';
            case 'Đã giao': return 'success';
            case 'Đã hủy': return 'cancel';
            default: return '';
        }
    };

    return (
        <div className='purchase-order'>
            <PurchaseOrderHeader />

            {historyOrder.map((order) => (
    <div key={order.idOrder} className="body">
        <p style={{ marginLeft: "30px", fontSize: "17px", fontStyle: "italic" }}>
            Ngày tạo đơn hàng: {new Date(order.createdAt).toLocaleDateString()}
        </p>
        
        {/* Display the order code */}
        <p style={{ marginLeft: "30px", fontSize: "17px" }}>
            Mã đơn hàng: {order.orderCode}
        </p>
         
        <NavLink to={`/order/${order.idOrder}`}>
            <div className="body_item">
                {/* Loop over orderDetails to display all products */}
                {order.orderDetails.map((item) => (
                    <div key={item.idOrderDetail} className="left">
                        <img src={item.image} alt={item.name} />
                        <div className="content">
                            <p>{item.name}</p>
                            <p>x{item.quantity}</p>
                        </div>
                    </div>
                ))}
                <div className="right">
                    <p>{(order.orderDetails.reduce((total, item) => total + item.quantity * item.price, 0)).toLocaleString('vi-VN')}đ</p>
                </div>
            </div>
        </NavLink>
        

        <div className="body_bot">
            <div className="total">
                <span>Tổng giá tiền: </span>
                <span>
                    {(order.orderDetails.reduce((total, item) => total + item.price * item.quantity, 0)).toLocaleString('vi-VN')}đ
                </span>
            </div>
            <div className="btn">
                {/* Display the order status */}
                <button className={`status-btn ${switchStatus(order.status)}`}>
                    {order.status}
                </button>
                
                {switchStatus(order.status) === 'confirm' || switchStatus(order.status) === 'pending' ? (
                    <button className='btn-cancel' onClick={() => handleShowCancel(order.idOrder)}>
                        Hủy đơn hàng
                    </button>
                ) : null}
            </div>
        </div>
    </div>
))}
        </div>
    );
};

export default PurchaseOrder;