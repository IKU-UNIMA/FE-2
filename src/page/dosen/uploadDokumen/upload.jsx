import React, { useState, useEffect } from 'react'
import { useParams } from 'react-router-dom'
import FormUploadDokumen from '../../../components/form/formUploadDokumen/form'
import Navbar from '../../../components/navbar/navbar'
import Sidebar from '../../../components/sidebar/sidebar'
import axiosInstance from '../../../networks/api'

export default function UploadDokumen() {

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

                    <div className='p-6'>
                        <div className='bg-white px-4 py-4 rounded-md'>
                            <FormUploadDokumen />
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}
