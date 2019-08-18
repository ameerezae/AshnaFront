import React, {Component} from "react";
import logo from "../../assets/charity2-01.png";
import "./charityPost.css";
import "../../bootstrap/css/bootstrap.min.css";
import {Button} from "react-bootstrap";
import Popup from "../../components/Popup";
import "../benefactorProfile/timeLine.css";
import defaultimg from '../../components/charityDefaultImg.jpg';
// import defaultpix from"../../assets/outline_account_circle_black_18dp.png";
// import uploadImage from "../../components/uploadImage";

import CreatePostPopup from "../../components/createPostPopup";
class charityProfile extends Component {
    
    state  = {
        IsFollowed : null,
        PopupContent : "",
        PopupSubject : "",
        posts : [],
        name : "",
        image : "",
        showPopup : false,
        showCreatePost : false,
        newPost : {
            Subject : "",
            Content : "",
        }
    }

    togglePopup = (Content , Subject) => {  
        this.setState({PopupContent:Content});
        this.setState({PopupSubject:Subject});
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
        
        fetch(`http://127.0.0.1:8000/charities/${localStorage.getItem('CharityName')}/posts`, {
          name : "Posts",  
          headers: {
                Authorization: `Token ${localStorage.getItem('token')}`
              }
        })
          .then(response => response.json())
           .then(json => this.saveData(json))
      }
      saveData = (json) => {
        this.setState({posts : json.Posts});
        this.setState({IsFollowed:json.IsFollowed});
        this.setState({name: json.Name});
        this.setState({image : json.Image});
        console.log(this.state.image);
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
                <div>

                    {/* {this.state.showCreatePost ?
                    <div>
                    <CreatePostPopup
                    Subject = "Subject"
                    subjectValue = {this.state.newPost.Subject}
                    click = {this.handleChange}
                    Content = "Content"
                    contentValue = {this.state.newPost.Content}
                    closePopup = {this.toggleShowCreatePost.bind(this)} />
                    
                    </div>
                    :null} */}
                    
                </div>
            </div>
        )
            
        
        
        const pannel = (
            <div className="container_pannel">
                <img src={logo} className="pix_charityProfile" alt = "logo" width="150" height="150" />
                <Button href={"/ashna"} variant="primary" className= "button_pannel" size="lg" block>
                    آشنا
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
        );
        let divs = null;
        if(this.state.showPopup == false){
        divs = (
            <div>
                <section className = "row">
                    {this.state.posts.map(element => 
                        <a className = "col-sm-3 col-xs-4">
                            <div className="timeline-bg">
                                <figure>
                                    <div  className="center-subject">{"..."+element.Subject.slice(0,30)}</div>
                                    {element.Image == "http://127.0.0.1:8000/media/null" ?
                                    <img src = {defaultimg} className = "center responsive-images" width="150" height="150" />
                                     : <img alt="ax" src={element.Image} className="center responsive-images" width="150" height="150"/>
                                    }
                                    <br/>
                                    <figcaption>
                                        <p className="timeLine-content">
                                            {element.Content.slice(0,50)+"..."}
                                        </p>
                                        <hr/>
                                        <div className="search-text">
                                        </div>
                                    
                                        <Button onClick={this.togglePopup.bind(this,element.Content,element.Subject)}  variant="success" className = "center" size="md">
                                                ادامه
                                        </Button>
                                    </figcaption>

                                </figure>
                            </div>
                    </a>)}

                </section>
            </div>
             
             
            
            
        )
     
        
    }
    const pop = (
        <div>
                    {this.state.showPopup ?
                    <Popup
                    Subject = {this.state.PopupSubject}
                    text = {this.state.PopupContent}
                    closePopup = {this.togglePopup.bind(this)} />
                    :null}
                </div>
    )
        

        return (
            
            <div>
                {header}
                {pannel}
                {divs}
                {pop}
            </div>        
            );

    }
    

}

export default charityProfile;