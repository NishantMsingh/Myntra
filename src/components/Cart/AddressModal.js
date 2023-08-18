import React, { useRef, useState } from 'react';
import "./AddressModal.css";
import Modal from 'react-bootstrap/Modal';
import PropTypes from 'prop-types';
const AddressModal = (props) => {
  const [phone,setPhone]=useState("");
  const [pin,setPin]=useState("");
  const name=useRef();
  const local=useRef();
  const add=useRef();
  const phoneValidation=(e)=>{
    if(e.target.value.length>11)
    {
      setPhone("");
    }
    else
    {
      setPhone(e.target.value);
    }

  }
    const pinValidation=(e)=>{
    if(e.target.value.length>6)
    {
      setPin("");
    }
    else
    {
      setPin(e.target.value);
    }
 
  }


  const addressVaidationHandler=()=>{
   
    if(phone.length===10|| phone.length===11 && pin.length===6 && name!=undefined &&local!=undefined &&add!=undefined )
    {
      props.addressHandler();
      let address={phone,name:name.current.value,pin,address:add.current.value,locality:local.current.value};
      console.log(address);(
      localStorage.setItem("address",JSON.stringify(address)));
    }
    else{
      alert("Fill the address correctly");
    }
  }
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

            <input className='input' ref={name} type='text' placeholder='Name....' id='name' />     <input onChange={phoneValidation} value={phone} className='input' type='number' placeholder='Phone' id='number' />
          </div>

        </div>
        <div className="">
          <h6 className=" cartBold">Address</h6>

          <div className='d-flex flex-row'>
            <input value={pin}  onChange={pinValidation} className='input' type='number' placeholder=' 6 digit pin code' />    <input className='input' type='text' placeholder='Locality/town'  ref={local} />
          </div>

          <div>

            <textarea className='input w-100' type='text' placeholder='Address...'  ref={add}/>
          </div>
          <button className=' cartBold place-order-btn w-100' onClick={addressVaidationHandler}> ADD ADDRESS</button>
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
