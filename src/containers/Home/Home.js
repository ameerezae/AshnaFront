import React, { Component } from 'react';
import  './Home.css';
import { doWhileStatement } from '@babel/types';
 import Logo from '../../assets/charity2-01.png';
 import Seprator from './Seprator';
 import News from './News';
class Introduction extends Component {
  render() {
    return (
      <div>
      <div className="Intr-box">
          
          <p id="intr-text">
            <h3 id="intr-title">آشنا</h3>
            کمبنتشستیب سکمتنب سکنمیب تشکسمت بستب کمستبنمبنتشستیب سکمتنب سکنمیب تشکسمت بستب کمستبنمبنتشستیب سکمتنب سکنمیب تشکسمت بستب کمستبنمبنتشستیب سکمتنب سکنمیب تشکسمت بستب کمستبن
          </p>
          <img src={Logo} id="intr-img"></img>
          
        </div>
        
        <Seprator></Seprator>
        
        <News></News>

        </div>

        

        

        
    );
  }
}
export default Introduction;


