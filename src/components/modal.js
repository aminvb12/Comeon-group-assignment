import React from "react";
import {
  ModalHeader,
  ModalContent,
  ModalActions,
  Modal,
  Button,
} from "semantic-ui-react";

export const ModalComponent = ({ open, onClose, title, content }) => {
  return (
    <Modal dimmer={true} open={open} onClose={onClose}>
      <ModalHeader>{title}</ModalHeader>
      <ModalContent>{content}</ModalContent>
      <ModalActions>
        <Button negative onClick={onClose}>
          Cancel
        </Button>
      </ModalActions>
    </Modal>
  );
};
