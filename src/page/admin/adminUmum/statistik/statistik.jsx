import React from 'react'
import { useState } from 'react'
import PrimaryButton from '../../../../components/button/PrimaryButton'
import SecondaryButton from '../../../../components/button/SecondaryButton'
import { ChartByProdi, ChartByTotal, ChartsByFitur, ChartsData } from '../../../../components/charts/chart'
import Navbar from '../../../../components/navbar/navbar'
import Sidebar from '../../../../components/sidebar/sidebar'

export default function StatistikAdmin() {
    const tahun = [2006, 2007, 2008, 2009, 2010, 2011, 2012, 2013, 2014, 2015, 2016, 2017, 2018, 2019, 2020, 2021, 2022, 2023]
    const initialValueReset = { kategori: "", tahun: tahun[tahun.length - 1] }
    const [filtered, setFiltered] = useState(initialValueReset)

    const onHandleReset = (e) => {
        e.preventDefault()
        setFiltered(initialValueReset)
    }

    console.log("filtered", filtered)
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
                                <h1 className="font-medium text-[18px] my-auto">Statistik</h1>
                            </div>

                            <div className='flex justify-between bg-white px-4 py-4 rounded-b-md'>
                                <div className='flex'>
                                    <div className='mr-2' onClick={() => setFiltered({ ...filtered, kategori: "kampus-merdeka" })}>
                                        <SecondaryButton textButton={'Kampus Merdeka'} />
                                    </div>
                                    <div className='' onClick={() => setFiltered({ ...filtered, kategori: "prestasi" })}>
                                        <SecondaryButton textButton={'Prestasi'} />
                                    </div>
                                </div>
                                <div onClick={(e) => onHandleReset(e)}>
                                    <SecondaryButton textButton={'Reset'} />
                                </div>
                            </div>

                            <div className='mt-4'>
                                {filtered.kategori === "" ? (
                                    <ChartByTotal />
                                ) : (
                                    <>
                                        <ChartsByFitur identify={filtered.kategori} />
                                        <ChartByProdi identify={filtered.kategori} />
                                    </>
                                )}
                            </div>
                        </div>
                    </div>

                </div>
            </div>
        </>
    )
}
