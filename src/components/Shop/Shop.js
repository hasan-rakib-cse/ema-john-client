import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom'

import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

import './Shop.css';
import Product from '../Product/Product';
import Cart from '../Cart/Cart';
import { addToDatabaseCart, getDatabaseCart } from '../../utilities/databaseManager';
import { faL } from '@fortawesome/free-solid-svg-icons';

import loadingImage from '../../images/loadingDribbble.gif'

const Shop = () => {

    document.title = "Shop More";

    const [products, setProducts] = useState([]);
    const [cart, setCart] = useState([]);

    // server theke data load korbo. sei data gulo fake data r bodole use korbo
    useEffect(() => {
        fetch('https://ema-john-server-yz24.onrender.com/products')
            .then(res => res.json())
            .then(data => setProducts(data))
    }, [])


    // Cart er jnno use korsi
    useEffect(() => {
        // cart
        const saveCart = getDatabaseCart();
        const productKeys = Object.keys(saveCart)

        // POST req er maddhome body er moddhe keys gulo pathea dibo backend server e.
        fetch('https://ema-john-server-yz24.onrender.com/productsByKeys', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(productKeys)
        })
        .then(res => res.json())
        .then(data => {
            const previousCart = productKeys.map(existingKey => {
                const product = data.find(pd => pd.key === existingKey)
                product.quantity = saveCart[existingKey];
                return product;
            })
            setCart(previousCart)
        })

        // data fecth hoea aste deri hole jate error na dey tai if condition disi.  
        //   if(products.length > 0) {
        //     const previousCart = productKeys.map(existingKey => {
        //         const product = products.find(pd => pd.key === existingKey)
        //         product.quantity = saveCart[existingKey];
        //         return product;
        //       })
        //       setCart(previousCart)
        //   }
        // }, [products])
    }, [])


    const handleAddProduct = (product) => {
        const toBeAddedKey = product.key;
        const sameProduct = cart.find(pd => pd.key === toBeAddedKey);
        let count = 1;
        let newCart;
        if (sameProduct) {
            count = sameProduct.quantity + 1;
            console.log(count)
            sameProduct.quantity = count;
            const others = cart.filter(pd => pd.key !== toBeAddedKey);
            newCart = [...others, sameProduct]; // jesob item match kortase na segulo sob & je item find hoise setar 1 piece newCart e rakhtasi
        }
        else {
            product.quantity = 1;
            newCart = [...cart, product]
        }
        setCart(newCart);
        addToDatabaseCart(product.key, count);
    }

    return (

        <div className='twin-container'>
            <Row>
                <Col className="product-container" xs={{ span: 12, order: 2 }} lg={{ span: 9, order: 1 }}>
                    {products.length === 0  && 
                        <div style={{display: 'flex', justifyContent: 'center', alignItems: 'center'}}>
                            <img style={{width: '50%', height: 'auto'}} src={loadingImage} alt="Loading_Image" />
                        </div>
                    }
                    {
                        products.map(product => <Product addProduct={handleAddProduct} showAddToCart={true} key={product.key} product={product} />)
                    }
                </Col>
                <Col className="cart-container " xs={{ span: 12, order: 1 }} lg={{ span: 3, order: 2 }}>
                    <Cart cart={cart}>
                        <Link style={{ textDecoration: 'none' }} to={'/review'}><button className='main-button'>Review Order</button></Link>
                    </Cart>
                </Col>
            </Row>
        </div>

    );
};

export default Shop;