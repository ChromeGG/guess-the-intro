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
      text=""
      onClose={onClose}
    />
  )
}

export default LossDialog
