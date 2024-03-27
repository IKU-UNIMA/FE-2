import React from "react";
import { useState } from "react";
import { useEffect } from "react";
import axiosInstance from "../../networks/api";
import { FiChevronDown } from "react-icons/fi";
import CurrencyFormat from "react-currency-format";
import "./input.css";

// prestasi
export const Nama = ({ onHandleInput, datas, identify, error, kategori }) => {
  return (
    <>
      {identify === "create" && (
        <>
          <div id="formPengabdian" className="flex p-4 mt-2 relative">
            <div className="w-1/4 mr-4 my-auto">
              <label className="font-medium">Nama {kategori}</label>
              <label className="text-red-600"> *</label>
            </div>
            <div className="w-3/4 relative">
              <input
                onChange={(e) => onHandleInput(e)}
                value={datas.nama}
                name="nama"
                type="text"
                className="w-full border-2 border-black px-2 py-1 pb-2 mt-1 rounded-md"
              />
              <label className="text-[14px] text-red-600">{error.nama}</label>
            </div>
          </div>
        </>
      )}
      {identify === "detail" && (
        <>
          <div className="flex px-4 py-2 w-full">
            <div className="w-1/4 mr-4">
              <label className="font-medium">Nama</label>
            </div>
            <div className="w-3/4">
              <div>{datas.nama}</div>
            </div>
          </div>
        </>
      )}
      {identify === "update" && (
        <>
          <div id="formPengabdian" className="flex p-4 mt-2 relative">
            <div className="w-1/4 mr-4 my-auto">
              <label className="font-medium">Nama</label>
              <label className="text-red-600"> *</label>
            </div>
            <div className="w-3/4 relative">
              <input
                onChange={(e) => onHandleInput(e)}
                value={datas.nama}
                name="nama"
                type="text"
                className="w-full border-2 border-black px-2 py-1 pb-2 mt-1 rounded-md"
              />
              <label className="text-[14px] text-red-600">{error?.nama}</label>
            </div>
          </div>
        </>
      )}
    </>
  );
};

export const Nim = ({ onHandleInput, datas, identify, error }) => {
  return (
    <>
      {identify === "create" && (
        <>
          <div id="formPengabdian" className="flex p-4 mt-2 relative">
            <div className="w-1/4 mr-4 my-auto">
              <label className="font-medium">Nim</label>
            </div>
            <div className="w-3/4 relative">
              <input
                onChange={(e) => onHandleInput(e)}
                value={datas.nim}
                name="nim"
                type="number"
                className="w-full border-2 border-black px-2 py-1 pb-2 mt-1 rounded-md"
              />
            </div>
          </div>
        </>
      )}
      {identify === "detail" && (
        <>
          <div className="flex px-4 py-2 w-full">
            <div className="w-1/4 mr-4">
              <label className="font-medium">Nim</label>
            </div>
            <div className="w-3/4">
              <div>{datas.nim}</div>
            </div>
          </div>
        </>
      )}
    </>
  );
};

export const Fakultas = ({ onHandleInput, datas, identify, error }) => {
  const data = [
    { id: 1, value: "Teknik" },
    { id: 2, value: "ilmu Olahraga" },
    { id: 3, value: "Ekonomi" },
    { id: 4, value: "Hukum" },
  ];
  return (
    <>
      {identify === "create" && (
        <>
          <div id="formPengabdian" className="flex p-4 mt-2 relative">
            <div className="w-1/4 mr-4 my-auto">
              <label className="font-medium">Fakultas</label>
            </div>
            <div className="w-3/4 relative">
              <select
                onChange={(e) => onHandleInput(e)}
                value={datas.fakultas}
                name="fakultas"
                className="w-full border-2 border-black px-2 py-1 pb-2 mt-1 rounded-md"
              >
                <option value={null}>pilih</option>
                {data.map((data) => (
                  <>
                    <option value={data?.id}>{data.value}</option>
                  </>
                ))}
              </select>
            </div>
          </div>
        </>
      )}
      {identify === "detail" && (
        <>
          <div className="flex px-4 py-2 w-full">
            <div className="w-1/4 mr-4">
              <label className="font-medium">Fakultas</label>
            </div>
            <div className="w-3/4">
              <div>{datas.fakultas.nama}</div>
            </div>
          </div>
        </>
      )}
    </>
  );
};

export const Prodi = ({ onHandleInput, datas, identify, error }) => {
  const data = [
    { id: 1, value: "Teknik" },
    { id: 2, value: "ilmu Olahraga" },
    { id: 3, value: "Ekonomi" },
    { id: 4, value: "Hukum" },
  ];
  return (
    <>
      {identify === "create" && (
        <>
          <div id="formPengabdian" className="flex p-4 mt-2 relative">
            <div className="w-1/4 mr-4 my-auto">
              <label className="font-medium">Prodi</label>
            </div>
            <div className="w-3/4 relative">
              <select
                onChange={(e) => onHandleInput(e)}
                value={datas.prodi}
                name="prodi"
                className="w-full border-2 border-black px-2 py-1 pb-2 mt-1 rounded-md"
              >
                <option value={null}>pilih</option>
                {data.map((data) => (
                  <>
                    <option value={data?.id}>{data.value}</option>
                  </>
                ))}
              </select>
            </div>
          </div>
        </>
      )}
      {identify === "detail" && (
        <>
          <div className="flex px-4 py-2 w-full">
            <div className="w-1/4 mr-4">
              <label className="font-medium">Prodi</label>
            </div>
            <div className="w-3/4">
              <div>{datas.prodi.nama}</div>
            </div>
          </div>
        </>
      )}
    </>
  );
};

export const Smester = ({ onHandleInput, datas, identify, error }) => {
  useEffect(() => {
    axiosInstance
      .get("/semester", {
        "Content-Type": "application/json",
      })
      .then((res) => setSmester(res.data.data))
      .catch((err) => console.log(err));
  }, []);
  const [smester, setSmester] = useState([]);
  return (
    <>
      {identify === "create" && (
        <>
          <div id="formPengabdian" className="flex p-4 mt-2 relative">
            <div className="w-1/4 mr-4 my-auto">
              <label className="font-medium">Semester</label>
              <label className="text-red-600"> *</label>
            </div>
            <div className="w-3/4 relative">
              <select
                onChange={(e) => onHandleInput(e)}
                value={datas.smester}
                name="smester"
                className="w-full border-2 border-black px-2 py-1 pb-2 mt-1 rounded-md"
              >
                <option value={null}>pilih</option>
                {smester?.map((data) => (
                  <>
                    <option value={parseInt(data?.id)}>{data.nama}</option>
                  </>
                ))}
              </select>
              <label className="text-[14px] text-red-600">
                {error?.semester}
              </label>
            </div>
          </div>
        </>
      )}
      {identify === "update" && (
        <>
          <div id="formPengabdian" className="flex p-4 mt-2 relative">
            <div className="w-1/4 mr-4 my-auto">
              <label className="font-medium">Smester</label>
              <label className="text-red-600"> *</label>
            </div>
            <div className="w-3/4 relative">
              <select
                onChange={(e) => onHandleInput(e)}
                value={datas.semester?.id}
                name="smester"
                className="w-full border-2 border-black px-2 py-1 pb-2 mt-1 rounded-md"
              >
                <option value={null}>pilih</option>
                {smester?.map((data) => (
                  <>
                    <option value={parseInt(data?.id)}>{data.nama}</option>
                  </>
                ))}
              </select>
              <label className="text-[14px] text-red-600">
                {error?.semester}
              </label>
            </div>
          </div>
        </>
      )}
      {identify === "detail" && (
        <>
          <div className="flex px-4 py-2 w-full">
            <div className="w-1/4 mr-4">
              <label className="font-medium">Smester</label>
            </div>
            <div className="w-3/4">
              <div>{datas.semester?.nama}</div>
            </div>
          </div>
        </>
      )}
    </>
  );
};

