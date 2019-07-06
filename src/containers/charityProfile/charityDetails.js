import React, {Component} from "react";
import {Button} from "react-bootstrap";
import logo from "../../assets/charity2-01.png";
import "./charityDetails.css";
import {Alert} from 'react-bootstrap'

class CharityDetails extends Component {

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
    componentWillMount() {
        console.log(localStorage.getItem('name'));
        
        fetch("http://127.0.0.1:8000/my_profile/"+localStorage.getItem('name'), {
          name : "profname",  
          headers: {
                Authorization: `Token ${localStorage.getItem('token')}`
              }
        })
          .then(response => response.json())
           .then(json => this.saveData(json))
    }
    saveData = (json) => {
        this.setState({name : json.Name});
        this.setState({image: json.Image});
        var profile = {...this.state.profile}
        profile.ManagingDirector = json.ManagingDirector;
        profile.PhoneNumber = json.PhoneNumber;
        profile.Email = json.Email;
        profile.Address = json.Address; 
        profile.Kind = json.Kind;
        profile.Bio = json.Bio;
        profile.FieldOfactivity = json.FieldOfactivity
        this.setState({profile});

    }
    render() {

        const profile = (
            <div className = "profile_container">
                <h4 className="name">{this.state.name}</h4>
                <p className = "bio">{this.state.profile.Bio}</p>
                <Alert variant="dark">
                {/* <Alert.Heading>Hey, nice to see you</Alert.Heading> */}
                <p>
                    {this.state.profile.ManagingDirector}
                    <i class="material-icons space">
                    account_box
                    </i>
                </p>
                
                <hr />
                <p>
                    {this.state.profile.PhoneNumber}
                    <i class="material-icons space">
                    call
                    </i>
                </p>
                <hr/>
                <p >
                {this.state.profile.Email}
                <i class="material-icons space">
                email
                </i>
                </p>
                <hr/>
                <p >
                {this.state.profile.Address}
                <i class="material-icons space">
                account_balance
                </i>
                </p>
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
                <a href = "/edit/"><Button className = "createPostButton"  variant="light">ویرایش مشخصات</Button></a>
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
                <Button href = "/my_profile/posts" variant="primary" className= "button_pannel" size="lg" block>
                    نوشته ها
                </Button>
                <Button variant="primary" className= "button_pannel" size="lg" block>
                     نظرات
                </Button>
                <Button variant="primary" className= "button_pannel" size="lg" block>
                    اطلاعات خیریه
                </Button>
                <Button href={"/my_profile/"+this.state.name} variant="primary" className= "button_pannel" size="lg" block>
                پروفایل               
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
export default CharityDetails;