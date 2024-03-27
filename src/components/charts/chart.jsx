import React from "react";
import { useState } from "react";
import { useEffect } from "react";
import { PieChart, Pie, Cell, Tooltip, Legend } from "recharts";
import axiosInstance from "../../networks/api";
import PrimaryButton from "../button/PrimaryButton";
import {
  BsFillInfoCircleFill,
  BsFillTrashFill,
  BsPencilSquare,
} from "react-icons/bs";
import { useNavigate } from "react-router-dom";
import "./chart.css";
import LoadingSkeletonAdminDashboard from "../loadingSkeleton/loadingAdminDashboard";

export const ChartsData = () => {
  const dataPie = [
    { jurusan: "rpl", students: 500 },
    { jurusan: "tkj", students: 300 },
    { jurusan: "mm", students: 100 },
  ];

  const COLORS = ["#8884d8", "#82ca9d", "#FFBB28", "#EEEEEE"];
  const reducer = (accumulator, currentValue) => accumulator + currentValue;
  const pieData = dataPie.map((data) => data.students);

  const CustomTooltip = ({ active, payload, label }) => {
    const reducer = (accumulator, currentValue) => accumulator + currentValue;
    const pieData = dataPie.map((data) => data.students);
    // console.log(pieData.reduce(reducer))
    if (active) {
      // console.log("payload", payload)
      return (
        <div
          className="custom-tooltip"
          style={{
            backgroundColor: "#ffff",
            padding: "5px",
            border: "1px solid #cccc",
          }}
        >
          <div className="">
            {/* <div className="">{`${payload[0].name} : ${(payload[0].value / pieData.reduce(reducer) * 100)}%`}</div> ini yang bener */}
            <div className="">{`${payload[0].name} : ${
              (payload[0].value / 1000) * 100
            }%`}</div>
            <div>{`${payload[0].value}`} students</div>
          </div>
        </div>
      );
    }
    return null;
  };

  return (
    <>
      <div className="flex">
        <div className="w-[75%] bg-white p-4 rounded-xl shadow-lg">
          <h1 className="text-[20px] mb-2 font-medium tracking-[1px]">Title</h1>
          <div className="flex justify-center">
            <PieChart className="mx-auto w-[40%]" width={250} height={250}>
              <Pie
                data={dataPie}
                color="#000000"
                dataKey="students"
                nameKey="jurusan"
                cx="50%"
                cy="50%"
                outerRadius={120}
                fill="#8884d8"
              >
                {dataPie.map((entry, index) => (
                  <>
                    <Cell
                      key={`cell-${index}`}
                      fill={COLORS[index % COLORS.length]}
                    />
                  </>
                ))}
              </Pie>
              <Tooltip content={<CustomTooltip />} />
              {/* <Legend /> */}
            </PieChart>
            <div className="text-center justify-center w-[60%] my-auto">
              {dataPie.map((datas, index) => {
                return (
                  <>
                    <div className="flex mr-2 mb-2">
                      <div
                        className="p-2 h-[10px] my-auto rounded-full mr-4"
                        style={{
                          backgroundColor: `${COLORS[index % COLORS.length]}`,
                        }}
                      ></div>
                      {/* <div className="">{datas.jurusan} {(datas.students / pieData.reduce(reducer) * 100)}%</div> ini yang bener */}
                      <div className="flex w-[90%] justify-between">
                        <div className="mr-1">{datas.jurusan}</div>
                        <div className="">{(datas.students / 1000) * 100}%</div>
                      </div>
                    </div>
                    <div className="h-[1px] w-full bg-black mb-2"></div>
                  </>
                );
              })}
            </div>
          </div>
        </div>

        <div className="w-[25%] h-full pl-6">
          <div className="flex p-4 mx-auto justify-center items-center rounded-lg bg-white">
            <h1 className="text-[40px] font-medium mr-3">1000</h1>
            <h1 className="font-medium">Mahasiswa</h1>
          </div>
          <div className="flex p-4 mx-auto justify-center items-center rounded-lg bg-white mt-5">
            <h1 className="text-[40px] font-medium mr-3">9</h1>
            <h1 className="font-medium">Fakultas</h1>
          </div>
          <div className="flex p-4 mx-auto justify-center items-center rounded-lg bg-white mt-5">
            <h1 className="text-[40px] font-medium mr-3">50</h1>
            <h1 className="font-medium">Jurusan</h1>
          </div>
        </div>
      </div>
    </>
  );
};

