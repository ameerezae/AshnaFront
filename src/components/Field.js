import React from 'react';
import './Field.css';
import {FormGroup} from "react-bootstrap";

const field = (props) => {
    return(
        <FormGroup >
        <p className="title title_top">{props.title} </p>
        <input onChange={props.click}  value = {props.value} className = "labeling" type={props.type} placeholder={props.placeholder} 
                name={props.name} required></input>
        </FormGroup>
    )
}


export default field;