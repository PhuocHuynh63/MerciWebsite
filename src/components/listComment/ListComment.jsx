import './ListComment.scss'

const ListComment = (props) => {

    const { handleViewStarRating } = props;

    return (
        <div className="list-comment comment">

            <div className="title">
                <span>Đánh giá của khách hàng</span>

                <div className="filter">
                    {[5, 4, 3, 2, 1].map(star => (
                        <button key={star} className='filter-star'>
                            {star} <i className='fa-solid fa-star'></i>
                        </button>
                    ))}
                </div>
            </div>

            <div className="info">
                <div className="left">
                    <img src="https://i.pinimg.com/236x/55/1e/61/551e619c14e5a8149aadb8c3685cbf0b.jpg" alt="" />
                </div>

                <div className="right">
                    <div className="group-name">
                        <div className="name">
                            <span>Nguyễn Văn A</span>
                        </div>

                        <div className="time">
                            <span className="material-symbols-outlined custom">
                                avg_pace
                            </span>

                            <span>25/09/2024 3:00</span>
                        </div>
                    </div>


                    <div className="star">
                        {[1, 2, 3, 4, 5].map((star, index) => (
                            <i
                                key={index}
                                className={handleViewStarRating(index, 4)}
                            ></i>
                        ))}
                    </div>

                    <div className="content">
                        <span>Tinh dầu sả chanh rất tốt, mùi thơm dễ chịu, giá cả hợp lý. Sẽ mua thêm ở đây nếu cần. Chất lượng tốt, bồ mình rất thích</span>
                    </div>
                </div>
            </div>

            <div className="info">
                <div className="left">
                    <img src="https://i.pinimg.com/236x/55/1e/61/551e619c14e5a8149aadb8c3685cbf0b.jpg" alt="" />
                </div>

                <div className="right">
                    <div className="group-name">
                        <div className="name">
                            <span>Nguyễn Văn A</span>
                        </div>

                        <div className="time">
                            <span className="material-symbols-outlined custom">
                                avg_pace
                            </span>

                            <span>25/09/2024 3:00</span>
                        </div>
                    </div>


                    <div className="star">
                        {[1, 2, 3, 4, 5].map((star, index) => (
                            <i
                                key={index}
                                className={handleViewStarRating(index, 4)}
                            ></i>
                        ))}
                    </div>

                    <div className="content">
                        <span>Tinh dầu sả chanh rất tốt, mùi thơm dễ chịu, giá cả hợp lý. Sẽ mua thêm ở đây nếu cần. Chất lượng tốt, bồ mình rất thích</span>
                    </div>
                </div>
            </div>

            <div className="info">
                <div className="left">
                    <img src="https://i.pinimg.com/236x/55/1e/61/551e619c14e5a8149aadb8c3685cbf0b.jpg" alt="" />
                </div>

                <div className="right">
                    <div className="group-name">
                        <div className="name">
                            <span>Nguyễn Văn A</span>
                        </div>

                        <div className="time">
                            <span className="material-symbols-outlined custom">
                                avg_pace
                            </span>

                            <span>25/09/2024 3:00</span>
                        </div>
                    </div>


                    <div className="star">
                        {[1, 2, 3, 4, 5].map((star, index) => (
                            <i
                                key={index}
                                className={handleViewStarRating(index, 4)}
                            ></i>
                        ))}
                    </div>

                    <div className="content">
                        <span>Tinh dầu sả chanh rất tốt, mùi thơm dễ chịu, giá cả hợp lý. Sẽ mua thêm ở đây nếu cần. Chất lượng tốt, bồ mình rất thích</span>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default ListComment