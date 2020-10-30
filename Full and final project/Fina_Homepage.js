function fne(){alert('Submitted successfully'); }
			    function main() {
       var e = document.getElementById('feedback-main');
       if(e.style.display == 'block')
          e.style.display = 'none';
       else
          e.style.display = 'block';
    }


function fn1(){
	alert('your table has been booked successfully!');
}


var quotes=[
'"All you need is love. But a little chocolate now and then doesn\'t hurt." Charles M. Schulz',
'"If more of us valued food and cheer and song above hoarded gold, it would be a merrier world." J.R.R. Tolkien',
'"One cannot think well, love well, sleep well, if one has not dined well." Virginia Woolf',
'"Ask not what you can do for your country. Ask what\'s for lunch." Orson Welles',
'"After a good dinner one can forgive anybody, even one\'s own relations." Oscar Wilde',
'"There are people in the world so hungry, that God cannot appear to them except in the form of bread." Mahatma Gandhi',
'"Let food be thy medicine and medicine be thy food." Hippocrates',
'"The only time to eat diet food is while you\'re waiting for the steak to cook." Julia Child'

]
	
function getQuote() {
	var randomquote = Math.floor(Math.random() * (quotes.length));	 
    document.getElementById('randomdisp').innerHTML = quotes[randomquote]; }
     
   

     
    getQuote();