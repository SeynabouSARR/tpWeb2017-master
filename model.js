
// Implémenter ici les 4 classes du modèle.
// N'oubliez pas l'héritage !
function Drawing(){
   this.id=1;
   this.listForm = [];

   this.getForms = function () {
       return this.listForm;
   }.bind(this);


   this.addForm=function(form){

       this.listForm.push(form);

   }.bind(this);


   this.deleteAll = function (ctx,canvas) {
       this.listForm = [];
       this.paint(ctx,canvas);
   }


   this.delete = function (id) {
       var drawing_copy = this;

       this.getForms().forEach(function (value) {
            if(value.getId() == id )
            {
                var position_a_supprimer = drawing_copy.getForms().indexOf(value);
                drawing_copy.getForms().splice(position_a_supprimer,1);
                drawing_copy.paint(ctx,canvas);
                //this.innerHTML=""; //appeler plutot le bouton au lieu drawing ou --- refaire les boutons dans paint de drawing
            }
       });
   }
}


/****************RECTANGLE***********************************/
function Rectangle(x, y, largeur, hauteur,epaisseur,couleur){

        Form.call(this,epaisseur,couleur);
        this.x=x;
        this.y=y;
        this.largeur=largeur;
        this.hauteur=hauteur;

        this.id = ++Form.nombre;


        this.getX=function(){return this.x}.bind(this);
        this.getY=function(){return this.y }.bind(this);
        this.getLargeur=function(){return this.largeur}.bind(this);
        this.getHauteur=function () {return this.hauteur}.bind(this);
        this.getEpaisseur=function(){return this.epaisseur}.bind(this);
        this.getCouleur=function () {return this.couleur}.bind(this);
}


/*******************LINE**************************/
function Line(x1, x2, y1, y2, epaisseur, couleur){

        Form.call(this,epaisseur, couleur);
        //point initial (x1,y1)
        //point final (x2,y2)

        this.x1=x1;
        this.x2=x2;
        this.y1=y1;
        this.y2=y2;
        this.id = ++Form.nombre;

        this.getInitX=function(){return this.x1}.bind(this);
        this.getFinalX=function(){return this.x2}.bind(this);
        this.getInitY=function(){return this.y1}.bind(this);
        this.getFinalY=function(){return this.y2}.bind(this);
        this.getEpaisseur=function(){return this.epaisseur}.bind(this);
        this.getCouleur=function () {return this.couleur}.bind(this);

}


/*******************ELLIPSE**************************/
function Ellipse(x1, y1, x2, y2, epaisseur, couleur){
    console.log('brut ('+x1+','+x2+','+y1+','+y2);
    Form.call(this,epaisseur, couleur);
    this.centerX= (x1 + x2)/2;
    this.centerY=(y1+ y2)/2;
    this.rayonX = Math.abs((x2 - x1)/2);
    this.rayonY = Math.abs((y2 - y1))/2;
    this.id = ++Form.nombre;

    this.getCenterX=function(){return this.centerX}.bind(this);
    this.getCenterY=function(){return this.centerY}.bind(this);
    this.getRayonX=function(){return this.rayonX}.bind(this);
    this.getRayonY=function(){return this.rayonY}.bind(this);

    this.getEpaisseur=function(){return this.epaisseur}.bind(this);
    this.getCouleur=function () {return this.couleur}.bind(this);

}

/*************FORM***************/
function Form(epaisseur,couleur){

          this.epaisseur=epaisseur;
          this.couleur=couleur;
          this.id = 0;
          Form.nombre ;

          this.getId=function () {return this.id}.bind(this);
          this.setId=function (_id) {this.id=_id}.bind(this);

          Form.augmenter = function () {
              Form.nombre++;
              console.log(Form.nombre);
          }



          Form.init =function () {
              Form.nombre = 0;
          }



}






