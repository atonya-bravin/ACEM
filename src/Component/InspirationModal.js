import React from 'react'
import {
  ModalContent,
  ModalActions,
  Button,
  Icon,
  Modal,
} from 'semantic-ui-react'

function InspirationModal() {
  const [open, setOpen] = React.useState(false)

  return (
    <Modal
      onClose={() => setOpen(false)}
      onOpen={() => setOpen(true)}
      open={open}
      trigger={<Button className='ui button primary'>Get Inspired</Button>}
    >
      <ModalContent>
        <div className='ui header w-full text-center'>Psalms 1:2-10</div>
        <div className='w-[full] fluid text-center'>
          You will keep in perfect peace those whose minds are steadfast, because they trust in you.
        </div>
      </ModalContent>
      <ModalActions>
        <Button color='red' inverted onClick={() => setOpen(false)}>
          <Icon name='close' /> Close
        </Button>
      </ModalActions>
    </Modal>
  )
}

export default InspirationModal;