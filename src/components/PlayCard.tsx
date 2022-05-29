import {
  Card,
  CardActionArea,
  CardMedia,
  CardContent,
  Typography,
  Stack,
} from '@mui/material'
import PlayArrowOutlinedIcon from '@mui/icons-material/PlayArrowOutlined'
import BaseCard from './BaseCard'
import { useAudioPlayer } from 'react-use-audio-player'

enum State {
  'idle',
  'playing',
  'finished',
}

interface Props {
  fileName: string
}

const PlayCard = ({ fileName }: Props) => {
  const origin = 'http://localhost:3000'
  // typeof window === 'undefined'
  //   ? 'http://localhost:3000'
  //   : window.location.origin
  const { togglePlayPause, error } = useAudioPlayer({
    src: `${origin}/sounds/${fileName}`,
    html5: true,
    format: ['mp3'],
  })
  console.log('~ error', error)
  const asd = () => {
    togglePlayPause()
  }

  return (
    <BaseCard onClick={() => asd()}>
      <PlayArrowOutlinedIcon sx={{ fontSize: '80px', mt: 2, px: 6 }} />
      <Typography variant="h5" component="div" sx={{ my: 2 }}>
        Play
      </Typography>
    </BaseCard>
  )
}

export default PlayCard
