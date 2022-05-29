import BaseDialog from './BaseDialog'

interface Props {
  isOpen: boolean
  onClose: () => void
}

const LossDialog = ({ isOpen, onClose }: Props) => {
  return (
    <BaseDialog
      isOpen={isOpen}
      title="Bad answer! 😢"
      text="... but you can try again 😉"
      onClose={onClose}
    />
  )
}

export default LossDialog
