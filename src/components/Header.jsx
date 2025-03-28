import { Component } from 'react';
import ButtonSetTheme from './ButtonSetTheme';

class Header extends Component {
    render() {
        return (
            <div>
                <header> 
                    <div >
                        <div style={{display:'flex'}}>
                            <div>
                                <a href="#P">Experience</a>
                            </div>
                            <div>
                                <a href='#About'>About</a>
                            </div>
                            <div>
                                <a href="#Project">Project</a>
                            </div>
                            <div>
                                <a href="#Contact">Contact</a>
                            </div>
                            <ButtonSetTheme/>
                            </div>
                    </div>
                </header>               
            </div>
            
            
        );
    }
}

export default Header;
