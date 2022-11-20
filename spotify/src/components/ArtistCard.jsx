import { useNavigate } from 'react-router-dom'

const ArtistCard = ({ track }) => {
  const navigate = useNavigate()

  return (
    <div 
      className="flex flex-col w-[250px] p-4 bg-white/5 bg-opacity-80 backdrop-blur-sm animate-slideup rounded-lg cursor-pointer"
      onClick={() => navigate(`/artists/${track?.artists[0].adamid}`)}
    >
      <img 
        alt="artist" 
        src={track?.images?.coverart} 
        className="h-56 w-full rounded-lg" 
      />

      <p className="font-semibold text-lg text-white mt-4 truncate">
        {track?.subtitle}
      </p>
    </div>
  )
};

export default ArtistCard;