export const ChartByTotal = ({ identify, buttonBool }) => {
  const [persentageData, setDataPersentage] = useState([]);
  const [buttonHide, setButtonHide] = useState(buttonBool);
  useEffect(() => {
    axiosInstance
      .get(`/dashboard/total`, {
        "Content-Type": "application/json",
      })
      .then((res) => {
        console.log("total", res.data.data);
        setDataPersentage(res.data.data);
      })
      .catch((err) => console.log(err));
  }, []);

  const COLORS = ["#8884d8", "#82ca9d", "#FFBB28", "#EEEEEE"];
  const reducer = (accumulator, currentValue) => accumulator + currentValue;
  const pieData = persentageData.map((data) => data.total);
  return (
    <>
      <div className="flex">
        <div className="w-[100%] bg-white p-4 rounded-xl shadow-lg">
          <div className="flex justify-between">
            <h1 className="text-[20px] mb-2 font-medium tracking-[1px]">
              Title
            </h1>
            {buttonHide === true && (
              <>
                <div>
                  <PrimaryButton textButton={"Detail"} />
                </div>
              </>
            )}
          </div>
          <div className="flex justify-center">
            <PieChart className="mx-auto w-[40%]" width={250} height={250}>
              <Pie
                data={persentageData}
                color="#000000"
                dataKey="total"
                nameKey="nama"
                cx="50%"
                cy="50%"
                outerRadius={120}
                fill="#8884d8"
              >
                {persentageData.map((entry, index) => (
                  <>
                    <Cell
                      key={`cell-${index}`}
                      fill={COLORS[index % COLORS.length]}
                    />
                  </>
                ))}
              </Pie>
              {/* <Tooltip content={<CustomTooltip />} /> */}
              {/* <Legend /> */}
            </PieChart>
            <div className="text-center mx-auto justify-center w-[50%] my-auto">
              {persentageData.map((datas, index) => {
                // console.log("datas", datas)
                const total = JSON.stringify(
                  (datas.total / pieData.reduce(reducer)) * 100
                );
                return (
                  <>
                    <div className="flex mr-2 mb-2">
                      <div
                        className="p-2 h-[10px] my-auto rounded-full mr-4"
                        style={{
                          backgroundColor: `${COLORS[index % COLORS.length]}`,
                        }}
                      ></div>
                      {/* <div className="">{datas.jurusan} {(datas.students / pieData.reduce(reducer) * 100)}%</div> ini yang bener */}
                      <div className="flex w-[90%] justify-between">
                        <div className="mr-1">{datas.nama}</div>
                        <div className="">
                          {datas.total} ({total.slice(0, 4)}
                          {total.length > 2
                            ? total.slice(total.length - 1, total.length)
                            : null}
                          %)
                        </div>
                      </div>
                    </div>
                    <div className="h-[1px] w-full bg-black mb-2"></div>
                  </>
                );
              })}
            </div>
          </div>
        </div>

        <div className="w-[25%] h-full pl-6">
          {persentageData.map((data) => (
            <>
              <div
                id="persentageTotal"
                className="flex flex-col shadow-lg p-4 mx-auto justify-center items-center rounded-lg bg-white"
              >
                <h1 className="text-[40px] font-medium mr-3">{data.total}</h1>
                <h1 className="font-medium">{data.nama}</h1>
              </div>
            </>
          ))}
        </div>
      </div>
    </>
  );
};

