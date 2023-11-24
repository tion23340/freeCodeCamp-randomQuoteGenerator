import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import {createRoot} from 'react-dom/client';

console.log('Noroc')



const root = createRoot(document.getElementById('text-container'));
console.log('mata')


const apiUrl = 'https://api.api-ninjas.com/v1/quotes';
const apiKey = 'p2Drwi3FbZN+g8z1ODCX3Q==YVVdoQCH8XHQLtaQ';
const category = 'failure';  
let quote1 = '';

class RandomQuoteApp extends React.Component {
  constructor(props){
    super(props);
    this.state = {
      quote: '',
      author: '',
      apiKey: 'p2Drwi3FbZN+g8z1ODCX3Q==YVVdoQCH8XHQLtaQ',
      apiURL: 'https://api.api-ninjas.com/v1/quotes',
      category: 'failure',
    }
    this.generateQuote = this.generateQuote.bind(this);
    this.changeCategory = this.changeCategory.bind(this);
  }
  generateQuote() {
    fetch(`${this.state.apiURL}?category=${this.state.category}`, {
      method: 'GET',
      headers: {
        'X-Api-Key': this.state.apiKey,
        'Content-Type': 'application/json',
      },
    })
      .then(response => {
        if (!response.ok) {
          throw new Error('Network response was not ok');
        }
        return response.json();
      })  
      .then(result => {
        this.setState({
          author: result[0].author,
          quote: result[0].quote,
        })
      })
      .catch(error => {
        console.error('Error:', error);
      });
  }
  changeCategory(e){
    console.log(e.target.value);
    this.setState({
      category: e.target.value,
    })
  }

  render(){
    return (
      <div className='content-container'>
        <p className='animated'>{this.state.quote != '' && '„'}{this.state.quote}{this.state.quote != '' && '”'}</p>
        <h3 className='author'>{this.state.author != '' && '-'}{this.state.author}</h3>
        <div className='select-and-button'>
        <h5 className='category'>Quote category: 
          <select onChange={this.changeCategory}>
            <option value="failure">failure</option>
            <option value="success">success</option>
            <option value="learning">learning</option>
            <option value="intelligence">intelligence</option>
            <option value="love">Iovu</option>
            <option value="money">money</option>
          </select>
        </h5>
        <button className='btn animated shake' onClick={this.generateQuote}>New Quote</button>
        </div>
      </div>
    )
  }
}

root.render(<RandomQuoteApp />)
  









// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
