import {  Link } from "react-router-dom";
import { useState } from "react";

const Sidebar = () => {
    const [show, setShow] = useState(false);
    const handleNavClick = () => {
      setShow(false);
    };
    return (
        <>
         <nav className="navbar navbar-expand-lg navbar-dark bg-primary fixed-top" id="sideNav">
            <Link to="/" className="navbar-brand js-scroll-trigger" href="#page-top">
                <span className="d-block d-lg-none">Amanpreet Kaur</span>
                <span className="d-none d-lg-block">
                    <img className="img-fluid img-profile rounded-circle mx-auto mb-2" src="/profile.jpeg" alt="..." />
                </span>
            </Link>
            
            <button onClick={() => setShow(!show)} className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarResponsive" aria-controls="navbarResponsive" aria-expanded="false" aria-label="Toggle navigation"><span className="navbar-toggler-icon"></span></button>
            <div className={`collapse navbar-collapse  ${show ? "show" : ""}`} id="navbarResponsive">
                <ul className="navbar-nav" >
                    <li className="nav-item" onClick={handleNavClick} ><Link to="/about" className="nav-link js-scroll-trigger" >About</Link></li>
                    <li className="nav-item" onClick={handleNavClick}><Link to="/skills" className="nav-link js-scroll-trigger" >Skills</Link></li>
                    {/* <li className="nav-item" onClick={handleNavClick}><Link to="/interests" className="nav-link js-scroll-trigger" >Interests</Link></li> */}
                    <li className="nav-item" onClick={handleNavClick}><Link to="/awards" className="nav-link js-scroll-trigger" >Awards</Link></li>
                     <li className="nav-item" onClick={handleNavClick}><Link to="/experience" className="nav-link js-scroll-trigger" >Experience</Link></li>
                    <li className="nav-item" onClick={handleNavClick}><Link to="/internships" className="nav-link js-scroll-trigger">Internships</Link></li>
                    <li className="nav-item" onClick={handleNavClick}><Link to="/portfolio" className="nav-link js-scroll-trigger">Portfolio</Link></li>
                    <li className="nav-item" onClick={handleNavClick}><Link to="/contact" className="nav-link js-scroll-trigger" >Contact Me</Link></li>
                </ul>
            </div>

            </nav>
            
            </>
        );
};
  
export default Sidebar;