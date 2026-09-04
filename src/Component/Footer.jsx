import { NavLink } from "react-router-dom";

function Footer (){
    return(
        <>
         <footer className="site-footer">
    <div className="container">
      <div className="footer-grid">
        <div className="footer-brand">
          <div className="mark"><span className="brand-mark">⚡Tech</span> Bazaar</div>
          <p>Modern tech &amp; gadgets — straight from the makers, shipped fast, supported well. Since 2018, we've moved over 400,000 boxes.</p>
          <div className="socials" style={{ marginTop: "var(--s4)" }}>
            <NavLink to="#" aria-label="Twitter"><svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor"><path d="M22 5.8a8.5 8.5 0 0 1-2.4.7 4.2 4.2 0 0 0 1.8-2.3 8.4 8.4 0 0 1-2.6 1 4.2 4.2 0 0 0-7.2 3.8A11.9 11.9 0 0 1 3 4.8a4.2 4.2 0 0 0 1.3 5.6 4.2 4.2 0 0 1-1.9-.5v.1a4.2 4.2 0 0 0 3.4 4.1 4.2 4.2 0 0 1-1.9.1 4.2 4.2 0 0 0 3.9 2.9A8.4 8.4 0 0 1 2 18.7 11.9 11.9 0 0 0 8.5 21c7.7 0 11.9-6.4 11.9-11.9v-.5A8.5 8.5 0 0 0 22 5.8z"/></svg></NavLink>
            <NavLink to="#" aria-label="LinkedIn"><svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor"><path d="M19 3H5a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2V5a2 2 0 0 0-2-2zM8 18H5v-7h3v7zM6.5 9.7a1.7 1.7 0 1 1 0-3.4 1.7 1.7 0 0 1 0 3.4zM18 18h-3v-4c0-1-.4-1.6-1.4-1.6S12 13 12 14v4H9v-7h3v1c.5-.8 1.4-1.2 2.4-1.2 2 0 3.6 1.4 3.6 4V18z"/></svg></NavLink>
            <NavLink to="#" aria-label="Instagram"><svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><rect x="3" y="3" width="18" height="18" rx="5"/><circle cx="12" cy="12" r="4"/><circle cx="17.5" cy="6.5" r="1" fill="currentColor" stroke="none"/></svg></NavLink>
            <NavLink to="#" aria-label="YouTube"><svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor"><path d="M23 7s-.2-1.5-.9-2.2c-.8-.9-1.8-.9-2.2-1C16.6 3.5 12 3.5 12 3.5s-4.6 0-7.9.3c-.4 0-1.4 0-2.2 1C1.2 5.5 1 7 1 7s-.2 1.7-.2 3.5v1.6c0 1.7.2 3.5.2 3.5s.2 1.5.9 2.2c.8.9 1.9.8 2.4.9 1.7.2 7.7.3 7.7.3s4.6 0 7.9-.3c.4 0 1.4 0 2.2-1 .7-.7.9-2.2.9-2.2s.2-1.7.2-3.5V10.5c0-1.7-.2-3.5-.2-3.5zM9.7 14.5V8.4l6 3-6 3.1z"/></svg></NavLink>
          </div>
        </div>
        <div className="footer-col">
          <h4>Popular Categories</h4>
          <ul>
            <li><NavLink to="shop.html">Laptops &amp; Desktops</NavLink></li>
            <li><NavLink to="shop.html">Smart Home Electronics</NavLink></li>
            <li><NavLink to="shop.html">Smart Watches</NavLink></li>
            <li><NavLink to="shop.html">Headphones</NavLink></li>
            <li><NavLink to="shop.html">Internal Components</NavLink></li>
            <li><NavLink to="shop.html">Virtual Reality Headsets</NavLink></li>
          </ul>
        </div>
        <div className="footer-col">
          <h4>Let us help you</h4>
          <ul>
            <li><NavLink to="#">My account</NavLink></li>
            <li><NavLink to="#">My order</NavLink></li>
            <li><NavLink to="#">Shipping policy</NavLink></li>
            <li><NavLink to="#">Help centre</NavLink></li>
            <li><NavLink to="#">Events</NavLink></li>
            <li><NavLink to="#">Popular products</NavLink></li>
          </ul>
        </div>
        <div className="footer-col">
          <h4>Resources</h4>
          <ul>
            <li><NavLink to="#">Blog</NavLink></li>
            <li><NavLink to="#">Newsletter</NavLink></li>
            <li><NavLink to="#">Help centre</NavLink></li>
            <li><NavLink to="#">Support</NavLink></li>
            <li><NavLink to="#">Reviews</NavLink></li>
          </ul>
        </div>
        <div className="footer-col">
          <h4>Get to know us</h4>
          <ul>
            <li><NavLink to="#">About us</NavLink></li>
            <li><NavLink to="/contact">Contact</NavLink></li>
            <li><NavLink to="/register">Login / Register</NavLink></li>
            <li><NavLink to="#">Terms &amp; conditions</NavLink></li>
            <li><NavLink to="#">Privacy policy</NavLink></li>
            <li><NavLink to="#">FAQs</NavLink></li>
          </ul>
        </div>
      </div>
     
    </div>
  </footer>
        </>
    );
}
export default Footer;