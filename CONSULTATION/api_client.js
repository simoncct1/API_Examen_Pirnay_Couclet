$(document).ready(function() {
  //on fill la id list
  listUpdates();
function listUpdates(){
  $.ajax({
    url: "http://localhost/API_Examen_Pirnay_Couclet/"
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
    url: "http://localhost/API_Examen_Pirnay_Couclet/"
}).then(function(data) {
  $('.film_info').empty();
    for (i = 0; i < data.length; i++) {
      $('.film_info').append("<ul><li>Titre: "+data[i]._Titre+"</li><li class='realisateur'> Realisateur: "+data[i]._Realisateur+"</li></ul>");
    }
});
}

//Gestion de getFilm
$("#getFilm").click(function(){
 
  $.ajax({
      url: "http://localhost/API_Examen_Pirnay_Couclet/"
  }).then(function(data) {
    $('.film_info').empty();
      for (i = 0; i < data.length; i++) {
        $('.film_info').append("<ul><li>Titre: "+data[i]._Titre+"</li><li class='realisateur'> Realisateur: "+data[i]._Realisateur+"</li></ul>");
      }
  });

});

//Gestion de getFilmById
$("#getFilmbyId").click(function(){
  var id=$("#idSelection").val();
  console.log(id);
  $.ajax({
      url: "http://localhost/API_Examen_Pirnay_Couclet/film/" +id
  }).then(function(data) {
    $('.film_info').empty();
    listUpdates();
        $('.film_info').append("<ul><li>Titre: "+data._Titre+"</li><li class='realisateur'> Realisateur: "+data._Realisateur+"</li></ul>");
  });

});

 
    

//Gestion setFilm
  $("#sendFilm").click(function(){
    var id;
    var titre=$("#Titre").val();
    var realisateur=$("#realisateur").val();
    console.log(titre);
  $.ajax({
         url:"http://localhost/API_Examen_Pirnay_Couclet/create",
         method:"POST",
         data:{
           Id: id,
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
         url:"http://localhost/API_Examen_Pirnay_Couclet/update",
         method:"PUT",
         data:{
        
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
         url:"http://localhost/API_Examen_Pirnay_Couclet/delete",
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
