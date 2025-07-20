import imagen1 from '../assets/images/imagen1.png';
import imagen2 from '../assets/images/imagen2.png'; 
import {icons} from '../components/IconsExport';
import { SetListImage } from './hooks/SetListImage';            
import '../styles/project.css'

const tagsInfo=(names)=>icons.filter(tag=>tag.name===names)
console.log(tagsInfo('Python'))
const Projects=()=> {
        const projects=[{
            id:0,
            title:"project 1",
            description:"sjkdfhfdjf  dhfjsdfdkj h sdhfh ds dfkjshdfj fdskjfhsj  sdjhfjshfd  djfshfhjds  dskjfhdsjfhds dkshffkdj",
            github:"youtube.com",
            image:imagen1,
            tags:['Python','Javascript']
            },
            {
            id:1,
            title:"project 2",
            description:"description 2",
            github:"www.google.com",
            image:imagen2,
            tags:['React']
            }  
        ]
        const projectList = projects.map(project => 
            <li key ={project.id} className='project-li'>
                <div>
                <SetListImage projectID = {project.id}/>
                </div>
                <div className='dataProject'>
                    <b className='title'>{project.title}</b>
                    <p className='description-p'> {project.description}</p>
                <div className='tagProject-div'>
                    <div className='multitag-div'>
                        {project.tags.map( (item,index) =>
                            <div key={index} className='tag-div'>
                                <img src={tagsInfo(item).map(source=>source.src)} alt='tag' className='Icon-tag'/>
                                <p>{item}</p>
                            </div>                     
                        )}
                    </div>
                    <div>
                    <button onClick={()=>window.open("https://www.github.com","_blank")}>
                        <div className='github-div'>
                            <img src='../public/icons/github-mark-white.svg' alt='github-tag' className='github-tag'/>
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

export default Projects;