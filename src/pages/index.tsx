import {
  Box,
  Button,
  Card,
  CardContent,
  CardHeader,
  CardMedia,
  Container,
  IconButton,
  CardActionArea,
  Typography,
  Stack,
  Grid,
} from '@mui/material'
import { useToggle } from '@react-hookz/web'
import type { GetServerSideProps, NextPage } from 'next'
import { useEffect, useState } from 'react'
import { useAudioPlayer } from 'react-use-audio-player'
import AnswerCard from '../components/AnswerCard'
import AnswersGrid from '../components/AnswersGrid'
import PlayCard from '../components/PlayCard'
import WinDialog from '../components/WinDialog'
import { allSounds, Sound } from '../data/sounds'
import { getAnswers, shuffleArray } from '../utils'

interface Props {
  initSounds: Sound[]
  // seed: number
}

const Home: NextPage<Props> = ({ initSounds }: Props) => {
  const [score, setScore] = useState(0)

  const [sounds, setSounds] = useState(initSounds)
  const [currentSound, setCurrentSound] = useState<Sound>(sounds[0])
  const [isDialogOpen, toggleIsDialogOpen] = useToggle()

  const answers = getAnswers(currentSound.category)

  const handleChooseAnswer = (name: string) => {
    if (name === currentSound.name) {
      setScore(score + 1)
      setSounds((prev) => prev.filter((s) => s.name !== name))
      const nextSound = sounds[1]
      if (!nextSound) {
        toggleIsDialogOpen()
        return
      }
      setCurrentSound(nextSound)
    }
  }

  const restartGame = () => {
    // TODO setScore(0), setSounds(shuffleArray(allSounds)), setCurrentSound(sounds[0]) etc.
    window.location.reload()
  }

  return (
    <Container sx={{ border: '2px solid black' }}>
      <WinDialog isOpen={isDialogOpen} onClose={restartGame} />
      <Stack alignItems="center" sx={{ mb: 6 }}>
        <Typography variant="h1" align="center">
          Guess The Sound
        </Typography>
        <Typography variant="h2" sx={{ my: 2 }}>
          Score: {score}
        </Typography>
        <PlayCard fileName={currentSound.url} />
      </Stack>
      <AnswersGrid answers={answers} onClick={handleChooseAnswer} />
    </Container>
  )
}

export const getServerSideProps: GetServerSideProps<Props> = async () => {
  const initSounds = shuffleArray(allSounds)
  return { props: { initSounds } }
}

export default Home
