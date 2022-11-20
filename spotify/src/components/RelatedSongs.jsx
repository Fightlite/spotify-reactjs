import SongBar from './SongBar'

const RelatedSongs = ({ data, isPlaying, activeSong, handlePauseClick, handlePlayClick, artistId }) => (
  <div className="flex flex-col">
    <h1 className="font-bold text-3xl text-white">
      Related Songs:
    </h1>

    <div className="flex flex-col w-full mt-6">
      {data?.map((song, index) => (
        <SongBar 
          key={`${song?.key}-${artistId}`}
          song={song} 
          activeSong={activeSong}
          index={index}
          artistId={artistId}
          isPlaying={isPlaying}
          handlePauseClick={handlePauseClick}
          handlePlayClick={handlePlayClick}
        />
      ))}
    </div>
  </div>
);

export default RelatedSongs;
