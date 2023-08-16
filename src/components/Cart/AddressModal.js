import React from 'react';
import "./AddressModal.css";
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import PropTypes from 'prop-types';

const AddressModal = (props) => {
  return (
    <Modal
      {...props}
      size="lg"
      aria-labelledby="contained-modal-title-vcenter"
      centered
    >
      <Modal.Header closeButton>
        <Modal.Title id="contained-modal-title-vcenter">
          <span className='slate'>ADD ADDRESS</span>
        </Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <div className="address-section">
          <h6 className="section-heading slate">Contact details</h6>
           <div>
           <label htmlFor='name'> Name</label>
          <input type='text' placeholder='Name....' id='name'/> 
           </div>
           <div>
           <label htmlFor='number'> Phone</label>
          <input type='number' placeholder='Phone' id='number'/> 
           </div>
        </div>
        <div className="address-section">
          <h6  className="section-heading slate">Address</h6>
           <label> Pin</label>
           <input type='number'/> 

           <label> Address</label>
           <input type='text'/> 

           <label> Locality</label>
           <input type='text'/> 

        </div>
      </Modal.Body>
      <Modal.Footer>
        <Button className='place-order-btn' onClick={props.addressHandler}>Proceed to payment</Button>
      </Modal.Footer>
    </Modal>
  );
}

AddressModal.propTypes = {
  show: PropTypes.bool.isRequired,
  onHide: PropTypes.func.isRequired,
  addressHandler: PropTypes.func.isRequired,
};

export default AddressModal;