export const TingkatPrestasi = ({ onHandleInput, datas, identify, error }) => {
  const [tingkatPrestasi, setTingkatPrestasi] = useState([
    "Internasional",
    "Nasional",
    "Lokal",
  ]);

  return (
    <>
      {identify === "create" && (
        <>
          <div id="formPengabdian" className="flex p-4 mt-2 relative">
            <div className="w-1/4 mr-4 my-auto">
              <label className="font-medium">Tingkat Prestasi</label>
              <label className="text-red-600"> *</label>
            </div>
            <div className="w-3/4 relative">
              {/* <input onChange={(e) => onHandleInput(e)} value={datas.tingkatPrestasi} name="tingkatPrestasi" type="text" placeholder="Prestasi" className='w-full border-2 border-black px-2 py-1 pb-2 mt-1 rounded-md' /> */}
              <select
                onChange={(e) => onHandleInput(e)}
                value={datas.tingkatPrestasi}
                name="tingkatPrestasi"
                className="w-full border-2 border-black px-2 py-1 pb-2 mt-1 rounded-md"
              >
                <option value={null}>pilih</option>
                {tingkatPrestasi?.map((data, i) => (
                  <>
                    <option value={data}>{data}</option>
                  </>
                ))}
              </select>
              <label className="text-[14px] text-red-600">
                {error.tingkat_prestasi}
              </label>
            </div>
          </div>
        </>
      )}
      {identify === "detail" && (
        <>
          <div className="flex px-4 py-2 w-full">
            <div className="w-1/4 mr-4">
              <label className="font-medium">Tingkat Prestasi</label>
            </div>
            <div className="w-3/4">
              <div>{datas.tingkat_prestasi}</div>
            </div>
          </div>
        </>
      )}
      {identify === "update" && (
        <>
          <div id="formPengabdian" className="flex p-4 mt-2 relative">
            <div className="w-1/4 mr-4 my-auto">
              <label className="font-medium">Tingkat Prestasi</label>
              <label className="text-red-600"> *</label>
            </div>
            <div className="w-3/4 relative">
              {/* <input onChange={(e) => onHandleInput(e)} value={datas.tingkat_prestasi} name="tingkatPrestasi" type="text" placeholder="Prestasi" className='w-full border-2 border-black px-2 py-1 pb-2 mt-1 rounded-md' /> */}
              <select
                onChange={(e) => onHandleInput(e)}
                value={datas.tingkat_prestasi}
                name="tingkatPrestasi"
                className="w-full border-2 border-black px-2 py-1 pb-2 mt-1 rounded-md"
              >
                <option value={null}>pilih</option>
                {tingkatPrestasi?.map((data, i) => (
                  <>
                    <option value={data}>{data}</option>
                  </>
                ))}
              </select>
              <label className="text-[14px] text-red-600">
                {error?.tingkat_prestasi}
              </label>
            </div>
          </div>
        </>
      )}
    </>
  );
};

