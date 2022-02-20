import Head from 'next/head'
import Image from 'next/image'
import { useSession, signIn, signOut } from "next-auth/react"
import Navbar from "../components/navbar";

export default function Home() {
  const { data: session, status } = useSession()
  return (
    <div className="flex min-h-screen flex-col items-center justify-center">
      <Head>
        <title>Netflix Redesign</title>
        <link rel="icon" href="https://assets.nflxext.com/us/ffe/siteui/common/icons/nficon2016.ico" />
      </Head>
      <Navbar />
      <main className="flex w-full flex-col items-center flex-1 justify-center text-center">
        <div
          className="flex flex-col min-w-full items-center justify-center min-h-screen bg-black"
          style={{
            'backgroundImage':
              'linear-gradient(rgb(0 0 0 / 60%), rgb(0 0 0 / 60%)), url(/hero-bg.jpg)',
          }}
        >
          <h1 className="text-5xl font-semibold text-white max-w-xl tracking-wide">Unlimited Movies, TV<br/>shows and more</h1>
          <h2 className="text-2xl font-medium text-white mt-4">Watch anywhere. Cancel anytime.</h2>
          <a className="text-lg font-normal text-white mt-4 ">Ready to watch?</a>
          <div className="flex mt-4">
            <input
              placeholder="Email address"
              className="bg-white p-4 min-w-[400px] outline-none ring-0"
            />
            <button
              className="flex items-center bg-[#e50914] text-white text-xl px-8"
            >
              Get Started
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                className="w-6"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M9 5l7 7-7 7"
                />
              </svg>
            </button>
          </div>
          <a className="text-white/60 text-md ">*Enter your email to create or restart your membership.*</a>
          <a className="text-white/40 text-md ">*This page is not official netflix page just a project.*</a>
        </div>
        <div className='flex flex-row min-w-full  items-center text-left justify-between px-12 bg-black min-h-fit border-y-8 border-gray-800'>
          <div className="flex flex-col text-white space-y-4">
            <h1 className="text-5xl font-semibold max-w-md tracking-wide">Enjoy on your TV.</h1>
            <h2 className="text-2xl font-normal max-w-xl tracking-wide">Watch on smart TVs, PlayStation, Xbox, Chromecast, Apple TV, Blu-ray players and more.</h2>
          </div>
          <div className="">
            <Image className="flex relative z-10" src="https://assets.nflxext.com/ffe/siteui/acquisition/ourStory/fuji/desktop/tv.png" width={640} height={480} alt="" />
            <div className="absolute max-w-[73%]  max-h-[54%] top-[117%] left-[54%]">
              <video className="w-full h-full relative" autoPlay={true} loop={true} muted={true} playsInline={true}>
                <source src="https://assets.nflxext.com/ffe/siteui/acquisition/ourStory/fuji/desktop/video-tv-in-0819.m4v" type="video/mp4"></source>
              </video>
            </div>
          </div>
        </div>
        <div className='flex flex-row min-w-full  items-center text-left justify-between px-12 bg-black min-h-fit border-y-8 border-gray-800'>
          <div className="">
            <Image className="flex relative z-10" src="https://assets.nflxext.com/ffe/siteui/acquisition/ourStory/fuji/desktop/mobile-0819.jpg" width={640} height={480} alt="" />
            {/* <div className="absolute max-w-[73%]  max-h-[54%] top-[117%] left-[4%]">
              <video className="w-full h-full relative" autoPlay="true" loop="true" muted={true} playsInline={true}>
                <source src="https://assets.nflxext.com/ffe/siteui/acquisition/ourStory/fuji/desktop/video-tv-in-0819.m4v" type="video/mp4"></source>
              </video>
            </div> */}
          </div>
          <div className="flex flex-col text-white space-y-4">
            <h1 className="text-5xl font-semibold max-w-md tracking-wide">Enjoy on your TV.</h1>
            <h2 className="text-2xl font-normal max-w-xl tracking-wide">Watch on smart TVs, PlayStation, Xbox, Chromecast, Apple TV, Blu-ray players and more.</h2>
          </div>
        </div>
        <div className='flex flex-row min-w-full  items-center text-left justify-between px-12 bg-black min-h-fit border-y-8 border-gray-800'>
          <div className="flex flex-col text-white space-y-4">
            <h1 className="text-5xl font-semibold max-w-lg tracking-wide">Watch everywhere.</h1>
            <h2 className="text-2xl font-normal max-w-xl tracking-wide">Stream unlimited movies and TV shows on your phone, tablet, laptop, and TV.</h2>
          </div>
          <div className="">
            <Image className="flex relative z-10" src="https://assets.nflxext.com/ffe/siteui/acquisition/ourStory/fuji/desktop/device-pile-in.png" width={640} height={480} alt="" />
            <div className="absolute top-[265%] left-[56%]">
              <video className="max-w-[84%] max-h-[98%] relative" autoPlay={true} loop={true} muted={true} playsInline={true}>
                <source src="https://assets.nflxext.com/ffe/siteui/acquisition/ourStory/fuji/desktop/video-devices-in.m4v" type="video/mp4"></source>
              </video>
            </div>
          </div>
        </div>
        <div className='flex flex-row min-w-full  items-center text-left justify-between px-12 bg-black min-h-fit border-y-8 border-gray-800'>
          <div className="">
            <Image className="flex relative z-10" src="/baby.png" width={640} height={480} alt="" />
          </div>
          <div className="flex flex-col text-white space-y-4">
            <h1 className="text-5xl font-semibold max-w-lg tracking-wide">Create profiles for children.</h1>
            <h2 className="text-2xl font-normal max-w-xl tracking-wide">Send children on adventures with their favourite characters in a space made just for them—free with your membership.</h2>
          </div>
        </div>
        <div
          className="flex flex-col min-w-full items-center justify-center min-h-fit bg-black pb-12"
        >
          <h1 className="text-5xl font-semibold text-white max-w-3xl tracking-wide pt-24 pb-12" >Frequently Asked Questions</h1>
          <ul className="items-center list-none list-inside text-white w-[75%]" >
            <li className="mb-2" >
              <div className="bg-[#303030] text-left w-full py-4 pl-7 pr-5 flex flex-row items-center justify-between">
                <h2 className="text-2xl font-normal max-w-xl tracking-wide">What Is Netflix</h2>
                <svg className='text-white h-6 w-6 fill-current rotate-45' viewBox="0 0 26 26" focusable="true"><path d="M10.5 9.3L1.8 0.5 0.5 1.8 9.3 10.5 0.5 19.3 1.8 20.5 10.5 11.8 19.3 20.5 20.5 19.3 11.8 10.5 20.5 1.8 19.3 0.5 10.5 9.3Z"></path></svg>
              </div>
            </li>
            <li className="mb-2" >
              <div className="bg-[#303030] text-left w-full py-4 pl-7 pr-5 flex flex-row items-center justify-between">
                <h2 className="text-2xl font-normal max-w-xl tracking-wide">How much does Netflix cost</h2>
                <svg className='text-white h-6 w-6 fill-current rotate-45' viewBox="0 0 26 26" focusable="true"><path d="M10.5 9.3L1.8 0.5 0.5 1.8 9.3 10.5 0.5 19.3 1.8 20.5 10.5 11.8 19.3 20.5 20.5 19.3 11.8 10.5 20.5 1.8 19.3 0.5 10.5 9.3Z"></path></svg>
              </div>
            </li>
            <li className="mb-2" >
              <div className="bg-[#303030] text-left w-full py-4 pl-7 pr-5 flex flex-row items-center justify-between">
                <h2 className="text-2xl font-normal max-w-xl tracking-wide">Where can I watch</h2>
                <svg className='text-white h-6 w-6 fill-current rotate-45' viewBox="0 0 26 26" focusable="true"><path d="M10.5 9.3L1.8 0.5 0.5 1.8 9.3 10.5 0.5 19.3 1.8 20.5 10.5 11.8 19.3 20.5 20.5 19.3 11.8 10.5 20.5 1.8 19.3 0.5 10.5 9.3Z"></path></svg>
              </div>
            </li>
            <li className="mb-2" >
              <div className="bg-[#303030] text-left w-full py-4 pl-7 pr-5 flex flex-row items-center justify-between">
                <h2 className="text-2xl font-normal max-w-xl tracking-wide">How do I cancel</h2>
                <svg className='text-white h-6 w-6 fill-current rotate-45' viewBox="0 0 26 26" focusable="true"><path d="M10.5 9.3L1.8 0.5 0.5 1.8 9.3 10.5 0.5 19.3 1.8 20.5 10.5 11.8 19.3 20.5 20.5 19.3 11.8 10.5 20.5 1.8 19.3 0.5 10.5 9.3Z"></path></svg>
              </div>
            </li>
            <li className="mb-2" >
              <div className="bg-[#303030] text-left w-full py-4 pl-7 pr-5 flex flex-row items-center justify-between">
                <h2 className="text-2xl font-normal max-w-xl tracking-wide">What can I watch on Netflix</h2>
                <svg className='text-white h-6 w-6 fill-current rotate-45' viewBox="0 0 26 26" focusable="true"><path d="M10.5 9.3L1.8 0.5 0.5 1.8 9.3 10.5 0.5 19.3 1.8 20.5 10.5 11.8 19.3 20.5 20.5 19.3 11.8 10.5 20.5 1.8 19.3 0.5 10.5 9.3Z"></path></svg>
              </div>
            </li>
          </ul>
          <a className="text-lg font-normal text-white mt-4 ">Ready to watch?</a>
        <div className="flex mt-4">
          <input
            placeholder="Email address"
            className="bg-white p-4 min-w-[400px] outline-none ring-0"
          />
          <button
            className="flex items-center bg-[#e50914] text-white text-xl px-8"
          >
            Get Started
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              className="w-6"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M9 5l7 7-7 7"
              />
            </svg>
          </button>
        </div>
        </div>
      </main>
      <footer className='p-10 bg-gradient-to-br w-full text-white from-red-900 to-red-500 items-center text-center flex flex-col'>
        <a className='text-2xl font-medium max-w-xl tracking-wide'>The Project Created in the Inspiration to Clone Netflix</a>
        <a className='text-2xl font-medium max-w-xl tracking-wide'>Made By- Drishtant Dubey</a>
      </footer>
    </div>
  )
}
