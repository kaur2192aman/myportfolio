
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { library } from '@fortawesome/fontawesome-svg-core'
import { fas } from '@fortawesome/free-solid-svg-icons'
import { far } from '@fortawesome/free-regular-svg-icons'
import { faFacebookF, faGithub, faLinkedin, fab } from '@fortawesome/free-brands-svg-icons'
library.add(fas, far, fab)
const About = () => {
    return (

  <>
  
      <section className="resume-section" id="about">
                <div className="resume-section-content">
                    <h1 className="mb-0">
                        Amanpreet
                        <span className="text-primary">Kaur</span>
                    </h1>
                    <div className="subheading mb-5">
                    </div>

                       
                    <p className="lead mb-5"> I’m a web developer, and I’ve been working in the field for 6 years.I’m looking to work with you as your new web developer, and I want to tell you a little about myself.
                    <br />
                    First, I’m a very driven and motivated individual who believes that each day should be challenging and rewarding. When I’m not working on my projects or helping others, you can find me spending time with friends or family.
                    <br />
                    I have always been interested in learning new technologies and languages, so much so that it has become a passion of mine. Because of this, I spend a lot of time reading books or tutorials related to programming languages and platforms PHP, Laravel, Lumen etc.</p>
                    <div className="social-icons">
                        <a className="social-icon" href="https://www.linkedin.com/in/kaur2192aman/" target='_   blank' rel="noopener noreferrer"><FontAwesomeIcon icon={faLinkedin} /></a>
                        <a className="social-icon" href="https://github.com/kaur2192aman/portfolio.git" target="_blank" rel="noopener noreferrer"><FontAwesomeIcon icon={faGithub} /></a>
                        {/* <a className="social-icon" href="#!"><FontAwesomeIcon icon={faTwitter} /></a> */}
                        <a className="social-icon" href="https://www.facebook.com/kaur.2192aman/" target="_blank"><FontAwesomeIcon icon={faFacebookF} /></a>
                    </div>
                </div>
            </section>
            </>
    );
  };
  
  export default About;