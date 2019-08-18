import React, { Component } from 'react';
import  './Statistics.css';
import { doWhileStatement } from '@babel/types';
import Logo from '../../assets/charity2-01.png';
 
class Statistics extends Component {
  render() {
    return (
        <div>
            <img src={Logo} id="intr-img2"></img>
            <div className="Statistics">
                <b>
                <div className="Sta-text" id="t1">مرتبه331240</div>
                <div className="Sta-text" id="t2">عدد 4021</div>
                <div className="Sta-text" id="t3">9,365,234,000 تومان </div>
                <div className="Sta-text2" id="b1">تعداد حمایت های انجام شده از طریق آشنا</div>
                <div className="Sta-text2" id="b2">تعداد موسسات ثبت شده</div>
                <div className="Sta-text2" id="b3">حمایت مالی دریافت شده</div>
                </b>
            </div>
      </div>
    );
  }
}

export default Statistics;