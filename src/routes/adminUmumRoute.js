import React from "react";
import { useLocation, Outlet } from "react-router-dom";
import Error from "../page/error/error";
import { setPath, tokenData } from "../utils/helpers";

export default function AdminUmumRoute() {
    const dataToken = tokenData()
    const location = useLocation()

    if (dataToken.bagian === "umum") {
        setPath(location.pathname)
        return <Outlet />
    } else {
        return <Error />
    }
}