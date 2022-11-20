import { useSelector } from 'react-redux'
import { useParams } from 'react-router-dom'
import { Error, Loader, SongCard } from '../components'
import { useGetSongsBySearchQuery } from '../redux/services/shazamCore'

const Search = () => {
  const { searchTerm } = useParams()
  const { data, isFetching, error } = useGetSongsBySearchQuery(searchTerm)
  const { activeSong, isPlaying } = useSelector((state) => state.player)

  const songs = data?.tracks?.hits?.map((song) => song.track)

  if (isFetching) return <Loader title="Loading top charts" />

  if (error) return <Error />

  return (
    <div className="flex flex-col">
      <h2 className="text-3xl text-white text-left font-bold mt-4 mb-10">
        Results for <span className="font-black">{searchTerm}</span>
      </h2>

      <div className="flex flex-wrap sm:justify-start justify-center gap-8">
        {songs?.map((song, index) => (
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

export default Search;
