import { useEffect, useState } from "react";
import { NavLink } from "react-router-dom";
import axios from "axios";
import { useNavigate } from "react-router-dom";

function Data() {

  // STATES
  const [products, setProducts] = useState([]);
  const [activeProduct, setActiveProduct] = useState(null);
  const [mainImg, setMainImg] = useState("");
  const [qty, setQty] = useState(1);
  const navigate = useNavigate();

  //  GET PRODUCTS
  useEffect(() => {
    axios.get("https://techbazaar-1-e21b.onrender.com/product/products")
      .then(res => {
        setProducts(res.data);

        if (res.data.length > 0) {
          setActiveProduct(res.data[0]);
          setMainImg(res.data[0].image); // FIXED
        }
      })
      .catch(err => console.log(err));
  }, []);

  // CHANGE PRODUCT
  const changeProduct = (product) => {
    setActiveProduct(product);
    setMainImg(product.image); // FIXED
    setQty(1);
  };

  //  ADD TO CART
  const addToCart = async () => {
    try {
      await axios.post("https://techbazaar-1-e21b.onrender.com/cart/cart", {
        user_id: 1,
        product_id: activeProduct.id,
        quantity: qty
      });

      alert("Added to cart");
    } catch (err) {
      console.log(err);
      alert("Error adding to cart");
    }
  };

  const addProductToCart = async (product) => {
  try {
    await axios.post("https://techbazaar-1-e21b.onrender.com/cart/cart", {
      user_id: 1,
      product_id: product.id,
      quantity: 1
    });

    navigate("/cart");
  } catch (err) {
    console.log(err);
  }
};
  return (
    <>
      <main id="main">
        <div className="container"> 
          <div className="crumbs" style={{ paddingTop: "var(--s5)" }}><NavLink to ="/">Home</NavLink> <span className="sep"></span> <NavLink to ="/shop">Shop</NavLink> <span className="sep"></span> <span>Speakers</span></div>
        </div>

         <div className="container">

          <div className="product-page">

            {/* LEFT SIDEBAR */}
            <div className="sidebar-products">
              {products.map((p) => (
                <div
                  key={p.id}
                  className={`mini-card ${activeProduct?.id === p.id ? "active" : ""}`}
                  onClick={() => changeProduct(p)}
                >
                  <img src={p.image} alt={p.name} />
                  <div>
                    <h5>{p.name}</h5>
                    <span>₹{p.price}</span>
                  </div>
                </div>
              ))}
            </div>

            {/* CENTER IMAGE */}
            <div className="main-product">
              <img
                src={mainImg || activeProduct?.image}
                alt={activeProduct?.name}
              />
            </div>

            {/* RIGHT DETAILS */}
            <div className="product-details">

              <span className="badge">Best Seller</span>

              <h1>{activeProduct?.name}</h1> 

              <div className="rating">
                ⭐⭐⭐⭐⭐ (245 Reviews)
              </div>

              <h2>₹{activeProduct?.price}</h2>

              {/* QTY */}
              <div className="qty-box">
                <button onClick={() => setQty(q => Math.max(1, q - 1))}>-</button>
                <span>{qty}</span>
                <button onClick={() => setQty(q => q + 1)}>+</button>
              </div>

              {/* BUTTONS */}
              <div className="buttons">

                <button onClick={addToCart} className="cart-btn">
                  Add To Cart
                </button>

              
  <button
  className="related-buy-btn"
  onClick={() => addProductToCart(activeProduct)}
>
  Buy Now
</button>
            

              </div>

            </div>

          </div>

            
 <section className="section">
  <div className="section-head">
    <h2>You may also like</h2>
    <NavLink to="/shop" className="view-all">
      All products →
    </NavLink>
  </div>

  <div className="related-products">
    {products
      .filter((p) => p.id !== activeProduct?.id)
      .slice(0, 8)
      .map((product) => (
        <div key={product.id} className="related-card">

          <img src={product.image} alt={product.name} />

          <h4>{product.name}</h4>

          <p>₹{product.price}</p>

          <div className="related-btns">

            <button
              className="related-cart-btn"
              onClick={async () => {
                try {
                  await axios.post("https://techbazaar-1-e21b.onrender.com/cart/cart", {
                    user_id: 1,
                    product_id: product.id,
                    quantity: 1
                  });

                  alert("Added to cart");
                } catch (err) {
                  console.log(err);
                }
              }}
            >
              Add To Cart
            </button>

            <NavLink
              to="/cart"
              className="related-buy-btn"
              onClick={async () => {
                try {
                  await axios.post("https://techbazaar-1-e21b.onrender.com/cart/cart", {
                    user_id: 1,
                    product_id: product.id,
                    quantity: 1
                  });
                } catch (err) {
                  console.log(err);
                }
              }}
            >
              Buy Now
            </NavLink>

          </div>

        </div>
      ))}
  </div>
</section>

         
      
<section className="section" style={{ paddingTop: "30px" }}>
  <div style={{
    display: "grid",
    gridTemplateColumns: "1fr 1fr",
    gap: "25px",
    alignItems: "start",
    background: "#f7f8fc",
    padding: "20px",
    borderRadius: "18px"
  }}>

    <div style={{
      background: "#fff",
      padding: "25px",
      borderRadius: "16px",
      boxShadow: "0 8px 20px rgba(0,0,0,0.06)"
    }}>
      <h2 style={{ fontSize: "var(--text-2xl)", marginBottom: "var(--s5)" }}>
        Specifications
      </h2>

      <table style={{ width: "100%", borderCollapse: "collapse", fontSize: "var(--text-sm)" }}>
        <tbody>
          <tr style={{ borderBottom: "1px solid var(--rule)" }}>
            <td style={{ padding: "var(--s4) 0", color: "var(--fg-mute)", fontFamily: "var(--ff-mono)", fontSize: "var(--text-xs)", letterSpacing: "0.06em", textTransform: "uppercase", width: "40%" }}>
              Chip
            </td>
            <td style={{ padding: "var(--s4) 0", fontWeight: 600 }}>
              Apple S7 SiP
            </td>
          </tr>

          <tr style={{ borderBottom: "1px solid var(--rule)" }}>
            <td style={{ padding: "var(--s4) 0", color: "var(--fg-mute)", fontFamily: "var(--ff-mono)", fontSize: "var(--text-xs)", letterSpacing: "0.06em", textTransform: "uppercase" }}>
              Drivers
            </td>
            <td style={{ padding: "var(--s4) 0", fontWeight: 600 }}>
              4-inch high-excursion woofer, 5 beam-forming tweeters
            </td>
          </tr>

          <tr>
            <td style={{ padding: "var(--s4) 0", color: "var(--fg-mute)", fontFamily: "var(--ff-mono)", fontSize: "var(--text-xs)", letterSpacing: "0.06em", textTransform: "uppercase" }}>
              Connectivity
            </td>
            <td style={{ padding: "var(--s4) 0", fontWeight: 600 }}>
              Wi-Fi 4, Bluetooth 5.0, Thread, U1
            </td>
          </tr>
        </tbody>
      </table>
    </div>
    

    <div style={{
      background: "#fff",
      padding: "25px",
      borderRadius: "16px",
      boxShadow: "0 8px 20px rgba(0,0,0,0.06)"
    }}>
      <h2 style={{ fontSize: "var(--text-2xl)", marginBottom: "var(--s5)" }}>
        Reviews
      </h2>

      <div style={{
        display: "grid",
        gridTemplateColumns: "auto 1fr",
        gap: "var(--s5)",
        alignItems: "center",
        padding: "var(--s5)",
        background: "#f5f5ff",
        borderRadius: "var(--r)",
        marginBottom: "var(--s5)"
      }}>
        <div style={{ textAlign: "center" }}>
          <div style={{ fontFamily: "var(--ff-display)", fontSize: "48px", fontWeight: 800 }}>4.9</div>
          <div style={{ color: "var(--amber)", fontSize: "18px" }}>★★★★★</div>
          <div style={{ fontSize: "11px", color: "var(--fg-mute)", marginTop: "4px" }}>312 reviews</div>
        </div>

        <div style={{ fontSize: "12px", color: "var(--fg-soft)" }}>
          5★ 82%<br />
          4★ 14%<br />
          3★ 3%<br />
          2★ 1%<br />
          1★ 0%
        </div>
      </div>

      <article style={{ marginBottom: "15px" }}>
        <strong>Mira K.</strong>
        <div style={{ color: "#f5a623" }}>★★★★★</div>
        <p style={{ fontSize: "13px", color: "#555" }}>
          Amazing sound quality and premium experience.
        </p>
      </article>

      <article>
        <strong>Devan R.</strong>
        <div style={{ color: "#f5a623" }}>★★★★★</div>
        <p style={{ fontSize: "13px", color: "#555" }}>
          Spatial audio is really impressive.
        </p>
      </article>

      <NavLink to="#" className="btn btn--ghost btn--block">
        Read all 312 reviews →
      </NavLink>
    </div>

  </div>
</section>
    
     

    </div>
  </main>
        </>
    );
}
export default Data;
