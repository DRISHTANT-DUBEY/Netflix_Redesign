import Head from "next/head";

import Image from "next/image";
import { useSession, signIn, signOut } from "next-auth/react";
function Dashboard() {
    const { data: session, status } = useSession()
    return (
        <div className="flex min-h-screen flex-col items-center justify-center" >
            <Head>  
                <title>Netflix Redesign - Dashboard</title>
                <link rel="icon" href="https://assets.nflxext.com/us/ffe/siteui/common/icons/nficon2016.ico" />
            </Head>
            <header className="flex justify-between w-full px-12 py-8 z-20 top-0 fixed">
                <div>
                    <svg
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0.238 0.034 919.406 248.488"
                        className="w-28"
                    >
                        <path
                            fill="#e50914"
                            d="M870.46 118.314l49.184 130.208c-14.495-2.07-28.982-4.663-43.733-6.999l-27.707-71.945-28.468 66.006c-13.973-2.336-27.698-3.114-41.672-4.928l49.955-113.89L782.71.034h41.937l25.362 65.22L877.194.034h42.442zM749.596.034h-38.052v225.71c12.425.779 25.362 1.292 38.052 2.841zm-70.927 223.118c-34.68-2.328-69.37-4.39-104.829-5.177V.035h38.823v181.188c22.264.514 44.52 2.32 66.006 3.355zM532.417 88.305v38.822h-53.06v88.263h-38.3V.034H549.77v38.822h-70.405v49.45h53.06zM375.82 38.856v178.605c-12.946 0-26.14 0-38.83.514V38.856h-40.122V.034H416.19v38.822zM254.94 129.19c-17.08 0-37.274 0-51.769.787v57.715c22.778-1.557 45.556-3.363 68.59-4.141v37.273l-107.412 8.548V.034h107.405v38.822H203.17v52.29c15.017 0 38.052-.778 51.768-.778v38.83zM39.831 107.447V243.08c-13.965 1.557-26.398 3.371-39.593 5.442V.034h37.017L87.724 141.11V.034h38.83V232.47c-13.717 2.336-27.698 3.114-42.45 5.177z"
                        />
                    </svg>
                </div>
                <div>
                    {!session && (<button className="flex items-center bg-[#e50914] text-white px-4 py-2 text-sm rounded-sm" onClick={signIn}>Sign In</button>)}
                    {session && (<button className="flex items-center bg-[#e50914] text-white px-4 py-2 text-sm rounded-sm" onClick={signOut}>Sign Out</button>)}
                </div>
            </header>
            <main className="flex w-full flex-col items-center flex-1 justify-center">
                <div
                    className="flex flex-col min-w-full text-left justify-center min-h-screen bg-[url('https://dnm.nflximg.net/api/v6/BvVbc2Wxr2w6QuoANoSpJKEIWjQ/AAAAQR81d4YgwmlPQTDO-EKb_HkIKX23g8fqMxgPkobYkQrXV3FeTpI_VLWaU2Vd_AqomG-wRZLCm4U8XLxKK4JH-aNMM0zU1BQAA198olYiD56ZmB5HKnlqpf1fVZ-Zf1jYKR_9ozQ_mRyVxGwMvgJNC3M9NnQ.jpg?r=5d0')]"
                >
                    <div className="flex flex-col max-w-[90%] text-left justify-start pt-36 min-h-screen pl-7 bg-gradient-to-r from-gray-900 to-gray-600/5">
                        <div className="max-w-[50%]">
                            <Image className="flex relative w-[100%] h-auto z-10" src="https://occ-0-3646-3647.1.nflxso.net/dnm/api/v6/tx1O544a9T7n8Z_G12qaboulQQE/AAAABRYgYpP7KAJdXqMPZzpN-925_Pk9Uot-d2BGowv3D_CDYHStKhRtgVxrAYMQgN5Fahk-sl8_vlWBfL8Z6-_nNQlzae7x-oK4Cn6835ux3kwO-f1mm9gavkuIikyxttRimGbfer2XC-RyQ4zrUbPkfvnZOKt2j9dKe6gJDfhuY7aqQw.png?r=095" width={1280} height={280} layout="intrinsic" alt="" />
                        </div>
                        <h1 className="text-3xl font-semibold text-white max-w-xl tracking-wide mt-24">The Witcher</h1>
                        <div className="flex flex-row divide-x-2 divide-white/40 max-w-fit text-white/50 mt-1">
                            <div className="pr-3"><a>2019</a></div>
                            <div className="px-3"><span className=" border-2 border-white/40 px-1">18+</span></div>
                            <div className="px-3"><a>2 Seasons</a></div>
                            <div className="pl-3">TV Drama</div>
                        </div>
                        <a className="text-lg font-normal text-white mt-4 max-w-xl">Geralt of Rivia, a mutated monster-hunter for hire, journeys toward his destiny in a turbulent world where people often prove more wicked than beasts.</a>
                    </div>
                </div>
            </main>
        </div>
    );
}

export default Dashboard;