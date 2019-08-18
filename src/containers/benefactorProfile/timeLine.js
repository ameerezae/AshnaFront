import "./timeLine.css";
import defaultimg from '../../components/charityDefaultImg.jpg';
import React,{Component} from "react";
import {Button} from "react-bootstrap";
import logo from "../../assets/charity2-01.png";
import "./timeLine.css";
import Popup from "../../components/Popup";
class TimeLine extends Component {
    state = {
        PopupContent: "",
        PopupSubject : "",
        showPopup : false,
        showCreatePost : false,
        timeLine : [],
        name : "",
        image : "",
    }
    togglePopup = (Content,Subject) => {  
        this.setState({PopupContent:Content})
        this.setState({PopupSubject:Subject})
        this.setState({  
             showPopup: !this.state.showPopup  
        });  
        console.log(this.state.showPopup);
    }  
    componentWillMount() {
        console.log(localStorage.getItem('name'));
        
        fetch("http://127.0.0.1:8000/my_profile/timeline/", {
          name : "timeline",  
          headers: {
                Authorization: `Token ${localStorage.getItem('token')}`
              }
        })
          .then(response => response.json())
           .then(json => this.saveData(json[0]))
      }
    saveData = (json) => {
        console.log(json)
        this.setState({timeLine : json.Posts});

        this.setState({name: json.Name});
        this.setState({image : json.Image});
      }
    CharityView = (event,name) => {
        localStorage.setItem('CharityName',name);
    }
    handle_logout = (event) => {
        localStorage.clear();
    }
    render(){
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
                <img src={logo} className="pix_charityProfile responsive-images" alt = "logo" width="150" height="150" />
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
        let timeline = null;
        
        if(this.state.showPopup == false){
        timeline =(
            
            <div>
                <section className = "row">
                    {this.state.timeLine.map(element => 
                        <a  className = "col-sm-3 col-xs-4">
                            <div className="timeline-bg">
                                <figure>
                                    <div  className="center-subject">{"..."+element.Subject.slice(0,30)}</div>
                                    {element.Image == "http://127.0.0.1:8000/media/null" ?
                                    <img src = {defaultimg} className = "center responsive-images" width="150" height="150" />
                                     : <img alt="ax" src={element.Image} className="center responsive-images" width="150" height="150"/>
                                    }
                                    <figcaption>
                                        <p className="timeLine-content">
                                            {element.Content.slice(0,50)+"..."}
                                        </p>
                                        <hr/>
                                        <div className="search-text">
                                        <span className = "serarch-text-right"><a href = {`/charities/${element.Owner}/`} onClick={event => this.CharityView(event,element.Owner)}>{element.Owner}</a></span>
                                        </div>
                                        <hr/>
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
        return(
            <div>

                {header}
                {pannel}
                {timeline}
                {pop}


            </div>
        )
    }
}

export default TimeLine;