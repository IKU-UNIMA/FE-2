import React from "react";
import { Outlet, useNavigate, useLocation } from "react-router-dom";
import Error from "../page/error/error";
import { getSessionToken, setPath, tokenData } from "../utils/helpers";
import Swal from "sweetalert2";

export default function RectorRoute() {
    const auth = getSessionToken()
    const dataToken = tokenData()
    const location = useLocation()
    const navigate = useNavigate()

    if (auth !== null && dataToken.role === "rektor") {
        setPath(location.pathname)
        return <Outlet />
    } else {
        return <Error />
    }

    // if (auth !== null) {
    //     if (dataToken.message !== undefined) {
    //         console.log("gagal")
    //         Swal.fire({
    //             title: "Sorry, Your Session has expired, please Login again!",
    //             icon: "warning",
    //             showConfirmButton: true,
    //             background: "#151921",
    //             color: "#fff",
    //             confirmButtonColor: "#FF3D00",
    //             cancelButtonColor: "#D91E11",
    //             confirmButtonText: "Login",
    //             focusConfirm: true,
    //         }).then((result) => {
    //             if (result.isConfirmed) {
    //                 Swal.fire({
    //                     toast: true,
    //                     icon: "success",
    //                     title: "Log Out Successfully",
    //                     animation: false,
    //                     background: "#222834",
    //                     color: "#18B015",
    //                     position: "bottom-end",
    //                     showConfirmButton: false,
    //                     timer: 4000,
    //                     timerProgressBar: true,
    //                     didOpen: (toast) => {
    //                         toast.addEventListener("mouseenter", Swal.stopTimer);
    //                         toast.addEventListener("mouseleave", Swal.resumeTimer);
    //                         navigate("/")
    //                         localStorage.removeItem("token")
    //                         sessionStorage.removeItem("token")
    //                     },
    //                 });
    //             }
    //         });
    //     } else if (dataToken !== undefined && dataToken.role === "rektor") {
    //         console.log("berhasil")
    //         return <Outlet />
    //     }
    // } else {
    //     console.log("error")
    //     return <Error />
    // }
}