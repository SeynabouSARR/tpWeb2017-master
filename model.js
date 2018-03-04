
// Implémenter ici les 4 classes du modèle.
// N'oubliez pas l'héritage !
function Drawing(){
   this.id=1;
   this.listForm = [];
   this.carteker = new Saver();

   //this.carteker.save

    this.getForms = function () {
        return this.listForm;
    }.bind(this);

    this.setForms = function (value) {
        this.listForm = value;
    }.bind(this);


    this.repaint = function(){
        this.paint(ctx,canvas);
    }.bind(this);


   this.deleteAll = function (ctx,canvas) {
       this.listForm = [];
       this.paint(ctx,canvas);
       this.carteker.save(this.listForm);
       this.updateGraphicComponent();
   }


   this.delete = function (id) {
       var drawing_copy = this;
       var carteker = this.carteker;
       var listForm = this.getForms();
       
       this.getForms().forEach(function (value) {
        
            if(value.getId() == id )
            {
                var position_a_supprimer = drawing_copy.getForms().indexOf(value);
                drawing_copy.getForms().splice(position_a_supprimer,1);
                drawing_copy.paint(ctx,canvas);
                carteker.save(listForm);
            }
       });
       this.updateGraphicComponent();
   }


   this.save = function(value){
       this.listForm.push(value);
       this.carteker.save(this.listForm);
       this.updateGraphicComponent();
   }.bind(this);


   this.getNext = function(){
        this.listForm = this.carteker.getNext();
        this.repaint();
        this.updateGraphicComponent();
   }.bind(this);

   this.getPrevious = function(){
    
       this.listForm = this.carteker.getPrevious();
       this.repaint();
       this.updateGraphicComponent();
   }.bind(this);


   this.updateGraphicComponent = function()
   {
       console.log('mis a jour');
       //Update Previous button
        if(this.carteker.hasPrevious()){
            boutonUndo.disabled = false;
        }
        else{
            boutonUndo.disabled = true;
        }

        //Update Next button
        if(this.carteker.hasNext()){
            boutonRedo.disabled = false;
        }
        else{
            boutonRedo.disabled = true;
        }

        //Update Next button
        if(this.getForms().length == 0 ){
            deleteAll.disabled = true;
        }
        else{
            deleteAll.disabled = false;
        }




   }


   this.echo = function()
   {
       console.log("---------listForm----------");
       this.getForms().forEach(function(value){
           value.echo();
       });
   }

   this.echo2 = function()
   {

        
        //console.log("€€€€€€€€€€€€€€€€€€€€€€€€€€€€€€€€€€€€€€€€€€€€€€€€€€€€€€€€€€€€€€€€€€€e");

       //console.log('getForms().lenght : '+this.getForms().length+"--------------------------------"+'carteker.current.lenght : '+this.carteker.current.length);
       var longueurs="";
       this.carteker.listPrevious.forEach(function(valueTab){
           longueurs +=" "+ valueTab.length;
    
       });

       console.log(longueurs);
       //console.log("€€€€€€€€€€€€€€€€€€€€€€€€€€€€€€€€€€€€€€€€€€€€€€€€€€€€€€€€€€€€€€€€€€€e");
       
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
//l'Ellipse est inscrit dans un rectangle dont le point superieur gauche a pour coordonnées (x1,y1) et
//le point inferieur droit de coordonnées (x2,y2)
function Ellipse(x1, y1, x2, y2, epaisseur, couleur){

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


/*******************LOSANGE**************************/
//Le Losange est inscrit dans un rectangle dont le point superieur gauche a pour coordonnées (x1,y1) et
//le point inferieur droit de coordonnées (x2,y2)
function Losange(x1, y1, x2, y2, epaisseur, couleur){
    Form.call(this,epaisseur, couleur);


    this.point1_x = (x1 + x2 ) / 2;
    this.point1_y = y1;

    this.point2_x = x2;
    this.point2_y = ( y1 + y2 ) / 2;

    this.point3_x = this.point1_x;
    this.point3_y = y2;

    this.point4_x = x1;
    this.point4_y = this.point2_y;


    this.id = ++Form.nombre;

    this.getPont1=function(){
        return {
            x : this.point1_x,
            y : this.point1_y
        };
    }.bind(this);

    this.getPont2=function(){
        return {
            x : this.point2_x,
            y : this.point2_y
        };
    }.bind(this);

    this.getPont3=function(){
        return {
            x : this.point3_x,
            y : this.point3_y
        };
    }.bind(this);

    this.getPont4=function(){
        return {
            x : this.point4_x,
            y : this.point4_y
        };
    }.bind(this);


    this.getEpaisseur=function(){return this.epaisseur}.bind(this);
    this.getCouleur=function () {return this.couleur}.bind(this);


    this.losange = function (ctx) {
        ctx.moveTo(this.getPont1().x, this.getPont1().y);
        ctx.lineTo(this.getPont2().x, this.getPont2().y);
        ctx.lineTo(this.getPont3().x, this.getPont3().y);
        ctx.lineTo(this.getPont4().x, this.getPont4().y);
        ctx.lineTo(this.getPont1().x, this.getPont1().y);

    }.bind(this);

}



/*******************HEXAGONE**************************/
//L'Hexagone est inscrit dans un rectangle dont le point superieur gauche a pour coordonnées (x1,y1) et
//le point inferieur droit de coordonnées (x2,y2)
function Hexagone(x1, y1, x2, y2, epaisseur, couleur){
    Form.call(this,epaisseur, couleur);


    var distance_x = x2 - x1;
    var distance_y = y2 - y1;

    this.point1_x = x1 + distance_x / 3;
    this.point1_y = y1;

    this.point2_x = x1 + 2*(distance_x / 3);
    this.point2_y = y1;

    this.point3_x = x2;
    this.point3_y = (y1 + y2) / 2;

    this.point4_x = this.point2_x;
    this.point4_y = y2;

    this.point5_x = this.point1_x;
    this.point5_y = y2;

    this.point6_x = x1;
    this.point6_y = this.point3_y;


    this.id = ++Form.nombre;

    this.getPont1=function(){
        return {
            x : correctFormat(this.point1_x),
            y : correctFormat(this.point1_y)
        };
    }.bind(this);

    this.getPont2=function(){
        return {
            x : correctFormat(this.point2_x),
            y : correctFormat(this.point2_y)
        };
    }.bind(this);

    this.getPont3=function(){
        return {
            x : correctFormat(this.point3_x),
            y : correctFormat(this.point3_y)
        };
    }.bind(this);

    this.getPont4=function(){
        return {
            x : correctFormat(this.point4_x),
            y : correctFormat(this.point4_y)
        };
    }.bind(this);


    this.getPont5=function(){
        return {
            x : correctFormat(this.point5_x),
            y : correctFormat(this.point5_y)
        };
    }.bind(this);


    this.getPont6=function(){
        return {
            x : correctFormat(this.point6_x),
            y : correctFormat(this.point6_y)
        };
    }.bind(this);


    this.getEpaisseur=function(){return this.epaisseur}.bind(this);
    this.getCouleur=function () {return this.couleur}.bind(this);


    this.hexagone = function (ctx) {
        ctx.moveTo(this.getPont1().x, this.getPont1().y);
        ctx.lineTo(this.getPont2().x, this.getPont2().y);
        ctx.lineTo(this.getPont3().x, this.getPont3().y);
        ctx.lineTo(this.getPont4().x, this.getPont4().y);
        ctx.lineTo(this.getPont5().x, this.getPont5().y);
        ctx.lineTo(this.getPont6().x, this.getPont6().y);
        ctx.lineTo(this.getPont1().x, this.getPont1().y);

    }.bind(this);

}



/*******************OCTAGONE**************************/
//L'Octagone est inscrit dans un rectangle dont le point superieur gauche a pour coordonnées (x1,y1) et
//le point inferieur droit de coordonnées (x2,y2)
function Octagone(x1, y1, x2, y2, epaisseur, couleur){
    Form.call(this,epaisseur, couleur);


    var distance_x = x2 - x1;
    var distance_y = y2 - y1;

    this.point1_x = x1 + distance_x / 3;
    this.point1_y = y1;

    this.point2_x = x1 + 2*(distance_x / 3);
    this.point2_y = y1;

    this.point3_x = x2;
    this.point3_y = y1 + distance_y / 3;

    this.point4_x = x2;
    this.point4_y = y1 + 2*(distance_y / 3);

    this.point5_x = this.point2_x;
    this.point5_y = y2;

    this.point6_x = this.point1_x;
    this.point6_y = y2;

    this.point7_x = x1;
    this.point7_y = this.point4_y;

    this.point8_x = x1;
    this.point8_y = this.point3_y;


    this.id = ++Form.nombre;

    this.getPont1=function(){
        return {
            x : correctFormat(this.point1_x),
            y : correctFormat(this.point1_y)
        };
    }.bind(this);

    this.getPont2=function(){
        return {
            x : correctFormat(this.point2_x),
            y : correctFormat(this.point2_y)
        };
    }.bind(this);

    this.getPont3=function(){
        return {
            x : correctFormat(this.point3_x),
            y : correctFormat(this.point3_y)
        };
    }.bind(this);

    this.getPont4=function(){
        return {
            x : correctFormat(this.point4_x),
            y : correctFormat(this.point4_y)
        };
    }.bind(this);


    this.getPont5=function(){
        return {
            x : correctFormat(this.point5_x),
            y : correctFormat(this.point5_y)
        };
    }.bind(this);


    this.getPont6=function(){
        return {
            x : correctFormat(this.point6_x),
            y : correctFormat(this.point6_y)
        };
    }.bind(this);

    this.getPont7=function(){
        return {
            x : correctFormat(this.point7_x),
            y : correctFormat(this.point7_y)
        };
    }.bind(this);

    this.getPont8=function(){
        return {
            x : correctFormat(this.point8_x),
            y : correctFormat(this.point8_y)
        };
    }.bind(this);


    this.getEpaisseur=function(){return this.epaisseur}.bind(this);
    this.getCouleur=function () {return this.couleur}.bind(this);


    this.octagone = function (ctx) {
        ctx.moveTo(this.getPont1().x, this.getPont1().y);
        ctx.lineTo(this.getPont2().x, this.getPont2().y);
        ctx.lineTo(this.getPont3().x, this.getPont3().y);
        ctx.lineTo(this.getPont4().x, this.getPont4().y);
        ctx.lineTo(this.getPont5().x, this.getPont5().y);
        ctx.lineTo(this.getPont6().x, this.getPont6().y);
        ctx.lineTo(this.getPont7().x, this.getPont7().y);
        ctx.lineTo(this.getPont8().x, this.getPont8().y);
        ctx.lineTo(this.getPont1().x, this.getPont1().y);

    }.bind(this);

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
          }



          Form.init =function () {
              Form.nombre = 0;
          }


          this.echo = function()
          {
              console.log(" "+this.getId());
          }



}












