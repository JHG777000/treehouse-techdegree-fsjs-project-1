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
  document.body.style.backgroundColor = color;
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