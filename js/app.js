$(document).ready(function(){  
  
     $('h1').on('click', function(){
        $("<div id='firstmsg'>You're the most <b>SPECIAL</b> human being (click me)</div>").appendTo("body");
        $('h1').html("I wish you a very happy birthday");
     });
     

     $('body').on('click', '#firstmsg', function(){
        $("<div id='secondmsg'>You're the most <b>BEAUTIFUL</b> person on earth (click me)</div>").appendTo("body");
        $('#firstmsg').html("You're the most <b>SPECIAL</b> human being");
     });
     
     $('body').on('click', '#secondmsg', function(){
        $("<div id='thirdmsg'>You're the most <b>BRILLIANT</b> mind this planet has known (click me)</div>").appendTo("body");
        $('#secondmsg').html("You're the most <b>BEAUTIFUL</b> person on earth");
     });

     $('body').on('click', '#thirdmsg', function(){
        $("body").css("background", "url(https://images.unsplash.com/photo-1555607124-8531c7c702d0?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1374&q=80) no-repeat center");
        $("body").css("background-size", "cover");
        $('#secondmsg').html("<b>HAPPY BIRTHDAY 🥳🥳🥳</b>");
        $('#firstmsg').html("<b>HAPPY BIRTHDAY 🥳🥳🥳</b>");
        $('#thirdmsg').html("<b>HAPPY BIRTHDAY 🥳🥳🥳</b>");
        $('h1').html("<b>HAPPY BIRTHDAY <br>🥳🥳🥳</b>");
     });

});