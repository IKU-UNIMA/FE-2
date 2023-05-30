import React from 'react'
import { useState } from 'react'
import { useEffect } from 'react'
import { Link, useNavigate, useParams } from 'react-router-dom'
import PrimaryButton from '../../../../components/button/PrimaryButton'
import SecondaryButton from '../../../../components/button/SecondaryButton'
import Navbar from '../../../../components/navbar/navbar'
import Sidebar from '../../../../components/sidebar/sidebar'
import axiosInstance from '../../../../networks/api'
import { BsFillInfoCircleFill } from "react-icons/bs";
import { DosenPembimbing, Nama, Penyelenggara, Peringkat, Smester, TingkatPrestasi } from '../../../../components/input/input'

export default function DetailPrestasi() {
    const navigate = useNavigate()
    const { detailPrestasi } = useParams()
    const identify = "detail"

    useEffect(() => {
        axiosInstance
            .get(`/prestasi/${detailPrestasi}`, {
                "Content-Type": "application/json",
            })
            .then((res) => {
                setKmById(res.data.data)
                console.log(res.data.data)
            })
    }, [])
    const [kmById, setKmById] = useState("")

    return (
        <>
            <div className='flex'>
                <div className="w-[17%] h-[100vh] relative">
                    <div className="fixed w-[17%] h-[100vh]">
                        <Sidebar />
                    </div>
                </div>

                <div className='relative bg-[#EDE9D5] w-[83%]'>
                    <div className="w-full">
                        <Navbar />
                    </div>

                    <div className='p-6'>
                        <div className='bg-white px-4 py-4 rounded-md'>
                            <div className='flex justify-between font-bold text-[20px] tracking-[1px] mb-4'>
                                <label>Detail Prestasi</label>
                                <div onClick={() => navigate(-1)} className='text-[14px]'>
                                    <SecondaryButton textButton="Kembali" />
                                </div>
                            </div>

                            <div>
                                <div id='formPengabdian' className={identify === "detail" ? '' : 'flex p-4 mt-2 relative'}>
                                    <Smester onHandleInput={null} datas={kmById} identify={identify} />
                                </div>
                                <div id='formPengabdian' className={identify === "detail" ? '' : 'flex p-4 mt-2 relative'}>
                                    <DosenPembimbing onHandleInput={null} datas={kmById} identify={identify} />
                                </div>
                                <div id='formPengabdian' className={identify === "detail" ? '' : 'flex p-4 mt-2 relative'}>
                                    <Nama onHandleInput={null} datas={kmById} identify={identify} />
                                </div>
                                <div id='formPengabdian' className={identify === "detail" ? '' : 'flex p-4 mt-2 relative'}>
                                    <TingkatPrestasi onHandleInput={null} datas={kmById} identify={identify} />
                                </div>
                                <div id='formPengabdian' className={identify === "detail" ? '' : 'flex p-4 mt-2 relative'}>
                                    <Penyelenggara onHandleInput={null} datas={kmById} identify={identify} />
                                </div>
                                <div id='formPengabdian' className={identify === "detail" ? '' : 'flex p-4 mt-2 relative'}>
                                    <Peringkat onHandleInput={null} datas={kmById} identify={identify} />
                                </div>
                                <div id='formPengabdian' className="flex p-4 mt-2 relative">
                                    <div className='w-1/4 mr-4 my-auto'>
                                        <label className='font-medium'>Sertifikat</label>
                                    </div>
                                    <div className='w-3/4 relative'>
                                        <div className='inline-block mr-2'>
                                            <a href={`${kmById.sertifikat}`} target="_blank" rel="noopener noreferrer">
                                                <PrimaryButton textButton="Lihat File" />
                                            </a>
                                        </div>
                                        <div className='inline-block' onClick={() => navigate(`/dashboard/prestasi/${"update"}/${"sertifikat"}/${kmById.id}`)}>
                                            <SecondaryButton textButton="Update File" />
                                        </div>
                                    </div>
                                </div>
                            </div>

                            {/* <div onClick={(e) => navigate(-1)} className='mt-2'>
                                <PrimaryButton textButton="Simpan" />
                            </div> */}
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}
