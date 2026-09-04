 
 import { NavLink } from "react-router-dom";

function Header() {

  return (
    <>
      <header className="site-header">
        <div className="container">
          <NavLink to="/" className="brand">
            <span className="brand-mark">⚡Tech</span>
           <b> Bazaar</b>
          </NavLink>

         

          <div className="icon-row">
            <div className="header-right">
              <NavLink to="/login" className="login-btn">
                Login
              </NavLink>

              <NavLink to="/register" className="register-btn">
                Register
              </NavLink>
            </div>

            <NavLink
              to="/cart"
              className="icon-btn icon-btn--cart"
              aria-label="Cart"
            >
              <svg
                width="20"
                height="20"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <path d="M6 2l-2 5v13a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V7l-2-5z" />
                <path d="M4 7h16" />
                <path d="M16 11a4 4 0 0 1-8 0" />
              </svg>

              <span className="count">+</span>
            </NavLink>

            <button
              className="nav-toggle"
              aria-label="Open menu"
              aria-expanded="false"
            >
              ≡
            </button>
          </div>
        </div>
      </header>

      <nav className="nav-bar" aria-label="Primary">
        
        <div className="container">
     
          <div className="main-nav">
            
            <NavLink to="/">Home</NavLink>
            <NavLink to="/shop">Shop</NavLink>

            <div className="dropdown">
             
              <span className="dropdown-btn">
                Products
              </span>

              <div className="dropdown-menu">
                <NavLink to="/products">All Products</NavLink>
                <NavLink to="/addproduct">Add Product</NavLink>
              </div>
            </div>

            <NavLink to="/carts">Cart</NavLink>
            <NavLink to="/contact">Contact</NavLink>
            
          </div>

          <span className="nav-cta">
            UP TO <strong>60% OFF</strong> ALL ITEMS
          </span>
        </div>
      </nav>

      <div className="drawer" id="drawer" aria-hidden="true">
        <div className="drawer-head">
          <NavLink to="/" className="brand">
            <span className="brand-mark">S</span> Sprylo
          </NavLink>

          <button className="drawer-close" aria-label="Close menu">
            Close ✕
          </button>
        </div>

        <NavLink to="/">Home</NavLink>
        <NavLink to="/shop">Shop</NavLink>
        <NavLink to="/product">Products</NavLink>
        <NavLink to="/carts">Cart</NavLink>
        <NavLink to="/contact">Contact</NavLink>

        <NavLink
          to="/cart"
          className="btn btn--indigo"
          style={{
            marginTop: "var(--s5)",
            justifyContent: "center",
          }}
        >
          View cart →
        </NavLink>
      </div>
    </>
  );
}

export default Header;