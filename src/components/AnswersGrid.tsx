import { Grid, Box } from '@mui/material'
import { Sound } from '../data/sounds'
import AnswerCard from './AnswerCard'

interface Props {
  answers: Sound[]
  onClick: (name: string) => void
}

const AnswersGrid = ({ answers, onClick }: Props) => {
  return (
    <Box
      sx={{
        display: 'grid',
        gridTemplateColumns: 'repeat(auto-fit, minmax(160px, 1fr))',
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
