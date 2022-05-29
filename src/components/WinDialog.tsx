import { Button, Dialog, DialogActions, DialogContent, DialogContentText, DialogTitle } from '@mui/material'

interface Props {
  isOpen: boolean
  onClose: () => void
}

const WinDialog = ({ isOpen, onClose }: Props) => {
  return (
    <Dialog open={isOpen} onClose={onClose}>
      <DialogTitle>Congratulations! 🎊</DialogTitle>
      <DialogContent>
        <DialogContentText>You guessed all the sounds. </DialogContentText>
      </DialogContent>
      <DialogActions>
        <Button onClick={onClose}>Play again</Button>
      </DialogActions>
    </Dialog>
  )
}

export default WinDialog
