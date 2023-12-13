import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';

import loadingImage from '../../images/loadingDribbble.gif'

import Product from '../Product/Product';

const ProductDetail = () => {

  document.title = "Product Details";

    const params = useParams();
    const productKey = params.key

    const [product, setProduct] = useState({});
    const [isLoading, setIsLoading] = useState(true);

    // single data load kortase database theke.
    useEffect(() => {
      fetch(`https://ema-john-server-yz24.onrender.com/product/${productKey}`)
      .then(res => res.json())
      .then(data => {
        setProduct(data)
        setIsLoading(false)
      })
  
    }, [productKey]);

  return (
    <div>
        <h1>Your Product Details</h1>
        {isLoading?
        <div style={{display: 'flex', justifyContent: 'center', alignItems: 'center'}}>
            <img style={{width: '40%', height: 'auto'}} src={loadingImage} alt="Loading_Image" />
        </div> : <Product showAddToCart={false} product={product} />}
        
    </div>
  )
}

export default ProductDetail