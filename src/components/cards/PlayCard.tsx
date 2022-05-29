import { Typography } from '@mui/material'
import PlayArrowOutlinedIcon from '@mui/icons-material/PlayArrowOutlined'
import VolumeUpIcon from '@mui/icons-material/VolumeUp'
import BaseCard from './BaseCard'
import { useAudioPlayer } from 'react-use-audio-player'

interface Props {
  fileName: string
}

const PlayCard = ({ fileName }: Props) => {
  // const origin = 'http://localhost:3000'
  // typeof window === 'undefined'
  //   ? 'http://localhost:3000'
  //   : window.location.origin
  console.log(`/sounds/${fileName}`)
  const { play, error, playing } = useAudioPlayer({
    src: `/sounds/${fileName}`,
    html5: true,
    format: ['mp3'],
  })
  console.log('~ error', error)

  const text = playing ? 'Playing ...' : 'Play'

  return (
    <BaseCard onClick={() => play()} disabled={playing}>
      {playing ? (
        <VolumeUpIcon
          sx={{ fontSize: '80px', mt: 2, px: 6, color: 'GrayText' }}
        />
      ) : (
        <PlayArrowOutlinedIcon sx={{ fontSize: '80px', mt: 2, px: 6 }} />
      )}
      <Typography
        variant="h5"
        component="div"
        sx={{ my: 2 }}
        color={playing ? 'GrayText' : 'black'}
      >
        {text}
      </Typography>
    </BaseCard>
  )
}

export default PlayCard
