import { Card, CardActionArea, Stack } from '@mui/material'

interface Props {
  children: React.ReactNode
  onClick: () => void
}

const BaseCard = ({ children, onClick }: Props) => {
  return (
    <Card sx={{ borderRadius: 8 }} elevation={6}>
      <CardActionArea onClick={onClick}>
        <Stack alignItems="center">{children}</Stack>
      </CardActionArea>
    </Card>
  )
}

export default BaseCard
