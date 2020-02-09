/******************************************
Treehouse FSJS Techdegree:
project 1 - A Random Quote Generator
******************************************/

/* 
  the 'last' vars, use make sure color and quotes are not
  same in a row
*/

var lastquote = null;
var lastcolor = null;

/* 
  quotes array - the array that stores all the quotes
*/

var quotes = [
    {
      quote: 'Perhaps today IS a good day to die!',
      source: 'Lt. Commander Worf',
      citation: 'Star Trek: First Contact',
      category: 'Defiance',
      year: 1996
    },
    {
      quote: 'People say nothing is impossible, but I do nothing every day.',
      source: 'A. A. Milne',
      category: 'Humor',
    },
    {
      quote: 'Sometimes when you innovate, ' +
       'you make mistakes. It is best to admit ' +
        'them quickly, and get on with improving your other innovations.',
      source: 'Steve Jobs',
      category: 'Business',
    },
    {
      quote: 'The power of imagination makes us infinite.',
      source: 'John Muir',
      category: 'Inspirational',
    },
    {
      quote: 'Imagination is more important than knowledge.',
      source: 'Albert Einstein',
      category: 'Science',
    },
    {
      quote: 'A fanatic is one who can’t change his mind and won’t ' + 
      'change the subject.',
      source: "Winston Churchill",
      category: 'Politics',
    },
    {
      quote: 'We did not come to fear the future. We came to shape it.',
      source: "Barack Obama",
      category: 'History',
    },
    {
      quote: 'Injustice anywhere is a threat to justice everywhere',
      source: "Martin Luther King Jr.",
      category: 'Justice',
    }
    
];

/* 
  getRandomQuote function - the function that selects
  a random quote
*/

function getRandomQuote() {
 var rand = Math.floor(Math.random() * quotes.length);
 return quotes[rand];
}

/* 
  setColor function - the function that selects
  a random background color
*/

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
    //loop until different from last color
    while ( color === lastcolor ) {
     color = colors[Math.floor(Math.random() * colors.length)];
   }
  }
  document.body.style.backgroundColor = color;
  lastcolor = color; //set lastcolor to the current color
}

/* 
  printQuote function - the function that prints
  a quote from getRandomQuote, with formatting for
  each object property
*/

function printQuote() {
  var HTMLstring = " ";
  var quote = getRandomQuote();

  if ( lastquote !== null) {
   //loop until different from last quote
   while ( quote === lastquote ) {
    quote = getRandomQuote();
  }
 }

 /*
  set up the HTML string that will display the quote
  and, format each object property
 */

HTMLstring += '<p class="quote">'  + quote.quote + '</p>';
HTMLstring += '<p class="source">'  + quote.source;
 if (quote.citation) HTMLstring += '<span class="citation">'  + quote.citation;
 if (quote.year) HTMLstring += '</span>' + '<span class="year">'  + quote.year;
 if (quote.category) HTMLstring += '</span>' + '<span class="year">'  + quote.category;
 if (quote.citation || quote.year || quote.category) HTMLstring += '</span>'; //add the final </span> if quote uses extra properties 
 HTMLstring += '</p>'; //add the final </p>

 document.getElementById('quote-box').innerHTML = HTMLstring; //use HTML string
 setColor(); //change background color at random
 lastquote = quote; //set lastquote to the current quote
}

//use setInterval to call printQuote, every 10 sec
setInterval(function(){ printQuote(); }, 10000);

/***
 * click event listener for the print quote button
 * DO NOT CHANGE THE CODE BELOW!!
***/

document.getElementById('load-quote').addEventListener("click", printQuote, false);