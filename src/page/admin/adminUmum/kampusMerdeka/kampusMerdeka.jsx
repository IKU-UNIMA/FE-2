import React, { useState } from "react";
import { BsFillInfoCircleFill, BsFillTrashFill, BsPencilSquare } from "react-icons/bs";
import { Link, useNavigate } from "react-router-dom";
import { useEffect } from "react";
import axiosInstance from "../../../../networks/api";
import Sidebar from "../../../../components/sidebar/sidebar";
import Navbar from "../../../../components/navbar/navbar";
import { FiChevronDown } from "react-icons/fi";
import PrimaryButton from "../../../../components/button/PrimaryButton";
import SecondaryButton from "../../../../components/button/SecondaryButton";
import Pagination from "../../../../components/pagination/pagination";
import ReactPaginate from 'react-paginate';
import LoadingSkeleton from "../../../../components/loadingSkeleton/loading";

export default function KampusMerdekaAdminUmum() {
    const navigate = useNavigate()
    const initialValueReset = { semester: "", nim: "", prodi: "" }
    const [errFiltered, setErrFiltered] = useState("")
    const [filtered, setFiltered] = useState(initialValueReset)
    const [currentPage, setCurrentPage] = useState(1)
    const [loading, setLoading] = useState(true)

    useEffect(() => {
        axiosInstance
            .get(`/kampus-merdeka?page=1`, {
                "Content-Type": "application/json",
            })
            .then((res) => {
                setData(res.data.data.data)
                setPage(res.data.data)
                setLoading(false)
                console.log(res.data.data)
            })
            .catch((err) => console.log(err))

        axiosInstance
            .get("/prodi", {
                "Content-Type": "application/json",
            })
            .then((res) => {
                console.log("prodi", res.data.data)
                setProdi(res.data.data)
            })
            .catch((err) => console.log(err))

        axiosInstance
            .get("/semester", {
                "Content-Type": "application/json",
            })
            .then((res) => setSmester(res.data.data))
            .catch((err) => console.log(err))
    }, [filtered])

    const [data, setData] = useState([])
    const [page, setPage] = useState([])
    const [prodi, setProdi] = useState([])
    const [smester, setSmester] = useState([])
    const [mitra_litabmas, setmitra_litabmas] = useState({ mitraDD: false, mitra: "", search: "" })
    const [filtermitra_litabmas, setFiltermitra_litabmas] = useState([])

    const onHandlemitra_litabmas = (e) => {
        const NAME = e?.target.id
        const VALUE = e?.target.value

        if (NAME === "mitraDD")
            if (mitra_litabmas.mitraDD === false) setmitra_litabmas({ ...mitra_litabmas, mitraDD: true })
            else setmitra_litabmas({ ...mitra_litabmas, mitraDD: false })
        if (NAME === "search") {
            const result = prodi.filter(data => {
                if (VALUE === "") return data
                return data.nama.toLowerCase().includes(VALUE.toLocaleLowerCase())
            })
            setFiltermitra_litabmas(result)
            setmitra_litabmas({ ...mitra_litabmas, search: VALUE })
        }
        if (NAME === "mitra") setmitra_litabmas({ ...mitra_litabmas, mitra: e.target.outerText, mitraDD: false, search: "" })
    }

    const onHandleSearch = (e) => {
        e.preventDefault()
        axiosInstance
            .get(`/kampus-merdeka?nim=${filtered.nim}&prodi=${filtered.prodi}&semester=${filtered.semester}`, {
                "Content-Type": "application/json",
            })
            .then((res) => {
                setData(res.data.data.data)
                setLoading(false)
                console.log("filter", res.data.data.data)
            })
            .catch((err) => {
                setData([])
                setErrFiltered(err)
            })
    }

    const onHandleReset = (e) => {
        e.preventDefault()
        setFiltered(initialValueReset)
        setErrFiltered("")
        axiosInstance
            .get(`/kampus-merdeka`, {
                "Content-Type": "application/json",
            })
            .then((res) => {
                setData(res.data.data.data)
            })
            .catch((err) => console.log(err))
    }

    const fetchDataPagination = (current) => {
        console.log("current fetch", current)
        axiosInstance
            .get(`/kampus-merdeka?page=${current}`, {
                "Content-Type": "application/json",
            })
            .then((res) => {
                setData(res.data.data.data)
                console.log("disini", res.data.data.data)
                setLoading(false)
            })
            .catch((err) => console.log(err))
    }

    const handleClickPagination = async (data) => {
        console.log("click", data)

        var currentPage = data.selected + 1
        setCurrentPage(data.selected + 1)

        console.log("current ", currentPage)

        const dataFromApi = await fetchDataPagination(currentPage)

        setData(dataFromApi)
    }

    console.log("data", data)

    return (
        <>
            <div className='flex'>
                <div className="w-[17%] h-[100vh] relative">
                    <div className="fixed w-[17%] h-[100vh]">
                        <Sidebar />
                    </div>
                </div>

                <div className='relative bg-[#EDE9D5] w-[83%]'>
                    <div className="w-full">
                        <Navbar />
                    </div>

                    <div>
                        <div className="p-6">
                            <div className="bg-white px-4 py-4 rounded-t-md border-b-[1px] border-[#2C3333]">
                                <h1 className="font-medium text-[18px] my-auto">Kampus Merdeka</h1>
                            </div>

                            <div className="bg-white px-4 py-4">
                                {/* <div className="flex justify-between">
                                    <div>
                                        <SecondaryButton textButton='Import Publikasi' />
                                    </div>
                                </div> */}
                                <div className="flex justify-between">
                                    <div className="flex flex-col w-full mr-1">
                                        <label className='text-[14px] font-medium tracking-[1px]'>NIM</label>
                                        <input placeholder="Nim" className='w-full bg-white border-2 outline-none border-black px-2 py-1 pb-2 mt-1 rounded-md' type="text" name="nim" value={filtered.nim} onChange={(e) => setFiltered({ ...filtered, nim: e.target.value })} />
                                    </div>
                                    <div className="relative w-full mr-1">
                                        <label className='text-[14px] font-medium tracking-[1px]'>Prodi</label>
                                        <div id='mitraDD' onClick={(e) => onHandlemitra_litabmas(e)} className={mitra_litabmas.mitraDD === true ? "flex relative justify-between bg-white bg-white border-2 border-black outline-none px-2 py-1 pb-2 rounded-t-md" : 'flex justify-between bg-white border-2 border-black outline-none px-2 py-1 pb-2 rounded-md'}>
                                            {
                                                mitra_litabmas.mitra === "" ? (
                                                    <>
                                                        <div className=''>Pilih</div>
                                                    </>
                                                ) : (
                                                    <>
                                                        <div>{mitra_litabmas.mitra}</div>
                                                    </>
                                                )
                                            }
                                            <div className='my-auto'>
                                                <FiChevronDown />
                                            </div>
                                        </div>
                                        <div onChange={(e) => onHandlemitra_litabmas(e)} className={mitra_litabmas.mitraDD === true ? "z-10 absolute bg-white w-full border-2 border-black p-2 rounded-md rounded-t-sm" : 'hidden'}>
                                            <input type="search" placeholder="search" value={mitra_litabmas.search} id="search" className="w-full border-2 border-black px-2 py-1 pb-2 rounded-md" />
                                            <ul>
                                                {
                                                    mitra_litabmas.search.length === 0 ? <label>please enter 1 or more character</label> :
                                                        !filtermitra_litabmas.length ? <div className='flex w-[100%] h-[100%] text-[20px] items-center justify-center'>No Result Found!</div> :
                                                            filtermitra_litabmas.map(dataMitra => {
                                                                return <li className='skimBox border-2 border-black border-b-0 py-1 px-2' value={dataMitra.id} id='mitra' name="mitra" onClick={(i, e) => {
                                                                    onHandlemitra_litabmas(i, e)
                                                                    setFiltered({ ...filtered, prodi: dataMitra.id })
                                                                }}>{dataMitra.nama}</li>
                                                            })
                                                }
                                            </ul>
                                        </div>
                                    </div>

                                    <div className="flex flex-col w-full mr-1">
                                        <label className='text-[14px] font-medium tracking-[1px]'>Smester</label>
                                        <select onChange={(e) => setFiltered({ ...filtered, semester: e.target.value })} value={filtered.semester} name="smester" className='w-full bg-white border-2 border-black outline-none px-2 py-1 pb-2 mt-1 rounded-md'>
                                            <option value={null}>Pilih</option>
                                            {smester?.map((data) => (
                                                <>
                                                    <option value={parseInt(data?.id)}>{data.nama}</option>
                                                </>
                                            ))
                                            }
                                        </select>
                                    </div>

                                    <div onClick={(e) => onHandleReset(e)} className="flex flex-col items-center justify-center my-auto w-[30%] h-[100%]">
                                        <label className="text-white">Reset</label>
                                        <SecondaryButton textButton="Reset" />
                                    </div>

                                    <div onClick={(e) => onHandleSearch(e)} className="flex flex-col items-center justify-center my-auto w-[30%] h-[100%] ml-1">
                                        <label className="text-white">submit</label>
                                        <PrimaryButton textButton="Cari" />
                                    </div>
                                </div>

                                <div className="flex flex-col text-left text-[16px] font-medium mt-2">
                                    <div className="flex w-full text-center py-2 bg-[#2b33331a]">
                                        <div className="w-[5%]">No</div>
                                        <div className="w-[15%]">Nama</div>
                                        <div className="w-[30%]">Judul</div>
                                        <div className="w-[20%]">Kategori Kegiatan</div>
                                        <div className="w-[15%]">Smester</div>
                                        <div className="w-[15%]">Aksi</div>
                                    </div>
                                    <div className="flex flex-col w-full">
                                        {loading ? (
                                            <LoadingSkeleton />
                                        ) : (data?.length === 0 ? (
                                            <label className="text-center p-4">Data tidak ditemukan!</label>
                                        ) : data?.map((data, index) => (
                                            <>
                                                <div className="flex py-2">
                                                    <div className="w-[5%] text-center">
                                                        <p>{index + 1}</p>
                                                    </div>
                                                    <div className="flex justify-center w-[15%] px-2">
                                                        <p className="text-left">
                                                            {data.mahasiswa.nama} ({data.mahasiswa.nim})
                                                        </p>
                                                    </div>
                                                    <div className="flex justify-center w-[30%] px-2">
                                                        <p className="text-left">
                                                            {data.judul_aktivitas_mahasiswa}
                                                        </p>
                                                    </div>
                                                    <div className="flex justify-center px-2 w-[20%]">
                                                        <p className="">
                                                            {data.kategori_program.nama}
                                                        </p>
                                                    </div>
                                                    <div className="flex justify-center px-2 w-[15%]">
                                                        <p className="">
                                                            {data.semester.nama}
                                                        </p>
                                                    </div>
                                                    <div className="flex flex-row items-start justify-center px-2 w-[15%]">
                                                        <div className="basis-1/3 mr-1 py-2 cursor-pointer rounded-md bg-green-400" onClick={() => navigate(`/dashboard/admin/kampus-merdeka/detail/${data.id}`)}><BsFillInfoCircleFill className="mx-auto my-auto" /></div>
                                                        <div className="basis-1/3 ml-1 mr-1 cursor-pointer py-2 rounded-md bg-yellow-500" onClick={() => navigate(`/dashboard/admin/kampus-merdeka/update/${data.id}`)}><BsPencilSquare className="mx-auto my-auto" /></div>
                                                        <div className="basis-1/3 ml-1 py-2 cursor-pointer rounded-md bg-red-600"><BsFillTrashFill className="mx-auto my-auto" /></div>
                                                    </div>
                                                </div>
                                            </>
                                        ))
                                        )
                                        }

                                    </div>
                                </div>
                            </div>
                            <div className="flex justify-between bg-white border-x-0 border-[1px] border-gray-300 py-2 px-4 ">
                                <div className="flex items-center">
                                    <p class="text-sm text-gray-700">
                                        Showing
                                        {
                                            data?.length !== 0 ? (
                                                <span class="font-medium"> {((currentPage - 1) * page?.limit) + 1} </span>
                                            ) : (
                                                <span class="font-medium"> 0 </span>
                                            )
                                        }
                                        to
                                        {
                                            data?.length !== 0 ? (
                                                page?.page == page?.total_page ? (
                                                    <span class="font-medium"> {((page?.page - 1) * page?.limit) + data?.length} </span>
                                                ) : (

                                                    <span class="font-medium"> {page?.page * page?.limit} </span>
                                                )
                                            ) : (
                                                <span class="font-medium"> 0 </span>
                                            )
                                        }
                                        of
                                        <span class="font-medium"> {page?.total_result} </span>
                                        results
                                    </p>
                                </div>
                                <ReactPaginate
                                    previousLabel={'prev'}
                                    nextLabel={'next'}
                                    marginPagesDisplayed={2}
                                    pageRangeDisplayed={3}
                                    breakLabel={"..."}
                                    containerClassName={'flex justify-end'}
                                    breakClassName={"text-green-400"}
                                    breakLinkClassName={"text-green-400"}
                                    previousClassName={"page-item relative inline-flex items-center rounded-l-md px-2 py-2 text-gray-400 ring-1 ring-inset ring-gray-300 hover:bg-gray-50 focus:z-20 focus:outline-offset-0"}
                                    nextClassName={"page-item relative inline-flex items-center rounded-r-md px-2 py-2 text-gray-400 ring-1 ring-inset ring-gray-300 hover:bg-gray-50 focus:z-20 focus:outline-offset-0"}
                                    pageCount={page.total_page}
                                    pageClassName={"my-auto text-[#2C3333]"}
                                    pageLinkClassName={"hover:bg-black hover:text-white p-2"}
                                    activeClassName={"z-10 bg-black text-white flex"}
                                    onPageChange={handleClickPagination}
                                />
                            </div>
                            {/* <Pagination currentPage={currentPage} nPages={nPages} setData={setData} setCurrentPage={setCurrentPage} fetchDataPagination={fetchDataPagination} /> */}
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}