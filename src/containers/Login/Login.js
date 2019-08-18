import React, { Component } from 'react';
import  './Login.css';
import "../../bootstrap/css/bootstrap.min.css";
import {Button} from "react-bootstrap";
import {FormGroup} from "react-bootstrap";
import logo from "../../assets/charity2-01.png";
import Alert from 'react-bootstrap/Alert'
class Login extends Component {
  state = {
    data : {
      Email : "",
      Password : "",
    },
    Errormessage : "",
    showErrorMessage : false,
  }

  handle_login = (e, data) => {
    e.preventDefault();
    console.log("ready to send data")
    fetch('http://127.0.0.1:8000/login/', {
    method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(data)
    }).then(res => res.json())
    .then(json => this.checkError(json))
  };
  checkError = (json) => {
    if(json.Error === ""){
      console.log("loged in");
      localStorage.setItem("token", json.Token);
      localStorage.setItem("name",json.Name);
      if (json.status === "Charity"){
          this.props.history.push(`/profile/charity/${json.Name}`)
      }
      else{
          console.log("kirrrrrrrrr")
          this.props.history.push(`/profile/person/${json.Name}`)
      }

      //this.props.history.push(`/profile/${json.Name}`);
      // this.props.history.push('/my_profile/posts');
      this.setState({showErrorMessage : false})
      this.setState({Errormessage : ""});
    }
    else{
        this.setState({Errormessage : json.Error});
        this.setState({showErrorMessage : true});
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
    // this.setState({showErrorMessage : true});
    // console.log(this.state.showErrorMessage)
    
  }
  componentDidMount() {
    document.body.classList.add("background");
  } 
  
  render() {
    let alert = null;
    if(this.state.showErrorMessage){
      alert = (<Alert className = "incorrect_alert" variant = "danger">ایمیل یا رمزعبور اشتباه است</Alert>)
    }
    else {
      alert = (<div></div>)
    }
    
    let LoginForm = (
      <div className="container contain_1">
        <h5 className= "header_12">پنل ورود به آشنا</h5>
        {/* <h2>سلام</h2> */}
        <img src={logo} alt = "logo" width="200" height="200" />
        
        
        <div className="top_login_1">
        <hr />
        <h5 className="direct-to-signup">   <h7>اگر حساب کاربری ندارید،ثبت‌نام کنید</h7>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
        &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
        &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
        &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
        &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
        &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<a href = "http://localhost:3000/signup/charity"> عضویت</a></h5>
        <hr/>
        </div>
        <form action="http://localhost:3000/charities" method="POST" onSubmit={e => this.handle_login(e, this.state.data)}>
        <FormGroup className="top_login" >
        <p className="title_login"> ایمیل</p>
        <input name = "Email" value = {this.state.Email} 
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

        {alert}
        
        <Button  type="submit" variant="success" size="md" className= "login-button" block>
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