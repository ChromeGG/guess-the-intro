import { Container, Typography, Stack } from '@mui/material'
import { useToggle } from '@react-hookz/web'
import type { GetServerSideProps, NextPage } from 'next'
import { useState } from 'react'
import AnswersGrid from '../components/AnswersGrid'
import PlayCard from '../components/cards/PlayCard'
import WinDialog from '../components/dialogs/WinDialog'
import { allSounds, Sound } from '../data/sounds'
import { getAnswers, shuffleArray } from '../utils'
import LossDialog from '../components/dialogs/LossDialog'

interface Props {
  initSounds: Sound[]
}

const Home: NextPage<Props> = ({ initSounds }: Props) => {
  const [score, setScore] = useState(0)

  const [sounds, setSounds] = useState(initSounds)
  const [currentSound, setCurrentSound] = useState<Sound>(sounds[0])
  const [isWinDialogOpen, toggleWinIsDialogOpen] = useToggle()
  const [isLossDialogOpen, toggleLossIsDialogOpen] = useToggle()

  const answers = getAnswers(currentSound.category)

  const handleChooseAnswer = (name: string) => {
    if (name !== currentSound.name) {
      toggleLossIsDialogOpen()
      return
    }
    setScore(score + 1)
    setSounds((prev) => prev.filter((s) => s.name !== name))
    const nextSound = sounds[1]
    if (!nextSound) {
      toggleWinIsDialogOpen()
      return
    }
    setCurrentSound(nextSound)
    return
  }

  const restartGame = () => {
    setScore(0)
    setSounds(() => shuffleArray(allSounds))
    toggleWinIsDialogOpen(false)
    toggleLossIsDialogOpen(false)
  }

  return (
    <Container sx={{ border: '2px solid black' }}>
      <WinDialog isOpen={isWinDialogOpen} onClose={restartGame} />
      <LossDialog isOpen={isLossDialogOpen} onClose={restartGame} />
      <Stack alignItems="center" sx={{ mb: 6 }}>
        <Typography variant="h1" align="center">
          Guess The Sound 🎵
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
