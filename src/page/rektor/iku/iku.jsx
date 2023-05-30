import React, { useEffect } from 'react'
import { useState } from 'react'
import { useLocation, useNavigate } from 'react-router-dom'
import SecondaryButton from '../../../components/button/SecondaryButton'
import { ChartByDashboard } from '../../../components/charts/chart'
import Navbar from "../../../components/navbar/navbar"
import SidebarRektor from '../../../components/sidebar/sidebarRektor'

export default function Iku() {
    const tahun = [2006, 2007, 2008, 2009, 2010, 2011, 2012, 2013, 2014, 2015, 2016, 2017, 2018, 2019, 2020, 2021, 2022, 2023]
    const [filtered, setFiltered] = useState({ tahun: 2023 })
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
                <div className="w-[85px] h-[100vh] relative">
                    <div className="fixed h-[100vh]">
                        <SidebarRektor />
                    </div>
                </div>

                <div className='relative bg-[#EDE9D5] w-full'>
                    <div className="w-full">
                        <Navbar />
                    </div>

                    <div>
                        <div className="p-6">
                            <div className='bg-white p-4 rounded-t-lg shadow-md border-b-[1px] border-black'>
                                <h1 className="text-[20px] font-medium tracking-[1px]">IKU 2</h1>
                            </div>

                            <div className="flex flex-col p-4 bg-white rounded-b-lg">
                                <label className='text-[14px] font-medium tracking-[1px]'>Tahun</label>
                                <select onChange={(e) => setFiltered({ ...filtered, tahun: e.target.value })} value={filtered.tahun} name="tahun" className='w-[40%] bg-white border-2 border-black outline-none px-2 py-1 pb-2 mt-1 rounded-md'>
                                    <option value={0}>Semua</option>
                                    {tahun?.map((data) => (
                                        <>
                                            <option value={data}>{data}</option>
                                        </>
                                    ))
                                    }
                                </select>
                            </div>

                            <div className='mt-6'>
                                <ChartByDashboard buttonBool={true} tahun={filtered.tahun} identify={'rector'} />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}
