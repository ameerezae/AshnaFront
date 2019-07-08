import React,{Component} from "react";
import "./followings.css";
import {Button} from "react-bootstrap";
import logo from "../../assets/charity2-01.png";
class Followings extends Component {
    state = {
        name : "",
        followings : ["X","X","X","X","X","X","X","X","X","X","X",],


    }
    render(){
        const header = (
            <div className = "header_profile">
                <div>
                <img className = "charity_picture"src = {"#"} width = "90" height = " 80"alt= "pic"></img>
                </div>
                <div className = "username_header">
                    <a>{this.state.name}</a>
                </div>
                
            </div>
        )
        const pannel = (
            <div className="container_pannel">
                <img src={logo} className="pix_charityProfile responsive-images" alt = "logo" width="150" height="150" />
                <Button variant="primary" className= "button_pannel" size="lg" block>
                    خانه
                </Button>
                <Button variant="primary" className= "button_pannel" size="lg" block>
                    حمایت ها
                </Button>
                <Button variant="primary" className= "button_pannel" size="lg" block>
                    دنبال شدگان
                </Button>
                <Button href={"/benefactorprofile/"+this.state.name} variant="primary" className= "button_pannel" size="lg" block>
                پروفایل               
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
                                    <img src = "https://2nate.com/files/organizations/public/2db815e5-e7bb-4934-803f-bce2a1f26eff/profile/c90f1a53-1ea8-4b85-b920-0af95e348f38-thumb.png" className = "center responsive-images" />
                                    <figcaption>
                                        <h3 className="text-charityName">موسسه خیریه نیک گامان جمشید </h3>
                                        <hr/>
                                        <div className="search-text">
                                        <span className = "serarch-text-right">آموزش و پژوهش</span>
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