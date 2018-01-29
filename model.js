
// Implémenter ici les 4 classes du modèle.
// N'oubliez pas l'héritage !
function Drawing(){
   this.listForm = [];
   this.getForms=function () {return this.listForm}.bind(this);
   this.addForm=function(form){this.listForm.push(form);}.bind(this);

}

function Rectangle(haut_gaucheX, haut_gaucheY,largeur, hauteur,epaisseur,couleur){

        Form.call(this,haut_gaucheX, haut_gaucheY,largeur,epaisseur,couleur);
        this.haut_gaucheX=haut_gaucheX;
        this.haut_gaucheY=haut_gaucheY;
        this.largeur=largeur;
        this.hauteur=hauteur;

        this.getInitX=function(){return haut_gaucheX}.bind(this);
        this.getFinalX=function(){return haut_gaucheY }.bind(this);
        this.getInitY=function(){return largeur}.bind(this);
        this.getFinalY=function () {return hauteur}.bind(this);
}

function Line(x1, x2, y1, y2, epaisseur, couleur){

        Form.call(this,x1, x2, y1, y2, epaisseur, couleur);
        this.x1=x1;
        this.x2=x2;
        this.y1=y1;
        this.y2=y2;

        this.getInitX=function(){return this.x1}.bind(this);
        this.getFinalX=function(){return this.x2}.bind(this);
        this.getInitY=function(){return this.y1}.bind(this);
        this.getFinalY=function(){return this.y2}.bind(this);

        this.toString=function () {
            alert("("+this.getInitX+','+this.getInitY+")/("+this.getFinalX+","+this.getFinalY()+")");
        }
}

function Form(epaisseur,couleur){

          this.epaisseur=epaisseur;
          this.couleur=couleur;



}