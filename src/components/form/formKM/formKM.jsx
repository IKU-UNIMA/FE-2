import React from "react";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import PrimaryButton from '../../button/PrimaryButton'
import SecondaryButton from '../../button/SecondaryButton'
import { BiayaKuliah, DosenPembimbing, Fakultas, FollowedProgram, Ipk, Ips, JenisAnggota, JudulAktivitasMahasiswa, JumlahSks, KategoriProgram, KontrakKrs, Nama, Nim, NoSkTugas, Penyelenggara, Peringkat, Prodi, Sertifikat, Smester, StatusKeikutsertaan, SuratTugas, TanggalSkTugas, TingkatPrestasi, TotalSks } from "../../input/input";
import './formKM.css'
import Swal from "sweetalert2";
import axiosInstance from "../../../networks/api";

export default function FormKM() {
    const navigate = useNavigate()
    const [faculties, setFaculties] = useState(null)
    const identify = "create"

    const initialValue = {
        smester: "",
        dosenPembimbing: "",
        kategoriProgram: "",
        statusKeikutsertaan: "",
        kontrakKrs: false,
        judulAktivitasMahasiswa: "",
        noSkTugas: "",
        tanggalSkTugas: "",
        jenisAnggota: "",
        ips: "",
        ipk: "",
        jumlahSks: '',
        totalSks: "",
        biayaKuliah: ""
    }
    const [submitData, setSubmitData] = useState(initialValue)
    const [file, setFile] = useState("")

    const onChangeFaculties = (e) => {
        setFaculties(e.target.value)
    }

    const onHandleInput = (e, named, dosenId) => {
        const name = e?.target?.name
        const value = e?.target?.value
        const id = e?.target?.id
        const checked = e?.target?.checked

        if (name === "smester") {
            setSubmitData({ ...submitData, smester: value })
        } else if (named === "dosenPembimbing") {
            setSubmitData({ ...submitData, dosenPembimbing: dosenId })
        } else if (name === "kategoriProgram") {
            setSubmitData({ ...submitData, kategoriProgram: value })
        } else if (name === "statusKeikutsertaan") {
            setSubmitData({ ...submitData, statusKeikutsertaan: value })
        } else if (name === "kontrakKrs") {
            setSubmitData({ ...submitData, kontrakKrs: checked })
        } else if (name === "judulAktivitasMahasiswa") {
            setSubmitData({ ...submitData, judulAktivitasMahasiswa: value })
        } else if (name === "noSkTugas") {
            setSubmitData({ ...submitData, noSkTugas: value })
        } else if (name === "tanggalSkTugas") {
            setSubmitData({ ...submitData, tanggalSkTugas: value })
        } else if (name === "jenisAnggota") {
            setSubmitData({ ...submitData, jenisAnggota: value })
        } else if (name === "ips") {
            setSubmitData({ ...submitData, ips: value })
        } else if (name === "ipk") {
            setSubmitData({ ...submitData, ipk: value })
        } else if (name === "jumlahSks") {
            setSubmitData({ ...submitData, jumlahSks: value })
        } else if (name === "totalSks") {
            setSubmitData({ ...submitData, totalSks: value })
        } else if (named === "biayaKuliah") {
            setSubmitData({ ...submitData, biayaKuliah: e.floatValue })
        } else if (name === "suratTugas") {
            setFile(e.target.files[0])
        }
    }

    const onHandleSubmit = () => {
        const datas = submitData

        // const newData = {

        // }

        // console.log("senelum", newData)
        // const data = JSON.stringify(newData)
        // console.log("sesudah", data)

        axiosInstance
            .post("/kampus-merdeka", {
                id_semester: parseInt(datas.smester),
                id_dosen_pembimbing: parseInt(datas.dosenPembimbing),
                id_kategori_program: parseInt(datas.kategoriProgram),
                status_keikutsertaan: datas.statusKeikutsertaan,
                kontrak_krs: datas.kontrakKrs,
                judul_aktivitas_mahasiswa: datas.judulAktivitasMahasiswa,
                no_sk_tugas: datas.noSkTugas,
                tanggal_sk_tugas: datas.tanggalSkTugas,
                jenis_anggota: datas.jenisAnggota,
                ips: datas.ips,
                ipk: datas.ipk,
                jumlah_sks: datas.jumlahSks,
                total_sks: datas.totalSks,
                biaya_kuliah: datas.biayaKuliah,
                surat_tugas: file,
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
                        title: "Successfully create data pengabdian",
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
        // setSubmitData(initialValue)
    }

    const resetData = () => {
        setSubmitData(initialValue)
    }

    console.log("data create", submitData)
    console.log("files", file)

    return (
        <>
            <div className='flex justify-between font-bold text-[20px] tracking-[1px] mb-4'>
                <label>Form Tambah Kampus Merdeka</label>
                <div onClick={() => navigate(-1)} className='text-[14px]'>
                    <SecondaryButton textButton="Kembali" />
                </div>
            </div>

            <form>
                <Smester onHandleInput={onHandleInput} datas={submitData} identify={identify} />
                <DosenPembimbing onHandleInput={onHandleInput} datas={submitData} identify={identify} />
                <KategoriProgram onHandleInput={onHandleInput} datas={submitData} identify={identify} />
                <StatusKeikutsertaan onHandleInput={onHandleInput} datas={submitData} identify={identify} />
                <KontrakKrs onHandleInput={onHandleInput} datas={submitData} identify={identify} />
                <JudulAktivitasMahasiswa onHandleInput={onHandleInput} datas={submitData} identify={identify} />
                <NoSkTugas onHandleInput={onHandleInput} datas={submitData} identify={identify} />
                <TanggalSkTugas onHandleInput={onHandleInput} datas={submitData} identify={identify} />
                <JenisAnggota onHandleInput={onHandleInput} datas={submitData} identify={identify} />
                <Ips onHandleInput={onHandleInput} datas={submitData} identify={identify} />
                <Ipk onHandleInput={onHandleInput} datas={submitData} identify={identify} />
                <JumlahSks onHandleInput={onHandleInput} datas={submitData} identify={identify} />
                <TotalSks onHandleInput={onHandleInput} datas={submitData} identify={identify} />
                <BiayaKuliah onHandleInput={onHandleInput} datas={submitData} identify={identify} />
                <SuratTugas onHandleInput={onHandleInput} datas={submitData} identify={identify} />
            </form>

            <div className="mt-4">
                <div onClick={(e) => onHandleSubmit(e)}>
                    <PrimaryButton textButton="Submit" />
                </div>
                <div onClick={(e) => resetData(e)} className="mt-2">
                    <SecondaryButton textButton="Reset" />
                </div>
            </div>
        </>
    )
}