export const DosenPembimbing = ({
  onHandleInput,
  datas,
  identify,
  error,
  tag,
}) => {
  useEffect(() => {
    axiosInstance
      .get("/dosen", {
        "Content-Type": "application/json",
      })
      .then((res) => setDosen(res.data.data.data))
      .catch((err) => console.log(err));
  }, []);
  const [dosen, setDosen] = useState([]);
  const [mitra_litabmas, setmitra_litabmas] = useState({
    mitraDD: false,
    mitra: "",
    search: "",
  });
  const [filtermitra_litabmas, setFiltermitra_litabmas] = useState([]);
  const onHandlemitra_litabmas = (e) => {
    const NAME = e?.target.id;
    const VALUE = e?.target.value;

    if (NAME === "mitraDD")
      if (mitra_litabmas.mitraDD === false)
        setmitra_litabmas({ ...mitra_litabmas, mitraDD: true });
      else setmitra_litabmas({ ...mitra_litabmas, mitraDD: false });
    if (NAME === "search") {
      const result = dosen.filter((data) => {
        if (VALUE === "") return data;
        return data.nama.toLowerCase().includes(VALUE.toLocaleLowerCase());
      });
      setFiltermitra_litabmas(result);
      setmitra_litabmas({ ...mitra_litabmas, search: VALUE });
    }
    if (NAME === "mitra")
      setmitra_litabmas({
        ...mitra_litabmas,
        mitra: e.target.outerText,
        mitraDD: false,
        search: "",
      });
  };
  return (
    <>
      {identify === "create" && (
        <>
          <div id="formPengabdian" className="flex p-4 mt-2 relative">
            <div className="w-1/4 mr-4 my-auto">
              <label className="font-medium">Dosen Pembimbing</label>
              <label className={tag == "prestasi" ? "hidden" : "text-red-600"}>
                {" "}
                *
              </label>
            </div>
            <div className="w-3/4 relative">
              <div
                id="mitraDD"
                onClick={(e) => onHandlemitra_litabmas(e)}
                className={
                  mitra_litabmas.mitraDD === true
                    ? "flex justify-between bg-white border-2 border-black px-2 py-1 pb-2 rounded-t-md"
                    : "flex justify-between bg-white border-2 border-black px-2 py-1 pb-2 rounded-md"
                }
              >
                {mitra_litabmas.mitra === "" || datas.dosenPembimbing === "" ? (
                  <>
                    <div className="">Pilih...</div>
                  </>
                ) : (
                  <>
                    <div>{mitra_litabmas.mitra}</div>
                  </>
                )}
                <div className="my-auto">
                  <FiChevronDown />
                </div>
              </div>
              <div
                onChange={(e) => onHandlemitra_litabmas(e)}
                className={
                  mitra_litabmas.mitraDD === true
                    ? "z-10 absolute bg-white w-full border-2 border-t-0 border-black p-2 rounded-md rounded-t-sm"
                    : "hidden"
                }
              >
                <input
                  type="search"
                  placeholder="search"
                  value={mitra_litabmas.search}
                  id="search"
                  className="w-full border-2 border-black px-2 py-1 pb-2 rounded-md"
                />
                <ul>
                  {mitra_litabmas.search.length < 4 ? (
                    <label>please enter 4 or more character</label>
                  ) : !filtermitra_litabmas.length ? (
                    <div className="flex w-[100%] h-[100%] text-[25px] items-center justify-center">
                      No Result Found!
                    </div>
                  ) : (
                    filtermitra_litabmas.map((dataMitra) => {
                      return (
                        <li
                          className="skimBox border-2 border-black border-b-0 py-1 px-2"
                          value={dataMitra.id}
                          id="mitra"
                          name="mitra"
                          onClick={(i, e) => {
                            onHandlemitra_litabmas(i, e);
                            onHandleInput(e, "dosenPembimbing", dataMitra.id);
                          }}
                        >
                          {dataMitra.nama}
                        </li>
                      );
                    })
                  )}
                </ul>
              </div>
              <label className="text-[14px] text-red-600">
                {error?.dosen_pembimbing}
              </label>
            </div>
          </div>
        </>
      )}
      {identify === "update" && (
        <>
          <div id="formPengabdian" className="flex p-4 mt-2 relative">
            <div className="w-1/4 mr-4 my-auto">
              <label className="font-medium">Dosen Pembimbing</label>
              <label className={tag == "prestasi" ? "hidden" : "text-red-600"}>
                {" "}
                *
              </label>
            </div>
            <div className="w-3/4 relative">
              <div
                id="mitraDD"
                onClick={(e) => onHandlemitra_litabmas(e)}
                className={
                  mitra_litabmas.mitraDD === true
                    ? "flex justify-between bg-white border-2 border-black px-2 py-1 pb-2 rounded-t-md"
                    : "flex justify-between bg-white border-2 border-black px-2 py-1 pb-2 rounded-md"
                }
              >
                {mitra_litabmas.mitra === "" ? (
                  <>
                    <div className="">{datas.dosen_pembimbing?.nama}</div>
                  </>
                ) : (
                  <>
                    <div>{mitra_litabmas.mitra}</div>
                  </>
                )}
                <div className="my-auto">
                  <FiChevronDown />
                </div>
              </div>
              <div
                onChange={(e) => onHandlemitra_litabmas(e)}
                className={
                  mitra_litabmas.mitraDD === true
                    ? "z-10 absolute bg-white w-full border-2 border-t-0 border-black p-2 rounded-md rounded-t-sm"
                    : "hidden"
                }
              >
                <input
                  type="search"
                  placeholder="search"
                  value={mitra_litabmas.search}
                  id="search"
                  className="w-full border-2 border-black px-2 py-1 pb-2 rounded-md"
                />
                <ul>
                  {mitra_litabmas.search.length < 4 ? (
                    <label>please enter 4 or more character</label>
                  ) : !filtermitra_litabmas.length ? (
                    <div className="flex w-[100%] h-[100%] text-[25px] items-center justify-center">
                      No Result Found!
                    </div>
                  ) : (
                    filtermitra_litabmas.map((dataMitra) => {
                      return (
                        <li
                          className="skimBox border-2 border-black border-b-0 py-1 px-2"
                          value={dataMitra.id}
                          id="mitra"
                          name="mitra"
                          onClick={(i, e) => {
                            onHandlemitra_litabmas(i, e);
                            onHandleInput(
                              e,
                              "dosenPembimbing",
                              dataMitra.id,
                              dataMitra.nama
                            );
                          }}
                        >
                          {dataMitra.nama}
                        </li>
                      );
                    })
                  )}
                </ul>
              </div>
              <label className="text-[14px] text-red-600">
                {error?.dosen_pembimbing}
              </label>
            </div>
          </div>
        </>
      )}
      {identify === "detail" && (
        <>
          <div className="flex px-4 py-2 w-full">
            <div className="w-1/4 mr-4">
              <label className="font-medium">Dosen Pembimbing</label>
            </div>
            <div className="w-3/4">
              <div>{datas.dosen_pembimbing?.nama}</div>
            </div>
          </div>
        </>
      )}
    </>
  );
};

export const Penyelenggara = ({ onHandleInput, datas, identify, error }) => {
  return (
    <>
      {identify === "create" && (
        <>
          <div id="formPengabdian" className="flex p-4 mt-2 relative">
            <div className="w-1/4 mr-4 my-auto">
              <label className="font-medium">Penyelenggara</label>
              <label className="text-red-600"> *</label>
            </div>
            <div className="w-3/4 relative">
              <input
                onChange={(e) => onHandleInput(e)}
                value={datas.penyelenggara}
                name="penyelenggara"
                type="text"
                className="w-full border-2 border-black px-2 py-1 pb-2 mt-1 rounded-md"
              />
              <label className="text-[14px] text-red-600">
                {error?.penyelenggara}
              </label>
            </div>
          </div>
        </>
      )}
      {identify === "detail" && (
        <>
          <div className="flex px-4 py-2 w-full">
            <div className="w-1/4 mr-4">
              <label className="font-medium">Penyelenggara</label>
            </div>
            <div className="w-3/4">
              <div>{datas.penyelenggara}</div>
            </div>
          </div>
        </>
      )}
      {identify === "update" && (
        <>
          <div id="formPengabdian" className="flex p-4 mt-2 relative">
            <div className="w-1/4 mr-4 my-auto">
              <label className="font-medium">Penyelenggara</label>
              <label className="text-red-600"> *</label>
            </div>
            <div className="w-3/4 relative">
              <input
                onChange={(e) => onHandleInput(e)}
                value={datas.penyelenggara}
                name="penyelenggara"
                type="text"
                className="w-full border-2 border-black px-2 py-1 pb-2 mt-1 rounded-md"
              />
              <label className="text-[14px] text-red-600">
                {error?.penyelenggara}
              </label>
            </div>
          </div>
        </>
      )}
    </>
  );
};

