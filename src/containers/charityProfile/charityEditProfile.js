import React, {Component} from "react";
import {Button} from "react-bootstrap";
import logo from "../../assets/charity2-01.png";
import "./charityDetails.css";
import "./charityEditProfile.css";
import {Alert} from 'react-bootstrap';
import {FormGroup} from "react-bootstrap";
import {InputGroup} from 'react-bootstrap';

const axios = require("axios");
class CharityEditProfile extends Component {

    state = {
        name : "",
        image : "",
        ManagingDirector : "",
        PhoneNumber : "",
        Email : "",
        Address : "",
        Kind : "",
        FieldOfactivity : "",
        Bio : "",
        file : null
    }
    onFormSubmit(event,data){
        console.log("ready to send data");
        event.preventDefault();
        const formData = new FormData();
        formData.append('Name',this.state.name);
        formData.append('Image',this.state.file);
        formData.append('ManagingDirector',this.state.ManagingDirector);
        formData.append('PhoneNumber',this.state.PhoneNumber);
        formData.append('Address',this.state.Address);
        formData.append('Bio',this.state.Bio);
        formData.append('Email',this.state.Email);
        console.log("ready to send data")
        const config = {
            headers: {
                'content-type': 'multipart/form-data',
                Authorization: `Token ${localStorage.getItem('token')}`
            }
        };
        
        axios.put('http://127.0.0.1:8000/my_profile/edit/'+localStorage.getItem('name'),formData,config);
        this.props.history.push(`/profile/charity/${this.state.name}`);
          
    };
    componentWillMount() {
        console.log(localStorage.getItem('name'));
        
        fetch("http://127.0.0.1:8000/my_profile/edit/"+localStorage.getItem('name'), {
          name : "profname",  
          headers: {
                Authorization: `Token ${localStorage.getItem('token')}`
              }
        })
          .then(response => response.json())
           .then(json => this.saveData(json))
    }
    saveData = (json) => {
        this.setState({name:json.Name});
        this.setState({image:json.Image});
        this.setState({ManagingDirector:json.ManagingDirector});
        this.setState({PhoneNumber:json.PhoneNumber});
        this.setState({Email:json.Email});
        this.setState({Address:json.Address});
        this.setState({Kind:json.Kind});
        this.setState({Bio:json.Bio});
        this.setState({FieldOfactivity:json.FieldOfactivity});

    }
    handleChange = (event) => {
        const name = event.target.name;
        const value = event.target.value;
        this.setState(prevState => {
          const newState = {...prevState};
          newState[name] = value;
          return newState;
        })
        console.log(this.state)
    }
    SetImage = (event) =>{
        this.setState({file:event.target.files[0]});
        console.log(this.state.file)
    }
    handle_logout = (event) => {
        localStorage.clear();
    }
    render() {

        const profile = (
            <div className = "profile_containerEdit">
                
                <Alert variant="info">
                <Alert.Heading>ویرایش پروفایل</Alert.Heading>
    
                
                <form onSubmit = {event=> this.onFormSubmit(event,this.state)}>
                <p>
                <FormGroup className="top_login" >
                            <p 
                            ><i class="material-icons">
                            chat_bubble_outline
                            </i></p>
                            <input
                            name = "Bio"
                            value = {this.state.Bio}
                            onChange = {this.handleChange}
                            className = "input-editProfile"></input>
                </FormGroup>
                <hr />
                <FormGroup className="top_login" >
                            <p 
                            className="title_login"><i class="material-icons space">
                            account_box
                            </i></p>
                            <input 
                            name = "ManagingDirector"
                            value = {this.state.ManagingDirector}
                            onChange = {this.handleChange}
                            className= "input-editProfile" 
                            ></input>
                </FormGroup>
                <hr />
                
                <FormGroup className="top_login" >
                    <InputGroup></InputGroup>
                            <p 
                            className="title_login"><i class="material-icons space">
                            call
                            </i></p>
                            <input 
                            name = "PhoneNumber"
                            value = {this.state.PhoneNumber}
                            onChange = {this.handleChange}
                            className= "input-editProfile" 
                            ></input>
                </FormGroup>
                <hr />
                <FormGroup className="top_login" >
                            <p 
                            className="title_login"><i class="material-icons space">
                            email
                            </i></p>
                            <input 
                            name = "Email"
                            value = {this.state.Email}
                            onChange = {this.handleChange}
                            className= "input-editProfile" 
                            type = "email"></input>
                </FormGroup>
                <hr/>
                <FormGroup className="top_login" >
                            <p 
                            className="title_login"><i class="material-icons space">
                            account_balance
                            </i></p>
                            <input 
                            name = "Address"
                            value = {this.state.Address}
                            onChange = {this.handleChange}
                            className= "input-editProfile" 
                            ></input>
                </FormGroup>
                <hr/>
                <FormGroup className="top_login" >
                            <p 
                            className="title_login"><i class="material-icons space">
                            image
                            </i></p>
                            <input 
                            type="file"
                            name = "image"
                            // value = {this.state.Address}
                            onChange = {this.SetImage}
                            className= "input-editProfile" 
                            ></input>
                </FormGroup>
                    
                </p>
                <hr />
                <Button type="submit" variant="success">ویرایش مشخصات</Button>
                </form>
                </Alert>
            </div>
        )

        const header = (
            <div className = "header_profile">
                <div>
                <img className = "charity_picture"src = {this.state.image} width = "90" height = " 80"alt= "pic"></img>
                </div>
                <div className = "username_header">
                    <a>{this.state.name}</a>
                </div>
                
            </div>
        )
        const pannel = (
            <div className="container_pannel">
                <img src={logo} className="pix_charityProfile" alt = "logo" width="150" height="150" />
                <Button href={"/ashna"} variant="primary" className= "button_pannel" size="lg" block>
                    آشنا
                </Button>
                <Button href={"/profile/charity/followers"} variant="primary" className= "button_pannel" size="lg" block>
                    دنبال کنندگان
                </Button>
                <Button href = "/profile/charity/posts" variant="primary" className= "button_pannel" size="lg" block>
                    نوشته ها
                </Button>
                <Button href={"/profile/charity/"+this.state.name} variant="primary" className= "button_pannel" size="lg" block>
                پروفایل               
                </Button>
                <Button href="/login" onClick = {event => this.handle_logout(event)} variant="primary" className= "button_pannel" size="lg" block>
                خروج               
                </Button>
              
                
            </div>
        )






        return(
            <div>
                {header}
                {pannel}
                {profile}

            </div>
        )
    }
}
export default CharityEditProfile;