import { icons } from "./IconsExport";
import { TbDeviceImacCog } from "react-icons/tb";
import '../styles/Technology.css'

export const Technology = () => {

        const skillsType= (type) =>icons.filter(skills => skills.type=== type)
        const skillsLanguage= skillsType('Language')
        const skillsDb= skillsType('db')
        const skillsFrame= skillsType('frame')
        const skillsother= skillsType('other')
        const sourceImage=(source)=>(
            source.map((sources,index)=>
                <li key={index} className={`Skill-${sources.type}`}>
                    <img src= {sources.src} alt={`Skill-${sources.name}`} className={`img-${sources.type}`}/>
                </li>            
            )
        );      
        return (
            <>
            <h1><TbDeviceImacCog /> Skills</h1>
            <div className="div-list">
                <ul className="first-list">
                {sourceImage(skillsLanguage)}
                {sourceImage(skillsDb)}
                </ul>
                <div>
                <ul className="second-list">
                {sourceImage(skillsFrame)}
                {sourceImage(skillsother)}
                </ul>
                </div>
            </div>
            
            </>
        );
    }


export default Technology;