export const Peringkat = ({ onHandleInput, datas, identify, error }) => {
  const [peringkat, setPeringkat] = useState(["1", "2", "3"]);

  return (
    <>
      {identify === "create" && (
        <>
          <div id="formPengabdian" className="flex p-4 mt-2 relative">
            <div className="w-1/4 mr-4 my-auto">
              <label className="font-medium">Peringkat</label>
              <label className="text-red-600"> *</label>
            </div>
            <div className="w-3/4 relative">
              {/* <input onChange={(e) => onHandleInput(e)} value={datas.peringkat} name="peringkat" type="text" placeholder="Peringkat" className='w-full border-2 border-black px-2 py-1 pb-2 mt-1 rounded-md' /> */}
              <select
                onChange={(e) => onHandleInput(e)}
                value={datas.peringkat}
                name="peringkat"
                className="w-full border-2 border-black px-2 py-1 pb-2 mt-1 rounded-md"
              >
                <option value={null}>pilih</option>
                {peringkat?.map((data, i) => (
                  <>
                    <option value={data}>{data}</option>
                  </>
                ))}
              </select>
              <label className="text-[14px] text-red-600">
                {error?.peringkat}
              </label>
            </div>
          </div>
        </>
      )}
      {identify === "detail" && (
        <>
          <div className="flex px-4 py-2 w-full">
            <div className="w-1/4 mr-4">
              <label className="font-medium">Peringkat</label>
            </div>
            <div className="w-3/4">
              <div>{datas.peringkat}</div>
            </div>
          </div>
        </>
      )}
      {identify === "update" && (
        <>
          <div id="formPengabdian" className="flex p-4 mt-2 relative">
            <div className="w-1/4 mr-4 my-auto">
              <label className="font-medium">Peringkat</label>
              <label className="text-red-600"> *</label>
            </div>
            <div className="w-3/4 relative">
              {/* <input onChange={(e) => onHandleInput(e)} value={datas.peringkat} name="peringkat" type="text" placeholder="Peringkat" className='w-full border-2 border-black px-2 py-1 pb-2 mt-1 rounded-md' /> */}
              <select
                onChange={(e) => onHandleInput(e)}
                value={datas.peringkat}
                name="peringkat"
                className="w-full border-2 border-black px-2 py-1 pb-2 mt-1 rounded-md"
              >
                <option value={null}>pilih</option>
                {peringkat?.map((data, i) => (
                  <>
                    <option value={data}>{data}</option>
                  </>
                ))}
              </select>
              <label className="text-[14px] text-red-600">
                {error?.peringkat}
              </label>
            </div>
          </div>
        </>
      )}
    </>
  );
};

export const Sertifikat = ({ onHandleInput, datas, identify, error, file }) => {
  return (
    <>
      {identify === "create" && (
        <>
          <div id="formPengabdian" className="flex p-4 mt-2 relative">
            <div className="w-1/4 mr-4 my-auto">
              <label className="font-medium">Sertifikat</label>
            </div>
            <div className="w-3/4 relative bg-white">
              {file === "" ? (
                <input
                  onChange={(e) => onHandleInput(e)}
                  value={""}
                  name="sertifikat"
                  type="file"
                  placeholder="Peringkat"
                  className="w-full border-2 border-black px-2 py-1 pb-2 mt-1 rounded-md"
                />
              ) : (
                <input
                  onChange={(e) => onHandleInput(e)}
                  name="sertifikat"
                  type="file"
                  placeholder="Peringkat"
                  className="w-full border-2 border-black px-2 py-1 pb-2 mt-1 rounded-md"
                />
              )}
            </div>
          </div>
        </>
      )}
      {identify === "detail" && (
        <>
          <div className="flex px-4 py-2 w-full">
            <div className="w-1/4 mr-4">
              <label className="font-medium">Sertifikat</label>
            </div>
            <div className="w-3/4">
              <div>{datas.sertifikat}</div>
            </div>
          </div>
        </>
      )}
    </>
  );
};

export const FollowedProgram = ({ onHandleInput, datas, identify, error }) => {
  const data = [
    { id: 1, value: "Teknik" },
    { id: 2, value: "ilmu Olahraga" },
    { id: 3, value: "Ekonomi" },
    { id: 4, value: "Hukum" },
  ];
  return (
    <>
      {identify === "create" && (
        <>
          <div id="formPengabdian" className="flex p-4 mt-2 relative">
            <div className="w-1/4 mr-4 my-auto">
              <label className="font-medium">Program di ikuti</label>
            </div>
            <div className="w-3/4 relative">
              <select
                onChange={(e) => onHandleInput(e)}
                value={datas.FollowedProgram}
                name="followedProgram"
                className="w-full border-2 border-black px-2 py-1 pb-2 mt-1 rounded-md"
              >
                <option value={null}>pilih</option>
                {data.map((data) => (
                  <>
                    <option value={data?.id}>{data.value}</option>
                  </>
                ))}
              </select>
            </div>
          </div>
        </>
      )}
      {identify === "detail" && (
        <>
          <div className="flex px-4 py-2 w-full">
            <div className="w-1/4 mr-4">
              <label className="font-medium">Program di ikuti</label>
            </div>
            <div className="w-3/4">
              <div>{datas.dosen_pembimbing.nama}</div>
            </div>
          </div>
        </>
      )}
    </>
  );
};

export const KategoriProgram = ({ onHandleInput, datas, identify, error }) => {
  useEffect(() => {
    axiosInstance
      .get("/kategori-program", {
        "Content-Type": "application/json",
      })
      .then((res) => setKategoriProgram(res.data.data))
      .catch((err) => console.log(err));
  }, []);
  const [kategoriProgram, setKategoriProgram] = useState([]);
  return (
    <>
      {identify === "create" && (
        <>
          <div id="formPengabdian" className="flex p-4 mt-2 relative">
            <div className="w-1/4 mr-4 my-auto">
              <label className="font-medium">Jenis Aktivitas</label>
              <label className="text-red-600"> *</label>
            </div>
            <div className="w-3/4 relative">
              <select
                onChange={(e) => onHandleInput(e)}
                value={datas.kategoriProgram}
                name="kategoriProgram"
                className="w-full border-2 border-black px-2 py-1 pb-2 mt-1 rounded-md"
              >
                <option value={null}>pilih</option>
                {kategoriProgram?.map((data) => (
                  <>
                    <option value={parseInt(data?.id)}>{data.nama}</option>
                  </>
                ))}
              </select>
              <label className="text-[14px] text-red-600">
                {error?.kategori_program}
              </label>
            </div>
          </div>
        </>
      )}
      {identify === "update" && (
        <>
          <div id="formPengabdian" className="flex p-4 mt-2 relative">
            <div className="w-1/4 mr-4 my-auto">
              <label className="font-medium">Jenis Aktivitas</label>
              <label className="text-red-600"> *</label>
            </div>
            <div className="w-3/4 relative">
              <select
                onChange={(e) => onHandleInput(e)}
                value={datas.kategori_program?.id}
                name="kategoriProgram"
                className="w-full border-2 border-black px-2 py-1 pb-2 mt-1 rounded-md"
              >
                <option value={null}>pilih</option>
                {kategoriProgram?.map((data) => (
                  <>
                    <option value={parseInt(data?.id)}>{data.nama}</option>
                  </>
                ))}
              </select>
              <label className="text-[14px] text-red-600">
                {error?.kategori_program}
              </label>
            </div>
          </div>
        </>
      )}
      {identify === "detail" && (
        <>
          <div className="flex px-4 py-2 w-full">
            <div className="w-1/4 mr-4">
              <label className="font-medium">Jenis Aktivitas</label>
            </div>
            <div className="w-3/4">
              <div>{datas.kategori_program?.nama}</div>
            </div>
          </div>
        </>
      )}
    </>
  );
};

