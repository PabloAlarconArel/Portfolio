import { TbAlignBoxBottomRight } from "react-icons/tb";
import '../styles/extra.css';

const Extra =() => {

    const ExtrasProject=[{
                id:0,
                title:"BraytonCycle",
                description:"The Regenerative Brayton Cycle project is a web page built with Jupyter Notebook. It illustrates, through a T-s diagram, the performance of gas turbine and jet engine operations. It also includes temperature data and regenerator effectiveness analysis, allowing the user to obtain important parameters such as specific enthalpy, ideal efficiency, ideal heat input, and ideal work output.",
                image:'/images/ciclo_brayton.png',
                github:"https://github.com/PabloAlarconArel/BraytonCycle"
                },
       
            ] 

    const extraList = ExtrasProject.map (extra=>
        <li key={extra.id} className="extra-li">
            <div className='extra-frame'>
                <div className="button" tabIndex="0" role="button" onClick={()=>window.open(extra.github,"_blank")}>
                <div className="extra-frame-image">
                    <img src= {extra.image} alt="extra" className="extra-img"/>
                </div>
                <div className="extra-data">
                    <b className="extra-title">{extra.title}</b>
                    <p className="extra-description">{extra.description}</p>
                </div>    
                </div>
            </div>
            
        </li>
    )  
    return (
    <>
        <section className='extra'>
            <h2><TbAlignBoxBottomRight />  Extra </h2>       
                <div>
                    <ul className="extra-ul">
                        {extraList}
                    </ul>
                </div>
        </section>
    </>
    )
  
}

export default Extra;
