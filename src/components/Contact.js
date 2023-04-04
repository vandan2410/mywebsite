import { useState ,useRef } from "react";
import { Container, Row, Col } from "react-bootstrap";
import contactImg from "../assets/img/contact-img.svg";
import emailjs from '@emailjs/browser';
import 'animate.css';
import TrackVisibility from 'react-on-screen';

export const Contact = () => {
  const formRef = useRef();
  const [form,setForm]=useState({
      name: '',
      email:'',
      message:'',

  });
  const [loading,setLoading] = useState(false);
  const handleChange =(e) =>{
    const {name,value}=e.target;

    setForm({...form,[name]:value})
  }

  const handleSubmit = (e) =>{
    e.preventDefault();
    setLoading(true);


    emailjs.send('service_blrautg',
    'template_028w8nd',
    {
      from_name:form.name,
      to_name: 'Vandan Hood',
      from_email:form.email,
      to_email: 'vandanc71@gmail.com',
      message: form.message,
    },
    'MsqQYjjfhSX14g0Nz'
    )
    .then(()=>{
      setLoading(false);
      alert('Thank You . I will get back to you as soon as possible');

      setForm({
        name: '',
        email:'',
        message:'',
      })
    },(error)=>{
      setLoading(false)
      console.log(error);
      alert('Something went wrong.')
    })
  }
  // const formInitialDetails = {
  //   firstName: '',
  //   lastName: '',
  //   email: '',
  //   phone: '',
  //   message: ''
  // }
  // const [formDetails, setFormDetails] = useState(formInitialDetails);
  // const [buttonText, setButtonText] = useState('Send');
  // const [status, setStatus] = useState({});

  // const onFormUpdate = (category, value) => {
  //     setFormDetails({
  //       ...formDetails,
  //       [category]: value
  //     })
  // }

  // const handleSubmit = async (e) => {
  //   try{
  //   e.preventDefault();
  //   setButtonText("Sending...");
  //   let response = await fetch("http://localhost:5000/contact", {
  //     method: "POST",
  //     headers: {
  //       "Content-Type": "application/json;charset=utf-8",
  //     },
  //     body: JSON.stringify(formDetails),
  //   });
  //   setButtonText("Send");
  //   let result = await response.json();
  //   setFormDetails(formInitialDetails);
    
  //     setStatus({ succes: true, message: 'Message sent successfully'});
  //     console.log(result);
  //   } catch(error) {
  //     setStatus({ succes: false, message: 'Something went wrong, please try again later.'});
  //     console.log(error);
  //   }
  // };

  return (
    <section className="contact" id="connect">
      <Container>
        <Row className="align-items-center">
          <Col size={12} md={6}>
            <TrackVisibility>
              {({ isVisible }) =>
                <img className={isVisible ? "animate__animated animate__zoomIn" : ""} src={contactImg} alt="Contact Us"/>
              }
            </TrackVisibility>
          </Col>
          <Col size={12} md={6}>
            <TrackVisibility>
              {({ isVisible }) =>
                <div className={isVisible ? "animate__animated animate__fadeIn" : ""}>
                <h2>Get In Touch</h2>
                <form ref={formRef} onSubmit={handleSubmit}>
                  <Row>
                    <Col size={12} sm={6} className="px-1">
                      <input type="text" name="name" value={form.name} onChange={handleChange} placeholder="Name"/>
                    </Col>
                    
                    <Col size={12} sm={6} className="px-1">
                      <input type="email" name='email' value={form.email} placeholder="Email Address" onChange={handleChange} />
                    </Col>
                    
                    <Col size={12} className="px-1">
                      <textarea rows="6" name="message" value={form.message} placeholder="Message" onChange={handleChange}></textarea>
                      <button type="submit"><span>{loading? 'Sending...' : 'Send'}</span></button>
                    </Col>
                    
                  </Row>
                </form>
              </div>}
            </TrackVisibility>
          </Col>
        </Row>
      </Container>
    </section>
  )
}