export const StatusKeikutsertaan = ({
  onHandleInput,
  datas,
  identify,
  error,
}) => {
  const [keikutsertaan, setKeikutsertaan] = useState(["Flagship", "Mandiri"]);
  return (
    <>
      {identify === "create" && (
        <>
          <div id="formPengabdian" className="flex p-4 mt-2 relative">
            <div className="w-1/4 mr-4 my-auto">
              <label className="font-medium">Status Keikutsertaan</label>
              <label className="text-red-600"> *</label>
            </div>
            <div className="w-3/4 relative">
              {/* <input onChange={(e) => onHandleInput(e)} name="statusKeikutsertaan" type="text" className='w-full border-2 border-black px-2 py-1 pb-2 mt-1 rounded-md' /> */}
              <select
                onChange={(e) => onHandleInput(e)}
                name="statusKeikutsertaan"
                className="w-full border-2 border-black px-2 py-1 pb-2 mt-1 rounded-md"
              >
                <option value={null}>pilih</option>
                {keikutsertaan?.map((data, i) => (
                  <>
                    <option value={data}>{data}</option>
                  </>
                ))}
              </select>
              <label className="text-[14px] text-red-600">
                {error?.status_keikutsertaan}
              </label>
            </div>
          </div>
        </>
      )}
      {identify === "update" && (
        <>
          <div id="formPengabdian" className="flex p-4 mt-2 relative">
            <div className="w-1/4 mr-4 my-auto">
              <label className="font-medium">Status Keikutsertaan</label>
              <label className="text-red-600"> *</label>
            </div>
            <div className="w-3/4 relative">
              {/* <input onChange={(e) => onHandleInput(e)} value={datas.status_keikutsertaan} name="statusKeikutsertaan" type="text" className='w-full border-2 border-black px-2 py-1 pb-2 mt-1 rounded-md' /> */}
              <select
                onChange={(e) => onHandleInput(e)}
                value={datas.status_keikutsertaan}
                name="statusKeikutsertaan"
                className="w-full border-2 border-black px-2 py-1 pb-2 mt-1 rounded-md"
              >
                <option value={null}>pilih</option>
                {keikutsertaan?.map((data, i) => (
                  <>
                    <option value={data}>{data}</option>
                  </>
                ))}
              </select>
              <label className="text-[14px] text-red-600">
                {error?.status_keikutsertaan}
              </label>
            </div>
          </div>
        </>
      )}
      {identify === "detail" && (
        <>
          <div className="flex px-4 py-2 w-full">
            <div className="w-1/4 mr-4">
              <label className="font-medium">Status Keikutsertaan</label>
            </div>
            <div className="w-3/4">
              <div>{datas.status_keikutsertaan}</div>
            </div>
          </div>
        </>
      )}
    </>
  );
};

export const KontrakKrs = ({ onHandleInput, datas, identify, error }) => {
  return (
    <>
      {identify === "create" && (
        <>
          <div id="formPengabdian" className="flex p-4 mt-2 relative">
            <div className="w-1/4 mr-4 my-auto">
              <label className="font-medium">Kontrak KRS</label>
              <label className="text-red-600"> *</label>
            </div>
            <div className="w-3/4 relative">
              <div>
                <input
                  onChange={(e) => onHandleInput(e)}
                  name="kontrakKrs"
                  value={datas.kontrakKrs}
                  type="checkbox"
                  className="px-2 py-1 pb-2 mt-1"
                />
                <label> Ya</label>
              </div>
              <div>
                <label className="text-[14px] text-red-600">
                  {error?.kontrak_krs}
                </label>
              </div>
            </div>
          </div>
        </>
      )}
      {identify === "update" && (
        <>
          <div id="formPengabdian" className="flex p-4 mt-2 relative">
            <div className="w-1/4 mr-4 my-auto">
              <label className="font-medium">Kontrak KRS</label>
              <label className="text-red-600"> *</label>
            </div>
            <div className="w-3/4 relative">
              <div>
                <input
                  onChange={(e) => onHandleInput(e)}
                  name="kontrakKrs"
                  value={datas.kontrakKrs}
                  checked={datas.kontrak_krs}
                  type="checkbox"
                  className="px-2 py-1 pb-2 mt-1"
                />
                <label> Ya</label>
              </div>
              <div>
                <label className="text-[14px] text-red-600">
                  {error?.kontrak_krs}
                </label>
              </div>
            </div>
          </div>
        </>
      )}
      {identify === "detail" && (
        <>
          <div className="flex px-4 py-2 w-full">
            <div className="w-1/4 mr-4">
              <label className="font-medium">Kontrak KRS</label>
            </div>
            <div className="w-3/4">
              <div>{datas.kontrak_krs === true ? "sudah" : "belum"}</div>
            </div>
          </div>
        </>
      )}
    </>
  );
};

export const JudulAktivitasMahasiswa = ({
  onHandleInput,
  datas,
  identify,
  error,
}) => {
  return (
    <>
      {identify === "create" && (
        <>
          <div id="formPengabdian" className="flex p-4 mt-2 relative">
            <div className="w-1/4 mr-4 my-auto">
              <label className="font-medium">Judul Aktivitas</label>
              <label className="text-red-600"> *</label>
            </div>
            <div className="w-3/4 relative">
              <input
                onChange={(e) => onHandleInput(e)}
                name="judulAktivitasMahasiswa"
                value={datas.judulAktivitasMahasiswa}
                type="text"
                className="w-full border-2 border-black px-2 py-1 pb-2 mt-1 rounded-md"
              />
              <label className="text-[14px] text-red-600">
                {error?.judul_aktivitas_mahasiswa}
              </label>
            </div>
          </div>
        </>
      )}
      {identify === "update" && (
        <>
          <div id="formPengabdian" className="flex p-4 mt-2 relative">
            <div className="w-1/4 mr-4 my-auto">
              <label className="font-medium">Judul Aktivitas</label>
              <label className="text-red-600"> *</label>
            </div>
            <div className="w-3/4 relative">
              <input
                onChange={(e) => onHandleInput(e)}
                name="judulAktivitasMahasiswa"
                value={datas.judul_aktivitas_mahasiswa}
                type="text"
                className="w-full border-2 border-black px-2 py-1 pb-2 mt-1 rounded-md"
              />
              <label className="text-[14px] text-red-600">
                {error?.judul_aktivitas_mahasiswa}
              </label>
            </div>
          </div>
        </>
      )}
      {identify === "detail" && (
        <>
          <div className="flex px-4 py-2 w-full">
            <div className="w-1/4 mr-4">
              <label className="font-medium">Judul Aktivitas</label>
            </div>
            <div className="w-3/4">
              <div>{datas.judul_aktivitas_mahasiswa}</div>
            </div>
          </div>
        </>
      )}
    </>
  );
};

