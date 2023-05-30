import React, { useState, useEffect } from "react";
import { useLocation, useNavigate } from 'react-router-dom'
import Sidebar from "../../components/sidebar/sidebar";
import Navbar from "../../components/navbar/navbar";
import { ChartsData } from "../../components/charts/chart";
import FormPrestasi from "../../components/form/formPrestasti/formPrestasi";
import './dashboard.css'
import { tokenData } from "../../utils/helpers";
import gambar from './img/gambarDashboard.svg'
import axiosInstance from "../../networks/api";
import PrimaryButton from "../../components/button/PrimaryButton";
import Skeleton from "react-loading-skeleton";
import LoadingSkeleton from "../../components/loadingSkeleton/loading";

export default function Dashboard() {
    const [popupIku, setPopupIku] = useState(false)
    const location = useLocation()
    const navigate = useNavigate()
    const userData = tokenData()

    const [loadingPrestasi, setLoadingPrestasi] = useState(true)
    const [loadingKampusMerdeka, setLoadingKampusMerdeka] = useState(true)
    const [dataPrestasi, setDataPrestasi] = useState([])
    const [dataKM, setDataKM] = useState([])
    const [dataTotal, setDataTotal] = useState([])
    useEffect(() => {
        if (location.pathname === "/") {
            navigate("/admin/dashboard")
        }
        axiosInstance
            .get("/prestasi?page=1", {
                "Content-Type": "application/json",
            })
            .then((res) => {
                setDataPrestasi(res.data.data.data)
                setLoadingPrestasi(false)
                console.log(res.data.data.data)
            })
            .catch((err) => console.log(err))
        axiosInstance
            .get("/kampus-merdeka?page=1", {
                "Content-Type": "application/json",
            })
            .then((res) => {
                setDataKM(res.data.data.data)
                setLoadingKampusMerdeka(false)
                console.log(res.data.data.data)
            })
            .catch((err) => console.log(err))
        axiosInstance
            .get("/dashboard/mahasiswa", {
                "Content-Type": "application/json",
            })
            .then((res) => {
                setDataTotal(res.data.data)
                console.log(res.data.data)
            })
            .catch((err) => console.log(err))
    }, [])

    const showAddIkuPopup = () => {
        document.getElementsByTagName("BODY")[0].style.overflowY = "hidden";
        if (popupIku === false) {
            setPopupIku(true)
        }
    }
    const closeAddIkuPopup = () => {
        if (popupIku === true) {
            document.getElementsByTagName("BODY")[0].style.overflowY = "scroll";
            setPopupIku(false)
        }
    }

    console.log("total", dataTotal.find(data => data.nama === "Prestasi"))

    return (
        <>
            {/* <div className="flex relative justify-center mx-auto">
                <div className="w-[17%] h-[100vh] relative">
                    <div className="fixed w-[17%] h-[100vh]">
                        <Sidebar />
                    </div>
                </div>
                <div className="relative bg-[#EDE9D5] w-[83%] h-[100vh]">
                    <div className="w-full">
                        <Navbar showAddIkuPopup={showAddIkuPopup} />
                    </div>

                    <div>
                        <Chart />
                    </div>

                    <div className="flex justify-center bg-green-400">
                        <div className={popupIku ? "popupIku active absolute top-0 shadow-lg rounded-lg z-30 mx-auto mt-[7%] overflow-y-auto" : "popupIku mt-[7%] rounded-lg shadow-lg"}>
                            <div className="relative py-2">
                                <div onClick={closeAddIkuPopup} className="text-red-600 font-bold absolute right-0 cursor-pointer">X</div>
                                <FormPrestasi />
                            </div>
                        </div>
                    </div>
                </div>
            </div> */}

            <div className='flex'>
                <div className="w-[17%] h-[100vh] relative">
                    <div className="fixed w-[17%] h-[100vh]">
                        <Sidebar />
                    </div>
                </div>

                <div className='relative bg-[#EDE9D5] w-[83%] h-full'>
                    <div className="w-full">
                        <Navbar />
                    </div>

                    <div>
                        <div className="p-6">
                            <div className="flex bg-white px-8 py-6 rounded-md">
                                <div className="w-[70%]">
                                    <h1 className="font-bold text-[2em]">Selamat Datang, {userData.nama}</h1>
                                    <p className="mt-2 text-[18px]">Selamat datang di Sistem Informasi Indikator Kinerja Utama 2 di Universitas Negeri Manado. Laman ini diperuntukkan untuk menambahkan kegiatan kampus merdeka dan prestasimu!</p>
                                </div>
                                <div className="h-[150px] w-[30%]">
                                    <img className="w-full h-full mx-auto" alt="gambar dashboard" src={gambar} />
                                </div>
                            </div>

                            <div className="mt-6 grid grid-cols-2">
                                <div className="mr-3 rounded-md">
                                    <div className="px-4 py-8 mx-auto text-center rounded-lg bg-white">
                                        {loadingPrestasi ? (
                                            <>
                                                <div className="opacity-10">
                                                    <Skeleton height={30} baseColor="#202020" highlightColor="#f5f5f5" />
                                                    <Skeleton className="mt-2" height={30} baseColor="#202020" highlightColor="#f5f5f5" />
                                                </div>
                                            </>
                                        ) : (
                                            dataTotal.filter((data) => data.nama === "Prestasi" && [data]).map(data => (
                                                <>
                                                    <h1 className="text-[40px] font-medium mr-3">{data.total}</h1>
                                                    <h1 className="font-medium">Prestasi</h1>
                                                </>
                                            ))
                                        )
                                        }

                                    </div>
                                </div>
                                <div className="rounded-md">
                                    <div className="ml-3 px-4 py-8 mx-auto text-center rounded-lg bg-white">
                                        {loadingKampusMerdeka ? (
                                            <>
                                                <div className="opacity-10">
                                                    <Skeleton height={30} baseColor="#202020" highlightColor="#f5f5f5" />
                                                    <Skeleton className="mt-2" height={30} baseColor="#202020" highlightColor="#f5f5f5" />
                                                </div>
                                            </>
                                        ) : (
                                            dataTotal.filter((data) => data.nama === "Kampus Merdeka" && [data]).map(data => (
                                                <>
                                                    <h1 className="text-[40px] font-medium mr-3">{data.total}</h1>
                                                    <h1 className="font-medium">Kegiatan</h1>
                                                </>
                                            ))
                                        )}
                                    </div>
                                </div>
                            </div>

                            <div className="mt-6 flex">
                                <div className="w-[100%] bg-white rounded-md p-6">
                                    <div>
                                        <label className="text-[24px] font-medium tracking-[1px]">Prestasi</label>
                                    </div>
                                    <div className="flex flex-col h-[300px] text-left text-[16px] font-medium mt-2">
                                        <div className="flex w-full py-2 bg-[#2b33331a]">
                                            <div className="w-[5%] px-2">No</div>
                                            <div className="w-[30%] px-2">Nama</div>
                                            <div className="w-[30%] px-2">Judul</div>
                                            <div className="w-[20%] px-2">Tingkat Prestasi</div>
                                            <div className="w-[15%] px-2">Smester</div>
                                        </div>
                                        <div className="flex flex-col w-full overflow-y-auto">
                                            {loadingPrestasi ? (
                                                <LoadingSkeleton />
                                            ) : (dataPrestasi.length === 0 ? (
                                                <label className="text-center p-4">Data tidak ditemukan!</label>
                                            ) : (
                                                dataPrestasi.map((dataPrestasi, index) => (
                                                    <>
                                                        <div className="flex py-2 px-2">
                                                            <div className="w-[5%]">
                                                                <p>{index + 1}</p>
                                                            </div>
                                                            <div className="flex w-[30%]">
                                                                <p className="text-left">{dataPrestasi.mahasiswa.nama} ({dataPrestasi.mahasiswa.nim})</p>
                                                            </div>
                                                            <div className="flex w-[30%]">
                                                                <p className="text-left">
                                                                    {dataPrestasi.nama}
                                                                </p>
                                                            </div>
                                                            <div className="flex px-2 w-[20%]">
                                                                <p className="">
                                                                    {dataPrestasi.tingkat_prestasi}
                                                                </p>
                                                            </div>
                                                            <div className="flex px-2 w-[15%]">
                                                                <p className="">
                                                                    {dataPrestasi.semester.nama}
                                                                </p>
                                                            </div>
                                                        </div>
                                                    </>
                                                ))
                                            )
                                            )
                                            }

                                        </div>
                                    </div>
                                    <div className="flex justify-end mt-4">
                                        <div onClick={() => navigate("/dashboard/prestasi")} className="">
                                            <PrimaryButton className="" textButton={"Lihat Detail"} />
                                        </div>
                                    </div>
                                </div>
                                {/* <div className="w-[30%] ml-3 ounded-md">
                                    <div className="px-4 py-8 mx-auto text-center rounded-lg bg-white">
                                        {
                                            dataTotal.filter((data) => data.nama === "Prestasi" && [data]).map(data => (
                                                <>
                                                    <h1 className="text-[40px] font-medium mr-3">{data.total}</h1>
                                                    <h1 className="font-medium">Prestasi</h1>
                                                </>
                                            ))
                                        }
                                    </div>
                                </div> */}
                            </div>

                            <div className="mt-6 flex">
                                <div className="w-[100%] bg-white rounded-md p-6">
                                    <div>
                                        <label className="text-[24px] font-medium tracking-[1px]">Kampus Merdeka</label>
                                    </div>
                                    <div className="flex flex-col h-[300px] text-left text-[16px] font-medium mt-2">
                                        <div className="flex w-full py-2 bg-[#2b33331a]">
                                            <div className="w-[5%] px-2">No</div>
                                            <div className="w-[30%] px-2">Nama</div>
                                            <div className="w-[30%] px-2">Judul</div>
                                            <div className="w-[20%] px-2">Tingkat Prestasi</div>
                                            <div className="w-[15%] px-2">Smester</div>
                                        </div>
                                        <div className="flex flex-col w-full overflow-y-auto">
                                            {loadingKampusMerdeka ? (
                                                <LoadingSkeleton />
                                            ) : (dataKM.length === 0 ? (
                                                <label className="text-center p-4">Data tidak ditemukan!</label>
                                            ) : (
                                                dataKM.map((dataKM, index) => (
                                                    <>
                                                        <div className="flex py-2 px-2">
                                                            <div className="w-[5%]">
                                                                <p>{index + 1}</p>
                                                            </div>
                                                            <div className="flex w-[30%]">
                                                                <p className="text-left">{dataKM.mahasiswa.nama} ({dataKM.mahasiswa.nim})</p>
                                                            </div>
                                                            <div className="flex w-[30%]">
                                                                <p className="text-left">
                                                                    {dataKM.judul_aktivitas_mahasiswa}
                                                                </p>
                                                            </div>
                                                            <div className="flex px-2 w-[20%]">
                                                                <p className="">
                                                                    {dataKM.kategori_program.nama}
                                                                </p>
                                                            </div>
                                                            <div className="flex px-2 w-[15%]">
                                                                <p className="">
                                                                    {dataKM.semester.nama}
                                                                </p>
                                                            </div>
                                                        </div>
                                                    </>
                                                ))
                                            )
                                            )
                                            }

                                        </div>
                                    </div>
                                    <div className="flex justify-end mt-4">
                                        <div onClick={() => navigate("/dashboard/kampus-merdeka")} className="">
                                            <PrimaryButton className="" textButton={"Lihat Detail"} />
                                        </div>
                                    </div>
                                </div>
                                {/* <div className="w-[30%] ml-3 ounded-md">
                                    <div className="px-4 py-8 mx-auto text-center rounded-lg bg-white">
                                        {
                                            dataTotal.filter((data) => data.nama === "Kampus Merdeka" && [data]).map(data => (
                                                <>
                                                    <h1 className="text-[40px] font-medium mr-3">{data.total}</h1>
                                                    <h1 className="font-medium">Kegiatan</h1>
                                                </>
                                            ))
                                        }
                                    </div>
                                </div> */}
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}