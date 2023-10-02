import React from "react";
import { TiHome } from "react-icons/ti";
import { BsTrophyFill } from "react-icons/bs";
import { ImBook, ImTrophy, ImHome } from "react-icons/im";
import { Link, useLocation } from "react-router-dom";
import { tokenData } from "../../utils/helpers";
import { useState } from "react";

export default function Sidebar() {
    const identify = tokenData()
    const location = useLocation()
    const [activeSidebar, setActiveSidebar] = useState("dashboard")

    console.log("locatin", location.pathname)

    return (
        <>
            <div className="bg-[#2C3333] w-full h-full text-white">
                <div className="text-center py-6">
                    <h2 className="text-[20px] tracking-[2px] font-medium">IKU</h2>
                </div>

                <div className="px-5 text-white">
                    <ul className="">
                        <Link to={identify.role === "admin" && '/dashboard/admin' || identify.role !== "admin" && "/dashboard"}>
                            <div className={location.pathname === "/dashboard" || location.pathname === "/dashboard/admin" ? "flex text-black items-center bg-white px-4 py-3 rounded-full" : "flex hover:text-black items-center hover:bg-white px-4 py-3 rounded-full"}>
                                <div className="w-[16px] h-[16px] mr-2">
                                    <ImHome className="w-full h-full" />
                                </div>
                                <li className="font-medium text-[14px]">Dashboard</li>
                            </div>
                        </Link>
                        <Link to={identify.role === "admin" && '/dashboard/admin/prestasi' || identify.role !== "admin" && "/dashboard/prestasi"}>
                            <div className={location.pathname === "/dashboard/prestasi" || location.pathname === "/dashboard/admin/prestasi" ? "flex text-black items-center bg-white px-4 py-3 rounded-full" : "flex hover:text-black items-center hover:bg-white px-4 py-3 rounded-full"}>
                                <div className="w-[16px] h-[16px] mr-2">
                                    <ImTrophy className="w-full h-full" />
                                </div>
                                <li className="font-medium text-[14px]">Prestasi Mahasiswa</li>
                            </div>
                        </Link>
                        <Link to={identify.role === "admin" && '/dashboard/admin/kampus-merdeka' || identify.role !== "admin" && "/dashboard/kampus-merdeka"}>
                            <div className={location.pathname === "/dashboard/kampus-merdeka" || location.pathname === "/dashboard/admin/kampus-merdeka" ? "flex text-black items-center bg-white px-4 py-3 rounded-full" : "flex hover:text-black items-center hover:bg-white px-4 py-3 rounded-full"}>
                                <div className="w-[16px] h-[16px] mr-2">
                                    <ImBook className="w-full h-full" />
                                </div>
                                <li className="font-medium text-[14px]">Kampus Merdeka</li>
                            </div>
                        </Link>
                        {/* {
                            identify.role === "admin" && (
                                <>
                                    <Link to='/dashboard/admin/statistik'>
                                        <div className="flex hover:text-black items-center hover:bg-white px-4 py-3 rounded-full">
                                            <TiHome className="mr-2" />
                                            <li className="font-medium text-[14px]">Statistik</li>
                                        </div>
                                    </Link>
                                </>
                            )
                        } */}
                    </ul>
                </div>
            </div>
        </>
    )
}