export const NoSkTugas = ({ onHandleInput, datas, identify, error }) => {
  return (
    <>
      {identify === "create" && (
        <>
          <div id="formPengabdian" className="flex p-4 mt-2 relative">
            <div className="w-1/4 mr-4 my-auto">
              <label className="font-medium">No SK Tugas</label>
              <label className="text-red-600"> *</label>
            </div>
            <div className="w-3/4 relative">
              <input
                onChange={(e) => onHandleInput(e)}
                name="noSkTugas"
                value={datas.noSkTugas}
                type="text"
                className="w-full border-2 border-black px-2 py-1 pb-2 mt-1 rounded-md"
              />
              <label className="text-[14px] text-red-600">
                {error?.no_sk_tugas}
              </label>
            </div>
          </div>
        </>
      )}
      {identify === "update" && (
        <>
          <div id="formPengabdian" className="flex p-4 mt-2 relative">
            <div className="w-1/4 mr-4 my-auto">
              <label className="font-medium">No SK Tugas</label>
              <label className="text-red-600"> *</label>
            </div>
            <div className="w-3/4 relative">
              <input
                onChange={(e) => onHandleInput(e)}
                name="noSkTugas"
                value={datas.no_sk_tugas}
                type="text"
                className="w-full border-2 border-black px-2 py-1 pb-2 mt-1 rounded-md"
              />
              <label className="text-[14px] text-red-600">
                {error?.no_sk_tugas}
              </label>
            </div>
          </div>
        </>
      )}
      {identify === "detail" && (
        <>
          <div className="flex px-4 py-2 w-full">
            <div className="w-1/4 mr-4">
              <label className="font-medium">No SK Tugas</label>
            </div>
            <div className="w-3/4">
              <div>{datas.no_sk_tugas}</div>
            </div>
          </div>
        </>
      )}
    </>
  );
};

export const TanggalSkTugas = ({ onHandleInput, datas, identify, error }) => {
  return (
    <>
      {identify === "create" && (
        <>
          <div id="formPengabdian" className="flex p-4 mt-2 relative">
            <div className="w-1/4 mr-4 my-auto">
              <label className="font-medium">Tanggal SK Tugas</label>
              <label className="text-red-600"> *</label>
            </div>
            <div className="w-3/4 relative">
              <input
                onChange={(e) => onHandleInput(e)}
                name="tanggalSkTugas"
                value={datas.tanggalSkTugas}
                type="date"
                className="w-full border-2 border-black px-2 py-1 pb-2 mt-1 rounded-md"
              />
              <label className="text-[14px] text-red-600">
                {error?.tanggal_sk_tugas}
              </label>
            </div>
          </div>
        </>
      )}
      {identify === "update" && (
        <>
          <div id="formPengabdian" className="flex p-4 mt-2 relative">
            <div className="w-1/4 mr-4 my-auto">
              <label className="font-medium">Tanggal SK Tugas</label>
              <label className="text-red-600"> *</label>
            </div>
            <div className="w-3/4 relative">
              <input
                onChange={(e) => onHandleInput(e)}
                name="tanggalSkTugas"
                value={datas.tanggal_sk_tugas?.split("T00:00:00+07:00")[0]}
                type="date"
                className="w-full border-2 border-black px-2 py-1 pb-2 mt-1 rounded-md"
              />
              <label className="text-[14px] text-red-600">
                {error?.tanggal_sk_tugas}
              </label>
            </div>
          </div>
        </>
      )}
      {identify === "detail" && (
        <>
          <div className="flex px-4 py-2 w-full">
            <div className="w-1/4 mr-4">
              <label className="font-medium">Tanggal SK Tugas</label>
            </div>
            <div className="w-3/4">
              <div>{datas.tanggal_sk_tugas}</div>
            </div>
          </div>
        </>
      )}
    </>
  );
};

export const JenisAnggota = ({ onHandleInput, datas, identify, error }) => {
  const [jenis, setJenis] = useState(["Tunggal", "Kelompok"]);
  return (
    <>
      {identify === "create" && (
        <>
          <div id="formPengabdian" className="flex p-4 mt-2 relative">
            <div className="w-1/4 mr-4 my-auto">
              <label className="font-medium">Jenis Anggota</label>
              <label className="text-red-600"> *</label>
            </div>
            <div className="w-3/4 relative">
              {/* <input onChange={(e) => onHandleInput(e)} name="jenisAnggota" value={datas.jenisAnggota} type="text" className='w-full border-2 border-black px-2 py-1 pb-2 mt-1 rounded-md' /> */}
              <select
                onChange={(e) => onHandleInput(e)}
                value={datas.jenisAnggota}
                name="jenisAnggota"
                className="w-full border-2 border-black px-2 py-1 pb-2 mt-1 rounded-md"
              >
                <option value={null}>pilih</option>
                {jenis?.map((data, i) => (
                  <>
                    <option value={data}>{data}</option>
                  </>
                ))}
              </select>
              <label className="text-[14px] text-red-600">
                {error?.jenis_anggota}
              </label>
            </div>
          </div>
        </>
      )}
      {identify === "update" && (
        <>
          <div id="formPengabdian" className="flex p-4 mt-2 relative">
            <div className="w-1/4 mr-4 my-auto">
              <label className="font-medium">Jenis Anggota</label>
              <label className="text-red-600"> *</label>
            </div>
            <div className="w-3/4 relative">
              {/* <input onChange={(e) => onHandleInput(e)} name="jenisAnggota" value={datas.jenis_anggota} type="text" className='w-full border-2 border-black px-2 py-1 pb-2 mt-1 rounded-md' />
                                <label className="text-[14px] text-red-600">{error?.jenis_anggota}</label> */}
              <select
                onChange={(e) => onHandleInput(e)}
                value={datas.jenis_anggota}
                name="jenisAnggota"
                className="w-full border-2 border-black px-2 py-1 pb-2 mt-1 rounded-md"
              >
                <option value={null}>pilih</option>
                {jenis?.map((data, i) => (
                  <>
                    <option value={data}>{data}</option>
                  </>
                ))}
              </select>
            </div>
          </div>
        </>
      )}
      {identify === "detail" && (
        <>
          <div className="flex px-4 py-2 w-full">
            <div className="w-1/4 mr-4">
              <label className="font-medium">Jenis Anggota</label>
            </div>
            <div className="w-3/4">
              <div>{datas.jenis_anggota}</div>
            </div>
          </div>
        </>
      )}
    </>
  );
};

