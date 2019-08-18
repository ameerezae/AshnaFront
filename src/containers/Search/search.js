import React,{Component} from "react";
import "../../bootstrap/css/bootstrap.min.css";
import "./search.css"
import {Navbar,Button,Form,NavDropdown,Nav,FormControl,Dropdown} from 'react-bootstrap';
import SelectField from "../../components/SelectField";
class Search extends Component {

    state = {
        charities : [""],
        search:
        {
            Kind : "",
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
        fetch("http://127.0.0.1:8000/", {
          name : "Search",  
          headers: {
                Authorization: `Token ${localStorage.getItem('token')}`
              }
        })
          .then(response => response.json())
           .then(json => this.saveData(json))
    }
    saveData = (json) => {
        this.setState({charities : json.charities})
    }

    render() {
        const searchNavbar = (
            <div>
                <Navbar bg="light" expand="md" >
                    <Navbar.Brand href="#home">آشنا</Navbar.Brand>
                    <Navbar.Toggle aria-controls="basic-navbar-nav" />
                    <Navbar.Collapse id="basic-navbar-nav ">
                        <Nav className="mr-auto">
                        <Nav.Link className="nav-text-color" href="#home">ورود</Nav.Link>
                        <Nav.Link href="#link">ثبت نام</Nav.Link>
                        <NavDropdown title="انتخاب" id="basic-nav-dropdown">
                            <NavDropdown.Item href="#action/3.1">Action</NavDropdown.Item>
                            <NavDropdown.Item href="#action/3.2">Another action</NavDropdown.Item>
                            <NavDropdown.Item href="#action/3.3">Something</NavDropdown.Item>
                            <NavDropdown.Divider />
                            <NavDropdown.Item href="#action/3.4">Separated link</NavDropdown.Item>
                        </NavDropdown>
                        </Nav>
                        <Form inline>
                        {/* <FormControl type="text" placeholder="جستجو" className="mr-sm-2" /> */}
                        <Button variant="outline-success">سازمان ها</Button>
                        </Form>
                    </Navbar.Collapse>
                </Navbar>
            </div>
        );
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
                <form className= "searchLayout">
                    <FormControl name = "searchBar" onChange = {this.handle_change} value={this.state.search.searchBar} type="text" placeholder="جستجو" className="mr-sm-2 search-text" />
                    
                    <p>زمینه فعالیت</p>
                    <SelectField
                    change = {this.handle_change}
                    value = {this.state.search.Kind}
                    name = "Kind"
                    ></SelectField>
                    <Button variant="secondary">پیدا کن</Button>
                </form>

            </aside>
            <article className = "col-sm-9">
                <header className = "col-xs-12 search-text header-searchpannel">
                    <h4>سازمان ها</h4>
                    <hr/>
                </header>
                <section className = "row">
                
                {this.state.charities.map(element => 
                  <a  href = {element.Address} className = "col-sm-3 col-xs-4">
                      <div>
                          <figure>
                              <img className="search-image img-responsive" src = {element.Image} />
                              <figcaption>
                                  <h3 className="text-charityName">{element.Name}</h3>
                                  <hr/>
                                  <div className="search-text">
                                  <span className = "serarch-text-right">{element.Field}</span>
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