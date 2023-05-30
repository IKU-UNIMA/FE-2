import React from "react";
import { Outlet, useNavigate, Navigate, useLocation } from "react-router-dom";
import Swal from "sweetalert2";
import Error from "../page/error/error";
import { getSessionToken, setPath, tokenData } from "../utils/helpers";



export default function Iku2Route() {
    const navigate = useNavigate()
    const auth = getSessionToken()
    const dataToken = tokenData()
    const location = useLocation()

    if (auth !== null && dataToken.role === "admin") {
        return <Outlet />
    } else {
        return <Error />
    }

    // const adminRoute = () => {
    //     setPath(location.pathname)
    //     if (auth !== null) {
    //         if (dataToken.message !== undefined) {
    //             Swal.fire({
    //                 title: "Sorry, Your Session has expired, please Login again!",
    //                 icon: "warning",
    //                 showConfirmButton: true,
    //                 background: "#151921",
    //                 color: "#fff",
    //                 confirmButtonColor: "#FF3D00",
    //                 cancelButtonColor: "#D91E11",
    //                 confirmButtonText: "Login",
    //                 focusConfirm: true,
    //             }).then((result) => {
    //                 if (result.isConfirmed) {
    //                     Swal.fire({
    //                         toast: true,
    //                         icon: "success",
    //                         title: "Log Out Successfully",
    //                         animation: false,
    //                         background: "#222834",
    //                         color: "#18B015",
    //                         position: "bottom-end",
    //                         showConfirmButton: false,
    //                         timer: 4000,
    //                         timerProgressBar: true,
    //                         didOpen: (toast) => {
    //                             toast.addEventListener("mouseenter", Swal.stopTimer);
    //                             toast.addEventListener("mouseleave", Swal.resumeTimer);
    //                             navigate("/")
    //                             localStorage.removeItem("token")
    //                             sessionStorage.removeItem("token")
    //                         },
    //                     });
    //                 }
    //             });
    //         } else if (dataToken !== undefined && dataToken.role === "admin") {
    //             if (dataToken.bagian === "umum") return <AdminUmumRoute />
    //             else if (dataToken.bagian !== "umum") return <AdminCabangRoute />
    //         }
    //     } else if (auth === null) {
    //         return <Error />
    //     }
    // }

    // return adminRoute()
}