import { Box, useMediaQuery } from '@mui/material'
import { Sound } from '../data/sounds'
import AnswerCard from './cards/AnswerCard'

interface Props {
  answers: Sound[]
  onClick: (name: string) => void
}

const AnswersGrid = ({ answers, onClick }: Props) => {
  const isXs = useMediaQuery('(max-width: 606px)')
  const minWidth = isXs ? 200 : 250
  return (
    <Box
      sx={{
        display: 'grid',
        gridTemplateColumns: `repeat(auto-fit, minmax(${minWidth}px, 1fr))`,
        gap: 3,
      }}
    >
      {answers.map(({ name, image }) => (
        <AnswerCard key={name} name={name} image={image} onClick={onClick} />
      ))}
    </Box>
  )
}

export default AnswersGrid
