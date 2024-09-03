import { useState, useRef, useEffect } from "react";
import './SideBar.scss';
import { NavLink } from "react-router-dom";

const SideBar = () => {

    /**
     * Price slider
     */
    const [priceSlider, setPriceSlider] = useState(10000);
    const sliderRef = useRef(null);
    const valueRef = useRef(null);

    const handlePriceSlider = (e) => {
        setPriceSlider(parseInt(e.target.value));
    }

    useEffect(() => {
        const slider = sliderRef.current;
        const value = valueRef.current;

        if (slider && value) {
            const percent = ((priceSlider - slider.min) / (slider.max - slider.min)) * 100;
            value.style.left = `calc(${percent}% - ${percent * 0.3}px)`;
        }
    }, [priceSlider]);
    //-------------------End Price slider-------------------//

    return (
        <div className="list-product_sidebar">
            <div className="title">
                <h3>Danh mục sản phẩm</h3>
                <div className="line"></div>
            </div>

            <div className="category">
                <NavLink to='/list-product/:slug'>
                    Sản phẩm
                </NavLink>
                <NavLink to='/list-product/combo'>
                    Quà tặng
                </NavLink>
            </div>

            <div className="price">
                <div className="title">Giá</div>
                <div className="price-container">
                    <span className="price-value" ref={valueRef}>
                        {priceSlider.toLocaleString('vi-VN')} VNĐ
                    </span>
                    <input
                        type="range"
                        min='10000'
                        max='10000000'
                        value={priceSlider}
                        onChange={handlePriceSlider}
                        ref={sliderRef}
                    />
                </div>
            </div>

            <div className="combo-product">
                <div className="title">
                    <h3>Set được yêu thích</h3>
                    <div className="line"></div>
                </div>
                <div className="content">
                    <div className="product">
                        <img src="https://res.cloudinary.com/dwyzqcunj/image/upload/v1725281732/Group_47_ur7mcw.svg" alt="product" />
                    </div>
                    <div className="product">
                        <img src="https://res.cloudinary.com/dwyzqcunj/image/upload/v1725281732/Group_68_p6b67s.svg" alt="product" />
                    </div>
                    <div className="product">
                        <img src="https://res.cloudinary.com/dwyzqcunj/image/upload/v1725281732/Group_69_u0ewxp.svg" alt="product" />
                    </div>
                    <div className="product">
                        <img src="https://res.cloudinary.com/dwyzqcunj/image/upload/v1725281732/Group_70_vt0nye.svg" alt="product" />
                    </div>
                </div>
            </div>
        </div>
    );
}

export default SideBar;