export const Ips = ({ onHandleInput, datas, identify, error }) => {
  return (
    <>
      {identify === "create" && (
        <>
          <div id="formPengabdian" className="flex p-4 mt-2 relative">
            <div className="w-1/4 mr-4 my-auto">
              <label className="font-medium">IPS</label>
              <label className="text-red-600"> *</label>
            </div>
            <div className="w-3/4 relative">
              <input
                onChange={(e) => onHandleInput(e)}
                name="ips"
                value={datas.ips}
                type="number"
                className="w-full border-2 border-black px-2 py-1 pb-2 mt-1 rounded-md"
              />
              <label className="text-[14px] text-red-600">{error?.ips}</label>
            </div>
          </div>
        </>
      )}
      {identify === "update" && (
        <>
          <div id="formPengabdian" className="flex p-4 mt-2 relative">
            <div className="w-1/4 mr-4 my-auto">
              <label className="font-medium">IPS</label>
              <label className="text-red-600"> *</label>
            </div>
            <div className="w-3/4 relative">
              <input
                onChange={(e) => onHandleInput(e)}
                name="ips"
                value={datas.ips}
                type="number"
                className="w-full border-2 border-black px-2 py-1 pb-2 mt-1 rounded-md"
              />
              <label className="text-[14px] text-red-600">{error?.ips}</label>
            </div>
          </div>
        </>
      )}
      {identify === "detail" && (
        <>
          <div className="flex px-4 py-2 w-full">
            <div className="w-1/4 mr-4">
              <label className="font-medium">IPS</label>
            </div>
            <div className="w-3/4">
              <div>{datas.ips}</div>
            </div>
          </div>
        </>
      )}
    </>
  );
};

export const Ipk = ({ onHandleInput, datas, identify, error }) => {
  return (
    <>
      {identify === "create" && (
        <>
          <div id="formPengabdian" className="flex p-4 mt-2 relative">
            <div className="w-1/4 mr-4 my-auto">
              <label className="font-medium">IPK</label>
              <label className="text-red-600"> *</label>
            </div>
            <div className="w-3/4 relative">
              <input
                onChange={(e) => onHandleInput(e)}
                name="ipk"
                value={datas.ipk}
                type="number"
                className="w-full border-2 border-black px-2 py-1 pb-2 mt-1 rounded-md"
              />
              <label className="text-[14px] text-red-600">{error?.ipk}</label>
            </div>
          </div>
        </>
      )}
      {identify === "update" && (
        <>
          <div id="formPengabdian" className="flex p-4 mt-2 relative">
            <div className="w-1/4 mr-4 my-auto">
              <label className="font-medium">IPK</label>
              <label className="text-red-600"> *</label>
            </div>
            <div className="w-3/4 relative">
              <input
                onChange={(e) => onHandleInput(e)}
                name="ipk"
                value={datas.Ipk}
                type="number"
                className="w-full border-2 border-black px-2 py-1 pb-2 mt-1 rounded-md"
              />
              <label className="text-[14px] text-red-600">{error?.ipk}</label>
            </div>
          </div>
        </>
      )}
      {identify === "detail" && (
        <>
          <div className="flex px-4 py-2 w-full">
            <div className="w-1/4 mr-4">
              <label className="font-medium">IPK</label>
            </div>
            <div className="w-3/4">
              <div>{datas.Ipk}</div>
            </div>
          </div>
        </>
      )}
    </>
  );
};

export const JumlahSks = ({ onHandleInput, datas, identify, error }) => {
  return (
    <>
      {identify === "create" && (
        <>
          <div id="formPengabdian" className="flex p-4 mt-2 relative">
            <div className="w-1/4 mr-4 my-auto">
              <label className="font-medium">Jumlah SKS</label>
              <label className="text-red-600"> *</label>
            </div>
            <div className="w-3/4 relative">
              <input
                onChange={(e) => onHandleInput(e)}
                name="jumlahSks"
                value={datas.jumlahSks}
                type="text"
                className="w-full border-2 border-black px-2 py-1 pb-2 mt-1 rounded-md"
              />
              <label className="text-[14px] text-red-600">
                {error?.jumlah_sks}
              </label>
            </div>
          </div>
        </>
      )}
      {identify === "update" && (
        <>
          <div id="formPengabdian" className="flex p-4 mt-2 relative">
            <div className="w-1/4 mr-4 my-auto">
              <label className="font-medium">Jumlah SKS</label>
              <label className="text-red-600"> *</label>
            </div>
            <div className="w-3/4 relative">
              <input
                onChange={(e) => onHandleInput(e)}
                name="jumlahSks"
                value={datas.jumlah_sks}
                type="text"
                className="w-full border-2 border-black px-2 py-1 pb-2 mt-1 rounded-md"
              />
              <label className="text-[14px] text-red-600">
                {error?.jumlah_sks}
              </label>
            </div>
          </div>
        </>
      )}
      {identify === "detail" && (
        <>
          <div className="flex px-4 py-2 w-full">
            <div className="w-1/4 mr-4">
              <label className="font-medium">Jumlah SKS</label>
            </div>
            <div className="w-3/4">
              <div>{datas.jumlah_sks}</div>
            </div>
          </div>
        </>
      )}
    </>
  );
};

export const TotalSks = ({ onHandleInput, datas, identify, error }) => {
  return (
    <>
      {identify === "create" && (
        <>
          <div id="formPengabdian" className="flex p-4 mt-2 relative">
            <div className="w-1/4 mr-4 my-auto">
              <label className="font-medium">Total SKS</label>
              <label className="text-red-600"> *</label>
            </div>
            <div className="w-3/4 relative">
              <input
                onChange={(e) => onHandleInput(e)}
                name="totalSks"
                value={datas.totalSks}
                type="text"
                className="w-full border-2 border-black px-2 py-1 pb-2 mt-1 rounded-md"
              />
              <label className="text-[14px] text-red-600">
                {error?.total_sks}
              </label>
            </div>
          </div>
        </>
      )}
      {identify === "update" && (
        <>
          <div id="formPengabdian" className="flex p-4 mt-2 relative">
            <div className="w-1/4 mr-4 my-auto">
              <label className="font-medium">Total SKS</label>
              <label className="text-red-600"> *</label>
            </div>
            <div className="w-3/4 relative">
              <input
                onChange={(e) => onHandleInput(e)}
                name="totalSks"
                value={datas.total_sks}
                type="text"
                className="w-full border-2 border-black px-2 py-1 pb-2 mt-1 rounded-md"
              />
              <label className="text-[14px] text-red-600">
                {error?.total_sks}
              </label>
            </div>
          </div>
        </>
      )}
      {identify === "detail" && (
        <>
          <div className="flex px-4 py-2 w-full">
            <div className="w-1/4 mr-4">
              <label className="font-medium">Total SKS</label>
            </div>
            <div className="w-3/4">
              <div>{datas.total_sks}</div>
            </div>
          </div>
        </>
      )}
    </>
  );
};

