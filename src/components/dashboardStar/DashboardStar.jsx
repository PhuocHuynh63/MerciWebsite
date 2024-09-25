import './DashboardStar.scss'

const DashboardStar = ({ handleViewStarRating }) => {


    return (
        <div className='dashboard-star container'>
            <div className="average">
                <span className='total-star'>4.5/5</span>
                <div className="star">
                    {[1, 2, 3, 4, 5].map((star, index) => (
                        <i
                            key={index}
                            id={`star-${index + 1}`}
                            className={handleViewStarRating(index, 4.5)}
                        ></i>
                    ))}
                </div>
                <span className='total-feedback'>1.000 đánh giá</span>
            </div>

            <div className="star-detail">
                {[5, 4, 3, 2, 1].map((star, index) => (
                    <ul key={index}>
                        <li>
                            <div className="number-star">
                                <span>{star}</span>
                                <i
                                    key={index}
                                    id={`star-${index + 1}`}
                                    className='fa-solid fa-star star-detail'
                                    style={{ margin: '0 5px', padding: '0' }}
                                >
                                </i>
                            </div>

                            <div className="progress-bar">
                                <div id={`progress-${star}`} className="progress"></div>
                            </div>

                            <div className="percent">
                                <span>3%</span>
                            </div>
                        </li>
                    </ul>
                ))}
            </div>
        </div>
    )
}

export default DashboardStar