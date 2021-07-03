import React from "react";
import Button from "./Button";


class QuoteMachine extends React.Component {
    constructor(props) {
        super(props);
        this.state = {}
    }
  
    render(){
        const selectedQuote = this.props.selectedQuote
        const quote = selectedQuote ? `"${selectedQuote.quote}"` : ''
        const author = selectedQuote ? selectedQuote.author: ''
        const href_tweet = `https://twitter.com/intent/tweet?hashtags=quotes&related=react&text=${quote} ${author}` 
        return (
            <div>
                <span id='text'>{quote}</span>
                <br/>
                <span id='author'>{author}</span>
                <br/>
                <Button buttonDisplayName="Next Quote" clickHandler={this.props.clickHandler} id="new-quote"/>
                <br/>
                <a id='tweet-quote' href={href_tweet}>tw</a>
                <br/> 
            </div>    
        );
    }
}




export default QuoteMachine;