import React, { useEffect, useState } from "react";
import axios from "axios";
import {NavLink} from "react-router-dom";

function Cart() {

  const [cart, setCart] = useState([]);

  useEffect(() => {
    fetchCart();
  }, []);

  const fetchCart = async () => {
    try {
      const res = await axios.get(
        "http://localhost:5000/cart/all?user_id=1"
      );

      setCart(res.data);

    } catch (err) {
      console.log(err);
    }
  };

  const deleteItem = async (id) => {
    try {

      await axios.delete(
        "http://localhost:5000/cart/delete",
        {
          data: { id }
        }
      );

      fetchCart();

    } catch (err) {
      console.log(err);
    }
  };

  const updateQty = async (id, quantity) => {

    if(quantity < 1) return;

    try {

      await axios.put(
        "http://localhost:5000/cart/update",
        {
          id,
          quantity
        }
      );

      fetchCart();

    } catch (err) {
      console.log(err);
    }
  };

  const total = cart.reduce((sum,item)=>{
    return sum + (item.price * item.quantity);
  },0);
  
  return (
    <>
      <main id="main">

        <section className="page-head">
          <div className="container">
            <div className="crumbs">
              <NavLink to="/">Home</NavLink>
              <span className="sep">›</span>
              <span>Shopping cart</span>
            </div>
            <center>
            <h1>Your cart</h1>
         
        <p> <h4>   <b> Your items · ready to ship. Free delivery on this order. Estimated arrival in 7 days.</b></h4></p>
             </center>
             </div>
        </section>

  

          {/* 🔥 ONLY FIX: left + right split */}
          <div className="cart-layout">

            {/* LEFT SIDE (NO CHANGE IN CONTENT) */}
            <div className="cart-left">

             <div className="cart-list">
                  {
                  cart.map((item) => (

                  <article className="cart-row" key={item.id}>

                    <div className="pic">
                      <img src={item.image} alt="" />
                    </div>

                    <div className="info">
                      <div className="name">
                        {item.name}
                      </div>

                      <div className="variant">
                        Product ID : {item.product_id}
                      </div>
                    </div>

                    <div className="qty">

                      <button
                        onClick={() =>
                        updateQty(
                          item.id,
                          item.quantity - 1
                        )
                      }
                      >
                        −
                      </button>

                      <input
                        type="text"
                        value={item.quantity}
                        readOnly
                      />

                      <button
                        onClick={() =>
                        updateQty(
                          item.id,
                          item.quantity + 1
                        )
                      }
                      >
                        +
                      </button>

                    </div>

                    <span className="subtotal">
                      ₹ {item.price * item.quantity}
                    </span>

                    <button
                      className="remove"
                      onClick={() =>
                        deleteItem(item.id)
                      }
                    >
                      ✕
                    </button>

                  </article>

                  ))
                  }

                  </div>
              <div style={{ marginTop: "var(--s5)", display: "flex", gap: "var(--s3)", flexWrap: "wrap" }}>
                <NavLink to="/shop" className="btn btn--ghost">← Continue shopping</NavLink>
                <button className="btn btn--ghost">Update cart</button>
              </div>

              <div style={{
                marginTop: "var(--s7)",
                display: "grid",
                gridTemplateColumns: "repeat(3, 1fr)",
                gap: "var(--s4)",
                padding: "var(--s5)",
                background: "var(--bg)",
                borderRadius: "var(--r)"
              }}>
                <div style={{ display: "flex", alignItems: "center", gap: "var(--s3)" }}>
                  <div style={{ width: 40, height: 40, background: "var(--indigo-soft)", color: "var(--indigo)", borderRadius: "999px", display: "grid", placeItems: "center" }}>⚡</div>
                  <div>
                    <div style={{ fontWeight: 700 }}>Free fast shipping</div>
                    <div style={{ fontSize: 11 }}>2–3 business days</div>
                  </div>
                </div>

                <div style={{ display: "flex", alignItems: "center", gap: "var(--s3)" }}>
                  <div style={{ width: 40, height: 40, background: "var(--indigo-soft)", color: "var(--indigo)", borderRadius: "999px", display: "grid", placeItems: "center" }}>↺</div>
                  <div>
                    <div style={{ fontWeight: 700 }}>30-day returns</div>
                    <div style={{ fontSize: 11 }}>No questions asked</div>
                  </div>
                </div>

                <div style={{ display: "flex", alignItems: "center", gap: "var(--s3)" }}>
                  <div style={{ width: 40, height: 40, background: "var(--indigo-soft)", color: "var(--indigo)", borderRadius: "999px", display: "grid", placeItems: "center" }}>★</div>
                  <div>
                    <div style={{ fontWeight: 700 }}>2-year warranty</div>
                    <div style={{ fontSize: 11 }}>On every order</div>
                  </div>
                </div>
              </div>

            </div>

           
            <aside className="cart-summary">

              <h3>Order summary</h3>

              <div className="promo-input">
                <input type="text" placeholder="Promo code" />
                <button>Apply</button>
              </div>

              <div className="cart-line">
                <span>Subtotal · {cart.length} items</span>
                <span style={{ fontFamily: "var(--ff-display)", fontWeight: 600, color: "var(--ink)" }}>₹ {total}</span>
              </div>

              <div className="cart-line">
                <span>Shipping</span>
                <span style={{ color: "var(--emerald)", fontWeight: 600 }}>Free</span>
              </div>

              <div className="cart-line">
                <span>Estimated tax</span>
                <span style={{ fontFamily: "var(--ff-display)", fontWeight: 600, color: "var(--ink)" }}>₹700.60</span>
              </div>

              <div className="cart-line">
                <span>Promo · WELCOME20</span>
                <span style={{ color: "var(--rose)", fontFamily: "var(--ff-display)", fontWeight: 600 }}>−₹250.00</span>
              </div>

              <div className="cart-line is-total">
                <span>Total</span>
                <span>₹ {total}</span>
              </div>

              <NavLink to="/checkoutpage/:id" className="btn">
              Proceed to Checkout
              </NavLink>
              <div style={{ display: "flex", justifyContent: "center", gap: "var(--s3)", marginTop: "var(--s5)", flexWrap: "wrap" }}>
                <span style={{ fontSize: "11px" }}>VISA</span>
                <span style={{ fontSize: "11px" }}>MASTERCARD</span>
                <span style={{ fontSize: "11px" }}>AMEX</span>
                <span style={{ fontSize: "11px" }}>PAYPAL</span>
                <span style={{ fontSize: "11px" }}>APPLE PAY</span>
              </div>

              <p style={{ marginTop: "var(--s5)", fontSize: "11px", textAlign: "center" }}>
                Encrypted checkout · SSL secured.
              </p>

            </aside>

          </div>

  

      </main>
    </>
  );
}

export default Cart;