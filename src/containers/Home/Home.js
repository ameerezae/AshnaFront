import React, { Component } from 'react';
import  './Home.css';
import { doWhileStatement } from '@babel/types';
 import Logo from '../../assets/charity2-01.png';
 import Seprator from './Seprator';
 import News from './News';
 import Footer from './Footer';
import Statistics from './Statistics';
import {Navbar,Button,Form,NavDropdown,Nav,FormControl,Dropdown} from 'react-bootstrap';
import Commite from "../../assets/commite.png";
import Sepas from "../../assets/sepas.png";
import Otism from "../../assets/otism.png";
import KarAfarini from "../../assets/karafarini.png";
import insta_img from '../../assets/insta-logo.png';
import twitter_img from '../../assets/twitter-logo.png';
import facebook_img from '../../assets/facebook-logo.png';
class Introduction extends Component {
  state = {
    name : "",
    charities : [
      {
        name : "کمیته امداد امام خمینی",
        pic : Commite
      },
      {
        name : "انجمن اتیسم ایران",
        pic : Otism
      },
      {
        name : "موسسه خیریه سپاس",
        pic : Sepas
      },
      {
        name : "کانون کارافرینی ایران",
        pic : KarAfarini
      }

    ]
  }
  render() {
  //   const homeNavbar = (
  //     <div>
  //         <Navbar bg="light" expand="md" >
  //             <Navbar.Brand>آشنا</Navbar.Brand>
  //             <Navbar.Toggle aria-controls="basic-navbar-nav" />
  //             <Navbar.Collapse id="basic-navbar-nav ">
  //                 <Nav className="mr-auto">
  //                 <Nav.Link className="nav-text-color" href="/login">ورود</Nav.Link>
  //                 <NavDropdown title="ثبت نام" id="basic-nav-dropdown">
  //                     <NavDropdown.Item href="/signup/charity">ثبت خیریه</NavDropdown.Item>
  //                     <NavDropdown.Divider />
  //                     <NavDropdown.Item href="/signup/person">ثبت نیکوکار</NavDropdown.Item>
  //                 </NavDropdown>
  //                 </Nav>
  //                 <Form inline>
  //                 <Button href="/charities" variant="outline-success">سازمان ها</Button>
  //                 </Form>
  //             </Navbar.Collapse>
  //         </Navbar>
  //     </div>
  // );
    const homeNavbar = (
      <div>
               <Navbar bg="light" expand="md" >
                   <Navbar.Brand>آشنا</Navbar.Brand>
                   <Navbar.Toggle aria-controls="basic-navbar-nav" />
                   <Navbar.Collapse id="basic-navbar-nav ">
                       <Nav className="mr-auto">
                       <Nav.Link className="nav-text-color" >میریزدان سیدی</Nav.Link>
                       <Nav.Link className = "nav-text-color">خروج</Nav.Link>
                       </Nav>
                       <Form inline>
                       <Button href="/charities" variant="outline-success">سازمان ها</Button>
                       </Form>
                   </Navbar.Collapse>
               </Navbar>
           </div>
    );

    return (
      <div>
        {homeNavbar}
      <div className="Intr-box">
          <div className = "row">
            <div className = "col-sm-6">
          <p  id="intr-text">
            <h3 id="intr-title">آشنا</h3>
            
            در کنار هم تلاش میکنیم ایران را جای بهتری کنیم
           <br/>
            انسان خوشبخت نمی شود اگر
برای خوشبختی دیگران نکوشد.
          </p>
          </div>
          <div className = "col-sm-6">
          <img className = "responsive-images-2 home-picture" src={Logo}></img>
          </div>
          </div>
        </div>
        {/* <Seprator
        class = "Seprator"
        text = "آخرین خیریه‌ها"></Seprator>

        <Seprator
        class = "Seprator-2"
        text = "تا این لحظه"></Seprator> */}
        <div className = "row">
        <p className = "center-title title-center">آخرین خیریه ها</p>
        </div>
        <hr/>
        <div className="row">
          {this.state.charities.map(element =>
          <div className = "col-sm-3">
          <figure>
            <img alt="ax" src={element.pic} className="center responsive-images" width="150" height="150"/>
            <figcaption>
                <hr/>
                <div className="search-text">
                <span className = "home-text-center center">{element.name}</span>
                </div>
                <hr/>  
            </figcaption>
            </figure>
          </div>)}
        </div>

        <div className = "row">
        <p className = "center-title title-center">تا این لحظه</p>
        </div>
        <hr/>
        <div className = "row">
            <div className = "center">
                <b>
                  <div className="row statis-box">
                    <div className="col-sm-4 ">
                    <p className="sta-text">331240 مرتبه</p>
                    <br/>
                    <p className = "sta-text-2">تعداد حمایت های انجام شده از طریق آشنا</p> 
                    </div>
                    <div className="col-sm-4">
                      <p className="sta-text">4021 عدد</p>
                      <br/>
                      <p className = "sta-text-2">تعداد موسسات ثبت شده</p>
                    </div>
                    <div className="col-sm-4">
                      <p className="sta-text">9,365,234,000 تومان</p>
                      <br/>
                      <p className = "sta-text-2">حمایت مالی دریافت شده</p> 
                    </div>
                </div>
                </b>
            </div>
      </div>
      <div className="Footer">
        <img className = "footer-image"src={facebook_img} width="50" height="50" ></img>
        
        <img className = "footer-image" src={twitter_img } width="50" height="50"></img>
        <img className = "footer-image" src={insta_img} width="50" height="50"></img>
      </div>




        </div>
    );
  }
}
export default Introduction;


