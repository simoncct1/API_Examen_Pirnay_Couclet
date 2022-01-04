$(document).ready(function() {
  //on fill la id list
  listUpdates();
function listUpdates(){
  $.ajax({
    url: "http://localhost/examen_api/"
}).then(function(data) {
    for (i = 0; i < data.length; i++) {
      $('#idSelection').append("<option value="+data[i]._Id +">"+data[i]._Id+"</option>");
      $('.filmSelect').append("<option value="+data[i]._Id +">"+data[i]._Titre+"</option>");
    }
});
}
//funciton pour reset à chaque opération
function resetFilms(){
  console.log("reseted")
  $.ajax({
    url: "http://localhost/examen_api/"
}).then(function(data) {
  $('.film_info').empty();
    for (i = 0; i < data.length; i++) {
      $('.film_info').append("<ul><li>Titre: "+data[i]._Titre+"</li><li> Realisateur:"+data[i]._Realisateur+"</li></ul>");
    }
});
}

//Gestion de getFilm
$("#getFilm").click(function(){
 
  $.ajax({
      url: "http://localhost/examen_api/"
  }).then(function(data) {
    $('.film_info').empty();
      for (i = 0; i < data.length; i++) {
        $('.film_info').append("<ul><li>Titre: "+data[i]._Titre+"</li><li> Realisateur:"+data[i]._Realisateur+"</li></ul>");
      }
  });

});

//Gestion de getFilmById
$("#getFilmbyId").click(function(){
  var id=$("#idSelection").val();
  console.log(id);
  $.ajax({
      url: "http://localhost/examen_api/film/" +id
  }).then(function(data) {
    $('.film_info').empty();
    listUpdates();
        $('.film_info').append("<ul><li>Titre: "+data._Titre+"</li><li> Realisateur:"+data._Realisateur+"</li></ul>");
  });

});

 
    

//Gestion setFilm
  $("#sendFilm").click(function(){
    var titre=$("#titre").val();
    var realisateur=$("#realisateur").val();
  $.ajax({
         url:"http://localhost/examen_api/create",
         method:"POST",
         data:{
           Titre: titre,
           Realisateur:realisateur    
         },
         success:function(response) {
          $('.film_info').append(response);
          $("#add").hide();
          resetFilms();
          listUpdates();
          alert("Film ajouté: " + titre + " par " + realisateur);
        },
        error:function(){
         alert("error");
        }

       });
      

});//setFilm

//Gestion updateFilm
$("#modifFilm").click(function(){
var id=$("#idFilm").val();
  var titre=$("#newTitre").val();
  var realisateur=$("#newRealisateur").val();

  $.ajax({
         url:"http://localhost/examen_api/update",
         method:"PUT",
         data:{
           Id: id,
           Titre: titre,
           Realisateur:realisateur
         },
         success:function(response) {
          $('.film_info').append(response);
          resetFilms();
          listUpdates();
          
        },
        error:function(){
         alert("error");
        }

       });
       $("#modifier").hide();
});//updateFilm

//Gestion de deleteFilm
$("#deleteDef").click(function(){
var id=$("#idFilmToDel").val()
$.ajax({
         url:"http://localhost/examen_api/delete",
         method:"DELETE",
         data:{
           Id:id
         },
         success:function(response) {
          $('.film_info').append(response);
          resetFilms();
          listUpdates();
        },
        error:function(){
         alert("error");
        }

       });
       $("#delete").hide();
      

});//updateFilm




});//fctready
