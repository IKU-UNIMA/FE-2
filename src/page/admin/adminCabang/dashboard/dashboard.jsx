import React from 'react'
import { useEffect } from 'react'
import { useLocation, useNavigate } from 'react-router-dom'
import Navbar from '../../../../components/navbar/navbar'
import Sidebar from '../../../../components/sidebar/sidebar'

export default function Dashboard() {
    const location = useLocation()
    const navigate = useNavigate()

    useEffect(() => {
        if (location.pathname === "/") {
            navigate("/admin/dashboard")
        }
    }, [])

    return (
        <>
            <div className='flex'>
                <div className="w-[17%] h-[100vh] relative">
                    <div className="fixed w-[17%] h-[100vh]">
                        <Sidebar />
                    </div>
                </div>

                <div className='relative bg-[#EDE9D5] w-[83%] h-[100vh]'>
                    <div className="w-full">
                        <Navbar />
                    </div>

                    <div>
                        <div className="p-6">
                            <div className="bg-white px-4 py-4 rounded-t-md border-b-[1px] border-[#2C3333]">
                                <h1 className="font-medium text-[18px] my-auto">Prestasi</h1>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}
