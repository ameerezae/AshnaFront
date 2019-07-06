import React, {Component} from "react";
import logo from "../../assets/charity2-01.png";
import "./charityProfile.css";
import "../../bootstrap/css/bootstrap.min.css";
import {Button} from "react-bootstrap";
import Popup from "../../components/Popup";
// import defaultpix from"../../assets/outline_account_circle_black_18dp.png";
// import uploadImage from "../../components/uploadImage";

import CreatePostPopup from "../../components/createPostPopup";
class charityProfile extends Component {
    
    state  = {
        posts : [
            {
                id:1,
                Subject:"hello",
                Content:"yahloooliLSDIOJEWFVJEI;OFJVIE;WORHVEFHVISDFVALS;DVNALK/SVNKSKLVNKSL"
            },
            {
                id:2,
                Subject:"hello",
                Content:"yahloooli2"
            },
            {
                id:2,
                Subject:"hello",
                Content:"yahloooli2"
            }   
            
        ],
        name : "",
        image : "",
        showPopup : false,
        showCreatePost : false,
        newPost : {
            Subject : "",
            Content : "",
        }
    }

    togglePopup = () => {  

        this.setState({  
             showPopup: !this.state.showPopup  
        });  
        console.log(this.state.showPopup);
    }  
    toggleShowCreatePost = () => {
        this.setState({showCreatePost : !this.state.showCreatePost});
        console.log(this.state.showCreatePost);
    }
    handleChange = (event) => {
        const name = event.target.name;
        const value = event.target.value;
        this.setState(prevState => {
          const newState = {...prevState};
          newState.newPost[name] = value;
          return newState;
        })
        console.log(this.state.newPost);
      }

    componentDidMount() {
        document.body.classList.add("height");
      } 
    componentWillMount() {
        console.log(localStorage.getItem('name'));
        
        fetch("http://127.0.0.1:8000/my_profile/posts/", {
          name : "Posts",  
          headers: {
                Authorization: `Token ${localStorage.getItem('token')}`
              }
        })
          .then(response => response.json())
           .then(json => this.saveData(json[0]))
      }
      saveData = (json) => {
        this.setState({posts : json.Posts});

        this.setState({name: json.Name});
        this.setState({image : json.Image});
      }
    render() {
        let divs = null;
        if(this.state.showCreatePost == false){
        divs = (
            
            
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
                        <Button onClick={this.togglePopup.bind(this)} variant="success" className = "posts_button" size="md">
                                ادامه
                        </Button>
                    </div>
                    
                    
                    
                </div>
             </div>
             
             
            )
            
        )
    }
        const header = (
            <div className = "header_profile">
                <div>
                <img className = "charity_picture"src = {this.state.image} width = "90" height = " 80"alt= "pic"></img>
                </div>
                <div className = "username_header">
                    <a>{this.state.name}</a>
                </div>
                <Button className = "createPostButton" onClick={this.toggleShowCreatePost} variant="light">ایجاد پست</Button>
                <div>

                    {this.state.showCreatePost ?
                    <div>
                    <CreatePostPopup
                    Subject = "Subject"
                    subjectValue = {this.state.newPost.Subject}
                    click = {this.handleChange}
                    Content = "Content"
                    contentValue = {this.state.newPost.Content}
                    closePopup = {this.toggleShowCreatePost.bind(this)} />
                    
                    </div>
                    :null}
                    
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