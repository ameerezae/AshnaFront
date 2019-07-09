import React, {Component} from "react";
import {Button} from "react-bootstrap";
import logo from "../../assets/charity2-01.png";
import "./charityDetails.css";
import {Alert} from 'react-bootstrap'

class CharityDetails extends Component {

    state = {
        IsFollowed : null,
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
            
        fetch(`http://127.0.0.1:8000/charities/${localStorage.getItem('CharityName')}`, {
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
        console.log(json.IsFollowed);
        this.setState({IsFollowed:json.IsFollowed});
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
    FollowOnclick = (event,name) =>{
        console.log("ready to send data")
        fetch('http://127.0.0.1:8000/follow/makerelation/', {
        method: 'POST',
        name : "makerelation",
        headers: {
            Authorization: `Token ${localStorage.getItem('token')}`,
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(name)
        }).then(res => res.json())
            .then(json => this.followresponse(json))

    }
    UnFollowOnclick = (event,name) => {
        fetch("http://127.0.0.1:8000/follow/deleterelation/", {
            method :"POST",
            name : "deleterelation",  
            headers: {
                  Authorization: `Token ${localStorage.getItem('token')}`,
                  'Content-Type': 'application/json'
                },
            body: JSON.stringify(name)
          })
             .then(response => response.json())
             .then(json => this.followresponse(json))
    }
    followresponse = (json)=>{
        if(json.IsFollowed == true){
            this.setState({IsFollowed : true})
        }
        else{
            this.setState({IsFollowed:false})
        }
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
        let followButt = null;
        if(!this.state.IsFollowed){
            followButt = <Button onClick = {event => this.FollowOnclick(event ,this.state.name)} className = "createPostButton"  variant="light">دنبال میکنم</Button>
        }
        else{
            followButt = <Button onClick = {event => this.UnFollowOnclick(event ,this.state.name)} className = "createPostButton"  variant="success">دنبال شده</Button>
        }

        const header = (
            <div className = "header_profile">
                <div>
                <img className = "charity_picture"src = {this.state.image} width = "90" height = " 80"alt= "pic"></img>
                </div>
                <div className = "username_header">
                    <a>{this.state.name}</a>
                </div>
                {followButt}
            </div>
        )
        const pannel = (
            <div className="container_pannel">
                <img src={logo} className="pix_charityProfile" alt = "logo" width="150" height="150" />
                <Button variant="primary" className= "button_pannel" size="lg" block>
                    خانه
                </Button>
                <Button variant="primary" className= "button_pannel" size="lg" block>
                    دنبال کنندگان
                </Button>
                <Button href = {`/charities/${this.state.name}/posts`} variant="primary" className= "button_pannel" size="lg" block>
                    نوشته ها
                </Button>
                <Button href={"/charities/"+this.state.name} variant="primary" className= "button_pannel" size="lg" block>
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