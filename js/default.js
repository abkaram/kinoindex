$(document).ready(function(){
    console.log("Ready!");
    
    $("#searchMovie").submit(function(event){
        var term = $('input[name="t"]').val();
        $.ajax({
           type: "get",
           url: "https://www.omdbapi.com/",
           dataType: "jsonp",
           data: { t: term, tomatoes: "true" }, 
           success: function(movie)
           {
               console.log(movie);
               if($("#movieDisplay").length){
                   $("#movieDisplay").remove();
               }
               
               var poster = movie.Poster;
               var title = movie.Title;
               
               
               if(poster == "N/A"){
                   poster = "http://imgur.com/caNEoo0.png";
               }
               
               $("body").append("<div id='movieDisplay' class='container'><div class='row'></div><div id='moviePoster' class='col-md-4'><img id='movieImg' src='" + poster + "' alt='Poster'></div><div id='movieInfo' class='col-md-8'></div></div>")
               $("#movieInfo").append("<h1><a href='http://www.imdb.com/title/" + movie.imdbID + "'>" + movie.Title + "</a></h1>");
               $("#movieInfo").append("<p>Released: " + movie.Released + "</p>");
               $("#movieInfo").append("<p>Rating: " + movie.Rated + "</p>");
               $("#movieInfo").append("<p>Runtime: " + movie.Runtime + "</p>");
               $("#movieInfo").append("<p>Director: " + movie.Director + "</p>");
               $("#movieInfo").append("<p>Actors: " + movie.Actors + "</p>");
               $("#movieInfo").append("<p>Genre: " + movie.Genre + "</p>");
               $("#movieInfo").append("<p>Metacritic: " + movie.Metascore + "</p>")
               $("#movieInfo").append("<p>Rotten Tomatoes: " + movie.tomatoMeter + "</p>")
               $("#movieInfo").append("<h4>" + movie.Plot + "</h4>");
               
               if(title == null){
                   $("#movieDisplay").remove();
                    $("body").append("<div id='movieDisplay' class='container'><div class='row'></div><div id='movieInfo' class='col-md-12'></div></div>")
                    $("#movieInfo").append("<h1 style='text-align: center;'>Could not find any movie with this title.</h1>");
               }
               
               $("#movieDisplay").hide();
               $("#movieDisplay").fadeIn(1500);
           }
         });
      return false;
    });
});