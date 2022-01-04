<?php
require 'vendor/autoload.php';
require_once 'FilmData.php';

use Slim\Http\Request as Request;
use Slim\Http\Response as Response;

$app=new \Slim\App();



$app->get("/",function(Request $request,Response $response){
      $DataFilm=new FilmData();
      $Result=$DataFilm->getFilms();
      if($Result!="Erreur getFilms"){

              return  $response->withJson($Result);
      }else{
          return $response->withStatus(404); // NOT FOUND
      }

});

$app->get("/film/{id}",function (Request $request,Response $response,$args){
  $DataFilm=new FilmData();
  $Id=$args['id'];
  $Result=$DataFilm->getFilmById($Id);
  if($Result!="Erreur getFilmById"){
          return  $response->withJson($Result); //Retourne l'Film
  }else{
          return $response->withStatus(404); //NOT FOUND
      }

});

//Pour tester utilisez Postman onglet Body définir les variables Titre,Realisateur avec x-www-form
$app->post("/create",function (Request $request,Response $response,$args){
       $Titre=  $request->getParsedBody()['Titre'];
       $Realisateur= $request->getParsedBody()['Realisateur'];
       $DataFilm=new FilmData();
       $Result=$DataFilm->setFilm($Titre, $Realisateur);
       if($Result!="Erreur setFilm"){
            return  $response->withJson($Result);
      }else{
        return $response->withStatus(404); //NOT FOUND
    }
});

$app->put("/update",function (Request $request,Response $response,$args){
  $Id=  $request->getParsedBody()['Id'];
  $Titre=  $request->getParsedBody()['Titre'];
  $Realisateur= $request->getParsedBody()['Realisateur'];
  $DataFilm=new FilmData();
  $Result=$DataFilm->updFilm($Id,$Titre, $Realisateur);
  if($Result!="Erreur updFilm"){
       return  $response->withJson($Result);
  }else{
   return $response->withStatus(404); //NOT FOUND
  }
});

$app->delete("/delete",function (Request $request,Response $response,$args){
  $Id= $request->getParsedBody()['Id'];
  $DataFilm=new FilmData();
  $Result=$DataFilm->deleteFilm($Id);
  if($Result!="Erreur deleteFilm"){
      return  $response->withJson($Result);
  }else{
        return $response->withStatus(404); //NOT FOUND
  }
});

$app->run();

?>
