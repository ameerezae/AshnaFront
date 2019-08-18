import React, { Component } from 'react';
import  './News.css';
import { doWhileStatement } from '@babel/types';
import {FormControl,InputGroup} from "react-bootstrap";
 
class News extends Component {
  render() {
    return (
      <div>
        <div id="News-Box">
          <div id="Sentence"> تا این لحظه 123165478965123 نفر در حال استفاده از مزایای خبرنامه آشنا هستند</div>
          <div id="b">
            <InputGroup size="sm" className="mb-3">
                  <FormControl aria-label="Small" aria-describedby="inputGroup-sizing-sm" id="email"/>
                  <InputGroup.Prepend id="bottom">
                        <InputGroup.Text id="inputGroup-sizing-sm" id="style" >ثبت ایمیل</InputGroup.Text>
                  </InputGroup.Prepend>
            </InputGroup>
         </div>   
        </div>
        <div className="Seprator">

      </div>
      </div>
    );
  }
}
export default News;


