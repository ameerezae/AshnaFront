import React,{Component} from "react";
import "./benefactorDetails.css";
import {Alert,Button} from "react-bootstrap";
import "../../bootstrap/css/bootstrap.min.css";
import logo from "../../assets/charity2-01.png";
class BenefactorDetails extends Component {
    state = {
        name : "",
        image : "",
        profile : {
            Name : "",
            PhoneNum : "",
            Email : "",
        }
    }
    componentWillMount() {
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
        profile.Name = json.Name;
        profile.PhoneNum = json.PhoneNumber;
        profile.Email = json.Email;
        this.setState({profile});

    }
    handle_logout = (event) => {
        localStorage.clear();
    }
    render () {
        const profile = (
            <div className = "profile_container">
                <h4 className="name">{this.state.name}</h4>
                
                <Alert variant="dark">
                {/* <Alert.Heading>Hey, nice to see you</Alert.Heading> */}
                <p>
                    {this.state.profile.Name}
                    <i class="material-icons space">
                    account_box
                    </i>
                </p>
                
                <hr />
                <p>
                    {this.state.profile.PhoneNum}
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
                <a href = {"/profile/person/edit/"+this.state.name}><Button className = "createPostButton"  variant="light">ویرایش مشخصات</Button></a>
            </div>
        )
        const pannel = (
            <div className="container_pannel">
                <img src={logo} className="pix_charityProfile" alt = "logo" width="150" height="150" />
                <Button href={"/ashna"} variant="primary" className= "button_pannel" size="lg" block>
                    آشنا
                </Button>
                <Button href={"/profile/person/timeline"} variant="primary" className= "button_pannel" size="lg" block>
                    خانه
                </Button>
                <Button href={"/profile/person/followings"} variant="primary" className= "button_pannel" size="lg" block>
                    دنبال شدگان
                </Button>
                <Button href={"/profile/person/"+this.state.name} variant="primary" className= "button_pannel" size="lg" block>
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

export default BenefactorDetails;