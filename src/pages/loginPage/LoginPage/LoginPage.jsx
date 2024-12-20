import React, { useState, useEffect } from "react";
import { userService } from "../../../service/userService";
import { Button } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import "./LoginPage.scss";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { localService } from "../../../service/localService";
import { setLoginAction } from "../../../redux/action/UserAction";
import { Input, Form, notification } from "antd";
import { jwtDecode } from "jwt-decode";
import { merci } from "../../../service/merciSrc";

const SignInPage = () => {
    const [loading, setLoading] = useState(false);
    const [password, setPassword] = useState("");
    const [showError, setShowError] = useState(false);
    let dispatch = useDispatch();
    let navigate = useNavigate();
    const [user, setUser] = useState({});

    useEffect(() => {
        const token = localStorage.getItem("USER_INFO");
        if (token) {
            const decoded = jwtDecode(token);
            const username = decoded.sub;
            merci
                .getUserByUserName(username)
                .then((res) => {
                    const userData = { ...res.data };
                    setUser(userData);
                    console.log("User data", userData);
                    if (user) navigate("/");
                })
                .catch((err) => {
                    console.log("Error fetching user", err);
                });
        }
    }, [navigate]);

    const handlePasswordChange = (e) => {
        const value = e.target.value;
        setPassword(value);
        setShowError(value.length > 0 && value.length < 6);
    };

    const onFinish = (values) => {
        setLoading(true); // Bắt đầu tải
        console.log("Success:", values);
        userService
            .postLogin(values)
            .then((response) => {
                if (response.status === 201) {
                    console.log("API thành công:", response.data);

                    localService.set(response.data.accessToken); // Lưu token vào local storage
                    dispatch(
                        setLoginAction({ token: response.data, role: response.role })
                    ); // Lưu token và vai trò vào redux

                    notification.success({
                        message: "Đăng nhập thành công",
                        description: response.description,
                    });

                    if (response.role === "1") {
                        navigate("/admin");
                    } else {
                        navigate("/");
                    }

                    setTimeout(() => {
                        window.location.reload();
                    }, 1000); // Reload the page after 1 second
                } else {
                    throw new Error(response.description);
                }
            })
            .catch((error) => {
                console.log("API lỗi:", error);
                notification.error({
                    message: "Đăng nhập thất bại",
                    description: error.message,
                });
            })
            .finally(() => {
                setLoading(false); // Hoàn thành tải
            });
    };



    const onFinishFailed = (errorInfo) => {
        console.log(`Failed:`, errorInfo);
        notification.error({
            message: "Đăng nhập thất bại",
            description: "Kiểm tra lại tên đăng nhập và mật khẩu ",
        });
    };

    const handleRegister = () => {
        navigate("/signup");
    };

    const handleForgot = () => {
        navigate("/reset-password");
    };

    return (
        <div className="signin-page">
            <section className="p-3 p-md-4 p-xl-5">
                <div className="container">
                    <div className="row justify-content-center">
                        <div className="col-12 col-xxl-11">
                            <div className="card border-light-subtle shadow-sm">
                                <div className="row g-0">
                                    <div className="col-12 col-md-6">
                                        <img
                                            className="img-fluid rounded-start w-100 h-100 object-fit-cover"
                                            loading="lazy"
                                            alt="Welcome back you've been missed!"
                                            src="https://res.cloudinary.com/dwyzqcunj/image/upload/v1729438089/unnamed_kg9tml.png"
                                        />
                                    </div>
                                    <div className="col-12 col-md-6 d-flex align-items-center justify-content-center">
                                        <div className="col-12 col-lg-11 col-xl-10">
                                            <div className="card-body p-3 p-md-4 p-xl-5">
                                                <div className="row">
                                                    <div className="col-12">
                                                        <div className="mb-5">
                                                            <h4 className="text-center">
                                                                Chào mừng bạn đã trở lại!
                                                            </h4>
                                                        </div>
                                                    </div>
                                                </div>
                                                <Form
                                                    name="basic"
                                                    initialValues={{ remember: true }}
                                                    onFinish={onFinish}
                                                    onFinishFailed={onFinishFailed}
                                                    autoComplete="off"
                                                    layout="vertical"
                                                >
                                                    <div className="row gy-3 overflow-hidden">
                                                        <div className="col-12">
                                                            <div className="form-floating mb-3">
                                                                <Form.Item
                                                                    name="username"
                                                                    rules={[
                                                                        {
                                                                            required: true,
                                                                            message: "Please input your username!",
                                                                        },
                                                                    ]}
                                                                    noStyle
                                                                >
                                                                    <Input
                                                                        id="username"
                                                                        type="text"
                                                                        className="form-control"
                                                                        placeholder="Username"
                                                                        required
                                                                        style={{ width: "100%" }}
                                                                    />
                                                                </Form.Item>
                                                                <label
                                                                    htmlFor="username"
                                                                    className="form-label"
                                                                >
                                                                    Username
                                                                </label>
                                                            </div>
                                                        </div>
                                                        <div className="col-12">
                                                            <div className="form-floating mb-3">
                                                                <Form.Item
                                                                    name="password"
                                                                    rules={[
                                                                        {
                                                                            required: true,
                                                                            message: "Please input your password!",
                                                                        },
                                                                        {
                                                                            min: 6,
                                                                            message: "Mật khẩu tối thiểu 6 ký tự",
                                                                        },
                                                                    ]}
                                                                    noStyle
                                                                >
                                                                    <Input
                                                                        id="password"
                                                                        type="password"
                                                                        className="form-control"
                                                                        placeholder="Password"
                                                                        required
                                                                        value={password}
                                                                        onChange={handlePasswordChange}
                                                                    />
                                                                </Form.Item>
                                                                <label
                                                                    htmlFor="password"
                                                                    className="form-label"
                                                                >
                                                                    Password
                                                                </label>
                                                                {showError && (
                                                                    <span className="text-danger">
                                                                        Mật khẩu tối thiểu 6 ký tự
                                                                    </span>
                                                                )}
                                                            </div>
                                                        </div>
                                                        <div className="col-12">
                                                            <div className="d-grid">
                                                                <Form.Item noStyle>
                                                                    <Button
                                                                        id="btn-signin"
                                                                        className="btn btn-dark btn-lg"
                                                                        type="submit"
                                                                        disabled={loading} // Vô hiệu hóa nút khi đang tải
                                                                    >
                                                                        {loading ? "Đang xử lý..." : "Đăng nhập"}
                                                                    </Button>
                                                                </Form.Item>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </Form>
                                                <div className="row">
                                                    <div className="col-12">
                                                        <div className="d-flex gap-2 gap-md-4 flex-column flex-md-row justify-content-md-center mt-5">
                                                            <span
                                                                className="link-secondary text-decoration-none"
                                                                onClick={handleRegister}
                                                            >
                                                                Tạo tài khoản
                                                            </span>
                                                            {/* <span
                                                                className="link-secondary text-decoration-none"
                                                                onClick={handleForgot}
                                                            >
                                                                Quên mật khẩu
                                                            </span> */}
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    );
};

export default SignInPage;