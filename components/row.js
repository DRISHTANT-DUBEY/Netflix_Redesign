import axios from '../lib/axios';
import React, { useEffect, useState } from 'react';
import Image from 'next/image';

function Row({ title, fetchUrl, isLargeRow = false }) {
    const [movies, setMovies] = useState([]);

    useEffect(() => {
        async function fetchData() {
            const request = await axios.get(fetchUrl);
            setMovies(request.data.results)
            return request;
        }

        fetchData();
    }, [fetchUrl]);

    return (
        <div className='p-5 max-w-screen-xl'>
            <h2 className='text-2xl text-white md:text-4xl font-medium md:mb-5'>{title}</h2>
            <div className='flex space-x-5 scrollbar-hide py-5 overflow-y-hidden overflow-x-scroll'>
                {movies?.map((movie) => (
                    // eslint-disable-next-line react/jsx-key
                    <div className={`${isLargeRow ? 'flex-none h-auto py-6' : 'flex-none group h-auto hover:scale-110 duration-200 transition transform ease-out cursor-pointer hover:z-20'} `}>
                        <Image
                            className={`${isLargeRow ? 'h-48 md:w-48 md:h-72 object-contain cursor-pointer hover:scale-110 transition transform duration-150 ease-out rounded-lg' : 'absolute w-full h-full object-cover rounded-md hover:brightness-50 z-0'}`}
                            key={movie.id}
                            src={`https://image.tmdb.org/t/p/original/${movie.poster_path
                                }`
                            }
                            alt={movie.name}
                            width={192}
                            height={288}
                        />
                        <h2 className={`${isLargeRow ? 'hidden' : 'z-50 absolute bottom-0 text-center w-full text-white text-lg font-medium hidden group-hover:block cursor-pointer px-3 bg-gradient-to-br from-transparent to-black '}`}>{movie.title || movie.name || movie.original_name}</h2>
                    </div>
                ))}
            </div>
        </div>
    )
}

export default Row;