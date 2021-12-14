import React, {useEffect, useState} from 'react';
import './App.css';


const quotesAPI = "https://goquotes-api.herokuapp.com/api/v1/random?count=1"
function App() {
  const [quote, setQuote] =useState("Dreaming, after all, is a form of planning.")
  const [author, setAuthor] = useState("Gloria Steinem")
  const [quoteData, setQuoteData] = useState(null)
  const [color, setColor] =useState("#282c34")

  const fetchQuotes = async (url)=>{
    const response = await fetch(url)
    const data = await response.json()
    setQuoteData(data)
  }

  useEffect(()=>{
    fetchQuotes(quotesAPI)
  },[quotesAPI])

  const newQuote = ()=>{
    fetchQuotes(quotesAPI)
    let quote = quoteData.quotes[0].text
    let author = quoteData.quotes[0].author
    setQuote(quote)
    setAuthor(author)
    setColor('#'+Math.floor(Math.random()*16777215).toString(16))
  }

  return (
    <div className="App">
      <header className="App-header" style={{backgroundColor: color}}>
        <div id="quote-box" style={{color: color}}>
        <p id="text">
          "{quote}"
        </p>
        <p id="author">
          -{author}
        </p>
        <button id="new-quote" onClick={()=> newQuote()}> New Quote </button>
        <a id="tweet-quote" href={"http://www.twitter.com/intent/tweet?text="+quote+"-"+author}>Tweet Quote</a>
        </div>
      </header>
    </div>
  );
}

export default App;
