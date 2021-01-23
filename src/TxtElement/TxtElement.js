import React from 'react';
import './TxtElement.css';


class TxtElement extends React.Component {
  constructor(props) {
    super(props);

    this.randomizeInsults = this.randomizeInsults.bind(this);
  }

  randomizeInsults() {
    const number = Math.ceil(Math.random() * 10);
    if(number === 1) {
      return (<div><h1 className="insult">I don't like you</h1></div>)
    } else if(number === 2) {
      return (<div><h1 className="insult">I think you smell</h1></div>)
    } else if(number === 3) {
      return (<div><h1 className="insult">Your face looks dumb</h1></div>)
    } else if(number === 4) {
      return (<div><h1 className="insult">If I could be anyone in the world, I definitely wouldn't be you</h1></div>)
    } else if(number === 5) {
      return (<div><h1 className="insult">Who let you on this website</h1></div>)
    } else if(number === 6) {
      return (<div><h1 className="insult">Get off my website</h1></div>)
    } else if(number === 7) {
      return (<div><h1 className="insult">You are a dumb dumb poopy-head</h1></div>)
    } else if(number === 8) {
      return (<div><h1 className="insult">I'm running out of insults so... your parents don't love you</h1></div>)
    } else if(number === 9) {
      return (<div><h1 className="insult">Some people need a high five in the face with a chair. Some people is you</h1></div>)
    } else if(number === 10) {
      return (<div><h1 className="insult">Good news, I'm not going to insult you! Bad news, I am. You're an idiot</h1></div>)
    } else {
      return (<div><h1 className="insult">HOW DID YOU MANAGE TO BREAK THE WEBSITE!!! HOW?? LEAVE NOW!!</h1></div>)
    }
  }

  render() {
    return (
      <div>
        {this.randomizeInsults()}
      </div>
    )
  }
}
export default TxtElement;
