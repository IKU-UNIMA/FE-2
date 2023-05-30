import React from "react";

export default function PrimaryButton({ textButton }) {

    return (
        <>
            <button className="w-full bg-[#2C3333] border-2 border-[#2C3333] font-medium text-white px-2 py-1 rounded-sm">{textButton}</button>
        </>
    )
}