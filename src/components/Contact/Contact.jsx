import React from 'react'
import './contact.css'
import { FiPhoneCall } from "react-icons/fi";
import { HiOutlineMail } from "react-icons/hi";

const Contact = () => {
  return (
    <>
      <div className="backmainct">
        <div className="container">
          <div className="row">
            <p>| Contact Us</p>
            <h1>Get in Touch With our Agent</h1>
          </div>
        </div>
        <div className="map">
            <div className="mapp">
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d14243.147683446286!2d75.77767000173716!3d26.814912521863725!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x396dca04eea70413%3A0x2d1511c96f2c4198!2sShive%20Colony%2C%20Maruti%20Nagar%2C%20Jaipur%2C%20Rajasthan%20302011!5e0!3m2!1sen!2sin!4v1722154736905!5m2!1sen!2sin"
            width="600"
            height="450"
            style={{ border: 0 }}
            allowfullscreen=""
            loading="lazy"
            referrerpolicy="no-referrer-when-downgrade"
          />
          </div>
          <div className="form">
            <form>
                <label for="name">Name:</label><br />
                <input type="text" id="name" name="name" required placeholder='Your-name'/><br />
                <label for="email">Email:</label><br />
                <input type="email" id="email" name="email" required placeholder='Your-email'/><br />
                <label for="phone">Phone:</label><br />
                <input type="tel" id="phone" name="phone" required placeholder='Your-phone
                '/><br />
                <label for="message">Message:</label><br />
                <textarea id="message" name="message" required placeholder='Your-message'/><br />
                <input type="submit" value="Send Message" style={{backgroundColor:"black",width:"150px",padding:"10px 50px 10px 30px",color:"white"}}/>
                </form>
            </div>
        </div>
            <div className="twocrd">
                <div className="one">
                    <div className="icon">
                    <FiPhoneCall  />
                    </div>
                    <div className="ctinfo">
                    <h1>+918619448841</h1>
                    <p>phone number</p>
                    </div>
                </div>
                <div className="one">
                    <div className="icon">
                    <HiOutlineMail />
                    </div>
                    <div className="ctinfo">
                    <h1>jangidkind@gmail.com</h1>
                    <p>Email-address</p>
                    </div>
                </div>
            </div>
      </div>
    </>
  )
}

export default Contact