

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { library } from '@fortawesome/fontawesome-svg-core'
import {  faPhone, fas } from '@fortawesome/free-solid-svg-icons'
import { far } from '@fortawesome/free-regular-svg-icons'
import { faFacebookF, faGithub, faLinkedin, fab } from '@fortawesome/free-brands-svg-icons'
library.add(fas, far, fab)
const Home = () => {
    return (
        <>
            <section className="resume-section" id="about">
                <div className="resume-section-content">  
                    <div class="row">
                    <div class="col-md-4 how-img">
                            <img src="/profile.jpeg" class=" img-fluid" alt="" />
                    </div>
                    <div class="col-md-8">
                    <h1 className="">
                        Amanpreet
                        <span className="text-primary">Kaur</span>
                    </h1>
                    <div className="subheading mb-6">
                        <p><a href="tel:+1(647) 573-5092"><FontAwesomeIcon icon={faPhone} />  (647) 573-5092 </a></p>
                        <p><a href="mailto:amanpreet.kaur.ka@gmail.com">amanpreet.kaur.ka@gmail.com</a></p>
                    </div>
                        <p>I am experienced in leveraging agile frameworks to provide a robust synopsis for high level overviews. I enjoy being challenged and engaging with projects that require me to work outside my comfort and knowledge set, as continuing to learn new languages and development techniques are important to me and the success of your organization.</p>   
                    </div>
                </div>
                        
                <div className="social-icons text-center">
                    <a className="social-icon" href="https://www.linkedin.com/in/kaur2192aman/" target='_   blank' rel="noopener noreferrer"><FontAwesomeIcon icon={faLinkedin} /></a>
                    <a className="social-icon" href="https://github.com/kaur2192aman/portfolio.git" target="_blank"  rel="noopener noreferrer"><FontAwesomeIcon icon={faGithub} /></a>
                    <a className="social-icon" href="https://www.facebook.com/kaur.2192aman/" target="_blank" rel="noopener noreferrer"><FontAwesomeIcon icon={faFacebookF} /></a>
                </div>
                </div>
            </section>
        </>
     );
  };
  
  export default Home;