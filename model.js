
// Implémenter ici les 4 classes du modèle.
// N'oubliez pas l'héritage !
function Drawing(){
   this.listForm = [];
   this.getForms=function () {return this.listForm}.bind(this);
   this.addForm=function(form){this.listForm.push(form);}.bind(this);
}

function Rectangle(x, y, largeur, hauteur,epaisseur,couleur){

        Form.call(this,epaisseur,couleur);
        this.x=x;
        this.y=y;
        this.largeur=largeur;
        this.hauteur=hauteur;

        this.getX=function(){return this.x}.bind(this);
        this.getY=function(){return this.y }.bind(this);
        this.getLargeur=function(){return this.largeur}.bind(this);
        this.getHauteur=function () {return this.hauteur}.bind(this);
        this.getEpaisseur=function(){return this.epaisseur}.bind(this);
        this.getCouleur=function () {return this.couleur}.bind(this);

}

function Line(x1, x2, y1, y2, epaisseur, couleur){

        Form.call(this,epaisseur, couleur);
        this.x1=x1;
        this.x2=x2;
        this.y1=y1;
        this.y2=y2;

        this.getInitX=function(){return this.x1}.bind(this);
        this.getFinalX=function(){return this.x2}.bind(this);
        this.getInitY=function(){return this.y1}.bind(this);
        this.getFinalY=function(){return this.y2}.bind(this);
        this.getEpaisseur=function(){return this.epaisseur}.bind(this);
        this.getCouleur=function () {return this.couleur}.bind(this);


    this.toString=function () {
            console.log(this);
            //console.log("("+this.getInitX+','+this.getInitY+")/("+this.getFinalX+","+this.getFinalY()+")");
        }
}

function Form(epaisseur,couleur){
    console.log(epaisseur+"/"+couleur);
          this.epaisseur=epaisseur;
          this.couleur=couleur;



}






