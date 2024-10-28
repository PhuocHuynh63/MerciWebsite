import { useState, useRef, useEffect } from "react";
import './SideBar.scss';
import { Link, NavLink } from "react-router-dom";

const SideBar = ({ onPriceFilter, minPrice }) => {

    /**
     * Price slider
     */
    const [priceSlider, setPriceSlider] = useState(minPrice);
    const sliderRef = useRef(null);
    const valueRef = useRef(null);

    const handlePriceSlider = (e) => {
        const newPrice = parseInt(e.target.value);
        setPriceSlider(newPrice);
        onPriceFilter(newPrice); // Gọi hàm lọc theo giá khi người dùng thay đổi giá trị
    };

    useEffect(() => {
        const slider = sliderRef.current;
        const value = valueRef.current;

        if (slider && value) {
            const percent = ((priceSlider - slider.min) / (slider.max - slider.min)) * 100;
            value.style.left = `calc(${percent}% - ${percent * 0.3}px)`;
        }
    }, [priceSlider]);

    return (
        <div className="list-product_sidebar">
            <div className="title">
                <h3>Danh mục sản phẩm</h3>
                <div className="line"></div>
            </div>

            <div className="category">
                <NavLink to='/list-product/1'>
                    Sản phẩm
                </NavLink>
                <NavLink to='/list-product/2'>
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
                        max='700000'
                        value={priceSlider}
                        onChange={handlePriceSlider}
                        ref={sliderRef}
                    />
                </div>
            </div>

            <div className="combo-product">
                <div className="combo-product">
                    <div className="title">
                        <h3>Set được yêu thích</h3>
                        <div className="line"></div>
                    </div>
                    <div className="content">
                        <Link className="product" to={'/product/set-qua-tang-thien-lanh'}>
                            <img src="https://res.cloudinary.com/dwyzqcunj/image/upload/v1725281732/Group_47_ur7mcw.svg" alt="product" />
                        </Link>
                        <Link className="product" to={'/product/set-qua-tang-thuy-hong'}>
                            <img src="https://res.cloudinary.com/dwyzqcunj/image/upload/v1725281732/Group_68_p6b67s.svg" alt="product" />
                        </Link>
                        <Link className="product" to={'/product/set-qua-tang-muot-ma'}>
                            <img src="https://res.cloudinary.com/dwyzqcunj/image/upload/v1725281732/Group_69_u0ewxp.svg" alt="product" />
                        </Link>
                        <Link className="product" to={'/product/set-qua-tang-ngao-ngat'}>
                            <img src="https://res.cloudinary.com/dwyzqcunj/image/upload/v1725281732/Group_70_vt0nye.svg" alt="product" />
                        </Link>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default SideBar;
