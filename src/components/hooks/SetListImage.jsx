import {useState} from 'react';
import '/src/styles/setListImage.css';

export const SetListImage = ({image}) => {
    const [selectedIndex, setSelectedIndex]= useState(0);
    const [selectedImage, setSelectedImage]=useState(image[0]);

    const selectNewImage=(index,images,next = true) =>{
        const condition = next ? selectedIndex < image.length - 1 : selectedIndex > 0;
        const nextIndex = next ? (condition ? selectedIndex +1 : 0) : (condition ? selectedIndex -1: image.length - 1);
        setSelectedImage(image[nextIndex]);
        setSelectedIndex(nextIndex);
    };   
    const previous=()=>{
        selectNewImage(selectedIndex,image,false)

    }
    const next = () => {
        selectNewImage(selectedIndex,image)
    }

    return(
        <>
        <div className="main-container">
            <div className='slider-container'>
                {(image.length) > 1 ? ( 
                    <>
                    <div className='leftArrow' onClick={previous}> &#10092;</div>
                    <div className='rightArrow' onClick={next}> &#10093;</div>
                    </>
                    ): null}
                <div className='container-images'>    
                    <img src={`/images/${selectedImage}`} alt='projectimg' className='imageProject'/>
                </div>
            </div>                                   
        </div>
        </>

    );

};