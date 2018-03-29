// Dependencies
import React from 'react';
import RaisedButton from 'material-ui/RaisedButton';
import TextField from 'material-ui/TextField';
import DatePicker from 'material-ui/DatePicker';
import {RadioButton, RadioButtonGroup} from 'material-ui/RadioButton';

import './home.css';

export default class Home extends React.Component {
render() {
  return (
    <div className="Home">
      <h1>Create an account</h1>
    <br />
      <TextField
        hintText="Name:"
        floatingLabelText="Write your name:"
        style={{
        width: '200px',
        }}
    />
      <TextField
        hintText="Last name:"
        floatingLabelText="Write your last name:"
        style={{
        width: '200px',
        }}
    />
    <br />
      <TextField
        hintText="Email:"
        floatingLabelText="Write your email:"
        style={{
        width: '400px',
        }}
      />
    <br />
      <h3>Date of birth</h3>
      <DatePicker hintText="Enter your date of birth:" mode="landscape" />
    <br />
      <RadioButtonGroup className="radioGroup" name="shipSpeed" defaultSelected="not_light">
        <RadioButton
        value="light"
        label="Man:"
        style={{marginBotton: '16px', maxWidth: '200px',}}
      />
      <RadioButton
        value="algo"
        label="Woman:"
        style={{marginBotton: '16px', maxWidth: '200px',}}
      />
      </RadioButtonGroup>
    <br />
      <RaisedButton label="Create account." primary={true} 
      style={{
        width: '300px',
      }}/>
    </div>    
  );
}
}

