
function init(){
   
    getMoviesListAndDrawList();
    
}


function getMovieAndDrawDetail(){
    var request = $.ajax({
        url:"https://api.themoviedb.org/3/discover/movie?sort_by=popularity.desc&api_key=2b92932b6b6e04678709dcf589be5388"
        method: "GET"
    });
    
    request.done(function(result) {
        
    });
    
    request.fail(function(jqXHR, textStatus) {
        alert("Request failed: " + textStatus);
        
    });
    
    function getMoviesListDrawList(){
        var request = $.ajax({
        url:"https://api.themoviedb.org/3/discover/movie?sort_by=popularity.desc&api_key=2b92932b6b6e04678709dcf589be5388"
        method: "GET"
    });
    
          request.done(function(movieList) {
              
              for(i=0;i<moviesList.results.lenght;i++)
                  theList.innerHTML += "<li>" + moviesList.results[i].original_title + "</li>"
    });
        theList.Listview("Refresh");
        request.fail(function(jqXHR,textStatus) {
        alert("Request failed: " + textStatus);
        
    });
}