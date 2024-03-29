import React,{Component} from "react";
import "./followings.css";
import defaultimg from '../../components/charityDefaultImg.jpg';
import {Button} from "react-bootstrap";
import logo from "../../assets/charity2-01.png";
class Followings extends Component {
    state = {
        name : "",
        image : "",
        followings : [],


    }
    componentWillMount() {
        console.log(localStorage.getItem('name'));
        
        fetch("http://127.0.0.1:8000/follow/followings/", {
          name : "get_Followings",  
          headers: {
                Authorization: `Token ${localStorage.getItem('token')}`
              }
        })
          .then(response => response.json())
           .then(json => this.saveData(json[0]))
    }
    saveData = (json) => {
        console.log(json)
        this.setState({name:json.Name});
        this.setState({image:json.Image});
        this.setState({followings : json.Followings});

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

        const charities = (
            <div>
                <section className = "row">
                    {this.state.followings.map(element => 
                        <a href = {element.Address} className = "col-sm-3 col-xs-4">
                            <div>
                                <figure>
                                    {element.Image == null ?
                                    <img alt={element.Image} src = {defaultimg} className = "center responsive-images" width="150" height="150" />
                                     : <img alt={element.Image} src={element.Image} className="center responsive-images" width="150" height="150"/>
                                    }
                                    <figcaption>
                                        <h3 className="text-charityName"><a href = {`/charities/${element.Name}/` } onClick={event => this.CharityView(event,element.Name)}>{element.Name}</a></h3>
                                        <hr/>
                                        <div className="search-text">
                                        <span className = "serarch-text-right">{element.FieldOFactivity}</span>
                                        </div>
                                        <i class="material-icons">
                                        delete_forever
                                        </i>
                                        <i class="material-icons">
                                        report
                                        </i>
                                    </figcaption>

                                </figure>
                            </div>
                    </a>)}

                </section>
            </div>
        )

        return(
            <div>
                {header}
                {pannel}
                {charities}

            </div>
        );
    }
}
export default Followings;