export const ChartsByFitur = ({ identify, tahun }) => {
  const [persentageData, setDataPersentage] = useState([]);
  const [kategoriKM, setKategoriKM] = useState([]);
  useEffect(() => {
    axiosInstance
      .get(`/dashboard/${identify}`, {
        "Content-Type": "application/json",
      })
      .then((res) => {
        console.log("charts fakultas", res.data.data);
        setDataPersentage(res.data.data);
      })
      .catch((err) => console.log(err));

    if (identify === "kampus-merdeka") {
      axiosInstance
        .get(`/dashboard/${identify}/kategori`, {
          "Content-Type": "application/json",
        })
        .then((res) => {
          console.log("kategori kampus merdeka", res.data.data);
          setKategoriKM(res.data.data);
        })
        .catch((err) => console.log(err));
    }
  }, [identify, tahun]);
  const dataPie = [
    { jurusan: "rpl", students: 500 },
    { jurusan: "tkj", students: 300 },
    { jurusan: "mm", students: 100 },
  ];

  const COLORS = ["#8884d8", "#82ca9d", "#FFBB28", "#EEEEEE"];
  const reducer = (accumulator, currentValue) => accumulator + currentValue;
  const pieData = persentageData.map((data) => data.jumlah);

  const CustomTooltip = ({ active, payload, label }) => {
    const reducer = (accumulator, currentValue) => accumulator + currentValue;
    const pieData = persentageData.map((data) => data.jumlah);
    // console.log(pieData.reduce(reducer))
    if (active) {
      // console.log("payload", payload)
      return (
        <div
          className="custom-tooltip"
          style={{
            backgroundColor: "#ffff",
            padding: "5px",
            border: "1px solid #cccc",
          }}
        >
          <div className="">
            <div className="">{`${payload[0].name} : ${
              (payload[0].value / pieData.reduce(reducer)) * 100
            }%`}</div>
            {/* <div className="">{`${payload[0].name} : ${(payload[0].value / 1000 * 100)}%`}</div> */}
            <div>{`${payload[0].value}`} students</div>
          </div>
        </div>
      );
    }
    return null;
  };

  return (
    <>
      <div className="">
        <div className="w-[100%] bg-white p-4 rounded-t-xl shadow-lg">
          <h1 className="text-[20px] mb-2 font-medium tracking-[1px]">
            {identify}
          </h1>
          <div className="flex flex-col justify-center">
            {persentageData.length !== 0 ? (
              <>
                <PieChart className="mx-auto w-[40%]" width={250} height={250}>
                  <Pie
                    data={persentageData}
                    color="#000000"
                    dataKey="jumlah"
                    nameKey="nama"
                    cx="50%"
                    cy="50%"
                    outerRadius={120}
                    fill="#8884d8"
                  >
                    {persentageData.map((entry, index) => (
                      <>
                        <Cell
                          key={`cell-${index}`}
                          fill={COLORS[index % COLORS.length]}
                        />
                      </>
                    ))}
                  </Pie>
                  {/* <Tooltip content={<CustomTooltip />} /> */}
                  {/* <Legend /> */}
                </PieChart>
                <div className="text-center mx-auto justify-center w-[60%] mt-4 my-auto">
                  {persentageData.map((datas, index) => {
                    const total = JSON.stringify(
                      (datas.jumlah / pieData.reduce(reducer)) * 100
                    );
                    return (
                      <>
                        <div className="flex mr-2 mb-2">
                          <div
                            className="p-2 h-[10px] my-auto rounded-full mr-4"
                            style={{
                              backgroundColor: `${
                                COLORS[index % COLORS.length]
                              }`,
                            }}
                          ></div>
                          {/* <div className="">{datas.jurusan} {(datas.students / pieData.reduce(reducer) * 100)}%</div> ini yang bener */}
                          <div className="flex w-[100%] justify-between">
                            <div className="mr-1">{datas.nama}</div>
                            <div className="">
                              {datas.jumlah} ({total.slice(0, 4)}
                              {total.length > 2 && persentageData.length !== 1
                                ? total.slice(total.length - 1, total.length)
                                : null}
                              %)
                            </div>
                          </div>
                        </div>
                        <div className="h-[1px] w-full bg-black mb-2"></div>
                      </>
                    );
                  })}
                </div>
              </>
            ) : (
              <label>Data tidak ditemukan!</label>
            )}
          </div>
        </div>

        <div className="bg-white p-4 rounded-b-lg">
          <div className="flex flex-col text-left text-[16px] font-medium mt-2">
            <div className="flex w-full px-4 py-2 bg-[#2b33331a]">
              <div className="w-[70%]">Kategori Program</div>
              <div className="w-[30%]">Jumlah</div>
            </div>
            <div className="flex flex-col w-full">
              {kategoriKM.map((data) => (
                <>
                  <div className="flex py-2">
                    <div className="flex w-[70%] px-2">
                      <p className="text-left">{data.nama}</p>
                    </div>
                    <div className="flex w-[30%] px-2">
                      <p className="text-left">{data.jumlah}</p>
                    </div>
                  </div>
                </>
              ))}
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export const ChartByProdi = ({ identify, tahun }) => {
  const [persentageData, setDataPersentage] = useState([]);
  const [fakultas, setFakultas] = useState([]);
  const [filtered, setFiltered] = useState(0);
  useEffect(() => {
    axiosInstance
      .get(`/dashboard/${identify}/detail`, {
        "Content-Type": "application/json",
      })
      .then((res) => {
        console.log("chart prodi", res.data.data);
        setDataPersentage(res.data.data);
      })
      .catch((err) => console.log(err));
    axiosInstance
      .get(`/fakultas`, {
        "Content-Type": "application/json",
      })
      .then((res) => {
        console.log("fakultas", res.data.data);
        setFakultas(res.data.data);
      })
      .catch((err) => console.log(err));
  }, [identify, tahun, filtered]);
  return (
    <>
      <div className={"bg-white rounded-xl shadow-lg mt-4"}>
        <div className="rounded-t-md px-4 py-4 border-b-[1px] border-[#2C3333]">
          <h1 className="font-medium text-[18px] my-auto">Program Studi</h1>
        </div>

        <div className="p-4">
          {/* <div className='flex rounded-b-md'>
                        <div className="flex flex-col w-full mr-1">
                            <label>Fakultas</label>
                            <select onChange={(e) => setFiltered(e.target.value)} value={filtered} name="tahun" className='w-[30%] border-2 border-black px-2 py-1 pb-2 mt-1 rounded-md'>
                                <option value={0}>Semua</option>
                                {fakultas?.map((data) => (
                                    <>
                                        <option value={data.id}>{data.nama}</option>
                                    </>
                                ))
                                }
                            </select>
                        </div>
                    </div> */}

          <table className="w-[100%] rounded-md mt-4">
            <tr className="border-[2px] border-black">
              <th className="border-[2px] border-black">Prodi</th>
              <th className="border-[2px] border-black">Fakultas</th>
              <th className="border-[2px] border-black">Smester</th>
              <th className="border-[2px] border-black">Jumlah</th>
            </tr>
            {persentageData.length === 0 ? (
              <label>Data tidak ditemukan!</label>
            ) : (
              persentageData.map((data) => (
                <>
                  <tr>
                    <td className="border-[2px] border-black px-2">
                      {data.prodi?.jenjang} {data.prodi?.nama}
                    </td>
                    <td className="border-[2px] border-black px-2">
                      {data.fakultas?.nama}
                    </td>
                    <td className="text-center border-[2px] border-black px-2">
                      {data.Semester?.nama}
                    </td>
                    <td className="text-center border-[2px] border-black px-2">
                      {data.jumlah}
                    </td>
                  </tr>
                </>
              ))
            )}
          </table>
        </div>
      </div>
    </>
  );
};

export const ChartByDashboard = ({ tahun, identify }) => {
  const navigate = useNavigate();
  const [loading, setLoading] = useState(true);
  const [persentageData, setDataPersentage] = useState([]);
  const [total, setTotal] = useState({ prestasi: 0, kampusMerdeka: 0 });
  const [editTarget, setEditTarget] = useState(false);
  useEffect(() => {
    axiosInstance
      .get(`/dashboard?tahun=${tahun}`, {
        "Content-Type": "application/json",
      })
      .then((res) => {
        console.log("chart dashboard", res.data.data);
        setDataPersentage(res.data.data);
        setLoading(false);
      })
      .catch((err) => console.log(err));

    axiosInstance
      .get(`/dashboard/total?tahun=${tahun}`, {
        "Content-Type": "application/json",
      })
      .then((res) => {
        console.log("chart dashboard total", res.data.data);
        setTotal({
          prestasi: res.data.data[1],
          kampusMerdeka: res.data.data[0],
        });
        setLoading(false);
      })
      .catch((err) => console.log(err));
  }, [tahun, editTarget]);
  console.log("total", total);
  const [targetPencapaian, setTargetPencapaian] = useState(0);
  const onSubmitTarget = (e) => {
    e.preventDefault();
    axiosInstance
      .patch(
        `/dashboard/target`,
        {
          target: parseFloat(targetPencapaian),
          tahun: parseInt(tahun),
        },
        {
          "Content-Type": "application/json",
        }
      )
      .then((res) => {
        setEditTarget(false);
        console.log("chart dashboard", res.data.data);
      })
      .catch((err) => console.log(err));
  };

  console.log("target", targetPencapaian);

  const COLORS = ["#8884d8", "#82ca9d", "#FFBB28", "#EEEEEE"];
  const reducer = (accumulator, currentValue) => accumulator + currentValue;
  const pieData = persentageData?.detail?.map((data) => data.jumlah);

  return (
    <>
      <div className="">
        {loading ? (
          <LoadingSkeletonAdminDashboard />
        ) : (
          <>
            <div className="w-[100%] grid grid-cols-4 gap-6 h-full mb-6">
              <div
                id="persentageTotal"
                className="w-full relative flex flex-col hover: shadow-lg px-4 py-8  mx-auto justify-center items-center rounded-lg bg-white"
              >
                <div
                  onClick={() => setEditTarget(!editTarget)}
                  className="absolute top-0 right-0 mr-2 mt-2"
                >
                  {editTarget === false ? <BsPencilSquare /> : "X"}
                </div>
                <h1 className="text-[20px] font-medium">Target</h1>
                {editTarget === false ? (
                  <>
                    <h1 className="font-medium text-[24px]">
                      {persentageData.target}%
                    </h1>
                  </>
                ) : (
                  <>
                    <div className="w-[50%]">
                      <input
                        onChange={(e) =>
                          setTargetPencapaian(Number(e.target.value).toFixed(1))
                        }
                        className="w-full border-[1px] border-black mt-1"
                        type="number"
                      />
                      <div onClick={(e) => onSubmitTarget(e)} className="mt-2">
                        <PrimaryButton textButton={"Simpan"} />
                      </div>
                    </div>
                  </>
                )}
              </div>
              <div
                id="persentageTotal"
                className="w-full flex flex-col shadow-lg px-4 py-8 mx-auto justify-center items-center rounded-lg bg-white"
              >
                <h1 className="text-[20px] font-medium">
                  Total Kampus Merdeka
                </h1>
                <h1 className="font-medium text-[24px]">
                  {total.kampusMerdeka.total}
                </h1>
              </div>
              <div
                id="persentageTotal"
                className="w-full flex flex-col shadow-lg px-4 py-8 mx-auto justify-center items-center rounded-lg bg-white"
              >
                <h1 className="text-[20px] font-medium">Total Prestasi</h1>
                <h1 className="font-medium text-[24px]">
                  {total.prestasi.total}
                </h1>
              </div>
              <div
                id="persentageTotal"
                className="w-full flex flex-col shadow-lg px-4 py-8 mx-auto justify-center items-center rounded-lg bg-white"
              >
                <h1 className="text-[20px] font-medium">Pencapaian</h1>
                <h1 className="font-medium text-[24px]">
                  {persentageData.pencapaian}
                </h1>
                <h1 className="text-[14px] text-center">
                  {persentageData.total} dari {persentageData.total_mahasiswa}{" "}
                  mahasiswa
                </h1>
              </div>
            </div>
            <div className="w-[100%] bg-white p-4 rounded-xl shadow-lg  mr-6">
              <div className="flex justify-between">
                {tahun == 0 ? (
                  <h1 className="text-[20px] mb-2 font-medium tracking-[1px]">
                    Data Fakultas (Semua)
                  </h1>
                ) : (
                  <h1 className="text-[20px] mb-2 font-medium tracking-[1px]">
                    Data Fakultas ({tahun})
                  </h1>
                )}
              </div>
              <div className="flex flex-col justify-center">
                <PieChart className="mx-auto w-[50%]" width={250} height={250}>
                  <Pie
                    data={persentageData.detail}
                    color="#000000"
                    dataKey="jumlah"
                    nameKey="fakultas"
                    cx="50%"
                    cy="50%"
                    outerRadius={120}
                    fill="#8884d8"
                  >
                    {persentageData?.detail?.map((entry, index) => (
                      <>
                        <Cell
                          key={`cell-${index}`}
                          fill={COLORS[index % COLORS.length]}
                        />
                      </>
                    ))}
                  </Pie>
                  {/* <Tooltip content={<CustomTooltip />} /> */}
                  {/* <Legend /> */}
                </PieChart>
                <div className="text-center mx-auto justify-center w-[50%] my-auto mt-4">
                  {persentageData?.detail?.map((datas, index) => {
                    // console.log("datas", datas)
                    const total = JSON.stringify(
                      (datas.jumlah / pieData.reduce(reducer)) * 100
                    );
                    return (
                      <>
                        <div className="flex mr-2 mb-2">
                          <div
                            className="p-2 h-[10px] my-auto rounded-full mr-4"
                            style={{
                              backgroundColor: `${
                                COLORS[index % COLORS.length]
                              }`,
                            }}
                          ></div>
                          {/* <div className="">{datas.jurusan} {(datas.students / pieData.reduce(reducer) * 100)}%</div> ini yang bener */}
                          <div className="flex w-[90%] justify-between">
                            <div className="mr-1">{datas.fakultas}</div>
                            <div className="">
                              {datas.jumlah}
                              {/* ({total.slice(0, 4)}{total.length > 2 ? total.slice(total.length - 1, total.length) : null}%) */}
                            </div>
                          </div>
                        </div>
                        <div className="h-[1px] w-full bg-black mb-2"></div>
                      </>
                    );
                  })}
                </div>
              </div>
            </div>
          </>
        )}
      </div>

      {loading ? null : (
        <>
          <div className="bg-white p-4 shadow-md mt-6 rounded-lg">
            <div className="flex w-full border-[1px] border-black py-1">
              <div className="w-[30%] mx-2 font-medium">Fakultas</div>
              <div className="w-[20%] mx-2 font-medium">Jumlah Mahasiswa</div>
              <div className="w-[20%] mx-2 font-medium">Jumlah</div>
              <div className="w-[20%] mx-2 font-medium">Persentase</div>
              <div className="w-[10%] mx-2 font-medium">Detail</div>
            </div>
            {persentageData.detail?.map((data) => (
              <>
                {/* {console.log("presentage", data)} */}
                <div className="flex pb-1 pt-1">
                  <div className="w-[30%] mx-2">{data.fakultas}</div>
                  <div className="w-[20%] mx-2">{data.jumlah_mahasiswa}</div>
                  <div className="w-[20%] mx-2">{data.jumlah}</div>
                  <div className="w-[20%] mx-2">{data.persentase}</div>
                  <div className="w-[10%] mx-2">
                    {identify === "admin" && (
                      <button
                        onClick={() =>
                          navigate(`/dashboard/admin/statistik/${data.id}`)
                        }
                        className="border-[1px] border-black text-black px-2 my-auto text-[14px]"
                      >
                        Lihat
                      </button>
                    )}
                    {identify === "rector" && (
                      <button
                        onClick={() => navigate(`/iku/${data.id}`)}
                        className="border-[1px] border-black text-black px-2 my-auto text-[14px]"
                      >
                        Lihat
                      </button>
                    )}
                  </div>
                </div>
              </>
            ))}
            {/* <div className="flex">
                    <div className="w-[40%] mx-2"></div>
                    <div className="w-[20%] mx-2">{persentageData.total_dosen}</div>
                    <div className="w-[20%] mx-2">{persentageData.total}</div>
                    <div className="w-[20%] mx-2"></div>
                </div> */}
          </div>
        </>
      )}
    </>
  );
};

export const ChartByFakultas = ({ fakultasData, tahun }) => {
  const navigate = useNavigate();
  const [persentageData, setDataPersentage] = useState([]);
  useEffect(() => {
    axiosInstance
      .get(`/dashboard/fakultas/${fakultasData}?tahun=${tahun}`, {
        "Content-Type": "application/json",
      })
      .then((res) => {
        console.log("chart detail fakultas", res.data.data);
        setDataPersentage(res.data.data);
      })
      .catch((err) => console.log("detail", err));
  }, [fakultasData, tahun]);

  const COLORS = ["#8884d8", "#82ca9d", "#FFBB28", "#EEEEEE"];
  const reducer = (accumulator, currentValue) => accumulator + currentValue;
  const pieData = persentageData?.detail?.map((data) => data.jumlah);

  return (
    <>
      <div className="">
        <div className="w-[100%] bg-white p-4 rounded-xl shadow-lg">
          <div className="flex justify-between">
            {tahun == 0 ? (
              <h1 className="text-[20px] mb-2 font-medium tracking-[1px]">
                Data {persentageData.fakultas} (Semua)
              </h1>
            ) : (
              <h1 className="text-[20px] mb-2 font-medium tracking-[1px]">
                Data {persentageData.fakultas} ({tahun})
              </h1>
            )}
          </div>
          <div className="flex flex-col justify-center">
            <PieChart className="mx-auto w-[50%]" width={250} height={250}>
              <Pie
                data={persentageData.detail}
                color="#000000"
                dataKey="jumlah"
                nameKey="fakultas"
                cx="50%"
                cy="50%"
                outerRadius={120}
                fill="#8884d8"
              >
                {persentageData?.detail?.map((entry, index) => (
                  <>
                    <Cell
                      key={`cell-${index}`}
                      fill={COLORS[index % COLORS.length]}
                    />
                  </>
                ))}
              </Pie>
              {/* <Tooltip content={<CustomTooltip />} /> */}
              {/* <Legend /> */}
            </PieChart>
            <div className="text-center mx-auto justify-center w-[50%] my-auto mt-4">
              {persentageData?.detail?.map((datas, index) => {
                console.log("datas", datas);
                const total = JSON.stringify(
                  (datas.jumlah / pieData.reduce(reducer)) * 100
                );
                console.log("total", total.slice(total.length - 1));
                return (
                  <>
                    <div className="flex mr-2 mb-2">
                      <div
                        className="p-2 h-[10px] my-auto rounded-full mr-4"
                        style={{
                          backgroundColor: `${COLORS[index % COLORS.length]}`,
                        }}
                      ></div>
                      {/* <div className="">{datas.jurusan} {(datas.students / pieData.reduce(reducer) * 100)}%</div> ini yang bener */}
                      <div className="flex w-[90%] justify-between">
                        <div className="mr-1">{datas.prodi}</div>
                        {total == 100 ? (
                          <div className="">{datas.jumlah}</div>
                        ) : (
                          <div className="">
                            {datas.jumlah}
                            {/* ({total.slice(0, 4)}{total.length > 2 ? total.slice(total.length - 1) : null}%) */}
                          </div>
                        )}
                      </div>
                    </div>
                    <div className="h-[1px] w-full bg-black mb-2"></div>
                  </>
                );
              })}
            </div>
          </div>
        </div>

        <div className="bg-white p-4 shadow-md mt-6 rounded-lg">
          <div className="flex w-full border-[1px] border-black py-1">
            <div className="w-[40%] mx-2 font-medium">Prodi</div>
            <div className="w-[20%] mx-2 font-medium">Jumlah Mahasiswa</div>
            <div className="w-[20%] mx-2 font-medium">Jumlah</div>
            <div className="w-[20%] mx-2 font-medium">Persentase</div>
          </div>
          {persentageData.detail?.map((data) => (
            <>
              <div className="flex pb-1 pt-1">
                <div className="w-[40%] mx-2">{data.prodi}</div>
                <div className="w-[20%] mx-2">{data.jumlah_mahasiswa}</div>
                <div className="w-[20%] mx-2">{data.jumlah}</div>
                <div className="w-[20%] mx-2">{data.persentase}</div>
              </div>
            </>
          ))}
          {/* <div className="flex">
                    <div className="w-[40%] mx-2"></div>
                    <div className="w-[20%] mx-2">{persentageData.total_dosen}</div>
                    <div className="w-[20%] mx-2">{persentageData.total}</div>
                    <div className="w-[20%] mx-2"></div>
                </div> */}
        </div>
      </div>
    </>
  );
};
