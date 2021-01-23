import React from 'react';
import './Submission.css';
//import App from '../App.js'

class Submission extends React.Component {
  constructor(props) {
    super(props);
    this.custom = this.custom.bind(this)
    this.sarcastic = this.sarcastic.bind(this)
  }

  complaint = this.props.complaint;

  sarcastic(text) {
    let newString = "";
    for (let i=0; i<text.length; i++) {
      if (i % 2 === 0) {
        newString += text[i].toUpperCase();
      } else {
        newString += text[i];
      }
    }
    return newString;
  }

  custom() {
    if (this.complaint.includes("rude")){
      return "Yea its rude got a problem with that? Too bad."
    } else if(this.complaint.includes("unbelievable")){
      return "Better start believing it"
    } else if(this.complaint.includes("daniel") || this.props.complaint.includes("Daniel")){
      return "How do you know my name? Who are you CIA, FBI? Huh? Answer me!"
    } else if(this.complaint.includes("color") || this.complaint.includes("colors")){
      return "Get off my back about the colors I don't know how to match colors alright."
    } else if(this.complaint.includes("stupid")){
      return "Your mom is stupid"
    } else if(this.complaint.includes("weird")){
      return "Weird but true"
    } else if(this.complaint.includes("report")){
      return "Report this to who? The internet boss?"
    } else if(this.complaint.includes("i could do better")){
      return "No no you couldn't Heitpas"
    } else {
      return `"${this.sarcastic(this.props.complaint)}" - shut up, Love Daniel`
    } 
  }


  render() {
    return(
      <div>
        <h1 className="subResponse">{this.custom()}</h1>
      </div>
    )
  }
}

export default Submission;
// 