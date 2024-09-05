import React, { useState } from 'react';
import './PurchaseOrderHeader.scss';

const PurchaseOrderHeader = ({ onStatusChange }) => {

    /**
     * Handle Status
     */
    const [activeStatus, setActiveStatus] = useState('Tất cả')
    const handleStatusClick = (status) => {
        setActiveStatus(status)
        onStatusChange(status)
    }
    //----------------------End handle status----------------------//

    return (
        <div className="purchase-order-header">
            {['Tất cả', 'Chờ xác nhận', 'Đang được xử lý', 'Đang giao', 'Đã giao', 'Đã hủy'].map((status) => (
                <span key={status} className={activeStatus === status ? 'active' : ''} onClick={() => handleStatusClick(status)}>
                    {status}
                </span>
            ))}
        </div>
    );
}

export default PurchaseOrderHeader;