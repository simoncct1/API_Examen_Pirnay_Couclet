<?php
class DataAccess{

private $db_name="api_films_db";
private $user="root";
private $password="";
private $host="localhost";
private $connexion;

public function __construct(){

try{
  $this->connexion=new PDO("mysql:dbname=".$this->db_name.";host=".$this->host,$this->user,$this->password);
}catch(PDOException $e){
   echo $e->getMessage();
}

}

public function getConnexion(){
  return $this->connexion;
}



}



 ?>
