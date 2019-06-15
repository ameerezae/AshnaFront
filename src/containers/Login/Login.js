import React, { Component } from 'react';
import  './Login.css';
import "../../bootstrap/css/bootstrap.min.css";
import {Button} from "react-bootstrap";
import {FormGroup} from "react-bootstrap";
import logo from "../../assets/charity2-01.png";
class Login extends Component {
  state = {
    data : {
      UserName : "",
      Password : "",
    }
  }

  
  
  handleChange = (event) => {
    const name = event.target.name;
    const value = event.target.value;
    this.setState(prevState => {
      const newState = {...prevState};
      newState.data[name] = value;
      return newState;
    })
    console.log(name,value);
    console.log(this.state.data);
  }
  componentDidMount() {
    document.body.classList.add("background");
  } 

  handle_login = (event, data) => {
    // e.preventDefault();
    console.log("ready to send data")
    fetch('http://127.0.0.1:8000/login/charity/', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(data)
    }).then(res => res.json())
      .then(json => this.checkErorr(json.Error))
  };

  
  checkErorr = (error) => {
      if(error != ""){
        console.log(error)
      }
      else console.log("ok")
  }
  
  render() {
    
    let LoginForm = (
      <div className="container contain_1">
        <h5 className= "header_12">پنل ورود به آشنا</h5>
        {/* <h2>سلام</h2> */}
        <img src={logo} alt = "logo" width="200" height="200" />
        
        
        <div className="top_login_1">
        <hr />
        <h5 href="" className="direct-to-signup">   <a>اگر حساب کاربری ندارید،ثبت‌نام کنید</a>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
        &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
        &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
        &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
        &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
        &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<a href = "http://localhost:3000/signup"> عضویت</a></h5>
        <hr/>
        </div>
        <form onSubmit={e => this.props.handle_login(e, this.state.data)}>
        <FormGroup className="top_login" >
        <p className="title_login"> ایمیل</p>
        <input name = "UserName" value = {this.state.UserName} 
        onChange={this.handleChange} 
        placeholder = "ایمیل خود را وارد نمایید"className= "input_login" 
        type = "email" required></input>
        </FormGroup>

        <FormGroup >
        <p className="title_login">رمز عبور</p>
        <input name = "Password" onChange={this.handleChange} value = {this.state.Password} 
        placeholder = "رمز عبور خود را وارد نمایید"className= "input_login" 
        type = "password" required></input>
        </FormGroup>
        <Button type="submit" variant="success" size="md" className= "login-button" block>
        ورود
        </Button>
        </form>
       
        

        
      </div>
    )

    
    
      
    return (
      

      
        <div>
        
        {LoginForm}
        </div>
      
      
      
      
      );
  }
}

export default Login;