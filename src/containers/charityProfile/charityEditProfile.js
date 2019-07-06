import React, {Component} from "react";
import {Button} from "react-bootstrap";
import logo from "../../assets/charity2-01.png";
import "./charityDetails.css";
import "./charityEditProfile.css";
import {Alert} from 'react-bootstrap';
import {FormGroup} from "react-bootstrap";
import {InputGroup} from 'react-bootstrap'

class CharityEditProfile extends Component {

    state = {
        name : "",
        image : "",
        profile :{
            ManagingDirector : "",
            PhoneNumber : "",
            Email : "",
            Address : "",
            Kind : "",
            FieldOfactivity : "",
            Bio : ""}
    }
    handleChange = (event) => {
        const name = event.target.name;
        const value = event.target.value;
        this.setState(prevState => {
          const newState = {...prevState};
          newState.profile[name] = value;
          return newState;
        })
        console.log(this.state)
    }


    render() {

        const profile = (
            <div className = "profile_containerEdit">
                
                <Alert variant="info">
                <Alert.Heading>ویرایش پروفایل</Alert.Heading>
    
                <p>
                <FormGroup className="top_login" >
                            <p 
                            ><i class="material-icons">
                            chat_bubble_outline
                            </i></p>
                            <input
                            name = "Bio"
                            value = {this.state.profile.Bio}
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
                            value = {this.state.profile.ManagingDirector}
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
                            value = {this.state.profile.PhoneNumber}
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
                            value = {this.state.profile.Email}
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
                            value = {this.state.profile.Address}
                            onChange = {this.handleChange}
                            className= "input-editProfile" 
                            ></input>
                </FormGroup>
                    
                </p>
                
                <hr />
                <Button variant="success">ویرایش مشخصات</Button>
                
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
                <Button variant="primary" className= "button_pannel" size="lg" block>
                    خانه
                </Button>
                <Button variant="primary" className= "button_pannel" size="lg" block>
                    حمایت ها
                </Button>
                <Button variant="primary" className= "button_pannel" size="lg" block>
                    دنبال کنندگان
                </Button>
                <Button variant="primary" className= "button_pannel" size="lg" block>
                    نوشته ها
                </Button>
                <Button variant="primary" className= "button_pannel" size="lg" block>
                     نظرات
                </Button>
                <Button variant="primary" className= "button_pannel" size="lg" block>
                    اطلاعات خیریه
                </Button>
                <Button variant="primary" className= "button_pannel" size="lg" block>
                    پشتیبانی
                </Button>
                <Button variant="primary" className= "button_pannel" size="lg" block>
                    پشتیبانی
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