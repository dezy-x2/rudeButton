import React from 'react';
//import logo from './logo.svg';
import './App.css';
import TxtElement from './TxtElement/TxtElement';
import Submission from './Submission/Submission';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      insult: false,
      submitted: false,
      complaint: ''
    }
    this.buttonPress = this.buttonPress.bind(this);
    this.pressSubmit = this.pressSubmit.bind(this);
    this.handleTermChange = this.handleTermChange.bind(this);
  }


  buttonPress = () => {
    if(!this.state.insult){
      this.setState({insult: true})
    } else {
      this.setState({insult: false})
    }
  }

  pressSubmit = () => {
    if(!this.state.submitted){
      this.setState({submitted: true})
    } else {
      this.setState({submitted: false})
    }
  }

  handleTermChange(event) {
    this.setState({ complaint: event.target.value });
  }

  render() {
  return (
    <div>
    <div className="App">
      <h1 className="title">Go on. Press the button, I know you want to</h1>
      <button className="innButton" onClick={this.buttonPress}>Just an innocent button</button>
    </div>
      {this.state.insult && <TxtElement />}
      <form>
        <input type="text" placeholder="Have any suggestions for me?" className="feedback" onChange={this.handleTermChange} value={this.state.complaint}/>
      </form>
      <button className="subButton" onClick={this.pressSubmit}>Submit</button>
      {this.state.submitted && <Submission complaint={this.state.complaint} />}

      <footer>
        <h4 className="PowerMessage">Powered by: DX2 Programming and Design™</h4>
        <h6 className="contact">Want to file a complaint? Email me at df.dezmond9@gmail.com, I'll be sure to ignore you.</h6>
      </footer>
    </div>
  );
}
}

export default App;
