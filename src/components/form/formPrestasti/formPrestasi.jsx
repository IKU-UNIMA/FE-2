import React from "react";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import axiosInstance from "../../../networks/api";
import PrimaryButton from '../../button/PrimaryButton'
import SecondaryButton from '../../button/SecondaryButton'
import { DosenPembimbing, Fakultas, FollowedProgram, Nama, Nim, Penyelenggara, Peringkat, Prodi, Sertifikat, Smester, TingkatPrestasi } from "../../input/input";
import './formPrestasi.css'
import Swal from "sweetalert2";

export default function FormPrestasi() {
    const navigate = useNavigate()
    const [faculties, setFaculties] = useState(null)

    const initialValue = {
        nama: "",
        smester: "",
        tingkatPrestasi: "",
        dosenPembimbing: "",
        penyelenggara: "",
        peringkat: "",
    }
    const [submitData, setSubmitData] = useState(initialValue)
    const [file, setFile] = useState(null)

    // console.log("submit data", submitData)

    const onChangeFaculties = (e) => {
        setFaculties(e.target.value)
    }

    const onHandleInput = (e, named, dosenId) => {
        const name = e?.target?.name
        const value = e?.target?.value
        const id = e?.target?.id

        console.log("name", named)

        // console.log("id", dosenId)
        if (name === "nama") {
            setSubmitData({ ...submitData, nama: value })
        } else if (name === "nim") {
            setSubmitData({ ...submitData, nim: value })
        } else if (name === "fakultas") {
            setSubmitData({ ...submitData, fakultas: parseInt(value) })
            setSubmitData(submitData.majoring = null)
        } else if (name === "prodi") {
            setSubmitData({ ...submitData, prodi: parseInt(value) })
        } else if (name === "smester") {
            setSubmitData({ ...submitData, smester: value })
        } else if (name === "tingkatPrestasi") {
            setSubmitData({ ...submitData, tingkatPrestasi: value })
        } else if (named === "dosenPembimbing") {
            setSubmitData({ ...submitData, dosenPembimbing: dosenId })
        } else if (name === "penyelenggara") {
            setSubmitData({ ...submitData, penyelenggara: value })
        } else if (name === "peringkat") {
            setSubmitData({ ...submitData, peringkat: value })
        } else if (name === "followedProgram") {
            setSubmitData({ ...submitData, followedProgram: parseInt(value) })
        } else if (name === "sertifikat") {
            setFile(e.target.files[0])
        }
    }

    const onHandleSubmit = () => {
        const datas = submitData

        axiosInstance
            .post("/prestasi", {
                id_semester: datas.smester,
                id_dosen_pembimbing: datas.dosenPembimbing,
                nama: datas.nama,
                tingkat_prestasi: datas.tingkatPrestasi,
                penyelenggara: datas.penyelenggara,
                peringkat: datas.peringkat,
                sertifikat: file,
            }, {
                headers: {
                    "Content-Type": "multipart/form-data",
                }
            })
            .then((res) => {
                if (res.status === 201) {
                    Swal.fire({
                        toast: true,
                        icon: "success",
                        title: "Successfully create data Prestasi",
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
                            }, 3000)
                        },
                    });
                }
            })
            .catch((err) => console.log(err))
        // setSubmitData({ name: '', faculties: null, majoring: null, followedProgram: null, nim: "" })
    }

    const resetData = (e) => {
        e.preventDefault()
        setSubmitData(initialValue)
    }

    console.log("data create", submitData)

    return (
        <>
            <div className='flex justify-between font-bold text-[20px] tracking-[1px] mb-4'>
                <label>Form Tambah Prestasi</label>
                <div onClick={() => navigate(-1)} className='text-[14px]'>
                    <SecondaryButton textButton="Kembali" />
                </div>
            </div>

            <form>
                <Smester onHandleInput={onHandleInput} datas={submitData} identify="create" />
                <DosenPembimbing onHandleInput={onHandleInput} datas={submitData} identify="create" />
                <Nama onHandleInput={onHandleInput} datas={submitData} identify="create" />
                <TingkatPrestasi onHandleInput={onHandleInput} datas={submitData} identify="create" />
                <Penyelenggara onHandleInput={onHandleInput} datas={submitData} identify="create" />
                <Peringkat onHandleInput={onHandleInput} datas={submitData} identify="create" />
                <Sertifikat onHandleInput={onHandleInput} datas={submitData} identify="create" />
            </form>

            <div className="mt-4">
                <div onClick={(e) => onHandleSubmit(e)}>
                    <PrimaryButton textButton="Submit" />
                </div>
                <div className="mt-2" onClick={(e) => resetData(e)}>
                    <SecondaryButton textButton="Reset" />
                </div>
            </div>
        </>
    )
}
