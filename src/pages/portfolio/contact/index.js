import emailjs from 'emailjs-com';
import Swal from 'sweetalert2';
import { useState } from 'react';
const SERVICE_ID =  process.env.REACT_APP_SERVICE_ID
const TEMPLATE_ID =  process.env.REACT_APP_TEMPLATE_ID
const USER_ID =  process.env.REACT_APP_USER_ID

const Contact = () => {
    const [isDisabled,setIsDisabled] = useState(false)
    const handleOnSubmit = (e) => {
        e.preventDefault();
        setIsDisabled(true)
        emailjs.sendForm(SERVICE_ID, TEMPLATE_ID, e.target, USER_ID)
          .then((result) => {
            Swal.fire({
              icon: 'success',
              title: 'Message Sent Successfully'
            })
          }, (error) => {
            Swal.fire({
              icon: 'error',
              title: 'Ooops, something went wrong',
              text: error.text,
            })
          });
        e.target.reset()
        setIsDisabled(false)

      }; 

    return (
        <>
            <section id="contact" className="contact">
                <div className="container" data-aos="fade-up">
                    <div className="section-title">
                        <h2>Contact</h2>
                    </div>
                    <div className="row mt-1">
                        <div className="col-lg-4">
                            <div className="info">
                                <div className="address">
                                    <i className="bi bi-geo-alt" />
                                    <h4>Location:</h4>
                                    <p>Mumbai, India</p>
                                </div>
                                <div className="email">
                                    <i className="bi bi-envelope" />
                                    <h4>Email:</h4>
                                    <p>farmanali0504@gmail</p>
                                </div>
                                <div className="phone">
                                    <i className="bi bi-phone" />
                                    <h4>Call:</h4>
                                    <p>+91 9978383223</p>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-8 mt-5 mt-lg-0">
                            <form
                                // action="forms/contact.php"
                                method="post"
                                role="form"
                                className="php-email-form"
                                onSubmit={handleOnSubmit}
                            >
                                <div className="row">
                                    <div className="col-md-6 form-group">
                                        <input
                                            type="text"
                                            name="from_name"
                                            className="form-control"
                                            id="from_name"
                                            placeholder="Your Name"
                                            required={true}
                                        />
                                    </div>
                                    <div className="col-md-6 form-group mt-3 mt-md-0">
                                        <input
                                            type="email"
                                            className="form-control"
                                            name="email"
                                            id="email"
                                            placeholder="Your Email"
                                            required={true}
                                        />
                                        <input type = "hidden" name = "to_name" value = "farman" />
                                    </div>
                                </div>
                                <div className="form-group mt-3">
                                    <textarea
                                        className="form-control"
                                        name="message"
                                        rows={5}
                                        placeholder="Message"
                                        defaultValue={""}
                                        required={true}

                                    />
                                </div>
                                <div className="my-3">
                                    <div className="loading">Loading</div>
                                    <div className="error-message" />
                                    <div className="sent-message">
                                        Your message has been sent. Thank you!
                                    </div>
                                </div>
                                <div className="text-center">
                                    <button disabled = {isDisabled}  type="submit">
                                        {isDisabled ?
                                            'Sending......'
                                        : "Send Message"}
                                    </button>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
            </section>
            {/* End Contact Section */}
        </>

    )
}

export default Contact