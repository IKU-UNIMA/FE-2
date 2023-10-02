import React from "react";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import PrimaryButton from "../../button/PrimaryButton";
import SecondaryButton from "../../button/SecondaryButton";
import {
	BiayaKuliah,
	DosenPembimbing,
	Fakultas,
	FollowedProgram,
	Ipk,
	Ips,
	JenisAnggota,
	JudulAktivitasMahasiswa,
	JumlahSks,
	KategoriProgram,
	KontrakKrs,
	Nama,
	Nim,
	NoSkTugas,
	Penyelenggara,
	Peringkat,
	Prodi,
	Sertifikat,
	Smester,
	StatusKeikutsertaan,
	SuratTugas,
	TanggalSkTugas,
	TingkatPrestasi,
	TotalSks,
} from "../../input/input";
import "./formKM.css";
import Swal from "sweetalert2";
import axiosInstance from "../../../networks/api";

export default function FormKM() {
	const navigate = useNavigate();
	const [faculties, setFaculties] = useState(null);
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
	const identify = "create";

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
		jumlahSks: "",
		totalSks: "",
		biayaKuliah: "",
	};
	const [submitData, setSubmitData] = useState(initialValue);
	const [file, setFile] = useState("");

	const onChangeFaculties = (e) => {
		setFaculties(e.target.value);
	};

	const onHandleInput = (e, named, dosenId) => {
		const name = e?.target?.name;
		const value = e?.target?.value;
		const id = e?.target?.id;
		const checked = e?.target?.checked;

		if (name === "smester") {
			setSubmitData({ ...submitData, smester: value });
		} else if (named === "dosenPembimbing") {
			setSubmitData({ ...submitData, dosenPembimbing: dosenId });
		} else if (name === "kategoriProgram") {
			setSubmitData({ ...submitData, kategoriProgram: value });
		} else if (name === "statusKeikutsertaan") {
			setSubmitData({ ...submitData, statusKeikutsertaan: value });
		} else if (name === "kontrakKrs") {
			setSubmitData({ ...submitData, kontrakKrs: checked });
		} else if (name === "judulAktivitasMahasiswa") {
			setSubmitData({ ...submitData, judulAktivitasMahasiswa: value });
		} else if (name === "noSkTugas") {
			setSubmitData({ ...submitData, noSkTugas: value });
		} else if (name === "tanggalSkTugas") {
			setSubmitData({ ...submitData, tanggalSkTugas: value });
		} else if (name === "jenisAnggota") {
			setSubmitData({ ...submitData, jenisAnggota: value });
		} else if (name === "ips") {
			setSubmitData({ ...submitData, ips: value });
		} else if (name === "ipk") {
			setSubmitData({ ...submitData, ipk: value });
		} else if (name === "jumlahSks") {
			setSubmitData({ ...submitData, jumlahSks: value });
		} else if (name === "totalSks") {
			setSubmitData({ ...submitData, totalSks: value });
		} else if (named === "biayaKuliah") {
			setSubmitData({ ...submitData, biayaKuliah: e.floatValue });
		} else if (name === "suratTugas") {
			setFile(e.target.files[0]);
		}
	};

	const onHandleSubmit = () => {
		const datas = submitData;

		// const newData = {

		// }

		// console.log("senelum", newData)
		// const data = JSON.stringify(newData)
		// console.log("sesudah", data)

		axiosInstance
			.post(
				"/kampus-merdeka",
				{
					id_semester: datas.smester == "" ? "" : parseInt(datas.smester),
					id_dosen_pembimbing: datas.dosenPembimbing == "" ? "" : parseInt(datas.dosenPembimbing),
					id_kategori_program: datas.kategoriProgram == "" ? "" : parseInt(datas.kategoriProgram),
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
				},
				{
					headers: {
						"Content-Type": "multipart/form-data",
					},
				}
			)
			.then((res) => {
				if (res.status === 201) {
					Swal.fire({
						toast: true,
						icon: "success",
						title: "Successfully create data Kampus Merdeka",
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
			})
			.catch((err) => {
				setErrors({
					...errors,
					semester: submitData.smester == "" ? err.response.data.errors.id_semester : "",
					nama: submitData.nama == "" ? err.response.data.errors.nama : "",
					tingkat_prestasi: submitData.tingkatPrestasi == "" ? err.response.data.errors.tingkat_prestasi : "",
					penyelenggara: submitData.penyelenggara == "" ? err.response.data.errors.penyelenggara : "",
					peringkat: submitData.peringkat == "" ? err.response.data.errors.peringkat : "",
					biaya_kuliah: submitData.biayaKuliah == "" ? err.response.data.errors.biaya_kuliah : "",
					dosen_pembimbing: submitData.dosenPembimbing == "" ? err.response.data.errors.id_dosen_pembimbing : "",
					kategori_program: submitData.kategoriProgram == "" ? err.response.data.errors.id_kategori_program : "",
					ipk: submitData.ipk == "" ? err.response.data.errors.ipk : "",
					ips: submitData.ips == "" ? err.response.data.errors.ips : "",
					jenis_anggota: submitData.jenisAnggota == "" ? err.response.data.errors.jenis_anggota : "",
					judul_aktivitas_mahasiswa: submitData.judulAktivitasMahasiswa == "" ? err.response.data.errors.judul_aktivitas_mahasiswa : "",
					jumlah_sks: submitData.jumlahSks == "" ? err.response.data.errors.jumlah_sks : "",
					kontrak_krs: submitData.kontrakKrs == "" ? err.response.data.errors.kontrak_krs : "",
					no_sk_tugas: submitData.noSkTugas == "" ? err.response.data.errors.no_sk_tugas : "",
					status_keikutsertaan: submitData.statusKeikutsertaan == "" ? err.response.data.errors.status_keikutsertaan : "",
					tanggal_sk_tugas: submitData.tanggalSkTugas == "" ? err.response.data.errors.tanggal_sk_tugas : "",
					total_sks: submitData.totalSks == "" ? err.response.data.errors.total_sks : "",
				});
				if (err.response.data.errors.message == "surat tugas tidak boleh kosong")
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
		// setSubmitData(initialValue)
	};

	const resetData = () => {
		setSubmitData(initialValue);
	};

	console.log("data create", submitData);
	console.log("files", file);

	return (
		<>
			<div className="flex justify-between font-bold text-[20px] tracking-[1px] mb-4">
				<label>Form Tambah Kampus Merdeka</label>
				<div onClick={() => navigate(-1)} className="text-[14px]">
					<SecondaryButton textButton="Kembali" />
				</div>
			</div>

			<form>
				<Smester onHandleInput={onHandleInput} datas={submitData} identify={identify} error={errors} />
				<DosenPembimbing onHandleInput={onHandleInput} datas={submitData} identify={identify} error={errors} />
				<KategoriProgram onHandleInput={onHandleInput} datas={submitData} identify={identify} error={errors} />
				<StatusKeikutsertaan onHandleInput={onHandleInput} datas={submitData} identify={identify} error={errors} />
				<KontrakKrs onHandleInput={onHandleInput} datas={submitData} identify={identify} error={errors} />
				<JudulAktivitasMahasiswa onHandleInput={onHandleInput} datas={submitData} identify={identify} error={errors} />
				<NoSkTugas onHandleInput={onHandleInput} datas={submitData} identify={identify} error={errors} />
				<TanggalSkTugas onHandleInput={onHandleInput} datas={submitData} identify={identify} error={errors} />
				<JenisAnggota onHandleInput={onHandleInput} datas={submitData} identify={identify} error={errors} />
				<Ips onHandleInput={onHandleInput} datas={submitData} identify={identify} error={errors} />
				<Ipk onHandleInput={onHandleInput} datas={submitData} identify={identify} error={errors} />
				<JumlahSks onHandleInput={onHandleInput} datas={submitData} identify={identify} error={errors} />
				<TotalSks onHandleInput={onHandleInput} datas={submitData} identify={identify} error={errors} />
				<BiayaKuliah onHandleInput={onHandleInput} datas={submitData} identify={identify} error={errors} />
				<SuratTugas onHandleInput={onHandleInput} datas={submitData} identify={identify} error={errors} />
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
	);
}
