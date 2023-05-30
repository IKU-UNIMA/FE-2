import React from "react";

export default function SecondaryButton({ textButton }) {

    return (
        <>
            <button className="w-full text-[#2C3333] border-[2px] border-[#2C3333] font-medium px-2 py-1 rounded-sm">{textButton}</button>
        </>
    )
}