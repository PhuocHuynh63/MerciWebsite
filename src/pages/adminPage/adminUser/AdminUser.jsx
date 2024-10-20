import React, { useEffect, useState } from "react";
import "./AdminUser.scss";

export default function AdminUser() {
    const [showAddUser, setShowAddUser] = useState(false);
    const [showDetailUser, setShowDetailUser] = useState(false);
    const [showUpdateUser, setShowUpdateUser] = useState(false);
    const [selectedUserId, setSelectedUserId] = useState(null);


    return (
        <div className="admin-user">
            <h1>Quản lý người dùng</h1>

            <div className="admin-user_action">
                <button className="btn-add_user"> + Thêm người dùng mới</button>
                <div className="admin-user_search">
                    <input type="text" className="admin-user_searchinput" placeholder="Nhập tên người dùng cần tìm" />
                    <i id="search" className="fa-solid fa-magnifying-glass"></i>
                </div>
            </div>

            <div className="box-user">
                <table className="user-list">
                    <thead>
                        <tr>
                            <th>ID</th>
                            <th>Tên người dùng</th>
                            <th>Email</th>
                            <th>Ngày lập</th>
                            <th>Khóa</th>
                            <th>Ủy quyền</th>
                            <th>Thao tác</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td>1</td>
                            <td>Huỳnh Minh Phước</td>
                            <td>phuochmse171830@fpt.edu.vn</td>
                            <td>30/02/2024</td>
                            <td>
                                <div className="container-checkbox">
                                    <input
                                        type="checkbox"
                                        className="checkbox"
                                    />
                                    <label className="switch">
                                        <span className="slider"></span>
                                    </label>
                                </div>
                            </td>
                            <td>Admin</td>
                            <td>
                                <div className="action">
                                    <button className="btn btn-warning btn-sm">
                                        <i className="fa-solid fa-eye"></i>
                                    </button>
                                    <button className="btn btn-success btn-sm" >
                                        <i className="fa-solid fa-pen-to-square"></i>
                                    </button>
                                </div>
                            </td>
                        </tr>
                    </tbody>
                </table>
            </div>
        </div>
    );
}