<?php
require_once 'Article.php';
require_once 'DataAccess.php';

class FilmData{
  private $_dbLink;
  private $_dbConnect;
  private $_query;
  private $_result;
  private $_Film;

  public function __construct(){
    $this->_dbLink=new DataAccess();
    $this->_dbConnect=$this->_dbLink->getConnexion();
  }

public function getFilms(){
  try{
      $this->_query=$this->_dbConnect->prepare("CALL getFilms()");
      $this->_query->execute();
        while($this->_result=$this->_query->fetch(PDO::FETCH_ASSOC)){
            $TempFilm=new Film($this->_result["Id"],$this->_result["Titre"],$this->_result["Realisateur"]);
            $this->_Film[]=$TempFilm;
        }

        $this->_query->closeCursor();
        
        return $this->_Film;
  }catch(PDOException $e){return "Erreur getFilms";}

}
// stdClass

 public function getFilmById($Id){
   try{
      $this->_query=$this->_dbConnect->prepare("CALL getFilmById(?)");
      $this->_query->bindParam(1,$Id,PDO::PARAM_INT);
      $this->_query->execute();
      $this->_result=$this->_query->fetch(PDO::FETCH_ASSOC);
        if($this->_result!=""){
          $TempFilm=new Film($this->_result["Id"], $this->_result["Titre"],$this->_result["Realisateur"]);
          $this->_Film=$TempFilm;
        }
      $this->_query->closeCursor();
      return $this->_Film;

     }catch(PDOException $e){return "Erreur getFilmById";}

}

public function setFilm($Titre,$Realisateur,$Contenu){
  try{
    $this->_query=$this->_dbConnect->prepare("CALL setFilm(?,?,?)");
    $this->_query->bindParam(1,$Titre,PDO::PARAM_STR);
    $this->_query->bindParam(2,$Realisateur,PDO::PARAM_STR);
    $this->_query->execute();
    $temp=$this->_query->fetch(PDO::FETCH_ASSOC);
    $this->_result=$temp["LAST_INSERT_ID()"];
    $this->_query->closeCursor();
    return $this->_result;
  }catch(PDOException $e){return "Erreur setFilm";}

  }

public function updFilm($Id,$Titre,$Realisateur){
  try{
    $this->_query=$this->_dbConnect->prepare("CALL UpdFilm(?,?,?,?)");
    $this->_query->bindParam(1,$Id,PDO::PARAM_INT);
    $this->_query->bindParam(2,$Titre,PDO::PARAM_STR);
    $this->_query->bindParam(3,$Realisateur,PDO::PARAM_STR);
    $this->_query->execute();
    $this->_query->closeCursor();
    $this->_result="OK";
    return $this->_result;
  }catch(PDOException $e){return "Erreur updFilm";}

}

public function deleteFilm($Id){
  try{
    $this->_query=$this->_dbConnect->prepare("CALL deleteFilm(?)");
    $this->_query->bindParam(1,$Id,PDO::PARAM_INT);
    $this->_query->execute();
    $this->_result="OK";
    $this->_query->closeCursor();
   return $this->_result;
  }catch(PDOException $e){return "Erreur deleteFilm";}

}

}





 ?>
