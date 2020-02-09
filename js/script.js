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

var lastquote = null;
var lastcolor = null;

var quotes = [
    {
      quote: "test quote1",
      source: "test source1",
      citation: "citation1",
      category: 'none',
      year: 20635

    },
    {
      quote: "test quote2",
      source: "test source2",
      category: 'humor',
    },
    {
      quote: "test quote3",
      source: "test source3",
      category: 'business',
    },
    {
      quote: "test quote4",
      source: "test source4",
      category: 'business',
    },
    {
      quote: "test quote5",
      source: "test source5",
      category: 'politics',
    },
];



/***
 * `getRandomQuote` function
***/

function getRandomQuote() {
 var rand = Math.floor(Math.random() * quotes.length);
 return quotes[rand];
}

function setColor() {
  var colors = [
    'red',
    'blue',
    'green',
    'orange',
    'purple',
    'silver',
    'cyan',
    'magenta'
  ];
  var color = colors[Math.floor(Math.random() * colors.length)];
  if ( lastcolor !== null) {
    while ( color === lastcolor ) {
     color = colors[Math.floor(Math.random() * colors.length)];
   }
  }
  document.body.style.background = color;
  lastcolor = color;
}

/***
 * `printQuote` function
***/
function printQuote() {
  var quote = getRandomQuote();
  var string = " ";
  if ( lastquote !== null) {
   while ( quote === lastquote ) {
    quote = getRandomQuote();
  }
 }
  
 string += '<p class="quote">'  + quote.quote + '</p>';
 string += '<p class="source">'  + quote.source;

 if (quote.citation) string += '<span class="citation">'  + quote.citation;
 if (quote.year) string += '</span>' + '<span class="year">'  + quote.year;
 if (quote.category) string += '</span>' + '<span class="year">'  + quote.category;
 if (quote.citation) string += '</span>';
 string += '</p>';
 document.getElementById('quote-box').innerHTML = string;
 setColor();
 lastquote = quote;
}

setInterval(function(){ printQuote(); }, 10000);

/***
 * click event listener for the print quote button
 * DO NOT CHANGE THE CODE BELOW!!
***/

document.getElementById('load-quote').addEventListener("click", printQuote, false);