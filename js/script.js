/******************************************
Treehouse FSJS Techdegree:
project 1 - A Random Quote Generator
******************************************/

// For assistance: 
  // Check the "Project Resources" section of the project instructions
  // Reach out in your Slack community - https://treehouse-fsjs-102.slack.com/app_redirect?channel=chit-chat

/*** 
 * `quotes` array 
***/

var quotes = [
    {
      quote: "test quote",
      source: "test source",
    },
    {
      quote: "test quote",
      source: "test source",
    },
    {
      quote: "test quote",
      source: "test source",
    },
    {
      quote: "test quote",
      source: "test source",
    },
    {
      quote: "test quote",
      source: "test source",
    },
];



/***
 * `getRandomQuote` function
***/



/***
 * `printQuote` function
***/
function printQuote() {

  alert(quotes[0].quote);
}


/***
 * click event listener for the print quote button
 * DO NOT CHANGE THE CODE BELOW!!
***/

document.getElementById('load-quote').addEventListener("click", printQuote, false);