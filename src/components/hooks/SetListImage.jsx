import {useEffect, useRef, useState} from 'react';
import{data} from '/src/assets/data.jsx';
import '/src/styles/setListImage.css';
import PropTypes from 'prop-types';


export const SetListImage = ({projectID}) => {
    const listRef = useRef();
    const [currentIndex, setCurrentIndex] = useState(0);

    useEffect(() => {
        const listElement = listRef.current;
        const imgNode = listElement.querySelectorAll("li > img")[currentIndex]

        if (imgNode) {
            imgNode.scrollIntoView({
                behavior: 'smooth'
            });
        }
        
    },[currentIndex]);

    const scrollToImage = (direction) => {
        if (direction === 'prev'){
            setCurrentIndex(curr =>{
                const isfirstImage = currentIndex === 0;
                return isfirstImage ? 0 : curr - 1;
            })
        } else {
            const isLastImage = currentIndex === data.length - 1;
            if(!isLastImage){
                setCurrentIndex(curr => curr + 1 );
            }
        }
    }

    return(
        <>
        <div className="main-container">
            <div className='slider-container'>      
                <div className='leftArrow' onClick={() => scrollToImage('prev')}> &#10092;</div>
                <div className='rightArrow' onClick={() => scrollToImage('next')}> &#10093;</div>
                <div className='container-images'>    
                    <ul ref={listRef}>
                        console.log(projectID)
                        {data.filter(item => item.project === projectID).map((item) => {
                            return <li key={item.id}>
                                <img src={item.imgUrl} alt='imgproject' className='imageProject' />
                                    </li>
                        })}
                    </ul>
                <div className="dots-container">
                {data.filter(item=> item.project === projectID).map((_, idx) => (
                    <div key={idx}
                        className={`dot-container-item ${idx === currentIndex ? "active" : ""}`}>&#9865;
                    </div>))}
                </div>                                    
                </div>
            </div>
        </div>
        </>

    );

};

SetListImage.propTypes = {
  projectID: PropTypes.string.isRequired
};

export default SetListImage;
