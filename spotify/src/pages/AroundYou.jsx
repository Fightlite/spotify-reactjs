import { useState, useEffect } from 'react'
import { useSelector } from 'react-redux'
import axios from 'axios'

import { Error, Loader, SongCard } from '../components'
import { useGetSongsByCountryQuery } from '../redux/services/shazamCore'

const AroundYou = () => {
    const [country, setCountry] = useState('')
    const [loading, setLoading] = useState(true)
    const { activeSong, isPlaying } = useSelector((state) => state.player)

    const { data, isFetching, error } = useGetSongsByCountryQuery(country)

    useEffect(() => {
        axios.get(`https://geo.ipify.org/api/v2/country?apiKey=at_tQgCalQ2FeYT9Bk9Y1KMtRS43DL5Z`)
            .then((res) => setCountry(res?.data?.location?.country))
            .catch((err) => console.log(err))
            .finally(() => setLoading(false))
    }, [country])

    if (isFetching && loading) return <Loader title="Loading songs around you" />

    if (country && error) return <Error />

    return (
        <div className="flex flex-col">
            <h2 className="text-3xl text-white text-left font-bold mt-4 mb-10">
                Around You
                <span className="font-black"> {country === 'VN' ? 'Vietnam' : country }</span>
            </h2>

            <div className="flex flex-wrap sm:justify-start justify-center gap-8">
                {data?.map((song, index) => (
                    <SongCard
                        key={song.key}
                        song={song}
                        index={index}
                        isPlaying={isPlaying}
                        activeSong={activeSong}
                        data={data}
                    />
                ))}
            </div>
        </div>
    )
}

export default AroundYou
