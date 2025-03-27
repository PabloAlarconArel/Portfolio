import { Component } from 'react';
import GitHub from '../assets/icons/github-mark-white.svg';
import Python from '../assets/icons/python.svg';
import Js from '../assets/icons/javascript.svg';
import imagen1 from '../assets/images/imagen1.png';
import imagen2 from '../assets/images/imagen2.png'; 
import '../styles/project.css'


class Projects extends Component {
    render() {
        const icons ={
            JS:{
                name:'Javascript',
                src:Js
            },
            GITHUB:{
                name:'GitHub',
                src:GitHub
            },
            PYTHON:{
                name:'Python',
                src:Python},
            }
        const projects=[{
            id:0,
            title:"project 1",
            description:"sjkdfhfdjf  dhfjsdfdkj h sdhfh ds dfkjshdfj fdskjfhsj  sdjhfjshfd  djfshfhjds  dskjfhdsjfhds dkshffkdj",
            github:"youtube.com",
            image:imagen1,
            tags:[icons.PYTHON,icons.JS]
            },
            {
            id:1,
            title:"project 2",
            description:"description 2",
            github:"www.google.com",
            image:imagen2,
            tags:[icons.PYTHON]
            }  
        ]
        const projectList = projects.map(project => 
            <li key ={project.id} className='project-li'>
                <div>
                <img 
                    className="imageProject"
                    src={project.image}
                    alt='foto'
                />
                </div>
                <div className='dataProject'>
                    <b className='title'>{project.title}</b>
                    <p className='description-p'> {project.description}</p>
                <div className='tagProject-div'>
                    <div className='multitag-div'>
                        {project.tags.map( (item,index) =>
                            <div key={index} className='tag-div'>
                                <img src={item.src} alt='tag' className='Icon-tag'/>
                                <p>{item.name}</p>
                            </div>                     
                        )}
                    </div>
                    <div>
                    <button onClick={()=>window.open("https://www.github.com","_blank")}>
                        <div className='github-div'>
                            <img src={icons.GITHUB.src} alt='github-tag' className='github-tag'/>
                            <p>Code</p>
                        </div>
                    </button>                          
                    </div>
                </div>
                </div>                    
            </li>
            
        
    );
        return (
            <section id='Project'>
                <h1>Projects </h1>
                <div>
                    <ul className='list-ul'>{projectList}</ul>
                </div>
            </section>
        );
    }
}

export default Projects;