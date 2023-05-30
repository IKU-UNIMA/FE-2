import React from "react";
import Skeleton from "react-loading-skeleton";
import "react-loading-skeleton/dist/skeleton.css";

export default function LoadingSkeletonAdminDashboard() {
    return (
        <>
            {/* <div role="status" class="space-y-8 animate-pulse md:space-y-0 md:space-x-8 md:flex md:items-center">
                <div class="flex items-center justify-center w-full h-48 bg-gray-300 rounded sm:w-96 dark:bg-gray-700">
                    <svg class="w-12 h-12 text-gray-200" xmlns="http://www.w3.org/2000/svg" aria-hidden="true" fill="currentColor" viewBox="0 0 640 512"><path d="M480 80C480 35.82 515.8 0 560 0C604.2 0 640 35.82 640 80C640 124.2 604.2 160 560 160C515.8 160 480 124.2 480 80zM0 456.1C0 445.6 2.964 435.3 8.551 426.4L225.3 81.01C231.9 70.42 243.5 64 256 64C268.5 64 280.1 70.42 286.8 81.01L412.7 281.7L460.9 202.7C464.1 196.1 472.2 192 480 192C487.8 192 495 196.1 499.1 202.7L631.1 419.1C636.9 428.6 640 439.7 640 450.9C640 484.6 612.6 512 578.9 512H55.91C25.03 512 .0006 486.1 .0006 456.1L0 456.1z" /></svg>
                </div>
                <div class="w-full">
                    <div class="h-2.5 bg-gray-200 rounded-full dark:bg-gray-700 w-48 mb-4"></div>
                    <div class="h-2 bg-gray-200 rounded-full dark:bg-gray-700 max-w-[480px] mb-2.5"></div>
                    <div class="h-2 bg-gray-200 rounded-full dark:bg-gray-700 mb-2.5"></div>
                    <div class="h-2 bg-gray-200 rounded-full dark:bg-gray-700 max-w-[440px] mb-2.5"></div>
                    <div class="h-2 bg-gray-200 rounded-full dark:bg-gray-700 max-w-[460px] mb-2.5"></div>
                    <div class="h-2 bg-gray-200 rounded-full dark:bg-gray-700 max-w-[360px]"></div>
                </div>
                <span class="sr-only">Loading...</span>
            </div> */}
            <div className="w-[100%]">
                <div id="thread" className="w-[100%] gap-6 mb-6">
                    <div className="grid grid-cols-2 gap-6 w-[100%] h-full mb-6">
                        <div id="persentageTotal" className="flex-col w-full h-full shadow-lg p-4 mx-auto justify-center items-center rounded-lg bg-white">
                            <Skeleton className="w-full h-full py-2 opacity-10" height={30} baseColor="#202020" highlightColor="#f5f5f5" />
                            <Skeleton className="w-full h-full py-2 opacity-10 mt-2" height={60} baseColor="#202020" highlightColor="#f5f5f5" />
                        </div>
                        <div id="persentageTotal" className="flex-col w-full h-full shadow-lg p-4 mx-auto justify-center items-center rounded-lg bg-white">
                            <Skeleton className="w-full h-full py-2 opacity-10" height={30} baseColor="#202020" highlightColor="#f5f5f5" />
                            <Skeleton className="w-full h-full py-2 opacity-10 mt-2" height={60} baseColor="#202020" highlightColor="#f5f5f5" />
                        </div>
                    </div>
                    <div className="p-8 w-[100%] bg-white rounded-md">
                        <div className="opacity-10 mb-4">
                            <Skeleton className="w-full h-full py-2" width={140} height={30} baseColor="#202020" highlightColor="#f5f5f5" />
                        </div>
                        <div className="w-full flex flex-col">
                            <div className="rounded-full mx-auto opacity-10">
                                <div className="w-[250px] h-[250px]">
                                    <Skeleton className="w-full h-full" circle={true} baseColor="#202020" highlightColor="#f5f5f5" />
                                </div>
                            </div>
                            <div className="flex flex-col justify-center my-auto mx-auto h-full opacity-10 mt-4">
                                <div className="w-[600px]">
                                    <Skeleton className="w-full h-full py-2" baseColor="#202020" highlightColor="#f5f5f5" />
                                </div>
                                <div className="w-[600px] mt-2">
                                    <Skeleton className="w-full h-full py-2" baseColor="#202020" highlightColor="#f5f5f5" />
                                </div>
                                <div className="w-[600px] mt-2">
                                    <Skeleton className="w-full h-full py-2" baseColor="#202020" highlightColor="#f5f5f5" />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                {/* <div id="thread" className="flex w-[100%] gap-6">
                    <div className="flex flex-col gap-3 w-[25%] h-full">
                        <div id="persentageTotal" className="flex-col w-full shadow-lg p-4 mx-auto justify-center items-center rounded-lg bg-white">
                            <Skeleton className="w-full h-full py-2 opacity-10" height={20} baseColor="#202020" highlightColor="#f5f5f5" />
                            <Skeleton className="w-full h-full py-2 opacity-10" height={40} baseColor="#202020" highlightColor="#f5f5f5" />
                        </div>
                        <div id="persentageTotal" className="flex-col w-full shadow-lg p-4 mx-auto justify-center items-center rounded-lg bg-white">
                            <Skeleton className="w-full h-full py-2 opacity-10" height={20} baseColor="#202020" highlightColor="#f5f5f5" />
                            <Skeleton className="w-full h-full py-2 opacity-10" height={40} baseColor="#202020" highlightColor="#f5f5f5" />
                        </div>
                        <div id="persentageTotal" className="flex-col w-full shadow-lg p-4 mx-auto justify-center items-center rounded-lg bg-white">
                            <Skeleton className="w-full h-full py-2 opacity-10" height={20} baseColor="#202020" highlightColor="#f5f5f5" />
                            <Skeleton className="w-full h-full py-2 opacity-10" height={40} baseColor="#202020" highlightColor="#f5f5f5" />
                        </div>
                    </div>
                    <div className="flex flex-col p-8 w-[75%] bg-white rounded-md">
                        <div className="opacity-10 mb-4">
                            <Skeleton className="w-full h-full py-2" width={140} height={30} baseColor="#202020" highlightColor="#f5f5f5" />
                        </div>
                        <div className="w-full flex">
                            <div className="rounded-full w-[40%] opacity-10">
                                <div className="w-[250px] h-[250px]">
                                    <Skeleton className="w-full h-full" circle={true} baseColor="#202020" highlightColor="#f5f5f5" />
                                </div>
                            </div>
                            <div className="flex flex-col w-[60%] justify-center w-[30%] my-auto mx-auto h-full opacity-10">
                                <div className="w-[400px]">
                                    <Skeleton className="w-full h-full py-2" baseColor="#202020" highlightColor="#f5f5f5" />
                                </div>
                                <div className="w-[400px] mt-2">
                                    <Skeleton className="w-full h-full py-2" baseColor="#202020" highlightColor="#f5f5f5" />
                                </div>
                                <div className="w-[400px] mt-2">
                                    <Skeleton className="w-full h-full py-2" baseColor="#202020" highlightColor="#f5f5f5" />
                                </div>
                            </div>
                        </div>
                    </div>
                </div> */}
            </div>
        </>
    )
}