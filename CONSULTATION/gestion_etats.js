$(document).ready(function () {
   //Gestion setFilm
   $("#setFilm").click(function(){
    $("#add").show();
  });//setFilm
  
  //Gestion updateFilm
  $("#updateFilm").click(function(){   
    $("#modifier").show();
     
  });//updateFilm
  
  //Gestion de deleteFilm
  $("#deleteFilm").click(function(){
    $("#delete").show();
  });

  //on hide les inputs inutiles
  $("#annuler").click(function(){
    $("#modifier").hide();
  });
  //pareil pour le delete
  $("#annulerDelete").click(function(){
     $("#delete").hide();
  });

  $("#annulerAdd").click(function(){
    $("#add").hide();
  });
  
  $("#annulerUpdate").click(function(){
    $("#modifier").hide();
 });

  
});