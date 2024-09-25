import { Modal } from 'antd'
import './CommentModal.scss'
import DashboardStar from '../../../components/dashboardStar/DashboardStar'
import ListComment from '../../../components/listComment/ListComment'


const CommentModal = (props) => {
    const { isModalOpen, handleCancel, handleViewStarRating } = props

    return (
        <>
            <Modal className='comment-modal' open={isModalOpen} onCancel={handleCancel} width='1300px'>
                <div className="comment">
                    <div className="title">
                        <h1>Đánh giá sản phẩm</h1>
                    </div>
                </div>
                <DashboardStar handleViewStarRating={handleViewStarRating} />
                <ListComment handleViewStarRating={handleViewStarRating} />
            </Modal>
        </>
    )
}

export default CommentModal