import { useEffect, useState, useMemo } from "react";
import { NavLink, useLocation } from "react-router-dom";
import axios from "axios";

import { useNavigate } from "react-router-dom"; 


function Product() {
    const navigate = useNavigate();
  const [products, setProducts] = useState([]);
  const location = useLocation();

  const searchTerm = new URLSearchParams(location.search).get("search") || "";


const filteredProducts = searchTerm
  ? products.filter((item) =>
      (item.name || "")
        .toLowerCase()
        .includes(searchTerm.toLowerCase())
    )
  : products;

  useEffect(() => {
    axios
      .get("https://techbazaar-1-e21b.onrender.com/product/products")
      .then((res) => setProducts(res.data))
      .catch((err) => console.log(err));
  }, []);
 
    return(
        <>
          <main id="main">

    <section className="page-head">
      <div className="container">
        <div className="crumbs"><NavLink to="/">Home</NavLink> <span className="sep">›</span> <span> All products</span>
        </div>
        <center>
        <h1>All Products</h1>
        <p> <h4>314 products across smartphones, laptops, audio, cameras, wearables, and gaming. Use the filters on the left
          to narrow down by brand, price, rating, or availability.</h4></p>
      </center>
      </div>
    </section>

                  <section className="section">
                    <div>
                    <div className="container">
                      <div className="shop-layout">

                      

                          <div className="shop-grid">
                            
                {filteredProducts.map((item) => (
                  <article className="product-card" key={item.id}>
                    <div className="img-wrap">
                      <img src={item.image} alt={item.name} />
                    </div>

                    <div className="stock">
                      <span className="dot"></span>
                      In Stock
                    </div>

                    <h3 className="name">{item.name}</h3>

                    <div className="price">
                      <span className="now">₹{item.price}</span>
                    </div>
<button
  className="btn"
  onClick={() =>
    navigate(`/checkoutpage/${item.id}`, {
      state: { product: item }
    })
  }
>
  Order Now →
</button>
                  </article>

                ))}

</div>

            <div className="pagination">
              <NavLink to="#" className="pg">‹</NavLink>
              <NavLink to="#" className="pg is-active">1</NavLink>
              <NavLink to="#" className="pg">2</NavLink>
              <NavLink to="#" className="pg">3</NavLink>
              <NavLink to="#" className="pg">…</NavLink>
              <NavLink to="#" className="pg">26</NavLink>
              <NavLink to="#" className="pg">›</NavLink>
            </div>
          </div>

        </div>
      </div>
    </section>

    <section className="brands">
      <div className="container">
        <div className="brand-row">
          <NavLink to="#" className="brand-logo">HP</NavLink><NavLink to="#" className="brand-logo">Huawei</NavLink>
          <NavLink to="#" className="brand-logo">Nokia</NavLink><NavLink to="#" className="brand-logo">Samsung</NavLink>
          <NavLink to="#" className="brand-logo">Canon</NavLink><NavLink to="#" className="brand-logo">Sony</NavLink>
        </div>
      </div>
    </section>

  </main>
        </>
    );
}
export default Product;