
// Implémenter ici les 4 classes du modèle.
// N'oubliez pas l'héritage !
function Drawing(){
   var listForm = [];


}

function Rectangle(haut_gauche, largeur, hauteur){
       Drawing.call(this,haut_gauche,largeur,hauteur);
        this.haut_gauche=haut_gauche;
        this.largeur=largeur;
        this.hauteur=hauteur;

}

function Line(x1, x2, y1, y2){
    Drawing.call(this,x1,x2,y1,y2);
        this.x1=x1;
        this.x2=x2;
        this.y1=y1;
        this.y2=y2;

}

function Form(couleur, epaisseur){
         this.couleur=couleur;
         this.epaisseur=couleur;

}