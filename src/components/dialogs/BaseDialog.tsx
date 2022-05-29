import {
  Button,
  Dialog,
  DialogActions,
  DialogContent,
  DialogContentText,
  DialogTitle,
} from '@mui/material'

interface Props {
  isOpen: boolean
  onClose: () => void
  title: string
  text: string
}

const BaseDialog = ({ isOpen, onClose, title, text }: Props) => {
  return (
    <Dialog open={isOpen} onClose={onClose}>
      <DialogTitle>{title}</DialogTitle>
      <DialogContent>
        <DialogContentText>{text}</DialogContentText>
      </DialogContent>
      <DialogActions>
        <Button onClick={onClose}>Play again</Button>
      </DialogActions>
    </Dialog>
  )
}

export default BaseDialog
