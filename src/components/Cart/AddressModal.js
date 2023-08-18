import React from 'react';
import "./AddressModal.css";
import Modal from 'react-bootstrap/Modal';
import PropTypes from 'prop-types';

const AddressModal = (props) => {
  return (
    <Modal
      {...props}
      size="lg"
      aria-labelledby=""
      centered
    >
     
        
         
     
 
      <Modal.Body>
      
        <div className="">
        <span className='cartBold h4'>ADD ADDRESS</span>
          <h6 className=" cartBold">Contact details</h6>
           <div className='d-flex flex-row'>
          
          <input className='input' type='text' placeholder='Name....' id='name'/>     <input className='input' type='number' placeholder='Phone' id='number'/> 
           </div>
         
        </div>
        <div className="">
          <h6  className=" cartBold">Address</h6>
          
          <div className='d-flex flex-row'>
          <input className='input' type='number' placeholder='Pin code'/>    <input className='input' type='text' placeholder='Locality/town'/> 
           </div>
         
           <div>
          
           <textarea className='input w-100' type='text' placeholder='Address...'/> 
           </div>
           <button className='place-order-btn w-100' onClick={props.addressHandler}>Proceed to payment</button>
        </div>
      </Modal.Body>
      
        
     
    </Modal>
  );
}

AddressModal.propTypes = {
  show: PropTypes.bool.isRequired,
  onHide: PropTypes.func.isRequired,
  addressHandler: PropTypes.func.isRequired,
};

export default AddressModal;