export const BiayaKuliah = ({ onHandleInput, datas, identify, error }) => {
  return (
    <>
      {identify === "create" && (
        <>
          <div id="formPengabdian" className="flex p-4 mt-2 relative">
            <div className="w-1/4 mr-4 my-auto">
              <label className="font-medium">Biaya Kuliah</label>
              <label className="text-red-600"> *</label>
            </div>
            <div className="w-3/4 relative">
              <CurrencyFormat
                name="biayaKuliah"
                className="w-full border-2 border-black px-2 py-1 pb-2 rounded-md"
                value={datas.biayaKuliah}
                thousandSeparator={true}
                prefix={"Rp "}
                onValueChange={(e) => {
                  const { formattedValue, value } = e;
                  const valueParse = parseFloat(value, 10);
                  // formattedValue = $2,223
                  // value ie, 2223
                  onHandleInput(e, "biayaKuliah");
                }}
              />
              <label className="text-[14px] text-red-600">
                {error?.biaya_kuliah}
              </label>
            </div>
          </div>
        </>
      )}
      {identify === "update" && (
        <>
          <div id="formPengabdian" className="flex p-4 mt-2 relative">
            <div className="w-1/4 mr-4 my-auto">
              <label className="font-medium">Biaya Kuliah</label>
              <label className="text-red-600"> *</label>
            </div>
            <div className="w-3/4 relative">
              <CurrencyFormat
                name="biayaKuliah"
                className="w-full border-2 border-black px-2 py-1 pb-2 rounded-md"
                value={datas.biaya_kuliah}
                thousandSeparator={true}
                prefix={"Rp "}
                onValueChange={(e) => {
                  const { formattedValue, value } = e;
                  const valueParse = parseFloat(value, 10);
                  // formattedValue = $2,223
                  // value ie, 2223
                  onHandleInput(e, "biayaKuliah");
                }}
              />
              <label className="text-[14px] text-red-600">
                {error?.biaya_kuliah}
              </label>
            </div>
          </div>
        </>
      )}
      {identify === "detail" && (
        <>
          <div className="flex px-4 py-2 w-full">
            <div className="w-1/4 mr-4">
              <label className="font-medium">Biaya Kuliah</label>
            </div>
            <div className="w-3/4">
              <div>{datas.biaya_kuliah}</div>
            </div>
          </div>
        </>
      )}
    </>
  );
};

export const SuratTugas = ({ onHandleInput, datas, identify, error }) => {
  return (
    <>
      {identify === "create" && (
        <>
          <div id="formPengabdian" className="flex p-4 mt-2 relative">
            <div className="w-1/4 mr-4 my-auto">
              <label className="font-medium">Surat Tugas</label>
            </div>
            <div className="w-3/4 relative bg-white">
              <input
                onChange={(e) => onHandleInput(e)}
                name="suratTugas"
                type="file"
                className="w-full border-2 border-black px-2 py-1 pb-2 mt-1 rounded-md"
              />
            </div>
          </div>
        </>
      )}
      {identify === "update" && (
        <>
          <div id="formPengabdian" className="flex p-4 mt-2 relative">
            <div className="w-1/4 mr-4 my-auto">
              <label className="font-medium">Surat Tugas</label>
            </div>
            <div className="w-3/4 relative bg-white">
              <input
                onChange={(e) => onHandleInput(e)}
                name="suratTugas"
                type="file"
                className="w-full border-2 border-black px-2 py-1 pb-2 mt-1 rounded-md"
              />
            </div>
          </div>
        </>
      )}
      {identify === "detail" && (
        <>
          <div className="flex px-4 py-2 w-full">
            <div className="w-1/4 mr-4">
              <label className="font-medium">Surat Tugas</label>
            </div>
            <div className="w-3/4">
              <a href={datas.surat_tugas}>{datas.surat_tugas}</a>
            </div>
          </div>
        </>
      )}
    </>
  );
};

export const BeritaAcara = ({ onHandleInput, datas, identify, error }) => {
  return (
    <>
      {identify === "create" && (
        <>
          <div id="formPengabdian" className="flex p-4 mt-2 relative">
            <div className="w-1/4 mr-4 my-auto">
              <label className="font-medium">Berita Acara</label>
            </div>
            <div className="w-3/4 relative bg-white">
              <input
                onChange={(e) => onHandleInput(e)}
                name="beritaAcara"
                type="file"
                className="w-full border-2 border-black px-2 py-1 pb-2 mt-1 rounded-md"
              />
            </div>
          </div>
        </>
      )}
      {identify === "update" && (
        <>
          <div id="formPengabdian" className="flex p-4 mt-2 relative">
            <div className="w-1/4 mr-4 my-auto">
              <label className="font-medium">Berita Acara</label>
            </div>
            <div className="w-3/4 relative">
              <input
                onChange={(e) => onHandleInput(e)}
                name="beritaAcara"
                type="file"
                className="w-full border-2 border-black px-2 py-1 pb-2 mt-1 rounded-md"
              />
            </div>
          </div>
        </>
      )}
      {identify === "detail" && (
        <>
          <div className="flex px-4 py-2 w-full">
            <div className="w-1/4 mr-4">
              <label className="font-medium">Berita Acara</label>
            </div>
            <div className="w-3/4">
              <a className="w-full" href={datas.berita_acara}>
                {datas.berita_acara}
              </a>
            </div>
          </div>
        </>
      )}
    </>
  );
};

export const StatusMahasiswa = ({ onHandleInput, datas, identify, error }) => {
  return (
    <>
      <div className="flex px-4 py-2 w-full">
        <div className="w-1/4 mr-4">
          <label className="font-medium">Status Mahasiswa</label>
        </div>
        <div className="flex w-3/4">
          <div className="mr-4">
            <div className="font-medium">Nama</div>
            <div className="mt-2 font-medium">NIM</div>
            <div className="mt-2 font-medium">Fakultas</div>
            <div className="mt-2 font-medium">Prodi</div>
          </div>
          <div>
            <div className="">: {datas.mahasiswa?.nama}</div>
            <div className="mt-2">: {datas.mahasiswa?.nim}</div>
            <div className="mt-2">
              : {datas.mahasiswa?.prodi?.fakultas?.nama}
            </div>
            <div className="mt-2">: {datas.mahasiswa?.prodi?.nama}</div>
          </div>
        </div>
      </div>
    </>
  );
};
