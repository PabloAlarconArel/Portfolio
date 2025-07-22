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
                    <p> Backend developer and Data analytic from Santiago, Chile</p>
                </span>
                <br/>
                <h1> <TbUserEdit /> About Me</h1>
                <div className='about-text'>
                    <p>This section contains information about.. shfjhdshfj dsjfhshdf dshfhfjhf jhefhsjfhds
                    sfhjdshfd shdghsjh s dhfjfjf sh djfh fjdsh hfdshj  sdk h sdkj hsdkf kshf hfds hffhjks dhçaçhdfhj
                     sajsojwfds dksjfsjf dskjfjd kfdjfskaj kjsdfakjfkj dfksdfkjd  dsjdjfkjdçaj dkjdskjfskdjfsdkdjfds.</p>
                </div>
            </div>
        )
    }
}

export default About;