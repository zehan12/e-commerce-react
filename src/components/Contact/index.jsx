// Dependencies
import React from 'react';
// Internals
import './styles.css';


const Contact = () => {
    return (
        <section className='con'>

            <div class="listing-hero">
                <div class="hero-heading">
                    <div class="hero-large">Contact Us.</div>
                    <div class="hero-text"> <i>Got any Questions? Feel free to ask or visit our FAQ page </i> </div>
                </div>
            </div>

            <div class="container-contact">
                <div class="wrap-contact">

                    <div name="contact" class="contact-form validate-form">

                        <div class="wrap-input validate-input" data-validate="Please enter your name">
                            <input class="input" type="text" name="name" placeholder="Full Name" />
                        </div>

                        <div class="wrap-input validate-input" data-validate="Please enter your email">
                            <input class="input" type="text" name="email" placeholder="E-mail" />
                        </div>

                        <div class="wrap-input validate-input" data-validate="Please enter your message">
                            <textarea class="input" type="text" name="message" placeholder="Your Message"></textarea>
                        </div>

                        <div class="container-contact-form-btn">
                            <button type="submit" class="contact-form-btn">
                                <span>Send</span>
                            </button>
                        </div>

                        <div class="grid-container">
                            <div class="item1 left-align"><i class="fa fa-lg fa-map-marker-alt"></i> 4517 Washington Ave, Manchester, Kentucky 39495</div>
                            <div class="item4 right-align"><i class="fa fa-lg fa-phone"></i> (123) 456-7890<br />(123) 456-7890</div>

                        </div>
                    </div>

                </div>

            </div >

        </section >

    )
}



export default Contact;