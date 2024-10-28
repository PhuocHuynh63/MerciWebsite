import { NavLink } from "react-router-dom";
import { useState } from "react";

export default function NavAdmin() {
  const [isCollapsedUser,setIsCollapsedUser] = useState(true);
  const [isCollapsedCategory,setIsCollapsedCategory] = useState(true);
  const [isCollapsedProduct,setIsCollapsedProduct] = useState(true);
  const [isCollapsedOrder,setIsCollapsedOrder] = useState(true);
  const [isCollapsedFeedBack,setIsCollapsedFeedBack] = useState(true);

  const handleToggleUser = () => {
    setIsCollapsedUser(!isCollapsedUser);
  };

  const handleToggleCategory = () => {
    setIsCollapsedCategory(!isCollapsedCategory);
  };

  const handleToggleProduct = () => {
    setIsCollapsedProduct(!isCollapsedProduct);
  };

  const handleToggleOrder = () => {
    setIsCollapsedOrder(!isCollapsedOrder);
  };

  const handleToggleFeedBack = () => {
    setIsCollapsedFeedBack(!isCollapsedFeedBack);
  };

  return (
    <div id="wrapper-navbar">
      <div className="sidebar-brand-text mx-3">

      </div>

      <ul
        className="navbar-nav  sidebar sidebar-dark accordion"
        id="accordionSidebar"
      >
        <li className="nav-item active">
          <a className="nav-link" href="/admin">
            <i className="fa-solid fa-house"></i>
            <span>Trang chủ</span>
          </a>
        </li>
        <li className="nav-item">
          <NavLink
            className={`nav-link ${isCollapsedUser ? "collapsed" : ""}`}
            // onClick={handleToggleUser}
            aria-expanded={!isCollapsedUser}
            aria-controls="collapseTwo"
            to="/admin/user"
          >
            <i className="fa-solid fa-user"></i>
            <span>Người dùng</span>
          </NavLink>

          {/* <div
            id="collapseTwo"
            className={`collapse ${isCollapsedUser ? "" : "show"}`}
            aria-labelledby="headingTwo"
            data-parent="#accordionSidebar"
          >
            <div className="bg-white py-2 collapse-inner rounded">
              <NavLink to="/admin/user" className="collapse-item">
                Quản lý người dùng
              </NavLink>
            </div>
          </div> */}
        </li>

        <li className="nav-item">
          {/* <NavLink
            className={`nav-link ${isCollapsedCategory ? "collapsed" : ""}`}
            // onClick={handleToggleCategory}
            aria-expanded={!isCollapsedCategory}
            aria-controls="collapseCategory"
            to="/admin/category"
          >
            <i className="fa-solid fa-layer-group"></i>
            <span>Danh mục</span>
          </NavLink> */}

          {/* <div
            id="collapseCategory"
            className={`collapse ${isCollapsedCategory ? "" : "show"}`}
            aria-labelledby="headingUtilities"
            data-parent="#accordionSidebar"
          >
            <div className="bg-white py-2 collapse-inner rounded">
              <NavLink to="/admin/category" className="collapse-item">
                Quản lý danh muc
              </NavLink>
            </div>
          </div> */}
        </li>

        <li className="nav-item">
          <NavLink
            className={`nav-link ${isCollapsedProduct ? "collapsed" : ""}`}
            onClick={handleToggleProduct}
            aria-expanded={!isCollapsedProduct}
            aria-controls="collapseProduct"
            to="/admin/product"
          >
            <i className="fa-solid fa-cube"></i>
            <span>Sản phẩm</span>
          </NavLink>

          <div
            id="collapseProduct"
            className={`collapse ${isCollapsedProduct ? "" : "show"}`}
            aria-labelledby="headingUtilities"
            data-parent="#accordionSidebar"
          >
            <div className="bg-white py-2 collapse-inner rounded">
              <NavLink to="/admin/product/add" className="collapse-item">
                Thêm sản phẩm mới
              </NavLink>
            </div>
          </div>
        </li>

        <li className="nav-item">
          <NavLink
            className={`nav-link ${isCollapsedOrder ? "collapsed" : ""}`}
            // onClick={handleToggleOrder}
            aria-expanded={!isCollapsedOrder}
            aria-controls="collapseOrder"
            to="/admin/order"
          >
            <i className="fa-solid fa-money-bill"></i>
            <span>Đơn hàng</span>
          </NavLink>

          <div
            id="collapseOrder"
            className={`collapse ${isCollapsedOrder ? "" : "show"}`}
            aria-labelledby="headingUtilities"
            data-parent="#accordionSidebar"
          >
            <div className="bg-white py-2 collapse-inner rounded">
              {/* <NavLink to="/admin/order" className="collapse-item" >
                Quản lý đơn hàng
              </NavLink> */}
            </div>
          </div>
        </li>

        {/* <li className="nav-item">
          <NavLink
            className={`nav-link ${isCollapsedFeedBack ? "collapsed" : ""}`}
            onClick={handleToggleFeedBack}
            aria-expanded={!isCollapsedFeedBack}
            aria-controls="collapseFeedBack"
          >
            <i className="fa-solid fa-message"></i>
            <span>Phản hồi</span>
          </NavLink>

          <div
            id="collapseFeedBack"
            className={`collapse ${isCollapsedFeedBack ? "" : "show"}`}
            aria-labelledby="headingUtilities"
            data-parent="#accordionSidebar"
          >
            <div className="bg-white py-2 collapse-inner rounded">
              <a className="collapse-item" href="utilities-color.html">
                Phản hồi khách hàng
              </a>
            </div>
          </div>
        </li>

        <li className="nav-item">
          <a className="nav-link" href="charts.html">
            <i className="fa-solid fa-ranking-star"></i>
            <span>Thống kê</span>
          </a>
        </li>

        <li className="nav-item">
          <a className="nav-link" href="tables.html">
            <i className="fa-solid fa-envelope"></i>
            <span>Hộp thư</span>
          </a>
        </li> */}
      </ul>
    </div>
  );
}