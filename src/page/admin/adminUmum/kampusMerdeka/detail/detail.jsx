import React from 'react'
import { useState } from 'react'
import { useEffect } from 'react'
import { Link, useNavigate, useParams } from 'react-router-dom'
import { BsFillInfoCircleFill } from "react-icons/bs";
import axiosInstance from '../../../../../networks/api';
import Sidebar from '../../../../../components/sidebar/sidebar';
import Navbar from '../../../../../components/navbar/navbar';
import SecondaryButton from '../../../../../components/button/SecondaryButton';
import { BiayaKuliah, DosenPembimbing, Ipk, Ips, JenisAnggota, JudulAktivitasMahasiswa, JumlahSks, KategoriProgram, KontrakKrs, NoSkTugas, Smester, StatusKeikutsertaan, StatusMahasiswa, TanggalSkTugas, TotalSks } from '../../../../../components/input/input';
import PrimaryButton from '../../../../../components/button/PrimaryButton';

export default function DetailKMAdminUmum() {
    const navigate = useNavigate()
    const { detailKM } = useParams()
    const identify = "detail"

    useEffect(() => {
        axiosInstance
            .get(`/kampus-merdeka/${detailKM}`, {
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
                        {kmById.berita_acara === "" && (
                            <div className='flex font-normal rounded-md tracking-[1px] bg-white p-4 mb-4'>
                                <BsFillInfoCircleFill className='flex items-center my-auto mr-2' />
                                <label>Berita acara kosong!, diharapkan untuk segera mengisi berita acara</label>
                            </div>
                        )}

                        <div className='bg-white px-4 py-4 rounded-md'>
                            <div className='flex justify-between font-bold text-[20px] tracking-[1px] mb-4'>
                                <label>Detail Kampus Merdeka</label>
                                <div onClick={() => navigate(-1)} className='text-[14px]'>
                                    <SecondaryButton textButton="Kembali" />
                                </div>
                            </div>

                            <div>
                                <div id='formPengabdian' className={identify === "detail" ? '' : 'flex p-4 mt-2 relative'}>
                                    <StatusMahasiswa onHandleInput={null} datas={kmById} identify={identify} />
                                </div>
                                <div id='formPengabdian' className={identify === "detail" ? '' : 'flex p-4 mt-2 relative'}>
                                    <Smester onHandleInput={null} datas={kmById} identify={identify} />
                                </div>
                                <div id='formPengabdian' className={identify === "detail" ? '' : 'flex p-4 mt-2 relative'}>
                                    <DosenPembimbing onHandleInput={null} datas={kmById} identify={identify} />
                                </div>
                                <div id='formPengabdian' className={identify === "detail" ? '' : 'flex p-4 mt-2 relative'}>
                                    <KategoriProgram onHandleInput={null} datas={kmById} identify={identify} />
                                </div>
                                <div id='formPengabdian' className={identify === "detail" ? '' : 'flex p-4 mt-2 relative'}>
                                    <StatusKeikutsertaan onHandleInput={null} datas={kmById} identify={identify} />
                                </div>
                                <div id='formPengabdian' className={identify === "detail" ? '' : 'flex p-4 mt-2 relative'}>
                                    <KontrakKrs onHandleInput={null} datas={kmById} identify={identify} />
                                </div>
                                <div id='formPengabdian' className={identify === "detail" ? '' : 'flex p-4 mt-2 relative'}>
                                    <JudulAktivitasMahasiswa onHandleInput={null} datas={kmById} identify={identify} />
                                </div>
                                <div id='formPengabdian' className={identify === "detail" ? '' : 'flex p-4 mt-2 relative'}>
                                    <NoSkTugas onHandleInput={null} datas={kmById} identify={identify} />
                                </div>
                                <div id='formPengabdian' className={identify === "detail" ? '' : 'flex p-4 mt-2 relative'}>
                                    <TanggalSkTugas onHandleInput={null} datas={kmById} identify={identify} />
                                </div>
                                <div id='formPengabdian' className={identify === "detail" ? '' : 'flex p-4 mt-2 relative'}>
                                    <JenisAnggota onHandleInput={null} datas={kmById} identify={identify} />
                                </div>
                                <div id='formPengabdian' className={identify === "detail" ? '' : 'flex p-4 mt-2 relative'}>
                                    <Ips onHandleInput={null} datas={kmById} identify={identify} />
                                </div>
                                <div id='formPengabdian' className={identify === "detail" ? '' : 'flex p-4 mt-2 relative'}>
                                    <Ipk onHandleInput={null} datas={kmById} identify={identify} />
                                </div>
                                <div id='formPengabdian' className={identify === "detail" ? '' : 'flex p-4 mt-2 relative'}>
                                    <JumlahSks onHandleInput={null} datas={kmById} identify={identify} />
                                </div>
                                <div id='formPengabdian' className={identify === "detail" ? '' : 'flex p-4 mt-2 relative'}>
                                    <TotalSks onHandleInput={null} datas={kmById} identify={identify} />
                                </div>
                                <div id='formPengabdian' className={identify === "detail" ? '' : 'flex p-4 mt-2 relative'}>
                                    <BiayaKuliah onHandleInput={null} datas={kmById} identify={identify} />
                                </div>
                                {
                                    kmById.surat_tugas === "" ? (
                                        <div id='formPengabdian' className="flex p-4 mt-2 relative">
                                            <div className='w-1/4 mr-4 my-auto'>
                                                <label className='font-medium'>Surat Tugas</label>
                                            </div>
                                            <div className='w-3/4 relative'>
                                                <div className='inline-block' onClick={() => navigate(`/dashboard/admin/kampus-merdeka/${"upload"}/${"surat-tugas"}/${kmById.id}`)}>
                                                    <PrimaryButton textButton="Upload File" />
                                                </div>
                                            </div>
                                        </div>
                                    ) : (
                                        <div id='formPengabdian' className="flex p-4 mt-2 relative">
                                            <div className='w-1/4 mr-4 my-auto'>
                                                <label className='font-medium'>Surat Tugas</label>
                                            </div>
                                            <div className='w-3/4 relative'>
                                                <div className='inline-block mr-2'>
                                                    <a href={`${kmById.surat_tugas}`} target="_blank" rel="noopener noreferrer">
                                                        <PrimaryButton textButton="Lihat File" />
                                                    </a>
                                                </div>
                                                <div className='inline-block' onClick={() => navigate(`/dashboard/admin/kampus-merdeka/${"update"}/${"surat-tugas"}/${kmById.id}`)}>
                                                    <SecondaryButton textButton="Update File" />
                                                </div>
                                            </div>
                                        </div>
                                    )
                                }
                                {
                                    kmById.berita_acara === "" ? (
                                        <div id='formPengabdian' className="flex p-4 mt-2 relative">
                                            <div className='w-1/4 mr-4 my-auto'>
                                                <label className='font-medium'>Berita Acara</label>
                                            </div>
                                            <div className='w-3/4 relative'>
                                                <div className='inline-block' onClick={() => navigate(`/dashboard/admin/kampus-merdeka/${"upload"}/${"berita-acara"}/${kmById.id}`)}>
                                                    <PrimaryButton textButton="Upload File" />
                                                </div>
                                            </div>
                                        </div>
                                    ) : (
                                        <div id='formPengabdian' className="flex p-4 mt-2 relative">
                                            <div className='w-1/4 mr-4 my-auto'>
                                                <label className='font-medium'>Berita Acara</label>
                                            </div>
                                            <div className='w-3/4 relative'>
                                                <div className='inline-block mr-2'>
                                                    <a href={`${kmById.berita_acara}`} target="_blank" rel="noopener noreferrer">
                                                        <PrimaryButton textButton="Lihat File" />
                                                    </a>
                                                </div>
                                                <div className='inline-block' onClick={() => navigate(`/dashboard/admin/kampus-merdeka/${"update"}/${"berita-acara"}/${kmById.id}`)}>
                                                    <SecondaryButton textButton="Update File" />
                                                </div>
                                            </div>
                                        </div>
                                    )
                                }
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
