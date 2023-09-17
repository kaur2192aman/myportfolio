

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { library } from '@fortawesome/fontawesome-svg-core'
import {  faMailReply, faPhone, faVoicemail, fas } from '@fortawesome/free-solid-svg-icons'
import { far } from '@fortawesome/free-regular-svg-icons'
import { faFacebookF, faGithub, faLinkedin, faTwitter, fab } from '@fortawesome/free-brands-svg-icons'

const Footer = () => {
    return (  <>
        <div className="fixed-bottom ">  
        <nav    className="navbar navbar-expand-lg  navbar-light bg-primary justify-content-center" >
               <h3>Social Links</h3>
               <br></br>
                 <div className="social-icons ">
                    <a className="social-icon" href="#!"><FontAwesomeIcon icon={faLinkedin} /></a>
                    <a className="social-icon" href="#!"><FontAwesomeIcon icon={faGithub} /></a>
                    <a className="social-icon" href="#!"><FontAwesomeIcon icon={faTwitter} /></a>
                    <a className="social-icon" href="#!"><FontAwesomeIcon icon={faFacebookF} /></a>
                </div>
          </nav>
          </div>
          </>);
  };
  
  export default Footer;