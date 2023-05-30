import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import Logo from "../../logo.svg"
import { BiCaretDown } from "react-icons/bi";
import DangerButton from "../button/DangerButton";
import PrimaryButton from "../button/PrimaryButton";
import Swal from "sweetalert2";
import { tokenData } from "../../utils/helpers";

export default function Navbar({ showAddIkuPopup }) {
    const [dropDown, setDropDown] = useState(false)
    const navigate = useNavigate()
    const dataToken = tokenData()
    const onClickDropDown = () => {
        if (dropDown === false) {
            setDropDown(true)
            console.log("open")
        } else if (dropDown === true) {
            setDropDown(false)
            console.log("close")
        }
    }

    const onHandleLogout = () => {
        Swal.fire({
            title: 'Are you sure?',
            text: "You won't be able to revert this!",
            icon: 'warning',
            background: "#151921",
            color: "#fff",
            showCancelButton: true,
            confirmButtonColor: "#FF3D00",
            confirmButtonText: 'Logout'
        }).then((result) => {
            if (result.isConfirmed) {
                Swal.fire({
                    toast: true,
                    icon: "success",
                    title: "Log Out Successfully",
                    animation: false,
                    background: "#222834",
                    color: "#18B015",
                    position: "bottom-end",
                    showConfirmButton: false,
                    timer: 4000,
                    timerProgressBar: true,
                    didOpen: (toast) => {
                        toast.addEventListener("mouseenter", Swal.stopTimer);
                        toast.addEventListener("mouseleave", Swal.resumeTimer);
                        navigate("/")
                        localStorage.removeItem("token")
                        sessionStorage.removeItem("token")
                    },
                });
            }
        })
    }

    return (
        <>
            <div className="flex justify-between bg-white py-2 px-3 shadow-sm">
                <div className="flex items-center text-[18px] font-medium tracking-[1px]"></div>

                <div className="flex my-auto">
                    {/* <div onClick={showAddIkuPopup} className="text-[25px] font-bold mr-2 cursor-pointer">+</div> */}

                    <div className="flex items-center border-[1px] rounded-md px-1 py-2 relative">
                        <img className="w-[40px]" src={Logo} alt="gambar profile" />
                        <h1 className="text-[14px] font-medium">{dataToken.nama}</h1>
                        <div className="px-1 cursor-pointer" onClick={onClickDropDown}>
                            <BiCaretDown className={dropDown === false ? "" : "rotate-180"} />
                        </div>

                        <div className={dropDown === false ? "hidden" : "flex flex-col left-0 absolute w-[100%] top-[90%] bg-white border-[1px] rounded-b-md"}>
                            <div className="flex flex-col">
                                <div className="p-1">
                                    <PrimaryButton textButton="Profile" />
                                </div>
                                <div onClick={onHandleLogout} className="p-1 pt-0">
                                    <DangerButton textButton="Logout" />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}