import React from 'react';  
import './createPostPopup.css';  
import {Button} from "react-bootstrap";
import {FormGroup} from "react-bootstrap";
const axios = require("axios");
class CreatePostPopup extends React.Component {  

    constructor(props) {
        super(props);
        this.state ={
            file: null,

        };
        // this.onFormSubmit = this.onFormSubmit.bind(this);
        this.onChange = this.onChange.bind(this);
    }
    onFormSubmit(event){
        // event.preventDefault();
        const formData = new FormData();
        formData.append('Image',this.state.file);
        formData.append('Subject',this.props.subjectValue);
        formData.append('Content',this.props.contentValue);
        formData.append('Name',localStorage.getItem('name'));
        console.log("ready to send data")
        const config = {
            headers: {
                'content-type': 'multipart/form-data'
            }
        };
        axios.post('http://127.0.0.1:8000/createpost/',formData,config)
            .then((response) => {
                alert("The file is successfully uploaded");
            }).catch((error) => {
        });
    };
    onChange(e) {
        this.setState({file:e.target.files[0]});
        console.log()
    }
    render() {  
            return (  
                <div className='popup'>  
                    <div className='popup\_inner'>  
                        <div></div>
                        <div className = "pop_text">
                            <Button onClick={this.props.closePopup} className="close_button" variant="light">X</Button>
                            <form onSubmit={e => this.onFormSubmit(e)}>
                            <FormGroup className="top_login" >
                            <p 
                            className="title_login"> عنوان</p>

                            <input 
                            name = {this.props.Subject}
                            value = {this.props.subjectValue}
                            onChange = {this.props.click}
                            placeholder = "عنوان متن مورد نظر را وارد کنید"
                            className= "input_login" 
                            type = "text" required></input>
                            </FormGroup>

                            <p className="title_login"> متن</p>
                            <textarea
                            name = {this.props.Content}
                            value = {this.props.contentValue}
                            onChange= {this.props.click}
                            type = "text" 
                            className="text_area">

                            </textarea>

                            <h5>ارسال عکس</h5>
                            <input type="file" name="myImage" onChange= {this.onChange} />
                            {/* <button type="submit">Upload</button> */}
                            <Button variant="success" type="submit">ارسال پست</Button>
                            {/* <ReactUploadImage /> */}
                            </form>
                        </div>  
                          
                    </div>  
                </div>  
        );  
    }  
}  

export default CreatePostPopup;