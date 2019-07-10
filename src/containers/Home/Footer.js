import React, { Component } from 'react';
import  './Footer.css';
import { doWhileStatement } from '@babel/types';
import insta_img from '../../assets/insta-logo.png';
import twitter_img from '../../assets/twitter-logo.png';
import facebook_img from '../../assets/facebook-logo.png';
 
class Footer extends Component {
  render() {
    return (
      <div className="Footer">
        <img src={facebook_img} className="footer-img" id="facebook-img"></img>
        
        <img src={twitter_img} className="footer-img" id="twitter-img"></img>
        <img src={insta_img} className="footer-img" id="insta-img"></img>
      </div>
    );
  }
}
export default Footer;