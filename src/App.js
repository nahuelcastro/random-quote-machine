import React from 'react';
import {random} from 'lodash'
import Grid from '@material-ui/core/Grid'
import {withStyles} from '@material-ui/core/styles'
import QuoteMachine from './components/QuoteMachine';

const styles = {
  container: {
    alignItems: 'center',
    display: 'flex',
    height: '100vh',
  }
}


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

  get selectedQuote(){
    if(!this.state.quotes.length || !Number.isInteger(this.state.selectedQuoteIndex)){
      return;
    }
    return this.state.quotes[this.state.selectedQuoteIndex]
  }

  selectQuoteIndex(){
    if (!this.state.quotes.length){
      return;
    }
    return random(0, this.state.quotes.length - 1);
  }

  render(){
    console.log(this.selectedQuote)
    console.log(this.state.selectedQuoteIndex)
    const quote = this.selectedQuote ? `"${this.selectedQuote.quote}"` : ''
    const author = this.selectedQuote ? this.selectedQuote.author: ''
    const href_tweet = `https://twitter.com/intent/tweet?hashtags=quotes&related=react&text=${quote} ${author}` 
    return (
      <Grid id="quote-box" className={this.props.classes.container} justify="center" container>
        <Grid xs={11} lg={8} item>
          <QuoteMachine selectedQuote={this.selectedQuote} clickHandler={this.nextQuoteClickHandler}/>
          {/* <span id='text'>{quote}</span>
          <br/>
          <span id='author'>{author}</span>
          <br/>
          <Button buttonDisplayName="Next Quote" clickHandler={this.nextQuoteClickHandler} id="new-quote"/>
          <br/>
          <a id='tweet-quote' href={href_tweet}>tw</a>
          <br/> */}
        </Grid>
      </Grid>
    );
  }


}




export default withStyles(styles)(App);
