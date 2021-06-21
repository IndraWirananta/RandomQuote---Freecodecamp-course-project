import React, { Component } from "react";
import "./quotes.css";
var quoteList;
var quoteAuthor;
document.getElementById("root").style.background = "rgba(40, 40, 40, 1)";
var colors = [
  "#16a085",
  "#27ae60",
  "#2c3e50",
  "#f39c12",
  "#e74c3c",
  "#9b59b6",
  "#FB6964",
  "#342224",
  "#472E32",
  "#BDBB99",
  "#77B1A9",
  "#73A857",
];
class Quotes extends Component {
  constructor(props) {
    super(props);
    this.state = {
      quotes: "Click the button first!",
      author: "",
    };
    this.loadDoc = this.loadDoc.bind(this);
  }
  loadDoc() {
    var xmlhttp = new XMLHttpRequest();
    xmlhttp.open(
      "GET",
      "https://gist.githubusercontent.com/camperbot/5a022b72e96c4c9585c32bf6a75f62d9/raw/e3c6895ce42069f0ee7e991229064f167fe8ccdc/quotes.json",
      true
    );
    xmlhttp.onreadystatechange = () => {
      if (xmlhttp.readyState == 4) {
        if (xmlhttp.status == 200) {
          var obj = JSON.parse(xmlhttp.responseText);
          quoteList = obj.quotes;
          quoteList = quoteList[Math.floor(Math.random() * quoteList.length)];
          quoteAuthor = quoteList.author;
          quoteList = quoteList.quote;
          console.log(quoteList);
          this.setState({
            quotes: quoteList,
            author: quoteAuthor,
          });
        }
      }
    };
    xmlhttp.send(null);
    let randColor = colors[Math.floor(Math.random() * colors.length)];
    document.getElementById("root").style.transition = "all 1s ease 0s";
    document.getElementById("root").style.background = randColor;
  }
  render() {
    return (
      <div className="box">
        <h1 className="quote">{this.state.quotes}</h1>
        <h1 className="author">-{this.state.author}</h1>
        <button className="button" onClick={this.loadDoc}>
          Get quotes!
        </button>
      </div>
    );
  }
}
export default Quotes;
