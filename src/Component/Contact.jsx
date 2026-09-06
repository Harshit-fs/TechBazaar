import { NavLink } from "react-router-dom";
import { useState } from "react";

import axios from "axios";

function Contact() {
const [firstName, setFirstName] = useState("");
const [lastName, setLastName] = useState("");
const [email, setEmail] = useState("");
const [phone, setPhone] = useState("");
const [about, setAbout] = useState("");
const [order_no, setOrderNo] = useState("");
const [message, setMessage] = useState("");

const handleSubmit = async (e) => {
  e.preventDefault();

  try {
    const res = await axios.post("https://techbazaar-1-e21b.onrender.com/user/contact", {
      firstname: firstName,
      lastname: lastName,
      email,
      phone,
      about,
      order_no: order_no,
      message
    });

    console.log(res.data);
    alert("Message sent successfully!");

  } catch (err) {
    console.log(err);
    alert("Error sending message");
  }
};

    return(
        <>
        
  <main id="main">

    <section className="page-head">
      <div className="container">
        <div className="crumbs"><NavLink to="index.html">Home</NavLink>  <span className="sep">›</span> <span>Contact &amp; support</span>
        </div>
        <center>
        <h1>Talk to us — we ship gear, but we answer messages too.</h1>
        <p> <h4>Three ways to reach our team: live chat (fastest), email, or this contact form for anything that needs an
          attachment. We typically reply within 4 working hours and cover support in EN, ES, FR, and DE.</h4></p>
     </center>
      </div>
    </section>

    <section>
      <div className="container">
        <div className="contact-grid">

          <div className="contact-info">
            <div className="info-block">
              <div className="ic">✉</div>
              <div>
                <div className="label">EMAIL US</div>
                <div className="value"><NavLink to="mailto:Techbazzar@gmail.com">Techbazzar@gmail.com</NavLink> </div>
              </div>
            </div>
            <div className="info-block">
              <div className="ic">☏</div>
              <div>
                <div className="label">CALL US · 24/7</div>
                <div className="value"><NavLink to="tel:+919257939732">+91 9257939732</NavLink> </div>
              </div>
            </div>
            <div className="info-block">
              <div className="ic">💬</div>
              <div>
                <div className="label">LIVE CHAT</div>
                <div className="value"><NavLink to="#">Open chat — 4 agents online</NavLink> </div>
              </div>
            </div>
            <div className="info-block">
              <div className="ic">⌖</div>
              <div>
                <div className="label">VISIT OUR FLAGSHIP</div>
                <div className="value">Udaipur<br />Bapu Bazaar</div>
              </div>
            </div>
            <div className="info-block">
              <div className="ic">⏱</div>
              <div>
                <div className="label">SUPPORT HOURS</div>
                <div className="value">Mon — Fri · 09:00 AM — 10:00PM <br />Sat — Sun · 10:00AM — 2:00 PM</div>
              </div>
            </div>
          </div>

         <form className="contact-form" onSubmit={handleSubmit}>
            <h2 style={{ fontSize: 'var(--text-xl)', marginBottom: 'var(--s2)' }}>Send us a message</h2>
            <p style={{ color: 'var(--fg-soft)', fontSize: 'var(--text-sm)', marginBottom: 'var(--s5)' }}>No bots, no templated
              replies — a real person at our SF or Berlin desks will pick this up.</p>

            <div className="field-row">
              <div className="field">
                <input
            id="c-first"
            type="text"
            required
           placeholder="Mira"
           value={firstName}
           onChange={(e) => setFirstName(e.target.value)}
/>          
              </div>
              <div className="field">
                <input
           id="c-last"
            type="text"
            required
            placeholder="Kapoor"
            value={lastName}
            onChange={(e) => setLastName(e.target.value)}
          />          
              </div>
            </div>

            <div className="field-row">
              <div className="field">
               <input
                id="c-email"
               type="email"
               required
               placeholder="you@example.com"
               value={email}
                onChange={(e) => setEmail(e.target.value)}
/>              
              </div>
              <div className="field">
               <input
                id="c-phone"
                type="tel"
                placeholder="(+91) 345 345 4534"
                value={phone}
                onChange={(e) => setPhone(e.target.value)}
/>
              </div>
            </div>

            <div className="field">

              <label htmlFor="c-topic">What is this about?</label>

            <select value={about} onChange={(e) => setAbout(e.target.value)}>
      

            <option value="order">
             Order — tracking, change, or cancellation
            </option>

            <option value="refund">
             Returns or refunds
            </option>

            <option value="warranty">
              Warranty claim or product issue
            </option>

            <option value="trade">
              Trade / wholesale inquiry
            </option>

           <option value="press">
              Press, partnership, or affiliate
            </option>

           <option value="other">
             Something else
            </option>
          </select>
          </div>

            <div className="field">
             <input
              id="c-order"
              type="text"
              placeholder="e.g. SPR-204418"
              value={order_no}
              onChange={(e) => setOrderNo(e.target.value)}
/>            
            </div>

            <div className="field">
             <textarea
             id="c-msg"
             required
             value={message}
              onChange={(e) => setMessage(e.target.value)}
             placeholder="Tell us what's going on."
            ></textarea>           
            </div>

            <button className="btn btn--indigo btn--block" type="submit"
              style={{ padding: '16px', fontSize: 'var(--text-base)', marginTop: 'var(--s2)' }}>Send message →</button>

            <p
              style={{ fontFamily: 'var(--ff-mono)', fontSize: '11px', color: 'var(--fg-mute)', marginTop: 'var(--s4)', textAlign: 'center', lineHeight: 1.6 }}>
              By submitting, you agree to our <NavLink to="#" style={{ color: 'var(--indigo)' }}>privacy policy</NavLink> . We never sell
              your data and never share with third parties.</p>
          </form>

        </div>
      </div>
    </section>

   
    <section className="section" style={{ background: 'var(--bg)' }}>
      <div className="container">
        <div className="section-head">
          <h2>Quick answers</h2>
          <NavLink to="#" className="view-all">Full help centre →</NavLink> 
        </div>
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(2, 1fr)', gap: 'var(--s5)' }}>

          <article
            style={{ background: 'var(--paper)', border: '1px solid var(--rule)', borderRadius: 'var(--r)', padding: 'var(--s5)' }}>
            <h3 style={{ fontSize: 'var(--text-md)', marginBottom: 'var(--s2)' }}>Where is my order?</h3>
            <p style={{ color: 'var(--fg-soft)', fontSize: 'var(--text-sm)', lineHeight: 1.6 }}>Every order ships with a
              tracking number sent by email within 2 hours of dispatch. Use the <NavLink to="#"
                style={{ color: 'var(--indigo)', fontWeight: 600 }}>order tracker</NavLink>  with your email + order number for live
              status.</p>
          </article>

          <article
            style={{ background: 'var(--paper)', border: '1px solid var(--rule)', borderRadius: 'var(--r)', padding: 'var(--s5)' }}>
            <h3 style={{ fontSize: 'var(--text-md)', marginBottom: 'var(--s2)' }}>How do returns work?</h3>
            <p style={{ color: 'var(--fg-soft)', fontSize: 'var(--text-sm)', lineHeight: 1.6 }}>30 days, no questions asked.
              Initiate from your account → orders → return. We email a prepaid label; drop off at any carrier point.
              Refund hits your card 3 – 5 business days after we receive it.</p>
          </article>

          <article
            style={{ background: 'var(--paper)', border: '1px solid var(--rule)', borderRadius: 'var(--r)', padding: 'var(--s5)' }}>
            <h3 style={{ fontSize: 'var(--text-md)', marginBottom: 'var(--s2)' }}>Do you ship internationally?</h3>
            <p style={{ color: 'var(--fg-soft)', fontSize: 'var(--text-sm)', lineHeight: 1.6 }}>Yes — to 48 countries. Free
              standard shipping on orders over $50 to the US, EU, UK, Canada, and Australia. Other destinations carry a
              flat shipping fee shown at checkout.</p>
          </article>

          <article
            style={{ background: 'var(--paper)', border: '1px solid var(--rule)', borderRadius: 'var(--r)', padding: 'var(--s5)' }}>
            <h3 style={{ fontSize: 'var(--text-md)', marginBottom: 'var(--s2)' }}>What is the warranty?</h3>
            <p style={{ color: 'var(--fg-soft)', fontSize: 'var(--text-sm)', lineHeight: 1.6 }}>Every Sprylo order ships with
              a 2-year limited warranty in addition to the manufacturer's. Optional extended cover (3 or 5 years) can be
              added at checkout from $39.</p>
          </article>

        </div>
      </div>
    </section>

  </main>

        </>
    );
}

export default Contact;