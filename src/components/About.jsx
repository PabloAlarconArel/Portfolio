import {Component} from 'react';
import { TbUserEdit } from "react-icons/tb";
import '../styles/header.css';

class About extends Component {
    
    render() {
        return (
            <div className='div-about' id='About'>
                <span>
                    <img src='/public/icons/principal_icon.svg' alt='Avatar' className='avatar' />
                    <h2>Pablo Alarcón</h2>
                    <p> Full Stack developer from Santiago, Chile.</p>
                </span>
                <br/>
                <section>
                <h1> <TbUserEdit /> About Me</h1>
                <div className='about-parraf'>
                    <p>Hi! I’m a Fullstack Developer with 1 year of experience building web applications using Django and React.
                     I enjoy working across the stack, from designing efficient data models to creating user-friendly interfaces. 
                     Passionate about solving real-world problems through technology, I focus on writing clean, maintainable code and collaborating effectively within teams.</p>
                </div>
                </section>
            </div>
        )
    }
}

export default About;