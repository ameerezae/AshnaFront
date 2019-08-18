import React,{Component} from "react";
import "../../bootstrap/css/bootstrap.min.css";
import "./search.css"
import {Navbar,Button,Form,NavDropdown,Nav,FormControl,Dropdown} from 'react-bootstrap';
import SelectField from "../../components/SelectField";
class Search extends Component {
    
    state = {
        islogin : false,
        charities : [],
        search:
        {
            FieldOFactivity : "",
            searchBar : "",
        }

    }

    handle_change = (event) => {
        const name = event.target.name;
        const value = event.target.value;
        this.setState(prevState => {
            const newState = {...prevState};
            newState.search[name] = value;
            return newState;
        })
        console.log(this.state)

    }

    componentWillMount(){
        if(localStorage.length != 0){
        this.setState({islogin:true});
        this.setState({name : localStorage.getItem('name')});
        }
        if(localStorage.length != 0){
            fetch("http://127.0.0.1:8000/charities/", {
          name : "Search",  
          headers: {
                Authorization: `Token ${localStorage.getItem('token')}`
              }
        })
          .then(response => response.json())
           .then(json => this.saveData(json))
        }
        else{
            fetch("http://127.0.0.1:8000/charities/", {
          name : "Search",  
          headers: {
                'Content-Type': 'application/json'
              }
        })
          .then(response => response.json())
           .then(json => this.saveData(json))
        }
        
    }
    saveData = (json) => {  
        console.log(json);
        this.setState({charities : json});
    }
    onFormSubmit = (event,data) =>{
        event.preventDefault();
        console.log("ready to send data")
        fetch('http://127.0.0.1:8000/charities/', {
        method: 'POST',
          headers: {
            'Content-Type': 'application/json'
          },
          body: JSON.stringify(data)
        }).then(res => res.json())
        .then(json => this.saveData(json))

    }
    CharityView = (event,name) => {
        localStorage.setItem('CharityName',name);
    }
    render() {
        let searchNavbar = null
        if(this.state.islogin == false){
            searchNavbar = (
            <div>
                <Navbar bg="light" expand="md" >
                    <Navbar.Brand>آشنا</Navbar.Brand>
                    <Navbar.Toggle aria-controls="basic-navbar-nav" />
                    <Navbar.Collapse id="basic-navbar-nav ">
                        <Nav className="mr-auto">
                        <Nav.Link className="nav-text-color" href="/login">ورود</Nav.Link>
                        <NavDropdown title="ثبت نام" id="basic-nav-dropdown">
                            <NavDropdown.Item href="/signup/charity">ثبت خیریه</NavDropdown.Item>
                            <NavDropdown.Divider />
                            <NavDropdown.Item href="/signup/person">ثبت نیکوکار</NavDropdown.Item>
                        </NavDropdown>
                        </Nav>
                        <Form inline>
                        <Button href="/charities" variant="outline-success">سازمان ها</Button>
                        </Form>
                    </Navbar.Collapse>
                </Navbar>
            </div>
        );
        }
          
        else{
            searchNavbar = (
            <div>
                     <Navbar bg="light" expand="md" >
                         <Navbar.Brand>آشنا</Navbar.Brand>
                         <Navbar.Toggle aria-controls="basic-navbar-nav" />
                         <Navbar.Collapse id="basic-navbar-nav ">
                             <Nav className="mr-auto">
                             <Nav.Link href= {"/profile/person/"+this.state.name} className="nav-text-color" >{this.state.name}</Nav.Link>
                             <Nav.Link href= "/login" onClick={event => this.handle_logout(event)}  className = "nav-text-color">خروج</Nav.Link>
                             </Nav>
                             <Form inline>
                             <Button href="/charities" variant="outline-success">سازمان ها</Button>
                             </Form>
                         </Navbar.Collapse>
                     </Navbar>
                 </div>
          );
      
        }
        const header = (
            <header >
                <div className = "header-search">
                    <h1 >سازمان های همکار آشنا</h1>
                </div>
            </header>
        )
        const searcForm = (
            <div className = "row setBackgroundserach">
            <aside className = "col-sm-3  ">
                <form onSubmit={event=> this.onFormSubmit(event,this.state.search)} className= "searchLayout">
                    <FormControl name = "searchBar" onChange = {this.handle_change} value={this.state.search.searchBar} type="text" placeholder="جستجو" className="mr-sm-2 search-text" />
                    
                    <p>زمینه فعالیت</p>
                    <SelectField
                    change = {this.handle_change}
                    value = {this.state.search.FieldOFactivity}
                    name = "FieldOFactivity"
                    ></SelectField>
                    <Button type="submit" variant="secondary">پیدا کن</Button>
                </form>

            </aside>
            <article className = "col-sm-9">
                <header className = "col-xs-12 search-text header-searchpannel">
                    <h4>سازمان ها</h4>
                    <hr/>
                </header>
                <section className = "row">
                
                {this.state.charities.map(element => 
                  <a  href = {`/charities/${element.Name}`} onClick={event => this.CharityView(event,element.Name)} className = "col-sm-3 col-xs-4">
                      <div>
                          <figure>
                              <img className="search-image img-responsive" width={200} height={200} src = {element.Image} />
                              <figcaption>
                                  <h3 className="text-charityName">{element.Name}</h3>
                                  <hr/>
                                  <div className="search-text">
                                  <span className = "serarch-text-right">{element.FieldOFactivity}</span>
                                  </div>
                              </figcaption>
                          </figure>

                      </div>

                  </a>  )}
                </section>
            </article>
            
            </div>
            
        );



        return(
            <div>
                {searchNavbar}
                {header}
                {searcForm}
            </div>            
        );
    }

}
export default Search;