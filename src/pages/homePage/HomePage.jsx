import { Link } from 'react-router-dom';
import './HomePage.scss';
import { useEffect, useState } from 'react';
import { merci } from '../../service/merciSrc';

const HomePage = () => {

  /**
   * Call API products
   */
  const [products, setProducts] = useState([]);

  useEffect(() => {
    merci.getProducts()
      .then((res) => {
        setProducts(res.data.data)
      });
  }, []);
  //-------------------End call API products-------------------//


  /**
   * Filter product to show on homepage (8 products)
   */
  const filterProduct = products.filter((product, index) => {
    return index < 8;
  })
  //-------------------End filter product-------------------//


  /**
   * Filter new product to show on homepage (3 products)
   */
  const revered = products.reverse();
  const filterNewdProduct = revered.filter((product, index) => {
    if (product.createdAt)
      return index < 3;
  })
  //-------------------End filter new product-------------------//

  return (
    <div className='homepage'>
      {/* carousel */}
      <div id="carouselExampleIndicators" className="carousel slide" data-bs-ride="carousel">
        <div className="carousel-inner">
          <div className="carousel-item active c1 " data-bs-interval="4000">
            <Link to='/product/:slug'>
              <img src="https://res.cloudinary.com/dwyzqcunj/image/upload/v1724211781/TRUE_HARMONY_N%E1%BB%80N_CH%E1%BB%A6_vlvh5z.svg" className="d-block w-100" alt="..." />
            </Link>
          </div>
          <div className="carousel-item c2" data-bs-interval="4000">
            <Link to='/product/:slug'>
              <img src="https://res.cloudinary.com/dwyzqcunj/image/upload/v1724211855/LOVE_STORY_N%E1%BB%80N_CH%E1%BB%A6_voaibu.svg" className="d-block w-100" alt="..." />
            </Link>
          </div>
          <div className="carousel-item c3" data-bs-interval="4000">
            <Link to='/product/:slug'>
              <img src="https://res.cloudinary.com/dwyzqcunj/image/upload/v1724211779/PURE_JOY_N%E1%BB%80N_CH%E1%BB%A6_eedu4y.svg" className="d-block w-100" alt="..." />
            </Link>
          </div>
          <div className="carousel-item c4" data-bs-interval="4000">
            <Link to='/product/:slug'>
              <img src="https://res.cloudinary.com/dwyzqcunj/image/upload/v1724211860/ETERNAL_BOND_N%E1%BB%80N_CH%E1%BB%A6_fenvoz.svg" className="d-block w-100" alt="..." />
            </Link>
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
      {/* End Carousel */}


      {/* Phu Kien */}
      <div className='accessory'>
        <div className='title'>PHỤ KIỆN</div>

        <div className='container product d-flex justify-content-center'>
          <div className='row d-flex justify-content-between'>
            {filterProduct.map((product, index) => {
              return (
                <div key={index} className='product-item col-3'>
                  <Link to={`/product/${product.idProduct}`}>
                    <img src={product.image} />
                  </Link>
                </div>
              )
            })}
          </div>

          <div className='product-more'>
            <button>XEM THÊM</button>
          </div>
        </div>
      </div>


      {/* New product */}
      <div className='new-product'>
        <div className='title'>SẢN PHẨM MỚI</div>

        <div className='container product'>
          <div className='row d-flex justify-content-between'>
            {filterNewdProduct.map((product, index) => {
              return (
                <div key={index} className='product-item col-4'>
                  <Link to={`/product/${product.idProduct}`}>
                    <img src={product.image} />
                  </Link>
                </div>
              )
            })}
          </div>
        </div>
        <div className='product-more'>
          <button>XEM THÊM</button>
        </div>
        <div className='background'>
          <img src="https://res.cloudinary.com/dwyzqcunj/image/upload/v1724207828/0310_843_1_1_csrrkv.svg" alt="" />
          <img src="https://res.cloudinary.com/dwyzqcunj/image/upload/v1724343350/M%C3%82Y_GI%E1%BB%AEA_vtbu8q.svg" alt="" />
        </div>
      </div>

      <div className='present-set'>
        <div className='background-flower'>
          <img src="https://res.cloudinary.com/dwyzqcunj/image/upload/v1724344919/hoaaa_2_1_zipq2d.svg" alt="" />
        </div>
        <div className='container product'>
          <div className='position row-cols-1'>
            <div className='item'>
              <div className='product-item col-3 d-flex flex-column'>
                <img src="https://res.cloudinary.com/dwyzqcunj/image/upload/v1724224158/Remove-bg.ai_1720876902030_1_mbi9bc.svg" />
              </div>
              <p>SET MƯỢT MÀ</p>
              <p>299.000đ</p>
            </div>

            <div className='item'>
              <div className='product-item col-3'>
                <img src="https://res.cloudinary.com/dwyzqcunj/image/upload/v1724224158/Remove-bg.ai_1720876902030_1_mbi9bc.svg" />
              </div>
              <p>SET MƯỢT MÀ</p>
              <p>299.000đ</p>
            </div>

            <div className='item'>
              <div className='product-item col-3'>
                <img src="https://res.cloudinary.com/dwyzqcunj/image/upload/v1724224158/Remove-bg.ai_1720876902030_1_mbi9bc.svg" />
              </div>
              <p>SET MƯỢT MÀ</p>
              <p>299.000đ</p>
            </div>

            <div className='item'>
              <div className='product-item col-3'>
                <img src="https://res.cloudinary.com/dwyzqcunj/image/upload/v1724224158/Remove-bg.ai_1720876902030_1_mbi9bc.svg" />
              </div>
              <p>SET MƯỢT MÀ</p>
              <p>299.000đ</p>
            </div>
          </div>
        </div>
        <div className="background-cloud">
          <img src="https://res.cloudinary.com/dwyzqcunj/image/upload/v1724343350/M%C3%82Y_GI%E1%BB%AEA_vtbu8q.svg" alt="" />
        </div>
        <div className="title">
          <img src="https://res.cloudinary.com/dwyzqcunj/image/upload/v1724415483/Group_4_oyetfq.svg" alt="" />
        </div>

        <div className="background-flower-bottom">
          <img src="https://res.cloudinary.com/dwyzqcunj/image/upload/v1724416582/HOA_H%E1%BB%92NG_1_o734sj.svg" alt="" />
        </div>
      </div>
    </div >
  );
}

export default HomePage;