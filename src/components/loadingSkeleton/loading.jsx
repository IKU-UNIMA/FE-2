import React from "react";
import Skeleton from "react-loading-skeleton";
import "react-loading-skeleton/dist/skeleton.css";

function LoadingSkeleton() {
    return (
        <>
            <div id="thread" className="opacity-10">
                <div className="flex w-full text-center py-2 bg-[#2b33331a]">
                    <div className="w-[5%] px-2">
                        <Skeleton height={30} baseColor="#202020" highlightColor="#f5f5f5" />
                    </div>
                    <div className="w-[15%] px-2">
                        <Skeleton height={30} baseColor="#202020" highlightColor="#f5f5f5" />
                    </div>
                    <div className="w-[10%] px-2">
                        <Skeleton height={30} baseColor="#202020" highlightColor="#f5f5f5" />
                    </div>
                    <div className="w-[20%] px-2">
                        <Skeleton height={30} baseColor="#202020" highlightColor="#f5f5f5" />
                    </div>
                    <div className="w-[30%] px-2">
                        <Skeleton height={30} baseColor="#202020" highlightColor="#f5f5f5" />
                    </div>
                    <div className="w-[10%] px-2">
                        <Skeleton height={30} baseColor="#202020" highlightColor="#f5f5f5" />
                    </div>
                    <div className="w-[10%] px-2">
                        <Skeleton height={30} baseColor="#202020" highlightColor="#f5f5f5" />
                    </div>
                </div>
                <div className="flex w-full text-center py-2 bg-[#2b33331a]">
                    <div className="w-[5%] px-2">
                        <Skeleton height={30} baseColor="#202020" highlightColor="#f5f5f5" />
                    </div>
                    <div className="w-[15%] px-2">
                        <Skeleton height={30} baseColor="#202020" highlightColor="#f5f5f5" />
                    </div>
                    <div className="w-[10%] px-2">
                        <Skeleton height={30} baseColor="#202020" highlightColor="#f5f5f5" />
                    </div>
                    <div className="w-[20%] px-2">
                        <Skeleton height={30} baseColor="#202020" highlightColor="#f5f5f5" />
                    </div>
                    <div className="w-[30%] px-2">
                        <Skeleton height={30} baseColor="#202020" highlightColor="#f5f5f5" />
                    </div>
                    <div className="w-[10%] px-2">
                        <Skeleton height={30} baseColor="#202020" highlightColor="#f5f5f5" />
                    </div>
                    <div className="w-[10%] px-2">
                        <Skeleton height={30} baseColor="#202020" highlightColor="#f5f5f5" />
                    </div>
                </div>
            </div>
            {/* <div id="thread">
                <div id="thread-box" className="flex">
                    <div id="thread-header" className="flex">
                        <div className="mr-2">
                            <Skeleton height={30} baseColor="#202020" highlightColor="#444" />
                        </div>
                        <div className="flex items-center">
                            <div className="flex-col text-white">
                                <Skeleton height={30} baseColor="#202020" highlightColor="#444" />
                                <Skeleton height={30} baseColor="#202020" highlightColor="#444" />
                            </div>
                        </div>
                    </div>
                    <div className="flex flex-1 justify-end items-center">
                        <Skeleton height={30} baseColor="#202020" highlightColor="#444" />
                    </div>
                </div>
                <div className="mt-4 mb-4">
                    <Skeleton height={30} baseColor="#202020" highlightColor="#444" />
                </div>
                <div>
                    <Skeleton height={30} baseColor="#202020" highlightColor="#444" />
                </div>
                <div id="thread-icon" className="flex flex-1 justify-between mt-5">
                    <Skeleton height={30} baseColor="#202020" highlightColor="#444" />
                </div>
            </div> */}
        </>
    );
}

export default LoadingSkeleton;