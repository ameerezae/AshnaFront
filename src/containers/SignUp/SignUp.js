<<<<<<< Updated upstream
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
      Address: "",
      ManagerName: "",
      Password: "",
      Kind: "education",
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
    fetch('http://localhost:8000/signup/charity/', {
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
    let AddressLength = this.state.data.Address.length;
    let PasswordLength = this.state.data.Password.length;
    let ManagerNameLength = this.state.data.ManagerName.length;
    

    if (EmailLength > 0  &&
      NameLength > 0 &&
      PhoneNumberLength > 0 &&
      AddressLength > 0
    ){
      this.setState({next_butt:true})
    }
    else{
      this.setState({next_butt:false})
    }

    if(this.state.next_butt &&
      ManagerNameLength > 0 &&
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

    if(this.state.next){
      if(this.state.confirm_butt){
        butt = (<button type = "submit" onClick={this.checkRePassword} className="button_2">ثبت مرکز
    </button>)

      }
      else{
        butt = (<button className="button_3" disabled>ثبت مرکز
      </button >)
      }
      
    SignUpForm = (
      <div>
    <div className = "picture"></div>
    
    <div className="container contain">
      <p className="head">اطلاعات مرکز</p>
      <form onSubmit = {event => {this.handle_signup(event,this.state.data)}}>
        <div className="color">
        
        <FormGroup >
          <p className= "title">نوع فعالیت مرکز خود را مشخص کنید</p>
        </FormGroup>
        <Select
        change = {this.handleChange}
        value = {this.state.data.Kind}
        name = "Kind"
        ></Select>

        <Field 
        title="نام مدیرعامل"
        click = {this.handleChange}
        value = {this.state.data.ManagerName}
        type = "text"
        placeholder = "نام کامل مدیرعامل مرکز را وارد نمایید"
        name = "ManagerName"
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
      </div>
    )
    }
    else{
      
      if(this.state.next_butt){
        butt = (<button className="button_1" onClick={this.changebutt}>صفحه بعد
      </button>)}
      else{
        butt = (<button className="button_0" onClick={this.changebutt} disabled>صفحه بعد
      </button >)}
      
  SignUpForm = (<div>
    <div className = "picture"></div>
    
    <div className="container contain">
      <p className="head">اطلاعات مرکز</p>
      <form>
        <div className="color">
    
        <Field 
        title="نام مرکز"
        click = {this.handleChange}
        value = {this.state.data.Name}
        type = "text"
        placeholder = "نام مرکز را وارد نمایید"
        name = "Name"
        ></Field>

        <Field 
        title="ایمیل مرکز"
        click = {this.handleChange}
        value = {this.state.data.Email}
        type = "email"
        placeholder = "ایمیل مرکز را وارد نمایید"
        name = "Email"
        ></Field>

        <Field 
        title="شماره تلفن"
        click = {this.handleChange}
        value = {this.state.data.PhoneNumber}
        type = "text"
        placeholder = "شماره تلفن مرکز را وارد نمایید"
        name = "PhoneNumber"
        ></Field>

        <Field 
        title="آدرس"
        click = {this.handleChange}
        value = {this.state.data.Address}
        type = "text"
        placeholder = "آدرس مرکز را وارد نمایید"
        name = "Address"
        ></Field>
        
        <FormGroup >
          <p className= "title checkbox_top">آیا مرکز شما شعبه‌ی دیگری هم دارد؟</p>
        </FormGroup>
        <input name = "other_branch" onChange={this.handleChange} id="toggle_1" type="checkbox" />
          <label id="label_1" htmlFor="toggle_1">
            <span id="switch_1"></span>
        </label>
        {butt}
        </div>
      </form>
      </div>
      </div>)
    }
    return (

      <div>
        {SignUpForm} 
      </div>

    );
  }
}

=======
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
      Address: "",
      ManagerName: "",
      Password: "",
      Kind: "education",
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
    fetch('http://localhost:8000/signup/charity/', {
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
    let AddressLength = this.state.data.Address.length;
    let PasswordLength = this.state.data.Password.length;
    let ManagerNameLength = this.state.data.ManagerName.length;
    

    if (EmailLength > 0  &&
      NameLength > 0 &&
      PhoneNumberLength > 0 &&
      AddressLength > 0
    ){
      this.setState({next_butt:true})
    }
    else{
      this.setState({next_butt:false})
    }

    if(this.state.next_butt &&
      ManagerNameLength > 0 &&
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

    if(this.state.next){
      if(this.state.confirm_butt){
        butt = (<button type = "submit" onClick={this.checkRePassword} className="button_2">ثبت مرکز
    </button>)

      }
      else{
        butt = (<button className="button_3" disabled>ثبت مرکز
      </button >)
      }
      
    SignUpForm = (
      <div>
    <div className = "picture"></div>
    
    <div className="container contain">
      <p className="head">اطلاعات مرکز</p>
      <form onSubmit = {event => {this.handle_signup(event,this.state.data)}}>
        <div className="color">
        
        <FormGroup >
          <p className= "title">نوع فعالیت مرکز خود را مشخص کنید</p>
        </FormGroup>
        <Select
        change = {this.handleChange}
        value = {this.state.data.Kind}
        name = "Kind"
        ></Select>

        <Field 
        title="نام مدیرعامل"
        click = {this.handleChange}
        value = {this.state.data.ManagerName}
        type = "text"
        placeholder = "نام کامل مدیرعامل مرکز را وارد نمایید"
        name = "ManagerName"
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
      </div>
    )
    }
    else{
      
      if(this.state.next_butt){
        butt = (<button className="button_1" onClick={this.changebutt}>صفحه بعد
      </button>)}
      else{
        butt = (<button className="button_0" onClick={this.changebutt} disabled>صفحه بعد
      </button >)}
      
  SignUpForm = (<div>
    <div className = "picture"></div>
    
    <div className="container contain">
      <p className="head">اطلاعات مرکز</p>
      <form>
        <div className="color">
    
        <Field 
        title="نام مرکز"
        click = {this.handleChange}
        value = {this.state.data.Name}
        type = "text"
        placeholder = "نام مرکز را وارد نمایید"
        name = "Name"
        ></Field>

        <Field 
        title="ایمیل مرکز"
        click = {this.handleChange}
        value = {this.state.data.Email}
        type = "email"
        placeholder = "ایمیل مرکز را وارد نمایید"
        name = "Email"
        ></Field>

        <Field 
        title="شماره تلفن"
        click = {this.handleChange}
        value = {this.state.data.PhoneNumber}
        type = "text"
        placeholder = "شماره تلفن مرکز را وارد نمایید"
        name = "PhoneNumber"
        ></Field>

        <Field 
        title="آدرس"
        click = {this.handleChange}
        value = {this.state.data.Address}
        type = "text"
        placeholder = "آدرس مرکز را وارد نمایید"
        name = "Address"
        ></Field>
        
        <FormGroup >
          <p className= "title checkbox_top">آیا مرکز شما شعبه‌ی دیگری هم دارد؟</p>
        </FormGroup>
        <input name = "other_branch" onChange={this.handleChange} id="toggle_1" type="checkbox" />
          <label id="label_1" htmlFor="toggle_1">
            <span id="switch_1"></span>
        </label>
        {butt}
        </div>
      </form>
      </div>
      </div>)
    }
    return (

      <div>
        {SignUpForm} 
      </div>

    );
  }
}

>>>>>>> Stashed changes
export default Signup;