import BaseDialog from './BaseDialog'

interface Props {
  isOpen: boolean
  onClose: () => void
}

const WinDialog = ({ isOpen, onClose }: Props) => {
  return (
    <BaseDialog
      isOpen={isOpen}
      title="Congratulations! 🎊"
      text="You guessed all the intros. Respect 😎"
      onClose={onClose}
    />
  )
}

export default WinDialog
