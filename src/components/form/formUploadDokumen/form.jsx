import React, { useState } from 'react'
import { useNavigate, useParams } from 'react-router-dom'
import axiosInstance from '../../../networks/api'
import PrimaryButton from '../../button/PrimaryButton'
import SecondaryButton from '../../button/SecondaryButton'
import Swal from 'sweetalert2'

export default function FormUploadDokumen({ identify }) {
    const { typeDokumen, dokumen, detailKM, detailPrestasi } = useParams()
    const navigate = useNavigate()

    const [fileST, seFileST] = useState(null)
    const [fileBA, setFileBA] = useState(null)
    const [fileSerti, setFileSerti] = useState(null)

    const onHandleInput = (e, named, dosenId, dosenNama) => {
        const name = e?.target?.name
        const value = e?.target?.value
        const id = e?.target?.id
        const checked = e?.target?.checked

        if (name === "beritaAcara") {
            setFileBA(e.target.files[0])
        } else if (name === "suratTugas") {
            seFileST(e.target.files[0])
        } else if (name === "sertifikat") {
            setFileSerti(e.target.files[0])
        }
    }

    const onSubmitDokumen = () => {

        if (dokumen === "berita-acara") {
            axiosInstance
                .patch(`/kampus-merdeka/${detailKM}/${dokumen}`, {
                    berita_acara: fileBA,
                }, {
                    headers: {
                        "Content-Type": "multipart/form-data",
                    }
                })
                .then((res) => {
                    if (res.status === 200) {
                        Swal.fire({
                            toast: true,
                            icon: "success",
                            title: `Successfully upload data dokumen ${dokumen}`,
                            animation: false,
                            background: "#222834",
                            color: "#18B015",
                            position: "bottom-end",
                            showConfirmButton: false,
                            timer: 2000,
                            timerProgressBar: true,
                            didOpen: (toast) => {
                                toast.addEventListener("mouseenter", Swal.stopTimer);
                                toast.addEventListener("mouseleave", Swal.resumeTimer);
                                setTimeout(() => {
                                    navigate(-1)
                                }, 2000)
                            },
                        });
                    }
                })
                .catch((err) => console.log(err))
        }

        if (dokumen === "surat-tugas") {
            axiosInstance
                .patch(`/kampus-merdeka/${detailKM}/${dokumen}`, {
                    surat_tugas: fileST,
                }, {
                    headers: {
                        "Content-Type": "multipart/form-data",
                    }
                })
                .then((res) => {
                    if (res.status === 200) {
                        Swal.fire({
                            toast: true,
                            icon: "success",
                            title: `Successfully upload data dokumen ${dokumen}`,
                            animation: false,
                            background: "#222834",
                            color: "#18B015",
                            position: "bottom-end",
                            showConfirmButton: false,
                            timer: 2000,
                            timerProgressBar: true,
                            didOpen: (toast) => {
                                toast.addEventListener("mouseenter", Swal.stopTimer);
                                toast.addEventListener("mouseleave", Swal.resumeTimer);
                                setTimeout(() => {
                                    navigate(-1)
                                }, 2000)
                            },
                        });
                    }
                })
                .catch((err) => console.log(err))
        }

        if (dokumen === "sertifikat") {
            axiosInstance
                .patch(`/prestasi/${detailPrestasi}/${dokumen}`, {
                    sertifikat: fileSerti,
                }, {
                    headers: {
                        "Content-Type": "multipart/form-data",
                    }
                })
                .then((res) => {
                    if (res.status === 200) {
                        Swal.fire({
                            toast: true,
                            icon: "success",
                            title: `Successfully upload data dokumen ${dokumen}`,
                            animation: false,
                            background: "#222834",
                            color: "#18B015",
                            position: "bottom-end",
                            showConfirmButton: false,
                            timer: 2000,
                            timerProgressBar: true,
                            didOpen: (toast) => {
                                toast.addEventListener("mouseenter", Swal.stopTimer);
                                toast.addEventListener("mouseleave", Swal.resumeTimer);
                                setTimeout(() => {
                                    navigate(-1)
                                }, 2000)
                            },
                        });
                    }
                })
                .catch((err) => console.log(err))
        }
        // setSubmitData(initialValue))
    }

    console.log("berita acara", fileBA)
    console.log("surat tugas", fileST)
    console.log("sertifikat", fileSerti)

    return (
        <>
            <div>
                <div className='flex bg-white justify-between font-bold text-[20px] tracking-[1px]'>
                    <label>Form {typeDokumen} Dokumen</label>
                    <div onClick={() => navigate(-1)} className='text-[14px]'>
                        <SecondaryButton textButton="Kembali" />
                    </div>
                </div>

                {
                    dokumen === "berita-acara" && (
                        <>
                            <div id='formPengabdian' className="flex p-4 mt-2">
                                <div className='w-1/4 mr-4'>
                                    <label className='font-medium'>Dokumen {dokumen}</label>
                                </div>
                                <div className='w-3/4'>
                                    <input onChange={(e) => onHandleInput(e)} name="beritaAcara" type="file" placeholder="" className="w-full border-2 border-black px-2 py-1 pb-2 rounded-md" />
                                </div>
                            </div>
                        </>
                    )
                }

                {
                    dokumen === "surat-tugas" && (
                        <>
                            <div id='formPengabdian' className="flex p-4 mt-2">
                                <div className='w-1/4 mr-4'>
                                    <label className='font-medium'>Dokumen {dokumen}</label>
                                </div>
                                <div className='w-3/4'>
                                    <input onChange={(e) => onHandleInput(e)} name="suratTugas" type="file" placeholder="" className="w-full border-2 border-black px-2 py-1 pb-2 rounded-md" />
                                </div>
                            </div>
                        </>
                    )
                }

                {
                    dokumen === "sertifikat" && (
                        <>
                            <div id='formPengabdian' className="flex p-4 mt-2">
                                <div className='w-1/4 mr-4'>
                                    <label className='font-medium'>Dokumen {dokumen}</label>
                                </div>
                                <div className='w-3/4'>
                                    <input onChange={(e) => onHandleInput(e)} name="sertifikat" type="file" placeholder="" className="w-full border-2 border-black px-2 py-1 pb-2 rounded-md" />
                                </div>
                            </div>
                        </>
                    )
                }

                <div className='mt-4' onClick={() => onSubmitDokumen()}>
                    <PrimaryButton textButton="Simpan" />
                </div>
            </div>
        </>
    )
}
