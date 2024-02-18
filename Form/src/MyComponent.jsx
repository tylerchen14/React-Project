import React, { useState } from 'react'

function MyComponent() {

  const [name, setName] = useState('Guest')
  const [quantity, setQuantity] = useState(0)
  const [comment, setComment] = useState("")
  const [payment, setPayment] = useState("")
  const [shipping, setshipping] = useState("Delivery")

  const nameChange = (e) => {
    setName(e.target.value)
  }

  const quantityChange = (e) => {
    setQuantity(e.target.value)
  }

  const commentChange = (e) => {
    setComment(e.target.value)
  }

  const paymentChange = (e) => {
    setPayment(e.target.value)
  }

  const shippingChange = (e) => {
    setshipping(e.target.value)
  }

  return (
    <div>
      <input value={name} onChange={nameChange}></input>
      <p>Name: {name}</p>

      <input value={quantity} onChange={quantityChange} type='number'></input>
      <p>Quantity: {quantity}</p>

      <textarea value={comment} onChange={commentChange} placeholder='Enter delivery instructions'></textarea>
      <p>Comment: {comment}</p>

      <select value={payment} onChange={paymentChange}>
        <option value={""} disabled>Select an option</option>
        <option value={"Cash"}>Cash</option>
        <option value={"Credit Card"}>Credit Card</option>
        <option value={"LINE Pay"}>LINE Pay</option>
        <option value={"Visa"}>Visa</option>
      </select>
      <p>Payment: {payment}</p>

      <label>
        <input type='radio' value="Pick up" checked={shipping === "Pick up"} onChange={shippingChange} />Pick up
      </label>

      <label>
        <input type='radio' value="Delivery" checked={shipping === "Delivery"} onChange={shippingChange} />Delivery
      </label>
      <p>Deliver: {shipping}</p>

    </div>
  )
}

export default MyComponent