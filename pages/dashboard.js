import Head from "next/head";
import Image from "next/image";
import { useSession, signIn, signOut } from "next-auth/react";
import Navbar from "../components/navbar";
import { getSession } from "next-auth/react";
import Row from '../components/row'
import requests from '../lib/requests'



function Dashboard() {
    const { data: session, status } = useSession()
    return (
        <div className="flex min-h-screen flex-col items-center justify-center text-white bg-black overflow-scroll scrollbar-hide " >
            <Head>  
                <title>Netflix Redesign - Dashboard</title>
                <link rel="icon" href="https://assets.nflxext.com/us/ffe/siteui/common/icons/nficon2016.ico" />
            </Head>
            <Navbar/>
            <main className="flex w-full flex-col items-center flex-1 justify-center max-w-full">
                <div
                    className="flex flex-col min-w-full text-left justify-center min-h-screen bg-[url('https://dnm.nflximg.net/api/v6/BvVbc2Wxr2w6QuoANoSpJKEIWjQ/AAAAQR81d4YgwmlPQTDO-EKb_HkIKX23g8fqMxgPkobYkQrXV3FeTpI_VLWaU2Vd_AqomG-wRZLCm4U8XLxKK4JH-aNMM0zU1BQAA198olYiD56ZmB5HKnlqpf1fVZ-Zf1jYKR_9ozQ_mRyVxGwMvgJNC3M9NnQ.jpg?r=5d0')]"
                >
                    <div className="flex flex-col max-w-[90%] text-left justify-start pt-36 min-h-[90%] pl-7 bg-gradient-to-r from-gray-900 to-gray-600/5">
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
                    <div className="flex flex-col max-w-[100%] text-left justify-start max-h-20 bg-gradient-to-b pt-24 from-gray-900 to-black">
                    </div>
                </div>
                <div className=" space-y-1 text-white">
                    <Row
                        title='Netflix Originals'
                        fetchUrl={requests.fetchNetflixOrignals}
                        isLargeRow
                    />

                    <Row
                        title='Trending'
                        fetchUrl={requests.fetchTrending}
                    />

                    <Row
                        title='Top Rated'
                        fetchUrl={requests.fetchTopRated}
                    />

                    <Row
                        title='Action Movies'
                        fetchUrl={requests.fetchActionMovies}
                    />

                    <Row
                        title='Comedy Movies'
                        fetchUrl={requests.fetchComedyMovies}
                    />

                    <Row
                        title='Horror Movies'
                        fetchUrl={requests.fetchHorrorMovies}
                    />

                    <Row
                        title='Romance Movies'
                        fetchUrl={requests.fetchRomanceMovies}
                    />

                    <Row
                        title='Horror Movies'
                        fetchUrl={requests.fetchDocumentaries}
                    />
                </div>
                
            </main>
        </div>
    );
}

export default Dashboard;

export async function getServerSideProps(context) {
    const session = await getSession(context)
    if (!session) {
        return {
            redirect: {
                destination: '/',
                permanent: false,
                // statusCode: 301
            },
        }
    }
    return {
        props: {
            session: await getSession(context),
        },
    }
}