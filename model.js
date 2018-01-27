
// Implémenter ici les 4 classes du modèle.
// N'oubliez pas l'héritage !
function Drawing(){
   var listForm = [];


}

function Rectangle(haut_gaucheX, haut_gaucheY,largeur, hauteur,epaisseur,couleur){

        Form.call(this,haut_gaucheX, haut_gaucheY,largeur,epaisseur,couleur);
        this.haut_gaucheX=haut_gaucheX;
        this.haut_gaucheY=haut_gaucheY;
        this.largeur=largeur;
        this.hauteur=hauteur;

        this.getInitX=function(){return haut_gaucheX}
        this.getFinalX=function(){return haut_gaucheY }
        this.getInitY=function(){return largeur}
        this.getFinalY=function () {return hauteur}



}

function Line(x1, x2, y1, y2, epaisseur, couleur){

        Form.call(this,x1, x2, y1, y2, epaisseur, couleur);
        this.x1=x1;
        this.x2=x2;
        this.y1=y1;
        this.y2=y2;

        this.getInitX=function(){return x1}
        this.getFinalX=function(){return x2}
        this.getInitY=function(){return y1}
        this.getFinalY=function(){return y2}

}
function Form( epaisseur,couleur){

          this.epaisseur=epaisseur;
          this.couleur=couleur;

}