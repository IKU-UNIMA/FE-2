import React from "react";
import { useEffect } from "react";
import { useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import Swal from "sweetalert2";
import PrimaryButton from "../../../../../components/button/PrimaryButton";
import SecondaryButton from "../../../../../components/button/SecondaryButton";
import {
  DosenPembimbing,
  Nama,
  Penyelenggara,
  Peringkat,
  Smester,
  TingkatPrestasi,
} from "../../../../../components/input/input";
import Navbar from "../../../../../components/navbar/navbar";
import Sidebar from "../../../../../components/sidebar/sidebar";
import axiosInstance from "../../../../../networks/api";

export default function UpdatePrestasiAdminUmum() {
  const navigate = useNavigate();
  const { detailPrestasi } = useParams();
  const [errors, setErrors] = useState({
    semester: "",
    nama: "",
    tingkat_prestasi: "",
    penyelenggara: "",
    peringkat: "",
  });
  const identify = "update";

  useEffect(() => {
    axiosInstance
      .get(`/prestasi/${detailPrestasi}`, {
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
    else if (name === "nama") {
      setSubmitData({ ...submitData, nama: value });
    } else if (name === "tingkatPrestasi") {
      setSubmitData({ ...submitData, tingkat_prestasi: value });
    } else if (name === "penyelenggara") {
      setSubmitData({ ...submitData, penyelenggara: value });
    } else if (name === "peringkat") {
      setSubmitData({ ...submitData, peringkat: value });
    }
  };

  const onHandleSubmit = () => {
    const datas = submitData;

    console.log("data", datas);
    axiosInstance
      .put(
        `/prestasi/${detailPrestasi}`,
        {
          id_semester: datas.semester.id,
          // id_dosen_pembimbing: parseInt(datas.dosen_pembimbing.id),
          nama: datas.nama,
          tingkat_prestasi: datas.tingkat_prestasi,
          penyelenggara: datas.penyelenggara,
          peringkat: datas.peringkat,
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
            title: "Successfully Update Prestasi",
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
        console.log(err);
        setErrors({
          ...errors,
          semester:
            submitData.semester == ""
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
        });
        if (err.response.data.errors.message == "sertifikat tidak boleh kosong")
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
                <label>Update Prestasi</label>
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
                  tag={"prestasi"}
                /> */}
                <Nama
                  onHandleInput={onHandleInput}
                  datas={submitData}
                  identify={identify}
                />
                <TingkatPrestasi
                  onHandleInput={onHandleInput}
                  datas={submitData}
                  identify={identify}
                />
                <Penyelenggara
                  onHandleInput={onHandleInput}
                  datas={submitData}
                  identify={identify}
                />
                <Peringkat
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
