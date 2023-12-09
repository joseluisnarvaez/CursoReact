import { useState } from 'react'

export const FormCliente = () => {
   


  return (
    <>
        <Button variant="primary" onClick={handleShow}>
        Launch static backdrop modal
        </Button>

        <Modal
        show={show}
        onHide={handleClose}
        backdrop="static"
        keyboard={false}
        >
        <Modal.Header closeButton>
            <Modal.Title>Generacion de Compra</Modal.Title>
        </Modal.Header>
        <Modal.Body>

        </Modal.Body>
        <Modal.Footer>
            <Button variant="secondary" onClick={handleClose}>
            Close
            </Button>
            <Button variant="primary">Comprar</Button>
        </Modal.Footer>
        </Modal>
    </>
  )
}
