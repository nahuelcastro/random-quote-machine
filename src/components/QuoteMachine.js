import React from "react";
import Button from "@material-ui/core/Button";
import Card from "@material-ui/core/Card";
import CardActions  from "@material-ui/core/CardActions";
import CardContent from "@material-ui/core/CardContent";


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
            <Card>
                <CardContent>
                    <span id='text'>{quote}</span>
                    <br/>
                    <span id='author'>{author}</span>
                    <br/>
                </CardContent>
                <CardActions>
                    <Button onClick={this.props.clickHandler} id="new-quote">Next Quote</Button>
                    <br/>
                    <a id='tweet-quote' href={href_tweet}>tw</a>
                    <br/> 
                </CardActions>
            </Card>    
        );
    }
}




export default QuoteMachine;