import React from 'react';
import {random} from 'lodash'
import './App.css';
import Button from './components/Button';

// function App() {

//     nextQuoteClickHandler(){
//       console.log('HOLA')
//     }

//   return (
//     <div id="quote-box" className="App">
//       <span id='text'>This is text</span>
//       <span id='author'>author</span>
//       <Button buttonDisplayName="Next Quote" clickHandler={this.nextQuoteClickHandler}/>
//       <button id='new-quote'>new</button>
//       <a id='tweet-quote' href="#">tw</a>
//     </div>
//   );
// }

class App extends React.Component {
  constructor(props) {
      super(props);
      this.state = {
          quotes: [],
          selectedQuoteIndex: null
      }
      this.selectQuoteIndex = this.selectQuoteIndex.bind(this)
      this.nextQuoteClickHandler = this.nextQuoteClickHandler.bind(this)
  }

  componentDidMount() {
    fetch('https://gist.githubusercontent.com/natebass/b0a548425a73bdf8ea5c618149fe1fce/raw/f4231cd5961f026264bb6bb3a6c41671b044f1f4/quotes.json')
      .then((data) => data.json())
      .then((quotes) => this.setState({quotes: quotes}, () => { this.setState({selectedQuoteIndex: this.selectQuoteIndex()})
      }));
  }
  
  nextQuoteClickHandler(){
    console.log('HOLA')
    this.setState({selectedQuoteIndex: this.selectQuoteIndex()})
  }

  selectQuoteIndex(){
    if (!this.state.quotes.length){
      return;
    }
    return random(0, this.state.quotes.length - 1);
  }

  render(){
    console.log(this.state.quotes)
    console.log(this.state.selectedQuoteIndex)
    return (
      <div id="quote-box" className="App">
        <span id='text'>{this.state.selectedQuoteIndex}</span>
        <span id='author'>author</span>
        <Button buttonDisplayName="Next Quote" clickHandler={this.nextQuoteClickHandler} id="new-quote"/>
        <a id='tweet-quote' href="#">tw</a>
      </div>
    );
  }


}




export default App;
