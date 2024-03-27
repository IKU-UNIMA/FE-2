import React from "react";
import { useEffect } from "react";
import { useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import Swal from "sweetalert2";
import PrimaryButton from "../../../../../components/button/PrimaryButton";
import SecondaryButton from "../../../../../components/button/SecondaryButton";
import {
  BiayaKuliah,
  DosenPembimbing,
  Ipk,
  Ips,
  JenisAnggota,
  JudulAktivitasMahasiswa,
  JumlahSks,
  KategoriProgram,
  KontrakKrs,
  NoSkTugas,
  Smester,
  StatusKeikutsertaan,
  TanggalSkTugas,
  TotalSks,
} from "../../../../../components/input/input";
import Navbar from "../../../../../components/navbar/navbar";
import Sidebar from "../../../../../components/sidebar/sidebar";
import axiosInstance from "../../../../../networks/api";

export default function UpdateKMAdminUmum() {
  const navigate = useNavigate();
  const { detailKM } = useParams();
  const identify = "update";
  const [errors, setErrors] = useState({
    semester: "",
    nama: "",
    tingkat_prestasi: "",
    penyelenggara: "",
    peringkat: "",
    biaya_kuliah: "",
    dosen_pembimbing: "",
    kategori_program: "",
    ipk: "",
    ips: "",
    jenis_anggota: "",
    judul_aktivitas_mahasiswa: "",
    jumlah_sks: "",
    kontrak_krs: "",
    no_sk_tugas: "",
    status_keikutsertaan: "",
    tanggal_sk_tugas: "",
    total_sks: "",
  });

  useEffect(() => {
    axiosInstance
      .get(`/kampus-merdeka/${detailKM}`, {
        "Content-Type": "application/json",
      })
      .then((res) => {
        setSubmitData(res.data.data);
        console.log(res.data.data);
      });
  }, []);
  const [submitData, setSubmitData] = useState("");

  const onHandleInput = (e, named, dosenId, dosenNama) => {
    const name = e?.target?.name;
    const value = e?.target?.value;
    const id = e?.target?.id;
    const checked = e?.target?.checked;

    if (name === "smester") {
      setSubmitData({ ...submitData, semester: { id: parseInt(value) } });
    }
    // else if (named === "dosenPembimbing") {
    //     setSubmitData({ ...submitData, dosen_pembimbing: { id: dosenId, nama: dosenNama } })
    // }
    else if (name === "kategoriProgram") {
      setSubmitData({ ...submitData, kategori_program: value });
    } else if (name === "statusKeikutsertaan") {
      setSubmitData({ ...submitData, status_keikutsertaan: value });
    } else if (name === "kontrakKrs") {
      setSubmitData({ ...submitData, kontrak_krs: checked });
    } else if (name === "judulAktivitasMahasiswa") {
      setSubmitData({ ...submitData, judul_aktivitas_mahasiswa: value });
    } else if (name === "noSkTugas") {
      setSubmitData({ ...submitData, no_sk_tugas: value });
    } else if (name === "tanggalSkTugas") {
      setSubmitData({ ...submitData, tanggal_sk_tugas: value });
    } else if (name === "jenisAnggota") {
      setSubmitData({ ...submitData, jenis_anggota: value });
    } else if (name === "ips") {
      setSubmitData({ ...submitData, ips: value });
    } else if (name === "ipk") {
      setSubmitData({ ...submitData, Ipk: value });
    } else if (name === "jumlahSks") {
      setSubmitData({ ...submitData, jumlah_sks: value });
    } else if (name === "totalSks") {
      setSubmitData({ ...submitData, total_sks: value });
    } else if (named === "biayaKuliah") {
      setSubmitData({ ...submitData, biaya_kuliah: e.floatValue });
    }
  };

  const onHandleSubmit = () => {
    const datas = submitData;

    console.log("data", datas);
    axiosInstance
      .put(
        `/kampus-merdeka/${detailKM}`,
        {
          id_semester: parseInt(datas.semester?.id),
          // id_dosen_pembimbing: parseInt(datas.dosen_pembimbing.id),
          id_kategori_program: parseInt(datas.kategori_program.id),
          status_keikutsertaan: datas.status_keikutsertaan,
          kontrak_krs: datas.kontrak_krs,
          judul_aktivitas_mahasiswa: datas.judul_aktivitas_mahasiswa,
          no_sk_tugas: datas.no_sk_tugas,
          tanggal_sk_tugas: datas.tanggal_sk_tugas,
          jenis_anggota: datas.jenis_anggota,
          ips: datas.ips,
          ipk: datas.Ipk,
          jumlah_sks: datas.jumlah_sks,
          total_sks: datas.total_sks,
          biaya_kuliah: datas.biaya_kuliah,
        },
        {
          headers: {
            "Content-Type": "multipart/form-data",
          },
        }
      )
      .then((res) => {
        if (res.status === 200) {
          Swal.fire({
            toast: true,
            icon: "success",
            title: "Successfully Update Kampus Merdeka",
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
                navigate(-1);
              }, 3000);
            },
          });
        }
        console.log(res);
      })
      .catch((err) => {
        setErrors({
          ...errors,
          semester:
            submitData.semester.id == ""
              ? err.response.data.errors.id_semester
              : "",
          nama: submitData.nama == "" ? err.response.data.errors.nama : "",
          tingkat_prestasi:
            submitData.tingkat_prestasi == ""
              ? err.response.data.errors.tingkat_prestasi
              : "",
          penyelenggara:
            submitData.penyelenggara == ""
              ? err.response.data.errors.penyelenggara
              : "",
          peringkat:
            submitData.peringkat == ""
              ? err.response.data.errors.peringkat
              : "",
          biaya_kuliah:
            submitData.biaya_kuliah == ""
              ? err.response.data.errors.biaya_kuliah
              : "",
          // dosen_pembimbing: submitData.dosen_pembimbing.id == "" ? err.response.data.errors.id_dosen_pembimbing : "",
          kategori_program:
            submitData.kategori_program.id == ""
              ? err.response.data.errors.id_kategori_program
              : "",
          ipk: submitData.ipk == "" ? err.response.data.errors.ipk : "",
          ips: submitData.ips == "" ? err.response.data.errors.ips : "",
          jenis_anggota:
            submitData.jenis_anggota == ""
              ? err.response.data.errors.jenis_anggota
              : "",
          judul_aktivitas_mahasiswa:
            submitData.judul_aktivitas_mahasiswa == ""
              ? err.response.data.errors.judul_aktivitas_mahasiswa
              : "",
          jumlah_sks:
            submitData.jumlah_sks == ""
              ? err.response.data.errors.jumlah_sks
              : "",
          kontrak_krs:
            submitData.kontrak_krs == ""
              ? err.response.data.errors.kontrak_krs
              : "",
          no_sk_tugas:
            submitData.no_sk_tugas == ""
              ? err.response.data.errors.no_sk_tugas
              : "",
          status_keikutsertaan:
            submitData.status_keikutsertaan == ""
              ? err.response.data.errors.status_keikutsertaan
              : "",
          tanggal_sk_tugas:
            submitData.tanggal_sk_tugas == ""
              ? err.response.data.errors.tanggal_sk_tugas
              : "",
          total_sks:
            submitData.total_sks == ""
              ? err.response.data.errors.total_sks
              : "",
        });
        if (
          err.response.data.errors.message == "surat tugas tidak boleh kosong"
        )
          Swal.fire({
            toast: true,
            icon: "error",
            title: err.response.data.errors.message,
            animation: false,
            background: "#222834",
            color: "#DE1508",
            position: "bottom-end",
            showConfirmButton: false,
            timer: 4000,
            timerProgressBar: true,
            didOpen: (toast) => {
              toast.addEventListener("mouseenter", Swal.stopTimer);
              toast.addEventListener("mouseleave", Swal.resumeTimer);
            },
          });
        else {
          Swal.fire({
            toast: true,
            icon: "error",
            title: "periksa kembali",
            animation: false,
            background: "#222834",
            color: "#DE1508",
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
        console.log(err);
      });
  };

  console.log("update data", submitData);

  return (
    <>
      <div className="flex">
        <div className="w-[17%] h-[100vh] relative">
          <div className="fixed w-[17%] h-[100vh]">
            <Sidebar />
          </div>
        </div>

        <div className="relative bg-[#EDE9D5] w-[83%]">
          <div className="w-full">
            <Navbar />
          </div>

          <div className="p-6">
            <div className="bg-white px-4 py-4 rounded-md">
              <div className="flex justify-between font-bold text-[20px] tracking-[1px] mb-4">
                <label>Update Kampus Merdeka</label>
                <div onClick={() => navigate(-1)} className="text-[14px]">
                  <SecondaryButton textButton="Kembali" />
                </div>
              </div>

              <form>
                <Smester
                  onHandleInput={onHandleInput}
                  datas={submitData}
                  identify={identify}
                />
                {/* <DosenPembimbing
                  onHandleInput={onHandleInput}
                  datas={submitData}
                  identify={identify}
                /> */}
                <KategoriProgram
                  onHandleInput={onHandleInput}
                  datas={submitData}
                  identify={identify}
                />
                <StatusKeikutsertaan
                  onHandleInput={onHandleInput}
                  datas={submitData}
                  identify={identify}
                />
                <KontrakKrs
                  onHandleInput={onHandleInput}
                  datas={submitData}
                  identify={identify}
                />
                <JudulAktivitasMahasiswa
                  onHandleInput={onHandleInput}
                  datas={submitData}
                  identify={identify}
                />
                <NoSkTugas
                  onHandleInput={onHandleInput}
                  datas={submitData}
                  identify={identify}
                />
                <TanggalSkTugas
                  onHandleInput={onHandleInput}
                  datas={submitData}
                  identify={identify}
                />
                <JenisAnggota
                  onHandleInput={onHandleInput}
                  datas={submitData}
                  identify={identify}
                />
                <Ips
                  onHandleInput={onHandleInput}
                  datas={submitData}
                  identify={identify}
                />
                <Ipk
                  onHandleInput={onHandleInput}
                  datas={submitData}
                  identify={identify}
                />
                <JumlahSks
                  onHandleInput={onHandleInput}
                  datas={submitData}
                  identify={identify}
                />
                {/* <TotalSks onHandleInput={onHandleInput} datas={submitData} identify={identify} /> */}
                <BiayaKuliah
                  onHandleInput={onHandleInput}
                  datas={submitData}
                  identify={identify}
                />
              </form>

              <div className="mt-2" onClick={(e) => onHandleSubmit(e)}>
                <PrimaryButton textButton="Update" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
