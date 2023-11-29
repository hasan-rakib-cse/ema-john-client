import React from 'react'

const ManageInventory = () => {

  const product = {}

  // 1 ta 1 ta kore data, database e save korbo.
  const handleAddProduct = () => {
    const product = {};

    fetch('https://ema-john-server-yz24.onrender.com/addProduct', {
      method: 'POST',
      headers: {'Content-Type': 'application/json'},
      body: JSON.stringify(product)
    })
  }

  return (
    <div style={{marginTop: '20px'}}>
      <form action="">
        <p><span>Name</span><input type="text" /></p>
        <p><span>Price</span><input type="text" /></p>
        <p><span>Quantity</span><input type="text" /></p>
        <p><span>Product Image</span><input type="file" /></p>

        <button onClick={handleAddProduct}>Add Product</button>
      </form>
    </div>
  )
}

export default ManageInventory