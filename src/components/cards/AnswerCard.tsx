import {
  Card,
  CardActionArea,
  CardMedia,
  CardContent,
  Typography,
} from '@mui/material'
import Image from 'next/image'
import BaseCard from './BaseCard'

interface Props {
  name: string
  image: string
  onClick: (name: string) => void
}

const AnswerCard = ({ name, image, onClick }: Props) => {
  const src = `/images/${image}`
  return (
    <BaseCard onClick={() => onClick(name)}>
      {/* <CardMedia>
        <Image src={src} height={200} width={400} alt={name} />
      </CardMedia> */}
      <CardMedia src={src} image={src} />
      <CardContent>
        <Typography variant="h5">{name}</Typography>
      </CardContent>
    </BaseCard>
  )
}

export default AnswerCard
