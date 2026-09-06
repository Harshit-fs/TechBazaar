import { useState, useEffect } from "react";
import axios from "axios";
import { useLocation } from "react-router-dom";

function CheckoutPage() {

  const [cartItems, setCartItems] = useState([]);
  const location = useLocation();
  const buyNowProduct = location.state?.product;
  
  console.log(buyNowProduct);

    const [form, setForm] = useState({
    name: "",
    phone: "",
    address: "",
    payment_method: "COD"
  });

 useEffect(() => {

  if (buyNowProduct) return;

  axios
    .get(`https://techbazaar-1-e21b.onrender.com/cart/all?user_id=1`)
    .then((res) => setCartItems(res.data))
    .catch((err) => console.log(err));

}, [buyNowProduct]);


  const deleteItem = async (id) => {
  try {
    await axios.delete("https://techbazaar-1-e21b.onrender.com/cart/delete", {
      data: { id }
    });

    // UI refresh after delete
    setCartItems(cartItems.filter(item => item.id !== id));

  } catch (error) {
    console.log(error);
  }
};

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const total = buyNowProduct
  ? buyNowProduct.price
  : cartItems.reduce(
      (acc, item) => acc + item.price * item.quantity,
      0
    );

 const placeOrder = async (e) => {
  e.preventDefault();

  await axios.post("https://techbazaar-1-e21b.onrender.com/cart/orders", {
    ...form,

    items: buyNowProduct ? [buyNowProduct] : cartItems,

    total_amount: total,
    payment_status: "pending",
    status: "pending"
  });

  alert("Order Placed!");
};

 return (
  <div className="checkout-page">

    <div className="checkout-container">

      {/* LEFT SIDE - CART */}
      <div className="cart-summary">

        <h2>{buyNowProduct ? "Selected Product" : "Your Cart"}</h2>

        {buyNowProduct ? (

          <div className="cart-item">
            <img src={buyNowProduct.image} alt="" />

            <div>
              <h4>{buyNowProduct.name}</h4>
              <p>₹{buyNowProduct.price}</p>
              <p>Total: ₹{buyNowProduct.price}</p>
            </div>
          </div>

        ) : cartItems.length === 0 ? (

          <p>Cart is empty</p>

        ) : (

          cartItems.map((item, index) => (
            <div key={index} className="cart-item">

              <img src={item.image} alt="" />

              <div>
                <h4>{item.name}</h4>
                <p>Qty: {item.quantity}</p>
                <p>₹{item.price}</p>
                <p>Total: ₹{item.price * item.quantity}</p>

                <button
                  onClick={() => deleteItem(item.id)}
                  className="delete-btn"
                >
                  Remove
                </button>

              </div>

            </div>
          ))

        )}

        <hr />

        <h3>Grand Total: ₹{total}</h3>

      </div>

      {/* RIGHT SIDE - FORM */}
      <form onSubmit={placeOrder} className="checkout-form">

        <h2>Checkout Details</h2>

        <input name="name" placeholder="Name" onChange={handleChange} />
        <input name="phone" placeholder="Phone" onChange={handleChange} />
        <textarea name="address" placeholder="Address" onChange={handleChange}  />

        <select name="payment_method" onChange={handleChange}>
          <option value="COD">Cash on Delivery</option>
          <option value="UPI">UPI</option>
          <option value="CARD">Card</option>
        </select>

        <button type="submit">Place Order</button>

      </form>

    </div>

  </div>
);
}

export default CheckoutPage;