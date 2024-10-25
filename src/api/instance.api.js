"use strict";

import axios from "axios";

// Tạo một instance của Axios với cấu hình mặc định
const axiosInstance = axios.create({
    baseURL: "https://localhost:4000/v1/api/", // Base URL cho API của bạn
    timeout: 10000, // Thời gian timeout cho mỗi request
    headers: {
        "Content-Type": "application/json",
        "x-api-key":
            "57924ac24f93f0bef99c57bacaceb1c62d2d9ee32b4fd7a5a3128036d47eb7b93a19d8ca7f7b0c01d19a5e2a1ad51251ef76eac6e48cdb9dfc300e3a603600aa",
    },
});

// Interceptor để thêm token vào mỗi request nếu có
/*axiosInstance.interceptors.request.use(
    (config) => {
        const token = localStorage.getItem("accessToken");
        const userId = localStorage.getItem("userId");

        if (token) {
            config.headers["authorization"] = token; // Thêm token vào header
        }
        if (userId) {
            config.headers["x-user-id"] = userId; // Thêm userId vào header
        }

        return config;
    },
    (error) => {
        return Promise.reject(error);
    }
);

// Interceptor để xử lý lỗi response
axiosInstance.interceptors.response.use(
    (response) => {
        return response;
    },
    (error) => {
        // Xử lý lỗi toàn cục (vd: nếu token hết hạn thì chuyển hướng đến login)
        if (error.response.status === 401) {
            // Chuyển hướng người dùng đến trang đăng nhập
            window.location.href = "/login";
        }
        return Promise.reject(error);
    }
);*/

export default axiosInstance;
