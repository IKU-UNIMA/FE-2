import React from "react";

export default function DangerButton({ textButton }) {

    return (
        <>
            <button className="w-full bg-red-500 font-medium text-white px-2 py-1 rounded-sm">{textButton}</button>
        </>
    )
}