import React from "react";

import "./scss/LayoutAdmin.scss";

import NavAdmin from "../components/navbarAdmin/NavbarAdmin";
import HeaderAdmin from "../components/headerAdmin/HeaderAdmin";

export default function ({ Component }) {
    return (
        <div className="container-admin">
            <div class="bg-gradient-primary">
                <NavAdmin />
            </div>
            <div className="admin-content">
                <HeaderAdmin />
                <Component />
            </div>

        </div>
    );
}