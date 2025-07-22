
import { TbMessage } from "react-icons/tb";
import '../styles/contact.css';

export default function Contact () { 
    return (
    <>
    <section id='Contact'>
        <h1> <TbMessage /> Contact</h1>
    
    <div className='contact-div' >
        <span className='contact-span'>
        <a href='mailto: pablo.alarcon.arel@gmail.com'>
            <img className='email' src='../icons/icons8-email.svg' alt='email'/>
        </a>
        <a href='https://www.linkedin.com/in/pablo-alarc%C3%B3n-arel-2a7a6325b/' target='blank'>
            <img className='linkedin' src='../icons/linkedin.svg'alt='linkedin'/>
        </a>
        <a className='github-a' href='https://github.com/PabloAlarconArel' target='blank'>
            <img className='github' src='../icons/github-mark-white.svg' alt='github'/>
        </a>
        </span>
    </div>
    </section>  
    </>
    )
}






