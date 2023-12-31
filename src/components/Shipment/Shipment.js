import React, { useContext, useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { useForm } from 'react-hook-form';
import './Shipment.css'
import { UserContext } from '../UserContext/UserContext';
import { clearLocalShoppingCart, getDatabaseCart } from '../../utilities/databaseManager';
import ProcessPayment from '../ProcessPayment/ProcessPayment';

const Shipment = () => {

  document.title = "Shipment";

  const navigate = useNavigate();
  const [loggedInUser, setLoggedInUser] = useContext(UserContext);
  const [shippingData, setShippingData] = useState(null);
  const { register, handleSubmit, watch, formState: { errors } } = useForm();

  const onSubmit = (data) => {
    setShippingData(data);
  }

  const handlePaymentSuccess = (paymentId) => {

    const saveCart = getDatabaseCart();
    const orderDetails = { 
      ...loggedInUser, 
      products: saveCart, 
      shipment: shippingData, 
      orderTime: new Date(),
      paymentId
     };

    fetch('https://ema-john-server-yz24.onrender.com/addOrder', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(orderDetails)
    })
      .then(res => res.json())
      .then(data => {
        if (data) {
          console.log(data);
          alert('your order placed successfully');
          clearLocalShoppingCart(); // shipment e click korle order place hoea jabe tokhon amra cart theke items clear kore dibo.
          navigate("/"); // after shipment completed, we view Home Page.
        }
      })
  }

  return (

    <div className="row">
      <div className="col-md-6" style={{display: shippingData ? 'none' : 'block'}}>
        <div className='ship-form-area'>
          <form className='ship-form' onSubmit={handleSubmit(onSubmit)}>
            <input defaultValue={loggedInUser.name} {...register("name", { required: true })} placeholder='name' />
            {errors.name && <span className='error'>Name is required</span>}

            <input defaultValue={loggedInUser.email} {...register("email", { required: true })} placeholder='email' />
            {errors.email && <span className='error'>Email is required</span>}

            <input {...register("address", { required: true })} placeholder='address' />
            {errors.address && <span className='error'>Address is required</span>}

            <input {...register("phone", { required: true })} placeholder='phone' />
            {errors.phone && <span className='error'>Phone number is required</span>}

            <input type="submit" />
          </form>
        </div>
      </div>
      <div className="col-md-6" style={{display: shippingData ? 'block' : 'none'}}>
        <ProcessPayment handlePayment={handlePaymentSuccess} />
      </div>
    </div>


  );
}

export default Shipment