import Head from "next/head";
import Image from "next/image";
import Link from "next/link";

export default function Custom404() {
    return (
        <div className="flex min-h-screen flex-col items-center justify-center" >
            <Head>
                <title>Netflix Redesign - 404</title>
                <link rel="icon" href="https://assets.nflxext.com/us/ffe/siteui/common/icons/nficon2016.ico" />
            </Head>
            <header className="flex justify-start w-full px-12 py-4 z-20 top-0 fixed bg-black">
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
            </header>
            <main className="flex w-full flex-col items-center flex-1 justify-center">
                <div
                    className="flex flex-col min-w-[100vw] items-center justify-center min-h-screen bg-black space-x-4"
                    style={{
                        width: "100vw",
                        'backgroundImage':
                            'radial-gradient(ellipse at center, rgb(0 0 0 / 0%), rgb(0 0 0 / 15%), rgb(0 0 0 / 25%), rgb(0 0 0 / 75%)), url(/404.png)',
                    }}
                >
                    <h1 className="text-6xl font-semibold text-white max-w-xl tracking-wide">Lost Your Way ?</h1>
                    <h2 className="text-2xl text-center font-normal max-w-2xl text-white mt-4">Sorry, we can&apos;t find that page. You&apos;ll find lots to explore on the home page.</h2>
                    <Link href={"/"} passHref><button className="flex font-semibold mt-3 items-center bg-white/90 text-black px-6 py-3 text-md rounded-md">Netflix Home</button></Link>
                    <div className="text-white border-l-4 flex flex-row border-[#e50914] px-2 py-4 space-x-2 mt-4">
                        <a className="flex text-2xl font-light">Error Code</a>
                        <a className="flex text-2xl font-medium">NSES-404</a>
                    </div>
                </div>
            </main>
        </div>
    );
}
