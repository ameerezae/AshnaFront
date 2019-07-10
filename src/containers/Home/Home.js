import React, { Component } from 'react';
import  './Home.css';
import { doWhileStatement } from '@babel/types';
 import Logo from '../../assets/charity2-01.png';
 import Seprator from './Seprator';
 import News from './News';
 import Footer from './Footer';
import Statistics from './Statistics';
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
        <Seprator
        class = "Seprator"
        text = "آخرین خیریه‌ها"></Seprator>

        <Seprator
        class = "Seprator-2"
        text = "تا این لحظه"></Seprator>
        <div><News></News></div>
        <div><Footer></Footer></div>
        <div><Statistics></Statistics></div>





        </div>
    );
  }
}
export default Introduction;


