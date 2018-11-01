
$("form").submit(function(event) {
 var data = $("#artist-name").val();
 console.log(data);
 event.preventDefault();
 var new_data= data.replace(" ","+");
 
// $.getJSON("https://itunes.apple.com/search?entity=album&limit=6&term="+new_data)

 $.getJSON("https://itunes.apple.com/search?entity=album&term="+new_data).done(function(data) {

 console.log(data);
 $(".terminal").hide();
$.each(data.results, function(key, value) {
  $(".album-list").append("<div class=\"terminal\"><li><img src="+value.artworkUrl100+"><p>"+value.collectionName+"</p><br><p class=\"negrilla\">"+value.artistName+"</p></li><a href=\""+value.collectionViewUrl+"\" target=\"_blank\"><button type=\"button\">More info</button></a></div>")});
});


});

