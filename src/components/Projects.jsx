import { TbFolderCode } from "react-icons/tb";
import {icons} from '../components/IconsExport';
import { SetListImage } from './hooks/SetListImage';            
import '../styles/project.css'

const tagsInfo=(names)=>icons.filter(tag=>tag.name===names)
const Projects=()=> {
        const projects=[{
            id:0,
            title:"La_Huerta_inventory",
            description:" Inventory management system used to controle La huerta's store product. It helps store owners and employees track products, manage stock levels, prevent shortages, and show useful sales and inventory graphics.",
            github:"https://github.com/PabloAlarconArel/La_Huerta_inventory",
            image:['Home_graficos.png','Inventario.png','Ventas.png'],
            tags:['React','Express','MongoDB','Node.js']
            },
            {
            id:1,
            title:"UDEM Project Management",
            description:"University project management system to approve or reject submitted documents.Responsible for contributing to the backend module, designing the data model, deploying on a Linux server, and creating technical documentation. Collaborative project developed with a team of 7 members.",
            github:"",
            image:['crearProyecto2.png','EscuelaUdem.png','InicioUdem.png','loginUdem.png'],
            tags:['Django','Python','SQL Server']
            }, 
            {
            id:2,
            title:"FuelApp",
            description:"Fuel App allows clients to order fuel, adding a card number and selecting the desired amount. The app also displays the percentage of fuel delivered.",
            github:"https://github.com/PabloAlarconArel/FuelApp",
            image:['fuelApp.png'],
            tags:['Python']
            },
  
        ]
        const projectList = projects.map(project => 
            <li key ={project.id} className='project-li'>
                <div>
                <SetListImage image = {project.image}/>
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
                    {(project.github.length) > 0 ?
                    <div>
                    <button onClick={()=>window.open(project.github,"_blank")}>
                        <div className='github-div'>
                            <img src='/icons/github-mark-white.svg' alt='github-tag' className='github-tag'/>
                            <p>Code</p>
                        </div>
                    </button>                          
                    </div>:null}
                </div>
                </div>                    
            </li>
            
        
    );
        return (
            <section id='Project' className='Project-section'>
                <h1 className='projects-H1'><TbFolderCode />  Projects </h1>
                <div>
                    <ul className='list-ul'>{projectList}</ul>
                </div>
            </section>
        );
    
}

export default Projects;