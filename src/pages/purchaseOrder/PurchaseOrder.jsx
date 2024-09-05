import { useState } from 'react';
import './PurchaseOrder.scss';
import { Link } from 'react-router-dom';
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
        </div>
    );
}

export default PurchaseOrder;