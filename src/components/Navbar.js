import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import {useState , useEffect} from "react";

import navIcon1 from '../assets/img/nav-icon1.svg';
import navIcon2 from '../assets/img/github.svg';
import navIcon3 from '../assets/img/nav-icon3.svg';




function BasicExample() {
    const [activeLink,setActiveLink]= useState('home');
    const [scrolled,setScrolled] = useState(false);

    useEffect (()=>{
        const onScroll = () => {
            if(window.scrollY>50)
            {
                setScrolled(true);
            }
            else{
                setScrolled(false);
            }
        }
        window.addEventListener("scroll",onScroll);
        return () =>window.removeEventListener("scroll",onScroll);
    },[])

   const onUpdateActiveLink = (value) =>{
    setActiveLink(value);
   }
  return (
    <Navbar expand="lg" className={scrolled ? "scrolled" : ""} >
      <Container>
        <Navbar.Brand href="#home"><p className='name'>Vandan</p></Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" >
            <span className="navbar-toggler-icon" >  </span>
            </Navbar.Toggle>
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link href="#home" className={activeLink ==='home' ? 'active navbar-link' : 'navbar-link'} onClick={()=> onUpdateActiveLink('home')} >Home</Nav.Link>
            <Nav.Link href="#skills" className={activeLink ==='skills' ? 'active navbar-link' : 'navbar-link'} onClick={()=> onUpdateActiveLink('skills')} >Skills</Nav.Link>
            <Nav.Link href="#projects" className={activeLink ==='projects' ? 'active navbar-link' : 'navbar-link'} onClick={()=> onUpdateActiveLink('projects')}>Projects</Nav.Link>
          </Nav>
          <span className='navbar-text' >
            <div className='social-icon' >
                <a href="https://www.linkedin.com/in/vandan-hood/" target="_blank "> <img src={navIcon1} alt=""/> </a>
                <a href="https://github.com/vandan2410" target="_blank " > <img src={navIcon2} alt=""/> </a>
                <a href="https://www.instagram.com/vandan_hood24/" target="_blank " > <img src={navIcon3} alt=""/> </a>
            </div>
            <Nav.Link href="#connect">
                  <button className="vvd"><span>Let’s Connect</span></button>
            </Nav.Link>
                
            
          </span>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default BasicExample;