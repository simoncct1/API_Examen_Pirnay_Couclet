<?php
class Film implements JsonSerializable{

private $_Id;
private $_Titre;
private $_Realisateur;



public function __construct($Id="",$Titre="",$Realisateur=""){
 $this->_Id=$Id;
 $this->_Realisateur=$Realisateur;
 $this->_Titre=$Titre;
}


    /**
     * Get the value of Id
     *
     * @return mixed
     */
    public function getId()
    {
        return $this->_Id;
    }

    /**
     * Set the value of Id
     *
     * @param mixed $_Id
     *
     * @return self
     */
    public function setId($_Id)
    {
        $this->_Id = $_Id;

        return $this;
    }

    /**
     * Get the value of Titre
     *
     * @return mixed
     */
    public function getTitre()
    {
        return $this->_Titre;
    }

    /**
     * Set the value of Titre
     *
     * @param mixed $_Titre
     *
     * @return self
     */
    public function setTitre($_Titre)
    {
        $this->_Titre = $_Titre;

        return $this;
    }

    /**
     * Get the value of Realisateur
     *
     * @return mixed
     */
    public function getRealisateur()
    {
        return $this->_Realisateur;
    }

    /**
     * Set the value of Realisateur
     *
     * @param mixed $_Realisateur
     *
     * @return self
     */
    public function setRealisateur($_Realisateur)
    {
        $this->_Realisateur = $_Realisateur;

        return $this;
    }

    public function jsonSerialize() {
           return get_object_vars($this);
       }


}



 ?>
