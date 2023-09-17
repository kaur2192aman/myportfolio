import React from 'react'
import emailjs from 'emailjs-com'
const ContactForm = () => {
  const [formStatus, setFormStatus] = React.useState('Send')
 
  function sendEmail(e) {
    e.preventDefault();    //This is important, i'm not sure why, but the email won't send without it
    setFormStatus('Submitting...')
   
    emailjs.sendForm('service_6dle7w7', 'template_gunprkp', e.target, 'jPiCD6SbwC2LiGVp_')
      .then((result) => {
        setFormStatus('Sent!')
          window.location.reload()  //This is if you still want the page to reload (since e.preventDefault() cancelled that behavior) 
      }, (error) => {
          console.log(error.text);
      });
  }

  return (
    <div className="container mt-5">
      <h4 className="mb-4 text-center">Contact Me</h4>
      <form onSubmit={sendEmail}>
        <div className="mb-3">
          <label className="form-label" htmlFor="name">
            Name
          </label>
          <input className="form-control" type="text" name="name"  id="name" required />
        </div>
        <div className="mb-3">
          <label className="form-label" htmlFor="email">
            Email
          </label>
          <input className="form-control" type="email"  name="email"  id="email" required />
        </div>
        <div className="mb-3">
          <label className="form-label" htmlFor="message">
            Message
          </label>
          <textarea className="form-control"  name="message" id="message" required    />
        </div>
        <button className="btn btn-danger" type="submit">
          {formStatus}
        </button>
      </form>
     

    </div>
  )
}
export default ContactForm