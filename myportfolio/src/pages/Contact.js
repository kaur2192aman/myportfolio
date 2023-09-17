
import ContactForm from './ContactForm'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { library } from '@fortawesome/fontawesome-svg-core'
import {   faPhone, fas } from '@fortawesome/free-solid-svg-icons'
import { far } from '@fortawesome/free-regular-svg-icons'
import { fab } from '@fortawesome/free-brands-svg-icons'
library.add(fas, far, fab)
const Contact = () => {
    return (

      <>
      
      <section className="resume-section" id="about">
        <div className="container"> 
          <div className="row">
                <div className="col-md-12">
                  <div className="resume-section-content">

                    <h1 className="mb-0">
                    Amanpreet
                    <span className="text-primary">Kaur</span>
                    </h1>
                      <div className="subheading mb-5">
                        <p>Please feel free to contact me anytime.</p>
                        <p><a href="tel:+1(647) 573-5092"><FontAwesomeIcon icon={faPhone} />  (647) 573-5092 </a> -  <a href="mailto:amanpreet.kaur.ka@gmail.com">amanpreet.kaur.ka@gmail.com</a></p>
                      </div>
                    </div>
                  </div>

                <div className="col-md-6  ">
                   <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d184552.67409603656!2d-79.54286414014372!3d43.71812280602269!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x89d4cb90d7c63ba5%3A0x323555502ab4c477!2sToronto%2C%20ON!5e0!3m2!1sen!2sca!4v1694733637309!5m2!1sen!2sca" width="100%" height="500" title="address" ></iframe>
                </div>
                <div className="col-md-6 ">
                  <ContactForm />
                </div>
            </div>

                    
        </div>
                

      </section>
          
      </>
     );
  };
  
  export default Contact;