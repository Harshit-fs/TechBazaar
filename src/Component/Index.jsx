 import { NavLink } from "react-router-dom";
import { useEffect, useState } from "react";
import axios from "axios";

function Index() {

  const [products, setProducts] = useState([]);

  useEffect(() => {
  axios
    .get("http://localhost:5000/product/products")
    .then((res) => {
      setProducts(res.data);
    })
    .catch((err) => {
      console.log(err);
    });

}, []);
    return(
        <>
        <main id="main">

  
    <section className="hero">
      <div className="container">
        <div className="bento">

          <article className="bento-card bento-card--lg">
            <div className="sparkle"></div>
            <div>
              <span className="eyebrow">⚡ Audio &middot; Featured</span>
              <h2>Jbl <br/> Speaker</h2>
              <p>Apple ecosystem with high-quality audio playback while serving as a hub for controlling smart home devices. Spatial audio, room-sensing tech.</p>
              <NavLink to="/shop" className="shop-now">Shop Now
                <svg width="20" height="10" viewBox="0 0 14 10" fill="none" aria-hidden="true"><path d="M1 5h12m0 0L9 1m4 4L9 9" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"/></svg>
              </NavLink>
          
            </div>
            <img className="product" src="https://images.unsplash.com/photo-1608043152269-423dbba4e7e1?w=900&q=80&auto=format&fit=crop" alt="HomePod speaker" />
          </article>

          <article className="bento-card bento-card--purple">
            <div className="sparkle"></div>
            <span className="eyebrow">Wearables</span>
            <h3 style={{
  fontSize: "var(--text-xl)",
  lineHeight: 1.15
}}>Explore<br/>Apple Watch</h3>
            <NavLink to="/shop" className="shop-now">Shop Now
              <svg width="12" height="10" viewBox="0 0 14 10" fill="none" aria-hidden="true"><path d="M1 5h12m0 0L9 1m4 4L9 9" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round"/></svg>
            </NavLink>
            <img className="product" src="https://images.unsplash.com/photo-1523275335684-37898b6baf30?w=600&q=80&auto=format&fit=crop" alt="Apple Watch" />
          </article>

          <article className="bento-card bento-card--teal">
            <div className="sparkle"></div>
            <span className="eyebrow">Latest Phones</span>
            <h3 style={{
  fontSize: "var(--text-lg)",
  lineHeight: 1.2
}}>Galaxy S24<br/>Ultra · 5G</h3>
            <NavLink to="/shop" className="shop-now">Shop Now
              <svg width="12" height="10" viewBox="0 0 14 10" fill="none" aria-hidden="true"><path d="M1 5h12m0 0L9 1m4 4L9 9" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round"/></svg>
            </NavLink>
            <img className="product" src="https://images.unsplash.com/photo-1511707171634-5f897ff02aa9?w=600&q=80&auto=format&fit=crop" alt="Samsung Galaxy phone" />
          </article>

          <div className="bento-row">
            <article className="bento-card bento-card--orange">
              <div className="sparkle"></div>
              <span className="eyebrow">Cameras</span>
              <h3 style={{
  fontSize: "var(--text-lg)",
  lineHeight: 1.2
}}>Samsung<br/>Gear Camera</h3>
              <NavLink to="/shop" className="shop-now">Shop Now
                <svg width="12" height="10" viewBox="0 0 14 10" fill="none" aria-hidden="true"><path d="M1 5h12m0 0L9 1m4 4L9 9" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round"/></svg>
              </NavLink>
              <img className="product" src="https://images.unsplash.com/photo-1606983340126-99ab4feaa64a?w=500&q=80&auto=format&fit=crop" alt="Camera" />
            </article>

            <article className="bento-card bento-card--green">
              <div className="sparkle"></div>
              <span className="eyebrow">Audio</span>
              <h3 style={{
  fontSize: "var(--text-lg)",
  lineHeight: 1.2
}}>Beats<br/>Studio Buds</h3>
              <NavLink to="/shop" className="shop-now">Shop Now
                <svg width="12" height="10" viewBox="0 0 14 10" fill="none" aria-hidden="true"><path d="M1 5h12m0 0L9 1m4 4L9 9" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round"/></svg>
              </NavLink>
              <img className="product" src="https://images.unsplash.com/photo-1606220945770-b5b6c2c55bf1?w=500&q=80&auto=format&fit=crop" alt="Earbuds" />
            </article>

            <article className="bento-card bento-card--black">
              <div className="sparkle"></div>
              <span className="eyebrow">DSLR</span>
              <h3 style={{
  fontSize: "var(--text-lg)",
  lineHeight: 1.2
}}>Hero Camera<br/>X-Series</h3>

              <NavLink to="/shop" className="shop-now">Shop Now
                <svg width="12" height="10" viewBox="0 0 14 10" fill="none" aria-hidden="true"><path d="M1 5h12m0 0L9 1m4 4L9 9" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round"/></svg>
              </NavLink>
              <img className="product" src="https://images.unsplash.com/photo-1502920917128-1aa500764cbd?w=500&q=80&auto=format&fit=crop" alt="DSLR camera" />
            </article>
          </div>

        </div>
      </div>
    </section>


    <section className="section" style={{
  paddingTop: "var(--s5)"
}}>
      <div className="container">
        <div className="section-head">
          <h2>Trending Products</h2>
          <NavLink to="shop.htm" className="view-all">View all
            <svg width="14" height="10" viewBox="0 0 14 10" fill="none"><path d="M1 5h12m0 0L9 1m4 4L9 9" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"/></svg>
          </NavLink>
        </div>

      

        <div className="products">
  {products.map((p) => (
    <article className="product-card" key={p._id || p.id}>
      
      <div className="img-wrap">
       <img
          src={p.image || "https://via.placeholder.com/300"}
          alt={p.name}
          style={{
            width: "100%",
            height: "220px",
            objectFit: "cover",
            borderRadius: "10px"
          }}
/>        
      </div>
            
      <div className="stock">
        <span className="dot"></span>In stock
      </div>

      <NavLink to={`/product/₹{p._id || p.id}`} className="name">
        {p.name}
      </NavLink>

      <div className="price">
        <span className="now">₹{p.price}</span>
      </div>

      <NavLink to="/cart" className="btn">
        Order now →
      </NavLink>

    </article>
  ))}

</div>
 </div>
      </section>

      <section className="section" style={{
    paddingTop: 0
  }}>
        <div className="container">
          <div className="discount-row">
            <article className="discount-card discount-card--watch">
              <span className="meta">THIS WEEK ONLY</span>
              <h3>Mega Discounts<br/><span className="pct">50% Off</span></h3>
              <NavLink to="/shop" className="shop-now">Shop Now
                <svg width="14" height="10" viewBox="0 0 14 10" fill="none"><path d="M1 5h12m0 0L9 1m4 4L9 9" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"/></svg>
              </NavLink>
              <img className="product" src="https://images.unsplash.com/photo-1579586337278-3befd40fd17a?w=500&q=80&auto=format&fit=crop" alt="Smart watch" />
            </article>
            <article className="discount-card discount-card--airpods">
              <span className="meta">LIMITED EDITION</span>
              <h3>Studio Buds Pro<br/><span className="pct">30% Off</span></h3>
              <NavLink to="/shop" className="shop-now">Shop Now
                <svg width="14" height="10" viewBox="0 0 14 10" fill="none"><path d="M1 5h12m0 0L9 1m4 4L9 9" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"/></svg>
              </NavLink>
              <img className="product" src="https://images.unsplash.com/photo-1590658268037-6bf12165a8df?w=500&q=80&auto=format&fit=crop" alt="Earbuds" />
            </article>
          </div>
        </div>
      </section>


      <section className="section" style={{
    paddingTop: "var(--s5)"
  }}>
        <div className="container">
          <div className="section-head">
            <h2>Shop by category</h2>
            <NavLink to="/shop" className="view-all">View all products
              <svg width="14" height="10" viewBox="0 0 14 10" fill="none"><path d="M1 5h12m0 0L9 1m4 4L9 9" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"/></svg>
            </NavLink>
          </div>
          <div className="cats-grid">
            <NavLink to="/shop" className="cat-tile">
              <div className="pic"><img src="https://images.unsplash.com/photo-1523275335684-37898b6baf30?w=300&q=80&auto=format&fit=crop" alt="" /></div>
              <div className="name">Watch</div>
              <div className="count">28 Products</div>
            </NavLink>
            <NavLink to="/shop" className="cat-tile">
              <div className="pic"><img src="https://images.unsplash.com/photo-1502920917128-1aa500764cbd?w=300&q=80&auto=format&fit=crop" alt="" /></div>
              <div className="name">Camera</div>
              <div className="count">42 Products</div>
            </NavLink>
            <NavLink to="/shop" className="cat-tile">
              <div className="pic"><img src="https://images.unsplash.com/photo-1511707171634-5f897ff02aa9?w=300&q=80&auto=format&fit=crop" alt="" /></div>
              <div className="name">Smart Phone</div>
              <div className="count">76 Products</div>
            </NavLink>
            <NavLink to="/shop" className="cat-tile">
              <div className="pic"><img src="https://images.unsplash.com/photo-1592840496694-26d035b52b48?w=300&q=80&auto=format&fit=crop" alt="" /></div>
              <div className="name">Accessories</div>
              <div className="count">112 Products</div>
            </NavLink>
            <NavLink to="/shop" className="cat-tile">
              <div className="pic"><img src="https://images.unsplash.com/photo-1606220945770-b5b6c2c55bf1?w=300&q=80&auto=format&fit=crop" alt="" /></div>
              <div className="name">Smart Buds</div>
              <div className="count">35 Products</div>
            </NavLink>
          </div>
        </div>
      </section>

      
      


      <section className="brands">
        <div className="container">
          <div className="brand-row">
            <NavLink to="#" className="brand-logo">HP</NavLink>
            <NavLink to="#" className="brand-logo">Huawei</NavLink>
            <NavLink to="#" className="brand-logo">Nokia</NavLink>
            <NavLink to="#" className="brand-logo">Samsung</NavLink>
            <NavLink to="#" className="brand-logo">Canon</NavLink>
            <NavLink to="#" className="brand-logo">Sony</NavLink>
          </div>
        </div>
      </section>

      <section style={{
    background: "var(--paper)"
  }}>
        
      </section>

    </main>


        </>
    );
}
export default Index;