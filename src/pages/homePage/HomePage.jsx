import { Link } from "react-router-dom";
import "./HomePage.scss";
import { useEffect, useState } from "react";
import { merci } from "../../service/merciSrc";

const HomePage = () => {
  /**
   * Call API products
   */
  const [products, setProducts] = useState([]);

  useEffect(() => {
    merci.getProducts().then((res) => {
      setProducts(res.data.data);
    });
  }, []);
  //-------------------End call API products-------------------//

  /**
   * Call API combo
   */
  const [combo, setCombo] = useState([]);
  useEffect(() => {
    merci.getCombo().then((res) => {
      setCombo(res.data.data);
    });
  }, []);
  //-------------------End call API combo-------------------//

  /**
   * Filter product to show on homepage (8 products)
   */
  const filterProduct = products.filter((product, index) => {
    return index < 8;
  });
  //-------------------End filter product-------------------//

  /**
   * Filter new product to show on homepage (3 products)
   */
  const revered = products.reverse();
  const filterNewdProduct = revered.filter((product, index) => {
    if (product.createdAt) return index < 3;
  });
  //-------------------End filter new product-------------------//

  return (
    <div className="homepage">
      {/* carousel */}
      <div
        id="carouselExampleIndicators"
        className="carousel slide"
        data-bs-ride="carousel"
      >
        <div className="carousel-inner">
          <div className="carousel-item active c1 " data-bs-interval="4000">
            <Link to="/combo/set-qua-tang-thien-lanh">
              <img
                src="https://res.cloudinary.com/dwyzqcunj/image/upload/v1724211781/TRUE_HARMONY_N%E1%BB%80N_CH%E1%BB%A6_vlvh5z.svg"
                className="d-block w-100"
                alt="..."
              />
            </Link>
          </div>
          <div className="carousel-item c2" data-bs-interval="4000">
            <Link to="/combo/set-qua-tang-thuy-hong">
              <img
                src="https://res.cloudinary.com/dwyzqcunj/image/upload/v1724211855/LOVE_STORY_N%E1%BB%80N_CH%E1%BB%A6_voaibu.svg"
                className="d-block w-100"
                alt="..."
              />
            </Link>
          </div>
          <div className="carousel-item c3" data-bs-interval="4000">
            <Link to="/combo/set-qua-tang-muot-ma">
              <img
                src="https://res.cloudinary.com/dwyzqcunj/image/upload/v1724211779/PURE_JOY_N%E1%BB%80N_CH%E1%BB%A6_eedu4y.svg"
                className="d-block w-100"
                alt="..."
              />
            </Link>
          </div>
          <div className="carousel-item c4" data-bs-interval="4000">
            <Link to="/combo/set-qua-tang-ngao-ngat">
              <img
                src="https://res.cloudinary.com/dwyzqcunj/image/upload/v1724211860/ETERNAL_BOND_N%E1%BB%80N_CH%E1%BB%A6_fenvoz.svg"
                className="d-block w-100"
                alt="..."
              />
            </Link>
          </div>
        </div>
        <button
          className="carousel-control-prev"
          type="button"
          data-bs-target="#carouselExampleIndicators"
          data-bs-slide="prev"
        >
          <span
            className="carousel-control-prev-icon"
            aria-hidden="true"
          ></span>
          <span className="visually-hidden">Previous</span>
        </button>
        <button
          className="carousel-control-next"
          type="button"
          data-bs-target="#carouselExampleIndicators"
          data-bs-slide="next"
        >
          <span
            className="carousel-control-next-icon"
            aria-hidden="true"
          ></span>
          <span className="visually-hidden">Next</span>
        </button>
      </div>
      {/* End Carousel */}

      {/* Phu Kien */}
      <div className="accessory">
        <div className="title">PHỤ KIỆN</div>

        <div className="container product d-flex justify-content-center">
          <div className="row d-flex justify-content-center">
            {filterProduct.map((product, index) => {
              return (
                <div
                  key={index}
                  className="product-item col-md-12 col-lg-6 mx-2"
                >
                  <Link to={`/product/${product.slug}`}>
                    <img src={product.image} />
                  </Link>
                </div>
              );
            })}
          </div>

          <div className="product-more">
            <Link to="/list-product/1">
              {" "}
              <button>Xem thêm</button>
            </Link>
          </div>
        </div>
      </div>

      {/* New product */}
      <div className="new-product">
        <div className="title">SẢN PHẨM MỚI</div>

        <div className="container product">
          <div className="row d-flex justify-content-center">
            {filterNewdProduct.map((product, index) => {
              return (
                <div key={index} className="product-item col-4">
                  <Link to={`/product/${product.slug}`}>
                    <img src={product.image} />
                  </Link>
                </div>
              );
            })}
          </div>
        </div>
        <div className="product-more">
          <Link to="/list-product/1">
            {" "}
            <button>Xem thêm</button>
          </Link>
        </div>
        <div className="background">
          <img
            src="https://res.cloudinary.com/dwyzqcunj/image/upload/v1724207828/0310_843_1_1_csrrkv.svg"
            alt=""
          />
          <img
            src="https://res.cloudinary.com/dwyzqcunj/image/upload/v1724343350/M%C3%82Y_GI%E1%BB%AEA_vtbu8q.svg"
            alt=""
          />
        </div>
      </div>

      <div className="present-set">
        <div className="background-flower">
          <img
            src="https://res.cloudinary.com/dwyzqcunj/image/upload/v1724344919/hoaaa_2_1_zipq2d.svg"
            alt=""
          />
        </div>
        <div className="container product">
          <div className="position row">
            {combo.map((product, index) => {
              return (
                <div key={index} className="item">
                  <Link to={`/combo/${product.slug}`} style={{ zIndex: "1" }}>
                    <div className="product-item col-md-3">
                      <img src={product.image} />
                    </div>
                  </Link>
                  <p>{product.name}</p>
                  <p>{product.price.toLocaleString()}đ</p>
                </div>
              );
            })}
          </div>
        </div>
        <div className="background-cloud">
          <img
            src="https://res.cloudinary.com/dwyzqcunj/image/upload/v1724343350/M%C3%82Y_GI%E1%BB%AEA_vtbu8q.svg"
            alt=""
          />
        </div>
        <div className="title">
          <img
            src="https://res.cloudinary.com/dwyzqcunj/image/upload/v1724415483/Group_4_oyetfq.svg"
            alt=""
          />
        </div>

        <div className="background-flower-bottom">
          <img
            src="https://res.cloudinary.com/dwyzqcunj/image/upload/v1724416582/HOA_H%E1%BB%92NG_1_o734sj.svg"
            alt=""
          />
        </div>
      </div>
    </div>
  );
};

export default HomePage;
