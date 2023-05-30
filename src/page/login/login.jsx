import React, { useState, useEffect } from 'react';
import { useCookies } from 'react-cookie';
import { useNavigate } from "react-router-dom";
import axiosInstance from '../../networks/api';
import { getToken, setSessionToken, setToken, tokenData } from '../../utils/helpers';
import Swal from "sweetalert2";
import PrimaryButton from '../../components/button/PrimaryButton';
import "./login.css"

export default function Login() {
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const navigate = useNavigate()

    // const authLogin = async (e) => {
    //     e.preventDefault();
    //     const auth = await LoginData.find((data) => data.username === username && data.password === password)
    //     if (!auth) {
    //         alert("akun tidak ditemukan!")
    //     } else {
    //         localStorage.setItem("token", auth.token)
    //         setTimeout(() => {
    //             navigate("/dashboard")
    //         }, 2000)
    //     }

    //     console.log(auth)
    // }

    const authLogin = async (e) => {
        e.preventDefault();

        axiosInstance
            .post("akun/login", {
                email: email,
                password: password,
            })
            .then((response) => {
                // setToken(response.data.data.token)
                setSessionToken(response.data.data.token)
                const data = tokenData()
                Swal.fire({
                    toast: true,
                    icon: "success",
                    title: "Successfully login",
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
                        setTimeout(() => {
                            if (data.role === "mahasiswa") navigate("/dashboard")
                            if (data.role === "rektor") navigate("/iku")
                            if (data.role === "admin") {
                                if (data.bagian === "umum") navigate("/dashboard/admin/umum")
                                if (data.bagian !== "umum") navigate("/dashboard/admin")
                            }
                        }, 4000)
                    },
                });
            })
            .catch((error) => {
                if (email === "" && password === "") {
                    Swal.fire({
                        toast: true,
                        icon: "error",
                        title: "email atau password kosong",
                        animation: false,
                        background: "#222834",
                        color: "#DE1508",
                        position: "bottom-end",
                        showConfirmButton: false,
                        timer: 4000,
                        timerProgressBar: true,
                        didOpen: (toast) => {
                            toast.addEventListener("mouseenter", Swal.stopTimer);
                            toast.addEventListener("mouseleave", Swal.resumeTimer);
                        },
                    });
                } else {
                    Swal.fire({
                        toast: true,
                        icon: "error",
                        title: error.response.data.errors,
                        animation: false,
                        background: "#222834",
                        color: "#DE1508",
                        position: "bottom-end",
                        showConfirmButton: false,
                        timer: 4000,
                        timerProgressBar: true,
                        didOpen: (toast) => {
                            toast.addEventListener("mouseenter", Swal.stopTimer);
                            toast.addEventListener("mouseleave", Swal.resumeTimer);
                        },
                    });
                }
            })

        // fetch(`http://localhost:8080/api/v1/akun/login`, {
        //     method: 'post',
        //     headers: { 'Content-Type': 'application/json' },
        //     body: JSON.stringify({
        //         email: username,
        //         password: password
        //     })
        // })
        //     .then(response => response.json())
        //     .then(response => {
        //         if (response.data?.token != null) {
        //             localStorage.setItem("token", response.data.token)
        //             setCookie('token', response.data.token, {
        //                 path: '/',
        //             });
        //             console.log(response)
        //             setTimeout(() => {
        //                 navigate("/dashboard")
        //             }, 2000)
        //         }
        //         setError(response.errors)
        //     })

        // fetch(`http://localhost:8080/api/v1/fakultas`, {
        //     method: 'get',
        //     headers: {
        //         'Content-Type': 'application/json',
        //         'Authorization': `Bearer ${localStorage.getItem("token")}`
        //     },
        // })
        //     .then(response => console.log(response.json()))
    }

    return (
        <>
            <div className='flex h-[100vh] items-center justify-center'>
                <div className='flex flex-col justify-center items-center w-[40%] h-[100vh] bg-[#2C3333] text-white text-center'>
                    <div className='relative box-text-style text-left'>
                        <p className='text-[40px] font-medium tracking-[1px]'>IKU 2</p>
                        <p className='text-[25px] font-normal'>Sistem Informasi</p>
                        <p className='text-[25px] font-normal'>Universitas Negeri Manado</p>
                    </div>
                </div>

                <div className='w-[60%] flex items-center justify-center'>
                    <form onSubmit={authLogin} className='w-[50%]'>
                        <p className='text-center text-[25px] font-medium tracking-[1px]'>Login</p>
                        <div className='mt-8'>
                            <label className='font-medium tracking-[1px] text-[18px]'>Email</label>
                            <div>
                                <input className='w-full bg-transparent border-b-2 border-black px-2 py-2 outline-none' value={email} onChange={(e) => setEmail(e.target.value)} type='text' placeholder='Email...' />
                            </div>
                        </div>

                        <div className='mt-6'>
                            <label className='font-medium tracking-[1px] text-[18px]'>Password</label>
                            <div className=''>
                                <input className='w-full bg-transparent border-b-2 border-black px-2 py-2 outline-none' value={password} onChange={(e) => setPassword(e.target.value)} type='password' placeholder='Password...' />
                            </div>
                        </div>

                        <div className='mt-6'>
                            <PrimaryButton textButton="Login" />
                        </div>
                    </form>
                </div>
            </div>
        </>
    );
}