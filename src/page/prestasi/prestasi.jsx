import React, { useState } from "react";
import PrimaryButton from "../../components/button/PrimaryButton";
import FormPrestasi from "../../components/form/formPrestasti/formPrestasi";
import Sidebar from "../../components/sidebar/sidebar";
import Navbar from "../../components/navbar/navbar";
import { Link, useNavigate } from "react-router-dom";
import { BsFillInfoCircleFill, BsFillTrashFill, BsPencilSquare } from "react-icons/bs";
import SecondaryButton from "../../components/button/SecondaryButton";
import { useEffect } from "react";
import axiosInstance from "../../networks/api";
import Swal from "sweetalert2";
import LoadingSkeleton from "../../components/loadingSkeleton/loading";

export default function Prestasi() {
    // const [popupIku, setPopupIku] = useState(false)
    const navigate = useNavigate()
    const [loading, setLoading] = useState(true)

    useEffect(() => {
        axiosInstance
            .get("/prestasi", {
                "Content-Type": "application/json",
            })
            .then((res) => {
                setData(res.data.data.data)
                setLoading(false)
                console.log(res.data.data.data)
            })
            .catch((err) => console.log(err))
    }, [])
    const [data, setData] = useState([])

    const onDeletePrestasi = (e, id) => {
        e.preventDefault()
        console.log(id)
        Swal.fire({
            title: 'Are you sure?',
            // text: "You won't be able to revert this!",
            icon: 'warning',
            background: "#151921",
            color: "#fff",
            showCancelButton: true,
            confirmButtonColor: "#FF3D00",
            confirmButtonText: 'Delete'
        }).then((result) => {
            if (result.isConfirmed) {
                axiosInstance
                    .delete(`/kampus-merdeka/${id}`, {
                        headers: {
                            "Content-Type": "multipart/form-data",
                        }
                    })
                    .then((res) => {
                        if (res.status === 201) {
                            Swal.fire({
                                toast: true,
                                icon: "success",
                                title: "Delete Prestasi Successfully",
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
                                },
                            });
                        }
                        window.location.reload();
                        console.log(res)
                    })
                    .catch((err) => console.log(err))
            }
        })
    }
    // const showAddIkuPopup = () => {
    //     document.getElementsByTagName("BODY")[0].style.overflowY = "hidden";
    //     if (popupIku === false) {
    //         setPopupIku(true)
    //     }
    // }
    // const closeAddIkuPopup = () => {
    //     if (popupIku === true) {
    //         document.getElementsByTagName("BODY")[0].style.overflowY = "scroll";
    //         setPopupIku(false)
    //     }
    // }

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
                            <div className="flex justify-between bg-white px-4 py-4 rounded-t-md border-b-[1px] border-[#2C3333]">
                                <h1 className="font-medium text-[18px] my-auto">Prestasi</h1>
                                <div className="flex justify-between">
                                    <Link to="/dashboard/prestasi/create">
                                        <div>
                                            <PrimaryButton textButton='Tambah' />
                                        </div>
                                    </Link>
                                    {/* <div>
                                        <SecondaryButton textButton='Import Publikasi' />
                                    </div> */}
                                </div>
                            </div>

                            <div className="bg-white px-4 py-4">
                                <div className="flex flex-col text-left text-[16px] font-medium mt-2">
                                    <div className="flex w-full text-center py-2 bg-[#2b33331a]">
                                        <div className="w-[5%]">No</div>
                                        <div className="w-[30%]">Judul</div>
                                        <div className="w-[30%]">Tingkat Prestasi</div>
                                        <div className="w-[20%]">Smester</div>
                                        <div className="w-[15%]">Aksi</div>
                                    </div>
                                    <div className="flex flex-col w-full">
                                        {loading ? (
                                            <LoadingSkeleton />
                                        ) : (
                                            data.map((data, index) => (
                                                <>
                                                    <div className="flex py-2">
                                                        <div className="w-[5%] text-center">
                                                            <p>{index + 1}</p>
                                                        </div>
                                                        <div className="flex justify-center w-[30%] px-2">
                                                            <p className="text-left">
                                                                {data.nama}
                                                            </p>
                                                        </div>
                                                        <div className="flex justify-center px-2 w-[30%]">
                                                            <p className="">
                                                                {data.tingkat_prestasi}
                                                            </p>
                                                        </div>
                                                        <div className="flex justify-center px-2 w-[20%]">
                                                            <p className="">
                                                                {data.semester.nama}
                                                            </p>
                                                        </div>
                                                        <div className="flex flex-row items-start justify-center px-2 w-[15%]">
                                                            <div className="basis-1/3 mr-1 py-2 cursor-pointer rounded-md bg-green-400" onClick={() => navigate(`/dashboard/prestasi/detail/${data.id}`)}><BsFillInfoCircleFill className="mx-auto my-auto" /></div>
                                                            <div className="basis-1/3 ml-1 mr-1 cursor-pointer py-2 rounded-md bg-yellow-500" onClick={() => navigate(`/dashboard/prestasi/update/${data.id}`)}><BsPencilSquare className="mx-auto my-auto" /></div>
                                                            <div className="basis-1/3 ml-1 py-2 cursor-pointer rounded-md bg-red-600" onClick={(e) => onDeletePrestasi(e, data.id)}><BsFillTrashFill className="mx-auto my-auto" /></div>
                                                        </div>
                                                    </div>
                                                </>
                                            ))
                                        )
                                        }

                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
        // <>
        //     <div className='flex'>
        //         <div className="w-[17%] h-[100vh] relative">
        //             <div className="fixed w-[17%] h-[100vh]">
        //                 <Sidebar />
        //             </div>
        //         </div>

        //         <div className='relative bg-[#EDE9D5] w-[83%] h-[100vh]'>
        //             <div className="w-full">
        //                 <Navbar />
        //             </div>

        //             <div>
        //                 <div className="p-6">
        //                     <div className="flex justify-end bg-white rounded-md px-4 py-2">
        //                         <div onClick={showAddIkuPopup}>
        //                             <PrimaryButton textButton="Tambah" />
        //                         </div>
        //                     </div>

        //                     <div className="bg-white mt-4 px-4 py-6 rounded-md">
        //                         <h1 className="font-medium text-[18px] my-auto">Prestasi</h1>

        //                         <div className="mt-4">
        //                             <div className="flex text-[14px] px-4 py-2 bg-[#2b33331a]">
        //                                 <div className="w-[10%]">NO</div>
        //                                 <div className="w-[40%]">ID DOKUMEN</div>
        //                                 <div className="w-[30%]">PRESTASI</div>
        //                                 <div className="w-[20%]">AKSI</div>
        //                             </div>

        //                             {/* <div className="w-[100%] mt-4">
        //                     <PrimaryButton textButton='Unduh' />
        //                 </div> */}
        //                         </div>
        //                     </div>

        //                     <div className="flex justify-center bg-green-400">
        //                         <div className={popupIku ? "popupIku active absolute top-0 shadow-lg rounded-lg z-30 mx-auto mt-[7%] overflow-y-auto" : "popupIku mt-[7%] rounded-lg shadow-lg"}>
        //                             <div className="relative py-2">
        //                                 <div onClick={closeAddIkuPopup} className="text-red-600 font-bold absolute right-0 cursor-pointer">X</div>
        //                                 <FormPrestasi />
        //                             </div>
        //                         </div>
        //                     </div>
        //                 </div>
        //             </div>
        //         </div>
        //     </div>
        // </>
    )
}