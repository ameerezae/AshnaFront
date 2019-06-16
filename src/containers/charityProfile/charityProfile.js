import React, {Component} from "react";
import logo from "../../assets/charity2-01.png";
import "./charityProfile.css";
import "../../bootstrap/css/bootstrap.min.css";
import {Button} from "react-bootstrap";
class charityProfile extends Component {
    
    state  = {
        posts : [],
        name : "",
        image : "",
    }

    

    componentDidMount() {
        document.body.classList.add("height");
      } 
    componentWillMount() {
        console.log(localStorage.getItem('name'));
        
        // fetch('http://127.0.0.1:8000/my_profile/موسسه%20خیریه%20سپاس', {
        fetch("http://127.0.0.1:8000/my_profile/"+localStorage.getItem('name'), {
          headers: {
                Authorization: `Token ${localStorage.getItem('token')}`
              }
            // },
            // body: JSON.stringify(data)
        })
          .then(response => response.json())
           .then(json => this.saveData(json))
      }
      saveData = (json) => {
        // console.log(json.Name);
        // console.log(json.Email);
        // console.log(json.ManagingDirector);
        // console.log(json.PhoneNumber);
        // console.log(json.Address);
        // console.log(json.Bio);
        // console.log(json.Kind);
        // console.log(json.FieldOFactivity);
        // console.log(json.CreationData);
        // console.log(json.Followers);
        // console.log(json.Posts)
        this.setState({posts : json.Posts});
        this.setState({name: json.Name});
        this.setState({image : json.Image});
      }
    render() {
        
        const divs = (
            
             this.state.posts.map(element => 
             <div className= "col-sm-4">
                <div className="posts_div">
                    <div className="posts_title">
                        {element.Subject}
                    </div>
                    <div className = "posts_pix">
                        <img className = "posts_pix1"src = {element.Image} width = "90" height = " 80"alt= "pic"></img>
                    </div>
                    <div className = "posts_content">
                        {element.Content.slice(0,150)}
                    </div>
                    <div>
                        <Button variant="success" className = "posts_button" size="md">
                                ادامه
                        </Button>
                    </div>
                </div>
             </div>
             )
            
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
                

            </div>
        );

        return (
            
            <div>
                {header}
                {pannel}
                <div className="row">
                {divs}
                </div>
            </div>        
            );

    }
    

}

export default charityProfile;