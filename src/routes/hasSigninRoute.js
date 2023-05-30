import React, { useEffect, useState } from "react";
import { Outlet, Navigate } from "react-router-dom";
import { getSessionToken, tokenData } from "../utils/helpers";
import { LoginData } from "../utils/loginData";

//p age
import Dashboard from "../page/dashboard/dashboard";
import Iku from "../page/rektor/iku/iku";
import DashboardAdminUmum from "../page/admin/adminUmum/dashboard/dashboard"
import DashboardAdminCabang from "../page/admin/adminCabang/dashboard/dashboard"

export default function HasSigninRoute() {
    // const navigate = useNavigate()
    // const auth = () => {
    //     const auth = LoginData.find((data) => data.token === localStorage.getItem('token'))
    //     console.log("login", auth)
    //     if (!auth) {
    //         return <Outlet />
    //     } else if (auth !== undefined || auth !== "") {
    //         return <Navigate to="/dashboard" />
    //     }
    // }

    const authToken = getSessionToken()
    const dataToken = tokenData()

    if (!authToken) {
        return <Outlet />
    } else {
        if (dataToken.role === "dosen") {
            return <Dashboard />
        }
        if (dataToken.role === "rektor") {
            return <Iku />
        }
        if (dataToken.role === "admin") {
            if (dataToken.bagian === "umum") return <DashboardAdminUmum />
            if (dataToken.bagian !== "umum") return <DashboardAdminCabang />
        }
    }
}