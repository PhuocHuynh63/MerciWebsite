import './HomePage.scss';

const HomePage = () => {
  return (
    <div className='homepage'>
      {/* carousel */}
      <div id="carouselExampleIndicators" className="carousel slide" data-bs-ride="carousel">
        <div className="carousel-inner">
          <div className="carousel-item active c1 " data-bs-interval="4000">
            <img src="https://res.cloudinary.com/dwyzqcunj/image/upload/v1724211781/TRUE_HARMONY_N%E1%BB%80N_CH%E1%BB%A6_vlvh5z.svg" className="d-block w-100" alt="..." />
          </div>
          <div className="carousel-item c2" data-bs-interval="4000">
            <img src="https://res.cloudinary.com/dwyzqcunj/image/upload/v1724211855/LOVE_STORY_N%E1%BB%80N_CH%E1%BB%A6_voaibu.svg" className="d-block w-100" alt="..." />
          </div>
          <div className="carousel-item c3" data-bs-interval="4000">
            <img src="https://res.cloudinary.com/dwyzqcunj/image/upload/v1724211779/PURE_JOY_N%E1%BB%80N_CH%E1%BB%A6_eedu4y.svg" className="d-block w-100" alt="..." />
          </div>
          <div className="carousel-item c4" data-bs-interval="4000">
            <img src="https://res.cloudinary.com/dwyzqcunj/image/upload/v1724211860/ETERNAL_BOND_N%E1%BB%80N_CH%E1%BB%A6_fenvoz.svg" className="d-block w-100" alt="..." />
          </div>
        </div>
        <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide="prev">
          <span className="carousel-control-prev-icon" aria-hidden="true"></span>
          <span className="visually-hidden">Previous</span>
        </button>
        <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide="next">
          <span className="carousel-control-next-icon" aria-hidden="true"></span>
          <span className="visually-hidden">Next</span>
        </button>
      </div>
    </div>
  );
}

export default HomePage;