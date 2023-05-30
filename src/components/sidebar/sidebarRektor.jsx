import React from "react";
import { Link } from 'react-router-dom'
import { TiHome } from "react-icons/ti";
import { tokenData } from "../../utils/helpers";

export default function SidebarRektor() {

    return (
        <>
            <div className="bg-[#2C3333] w-full h-full text-white">
                <div className="text-center py-6">
                    <h2 className="text-[20px] tracking-[2px] font-medium">IKU</h2>
                </div>

                <div className="px-5 text-white">
                    <ul className="">
                        <Link to="/iku">
                            <div className="flex hover:text-black items-center hover:bg-white px-4 py-3 rounded-md">
                                <li className="font-medium text-[20px]">1</li>
                            </div>
                        </Link>
                        <Link to="/iku">
                            <div className="flex hover:text-black items-center hover:bg-white px-4 py-3 rounded-md">
                                <li className="font-medium text-[20px]">2</li>
                            </div>
                        </Link>
                        <Link to="/iku">
                            <div className="flex hover:text-black items-center hover:bg-white px-4 py-3 rounded-md">
                                <li className="font-medium text-[20px]">3</li>
                            </div>
                        </Link>
                        <Link to="/iku">
                            <div className="flex hover:text-black items-center hover:bg-white px-4 py-3 rounded-md">
                                <li className="font-medium text-[20px]">4</li>
                            </div>
                        </Link>
                        <Link to="/iku">
                            <div className="flex hover:text-black items-center hover:bg-white px-4 py-3 rounded-md">
                                <li className="font-medium text-[20px]">5</li>
                            </div>
                        </Link>
                        <Link to="/iku">
                            <div className="flex hover:text-black items-center hover:bg-white px-4 py-3 rounded-md">
                                <li className="font-medium text-[20px]">6</li>
                            </div>
                        </Link>
                        <Link to="/iku">
                            <div className="flex hover:text-black items-center hover:bg-white px-4 py-3 rounded-md">
                                <li className="font-medium text-[20px]">7</li>
                            </div>
                        </Link>
                    </ul>
                </div>
            </div>
        </>
    )
}