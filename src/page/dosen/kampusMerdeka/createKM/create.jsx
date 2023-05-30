import React from 'react'
import FormKM from '../../../../components/form/formKM/formKM'
import Navbar from '../../../../components/navbar/navbar'
import Sidebar from '../../../../components/sidebar/sidebar'
import './create.css'

export default function CreateKM() {
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
                        <div className='p-6'>
                            <div className='bg-white px-4 py-4 rounded-md'>
                                <FormKM />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}
