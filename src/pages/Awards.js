
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { library } from '@fortawesome/fontawesome-svg-core'
import { fas , faTrophy} from '@fortawesome/free-solid-svg-icons'
import { far } from '@fortawesome/free-regular-svg-icons'
import { fab } from '@fortawesome/free-brands-svg-icons'
library.add(fas, far, fab)
const Awards = () => {
    return (

            <>
            <section className="resume-section" id="awards">
                <div className="resume-section-content">
                    <h2 className="mb-5">Awards & Certifications</h2>
                    <ul className="fa-ul mb-0">
                        <li>
                            <span className="fa-li"><a className="social-icon" href="#!"><FontAwesomeIcon icon={faTrophy} /></a></span>
                            Student of the Month, Lambton

                        </li>
                        <li>
                            <span className="fa-li"><a className="social-icon" href="#!"><FontAwesomeIcon icon={faTrophy} /></a></span>
                            Best Personality of Lambton College				
                        </li>
                        <li>
                            <span className="fa-li"><a className="social-icon" href="#!"><FontAwesomeIcon icon={faTrophy} /></a></span>
                            Employee of the quarter twice, Debut Infotech	
                        </li>
                        
                    </ul>
                </div>
            </section>
                    
            </>
        );
    };
            
export default Awards;