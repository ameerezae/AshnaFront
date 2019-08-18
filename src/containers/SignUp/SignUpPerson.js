import React, { Component } from "react";
import "../../bootstrap/css/bootstrap.min.css";
import {FormGroup} from "react-bootstrap";
import "./SignUp.css";
import Field from "../../components/Field";
import Select from "./Select";
// import  { Redirect } from 'react-router-dom';
class Signup extends Component {

  state = {
    data : {
      Name: "",
      Email: "",
      PhoneNumber: "",
      Password: "",
    },
    RePassword : "",
    next : false,
    next_butt : false,
    confirm_butt : false,
    checkRePassword : false,
  }

  handle_signup = (event, data) => {
    console.log("ready to send data");
    event.preventDefault();
    fetch('http://127.0.0.1:8000/signup/person/', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(data)
    })
      .then(res => res.json())
      .then(json => {
        this.CheckError(json)
        }
        );
      
  };
  CheckError = (json) => {
    if(json.Error === ""){
      console.log("everything is ok");
      this.props.history.push("/login/");
    }
    else console.log(json.Error)
  }
  changebutt = () => {
    const doesShow = this.state.next;
    this.setState( { next: !doesShow } );
  }

  checkRePassword = () => {
    if(this.state.RePassword === this.state.data.Password){
      this.setState({checkRePassword : true});
    }

    else{
      this.setState({checkRePassword : false});
    }

  }

  

  handleChange = event => {
    this.checkRePassword();
    const name = event.target.name;
    const value = event.target.value;
    let EmailLength = this.state.data.Email.length;
    let NameLength = this.state.data.Name.length;
    let PhoneNumberLength = this.state.data.PhoneNumber.length;
    let PasswordLength = this.state.data.Password.length;
    

    if (EmailLength > 0  &&
      NameLength > 0 &&
      PhoneNumberLength > 0
    ){
      this.setState({next_butt:true})
    }
    else{
      this.setState({next_butt:false})
    }

    if(this.state.next_butt &&
      PasswordLength > 5 
      
        ){
         this.setState({confirm_butt : true})
       }
    else{
      this.setState({confirm_butt : false})
    }
    
    
    this.setState(prevstate => {
      const newstate = {...prevstate};
      if(name === "RePassword"){
        newstate[name] = value;
        
      }
      else{
        newstate.data[name] = value;
      }
      return newstate;
    }
    
    )
    console.log(this.state)

  }
  
    
  render() {
    let butt = null;
    let SignUpForm = null;

   
      
  butt = (<button className="button_1" onClick={event => this.handle_signup(event,this.state.data)}>ثیت مرکز
      </button>)
      
  SignUpForm = (<div>
    <div className = "picture"></div>
    
    <div className="container contain">
      <p className="head">اطلاعات کاربر</p>
      <form>
        <div className="color">
    
        <Field 
        title="نام کاربر"
        click = {this.handleChange}
        value = {this.state.data.Name}
        type = "text"
        placeholder = "نام کربر را وارد نمایید"
        name = "Name"
        ></Field>

        <Field 
        title="ایمیل کاربر"
        click = {this.handleChange}
        value = {this.state.data.Email}
        type = "email"
        placeholder = "ایمیل کاربر را وارد نمایید"
        name = "Email"
        ></Field>

        <Field 
        title="شماره تلفن"
        click = {this.handleChange}
        value = {this.state.data.PhoneNumber}
        type = "text"
        placeholder = "شماره تلفن کاربر را وارد نمایید"
        name = "PhoneNumber"
        ></Field>

        <Field 
        title="رمز عبور"
        click = {this.handleChange}
        value = {this.state.data.Password}
        type = "password"
        placeholder = "رمز عبور مورد نظر خود را وارد نمایید"
        name = "Password"
        ></Field>
        
        <Field 
        title="تکرار رمز عبور"
        click = {this.handleChange}
        value = {this.state.RePassword}
        type = "password"
        placeholder = "رمز عبور وارد شده را تکرار نمایید"
        name = "RePassword"
        ></Field>

        {butt}
        </div>
      </form>
      </div>
      </div>)
    
    return (

      <div>
        {SignUpForm} 
      </div>

    );
  }
}

export default Signup;