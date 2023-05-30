import React from 'react'
import { useEffect } from 'react'
import { useState } from 'react'
import { useNavigate, useParams } from 'react-router-dom'
import SecondaryButton from '../../../components/button/SecondaryButton'
import { ChartByFakultas } from '../../../components/charts/chart'
import Navbar from '../../../components/navbar/navbar'
import SidebarRektor from '../../../components/sidebar/sidebarRektor'
import axiosInstance from '../../../networks/api'

export default function DetailStatistikRector() {
    const navigate = useNavigate()
    const { detailStat } = useParams()
    const tahun = [2006, 2007, 2008, 2009, 2010, 2011, 2012, 2013, 2014, 2015, 2016, 2017, 2018, 2019, 2020, 2021, 2022, 2023]
    const initialValueReset = { fakultas: "", tahun: tahun[tahun.length - 1] }
    const [filtered, setFiltered] = useState(initialValueReset)
    const [fakultas, setFakultas] = useState([])

    useEffect(() => {
        axiosInstance
            .get(`/fakultas`, {
                "Content-Type": "application/json",
            })
            .then((res) => {
                console.log("fakultas", res.data.data)
                setFakultas(res.data.data)
            })
            .catch((err) => console.log(err))
    }, [])

    const onHandleReset = (e) => {
        e.preventDefault()
        setFiltered(initialValueReset)
    }

    console.log("fakultas", filtered.fakultas)
    console.log("stat", detailStat)
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
                            <div onClick={(e) => navigate(-1)} className="inline-block">
                                <SecondaryButton textButton={'Kembali'} />
                            </div>

                            <div className="bg-white px-4 py-4 rounded-t-md border-b-[1px] border-[#2C3333] mt-6">
                                <h1 className="font-medium text-[18px] my-auto">Statistik</h1>
                            </div>

                            <div className='flex bg-white px-4 py-4 rounded-b-md'>
                                <div className="flex flex-col w-[100%] w-full ml-1 mr-1">
                                    <label className='text-[14px] font-medium tracking-[1px]'>Fakultas</label>
                                    <select onChange={(e) => setFiltered({ ...filtered, fakultas: e.target.value })} value={filtered.fakultas === "" ? detailStat : filtered.fakultas} name="tahun" className='w-full bg-white border-2 border-black outline-none px-2 py-1 pb-2 mt-1 rounded-md'>
                                        {fakultas?.map((data) => (
                                            <>
                                                <option value={data.id}>{data.nama}</option>
                                            </>
                                        ))
                                        }
                                    </select>
                                </div>

                                <div className="flex flex-col w-full ml-1 mr-1">
                                    <label className='text-[14px] font-medium tracking-[1px]'>Tahun</label>
                                    <select onChange={(e) => setFiltered({ ...filtered, tahun: e.target.value })} value={filtered.tahun} name="tahun" className='w-full bg-[#8282821a] outline-none px-2 py-1 pb-2 mt-1 rounded-md'>
                                        <option value={0}>Semua</option>
                                        {tahun?.map((data) => (
                                            <>
                                                <option value={data}>{data}</option>
                                            </>
                                        ))
                                        }
                                    </select>
                                </div>
                                {/* 
                                <div onClick={(e) => onHandleReset(e)} className="flex flex-col items-center justify-center my-auto w-[25%] h-[100%] ml-1">
                                    <label className="text-white">Reset</label>
                                    <SecondaryButton textButton="Reset" />
                                </div> */}
                            </div>

                            <div className='mt-6'>
                                <ChartByFakultas fakultasData={filtered.fakultas === "" ? detailStat : filtered.fakultas} tahun={filtered.tahun} />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}
