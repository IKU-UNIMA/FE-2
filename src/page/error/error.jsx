import React from 'react';
import Swal from 'sweetalert2';
import { useNavigate } from 'react-router-dom';
import { getPath, getSessionToken, tokenData } from '../../utils/helpers';

export default function Error() {
    const navigate = useNavigate()
    const auth = getSessionToken()
    const dataToken = tokenData()
    const path = getPath()

    const errorPopup = () => {
        if (dataToken.message !== undefined || auth === null) {
            Swal.fire({
                title: "Error page, you can't acces this page, you must login!",
                icon: "warning",
                showConfirmButton: true,
                background: "#151921",
                color: "#fff",
                confirmButtonColor: "#FF3D00",
                cancelButtonColor: "#D91E11",
                confirmButtonText: "Back to Login",
                focusConfirm: true,
            }).then((result) => {
                sessionStorage.removeItem("token")
                navigate("/")
            });
        } else {
            Swal.fire({
                title: "Error page, can't find the page, you must back!",
                icon: "warning",
                showConfirmButton: true,
                background: "#151921",
                color: "#fff",
                confirmButtonColor: "#FF3D00",
                cancelButtonColor: "#D91E11",
                confirmButtonText: "Back to Page",
                focusConfirm: true,
            }).then((result) => {
                navigate(path)
            });
        }
    }

    return (
        <>
            <div className='w-[100%] h-[100vh] bg-[#EDE9D5]'>
                {errorPopup()}
            </div>
        </>
    );
}