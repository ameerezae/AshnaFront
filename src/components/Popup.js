import React from 'react';  
import './Popup.css';  
import {Button} from "react-bootstrap"
class Popup extends React.Component {  
  render() {  
        return (  
                <div className='popup'>  
                    <div className='popup\_inner'>  
                        
                        <div className = "pop_text">
                            <Button onClick={this.props.closePopup} className="close_button" variant="light">X</Button>
                            <b>{this.props.Subject}</b>
                            <br/>
                            <br/>
                            <br/>
                            {this.props.text}
                        {/* <Button className="donate-button" variant="success">حمایت میکنم</Button>   */}
                        </div>
                          
                    </div>  
                </div>  
        );  
    }  
}  

export default Popup;