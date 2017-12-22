const tweetHref = "https://twitter.com/intent/tweet?text=";
let quote, author;

$(document).ready(function() {
  // Generate initial quote
  getQuote();
  // Generate quote on click
  $("#getM").click(function() {
    getQuote();
  });
  // Share quote on twitter
  $("#getT").click(function() {
    $("#tShare").attr("href", tweetHref + $("#change1").text());
  });

  function getQuote() {
    $.getJSON(
      "https://random-quote-generator.herokuapp.com/api/quotes/random",
      data => {
        author = data.author;
        quote = data.quote;
        $("#change1").html(`${quote} © ${author}`);
    });
  }
});
