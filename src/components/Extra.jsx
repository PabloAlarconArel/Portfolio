

const Extra =() => {

    const ExtrasProject=[{
                id:0,
                title:"Extra 1",
                description:"description 1",
                image:"angular.jpeg",
                },
                {
                id:1,
                title:"Extra 2",
                description:"description 2",
                image:"../assets/images/jquery.jpeg",
                },
                {
                id:2,
                title:"Extra 3",
                description:"description 3",
                image:"../assets/images/angular.jpeg",
                },
            ] 

    const extraList = ExtrasProject.map (extra=>
        <li key={extra.id} className="extra-li">
            <div className='extra-frame'>
                <div className="extra-frame-image">
                    <img src= {extra.image} alt="extra" className="extra-img"/>
                </div>
                <div className="extra-data">
                    <b className="extra-title">{extra.title}</b>
                    <p className="extra-description">{extra.description}</p>
                </div>    
                

            </div>
            
        </li>
    )  
    return (
      <>
        <section className='extra'>
            <h2>    Extra </h2>       
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
