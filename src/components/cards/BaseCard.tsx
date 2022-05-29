import { Card, CardActionArea, Stack } from '@mui/material'

interface Props {
  children: React.ReactNode
  onClick: () => void
  disabled?: boolean
}

const BaseCard = ({ children, onClick, disabled }: Props) => {
  return (
    <Card sx={{ borderRadius: 8 }} elevation={6}>
      <CardActionArea onClick={onClick} disabled={!!disabled}>
        <Stack alignItems="center">{children}</Stack>
      </CardActionArea>
    </Card>
  )
}

export default BaseCard
